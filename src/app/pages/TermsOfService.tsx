import { Link } from 'react-router';
import { ArrowLeft, Moon, Sun, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Navbar } from '../components/Navbar';

export default function TermsOfService() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      {/* Navigation */}
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
              <FileText className="w-6 h-6 text-orange-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Terms of Service</h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400">Last updated: March 7, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Agreement to Terms</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                By accessing and using this portfolio website ("Site") operated by Pramod B ("I," "me," or "my"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use this website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Use of This Website</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                This website serves as a professional portfolio showcasing my UI/UX design work. You may use this website for the following purposes:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                  <span>Viewing my design portfolio, case studies, and professional experience.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                  <span>Contacting me for potential design projects, collaborations, or employment opportunities.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                  <span>Downloading my resume for professional evaluation purposes.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Intellectual Property</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                All content on this website, including but not limited to design work, case studies, text, graphics, logos, images, and the overall design of the site, is the intellectual property of Pramod B unless otherwise stated. You may not reproduce, distribute, modify, or use any content from this website without my prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Case Studies & Project Work</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                The case studies and project work displayed on this website represent my professional design contributions. Some projects were completed as part of team collaborations or under employment. Where applicable, sensitive or proprietary information has been modified or omitted to respect confidentiality agreements with clients and employers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Contact Form Submissions</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                When submitting the contact form, you agree to:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                  <span>Provide accurate and truthful information.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                  <span>Not use the form to send spam, malicious content, or unsolicited commercial messages.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                  <span>Understand that submitting the form does not create a contractual obligation on either party.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Third-Party Links</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                This website contains links to third-party platforms including LinkedIn, WhatsApp, Behance, Dribbble, Coursera, and Credly. These links are provided for convenience and reference only. I do not control or endorse the content on these external sites and am not responsible for their content, privacy policies, or practices.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Disclaimer</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                This website is provided "as is" without warranties of any kind, express or implied. I do not guarantee that the website will be available at all times or that it will be free from errors or interruptions. The design metrics and statistics mentioned in case studies (such as engagement increases or drop-off rate reductions) are based on project outcomes and may vary in different contexts.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Limitation of Liability</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                In no event shall Pramod B be liable for any indirect, incidental, special, or consequential damages arising from the use of or inability to use this website, even if I have been advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Modifications</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated date. Your continued use of the website after any modifications constitutes acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Governing Law</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Contact</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                If you have any questions about these Terms of Service, please reach out via the{' '}
                <Link to="/contact" className="text-orange-500 hover:text-orange-400 transition underline">contact page</Link>{' '}
                or email me at{' '}
                <a href="mailto:pramodbharathi@gmail.com" className="text-orange-500 hover:text-orange-400 transition underline">pramodbharathi@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 dark:text-gray-400">&copy; 2026 Pramod B. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-orange-500 dark:text-orange-400 font-medium">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}