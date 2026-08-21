import { Link } from 'react-router';
import { ArrowLeft, Moon, Sun, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Navbar } from '../components/Navbar';

export default function PrivacyPolicy() {
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
              <Shield className="w-6 h-6 text-orange-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400">Last updated: March 7, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Introduction</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Welcome to the portfolio website of Pramod B ("I," "me," or "my"). I respect your privacy and am committed to protecting any personal information you share with me through this website. This Privacy Policy explains what information I collect, how I use it, and your rights regarding that information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Information I Collect</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                I may collect the following types of information when you interact with this website:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                  <span><strong className="text-gray-900 dark:text-white">Contact Form Data:</strong> Your name, email address, project type, estimated budget, and message content when you submit the contact form.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                  <span><strong className="text-gray-900 dark:text-white">Usage Data:</strong> Basic analytics such as page views, browser type, and device information collected through standard web technologies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                  <span><strong className="text-gray-900 dark:text-white">Cookies:</strong> This website may use cookies to remember your theme preference (light/dark mode) and improve your browsing experience.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">How I Use Your Information</h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                  <span>To respond to your inquiries and project requests submitted through the contact form.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                  <span>To improve the website experience and understand how visitors interact with my portfolio.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                  <span>To communicate with you about potential design projects or collaborations.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Data Sharing</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I do not sell, trade, or rent your personal information to third parties. Your information may be shared only with trusted service providers (such as email or hosting platforms) that help me operate this website, and only to the extent necessary to provide those services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Data Security</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I take reasonable measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and I cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Your Rights</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">You have the right to:</p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                  <span>Request access to the personal data I hold about you.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                  <span>Request correction or deletion of your personal data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                  <span>Withdraw consent for data processing at any time.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Third-Party Links</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                This website may contain links to external sites such as LinkedIn, WhatsApp, Behance, and Dribbble. I am not responsible for the privacy practices of those websites. I encourage you to review their privacy policies when visiting them.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Changes to This Policy</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of this website after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Contact Me</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                If you have any questions about this Privacy Policy, please reach out via the{' '}
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
            <Link to="/privacy-policy" className="text-orange-500 dark:text-orange-400 font-medium">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}