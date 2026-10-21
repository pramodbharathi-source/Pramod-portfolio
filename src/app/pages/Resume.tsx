import { Link } from 'react-router';
import { ArrowLeft, Download, Printer } from 'lucide-react';
import resumePdf from '../../imports/Pramod_B_Resume.pdf';

// Served as a real static asset rather than a base64 blob: URL. Chrome's PDF
// viewer refuses to render a `blob:` source inside an iframe (the old approach
// produced a valid PDF that painted as an empty grey box), and inlining the
// file as base64 also pushed ~137 kB of string data into the JS bundle.
const DOWNLOAD_NAME = 'Pramod_B_Resume.pdf';

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = DOWNLOAD_NAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
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
          {/* <object> degrades to its own children when the browser can't display
              a PDF inline — which is the case on most mobile browsers — so the
              fallback below is shown instead of a blank frame. */}
          <object
            data={`${resumePdf}#view=FitH`}
            type="application/pdf"
            title="Pramod B Resume"
            className="w-full block"
            style={{ height: '90vh' }}
          >
            <div
              className="w-full flex flex-col items-center justify-center gap-4 px-6 text-center"
              style={{ height: '90vh' }}
            >
              <p className="text-gray-600">
                Your browser can't display the PDF inline.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                >
                  Open in new tab
                </a>
                <a
                  href={resumePdf}
                  download={DOWNLOAD_NAME}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </object>
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
