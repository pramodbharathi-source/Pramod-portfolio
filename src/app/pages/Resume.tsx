import { Link } from 'react-router';
import { ArrowLeft, Download, Printer } from 'lucide-react';
import { useEffect, useState } from 'react';
import { RESUME_PDF_BASE64 } from './resumeData';

function base64ToBlobUrl(b64: string): string {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
}

export default function Resume() {
  const [resumePdf, setResumePdf] = useState<string>('');

  useEffect(() => {
    const url = base64ToBlobUrl(RESUME_PDF_BASE64);
    setResumePdf(url);
    return () => URL.revokeObjectURL(url);
  }, []);

  const handleDownload = () => {
    if (!resumePdf) return;
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Pramod_B_Resume_2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    if (!resumePdf) return;
    const w = window.open(resumePdf, '_blank');
    if (w) {
      w.addEventListener('load', () => w.print());
    } else {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white border-b border-gray-200 print:hidden">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Portfolio</span>
            </Link>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
              >
                <Printer className="w-4 h-4" />
                Print
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-8 print:p-0 print:max-w-full">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden print:shadow-none print:rounded-none">
          {resumePdf ? (
            <iframe
              src={`${resumePdf}#view=FitH`}
              title="Pramod B Resume"
              className="w-full"
              style={{ height: '90vh', border: 0 }}
            />
          ) : (
            <div className="w-full flex items-center justify-center text-gray-500" style={{ height: '90vh' }}>
              Loading resume…
            </div>
          )}
          <div className="p-4 text-center text-sm text-gray-500 border-t border-gray-200">
            Can't see the preview?{' '}
            <a href={resumePdf} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Open the resume in a new tab
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          body { margin: 0; padding: 0; }
          @page { margin: 0; }
        }
      `}</style>
    </div>
  );
}
