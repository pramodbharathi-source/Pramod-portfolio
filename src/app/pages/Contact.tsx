import { useState } from 'react';
import { Link } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import { ScrollReveal } from '../components/ScrollReveal';
import { Parallax } from '../components/Parallax';
import { Navbar } from '../components/Navbar';
import {
  ArrowLeft,
  Mail,
  Linkedin,
  MessageCircle,
  MapPin,
  Phone,
  Send,
  Moon,
  Sun,
  CheckCircle,
  Clock,
  MessageSquare,
  Briefcase,
  ExternalLink,
} from 'lucide-react';

export default function Contact() {
  const { theme, toggleTheme } = useTheme();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);

  // Get your free access key at https://web3forms.com
  const WEB3FORMS_ACCESS_KEY = '7a782ca2-47b1-4eed-ac11-0617af605a87';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New portfolio enquiry from ${formState.name}`,
          from_name: formState.name,
          name: formState.name,
          email: formState.email,
          project_type: formState.projectType,
          budget: formState.budget,
          message: formState.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'pramodbharathi@gmail.com',
      href: 'mailto:pramodbharathi@gmail.com',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 9940322604',
      href: 'tel:+919940322604',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Chennai, India',
      href: null,
    },
  ];

  const quickFacts = [
    { icon: <Clock className="w-5 h-5" />, text: 'Typically respond within 24 hours' },
    { icon: <MessageSquare className="w-5 h-5" />, text: 'Free initial consultation' },
    { icon: <Briefcase className="w-5 h-5" />, text: 'Open to freelance & full-time roles' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      {/* Navigation */}
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-12 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal variant="fadeUp">
            <Parallax speed={-0.06} maxOffset={30}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-sm mb-6 border border-green-200 dark:border-green-800">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for new projects
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Create Something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  Amazing
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? I'd love to hear from you. Let's
                discuss how we can bring your vision to life.
              </p>
            </Parallax>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickFacts.map((fact, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-5 py-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800"
                >
                  <div className="text-orange-500">{fact.icon}</div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{fact.text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal variant="fadeRight" className="h-full">
                {submitted ? (
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 text-center h-full flex flex-col items-center justify-center">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                      Thank you for reaching out! I'll review your message and get back to you
                      within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({ name: '', email: '', projectType: '', budget: '', message: '' });
                      }}
                      className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 h-full flex flex-col"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Send a Message
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      {/* Name */}
                      <div>
                        <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1.5">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          onFocus={() => setFocused('name')}
                          onBlur={() => setFocused(null)}
                          required
                          placeholder="John Doe"
                          className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border ${
                            focused === 'name'
                              ? 'border-orange-500 ring-2 ring-orange-500/20'
                              : 'border-gray-200 dark:border-gray-700'
                          } text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none transition`}
                        />
                      </div>
                      {/* Email */}
                      <div>
                        <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused(null)}
                          required
                          placeholder="john@example.com"
                          className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border ${
                            focused === 'email'
                              ? 'border-orange-500 ring-2 ring-orange-500/20'
                              : 'border-gray-200 dark:border-gray-700'
                          } text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none transition`}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      {/* Project Type */}
                      <div>
                        <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1.5">
                          Project Type
                        </label>
                        <select
                          name="projectType"
                          value={formState.projectType}
                          onChange={handleChange}
                          onFocus={() => setFocused('projectType')}
                          onBlur={() => setFocused(null)}
                          className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border ${
                            focused === 'projectType'
                              ? 'border-orange-500 ring-2 ring-orange-500/20'
                              : 'border-gray-200 dark:border-gray-700'
                          } text-gray-900 dark:text-white outline-none transition appearance-none`}
                        >
                          <option value="">Select a type</option>
                          <option value="mobile-app">Mobile App Design</option>
                          <option value="web-app">Web App Design</option>
                          <option value="design-system">Design System</option>
                          <option value="ux-audit">UX Audit</option>
                          <option value="ux-research">UX Research</option>
                          <option value="branding">Branding &amp; Identity</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      {/* Budget */}
                      <div>
                        <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1.5">
                          Estimated Budget
                        </label>
                        <select
                          name="budget"
                          value={formState.budget}
                          onChange={handleChange}
                          onFocus={() => setFocused('budget')}
                          onBlur={() => setFocused(null)}
                          className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border ${
                            focused === 'budget'
                              ? 'border-orange-500 ring-2 ring-orange-500/20'
                              : 'border-gray-200 dark:border-gray-700'
                          } text-gray-900 dark:text-white outline-none transition appearance-none`}
                        >
                          <option value="">Select a range</option>
                          <option value="lt-5k">Less than $5,000</option>
                          <option value="5k-10k">$5,000 – $10,000</option>
                          <option value="10k-25k">$10,000 – $25,000</option>
                          <option value="25k-plus">$25,000+</option>
                          <option value="discuss">Let's discuss</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mb-4 flex-1 flex flex-col">
                      <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1.5">
                        Project Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        required
                        rows={5}
                        placeholder="Tell me about your project, goals, and timeline..."
                        className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border flex-1 ${
                          focused === 'message'
                            ? 'border-orange-500 ring-2 ring-orange-500/20'
                            : 'border-gray-200 dark:border-gray-700'
                        } text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none transition resize-none`}
                      />
                    </div>

                    {error && (
                      <div className="mb-4 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-sm text-red-700 dark:text-red-400">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:from-orange-600 hover:to-red-600 transition font-semibold shadow-lg shadow-orange-500/20 mt-auto disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5" />
                      {submitting ? 'Sending…' : 'Send Message'}
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Info */}
              <ScrollReveal variant="fadeLeft" delay={0.15}>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-500 flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-gray-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-gray-900 dark:text-white">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Social Links */}
              <ScrollReveal variant="fadeLeft" delay={0.25}>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Connect With Me
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="https://linkedin.com/in/pramod-b-388b3720a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-700 transition group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900 dark:text-white font-medium group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">LinkedIn</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange-400 dark:group-hover:text-orange-300 transition-colors">
                          Professional network
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors" />
                    </a>
                    <a
                      href="https://wa.me/919940322604"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-700 transition group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900 dark:text-white font-medium group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">WhatsApp</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange-400 dark:group-hover:text-orange-300 transition-colors">
                          Quick chat
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors" />
                    </a>
                    <a
                      href="mailto:pramodbharathi@gmail.com"
                      className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-700 transition group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900 dark:text-white font-medium group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">Email</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange-400 dark:group-hover:text-orange-300 transition-colors">Direct message</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Availability */}
            </div>

            {/* Let's Collaborate - Full Width */}
            <div className="lg:col-span-5">
              <ScrollReveal variant="fadeUp" delay={0.35}>
                <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Let's Collaborate</h3>
                  <p className="opacity-90 mb-3 text-sm leading-relaxed">
                    I'm currently available for freelance projects, full-time opportunities, and
                    design consulting. Whether you need a complete product design or a UX audit,
                    I'm here to help.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    <span className="opacity-90">Currently accepting new projects</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 dark:text-gray-400">© 2026 Pramod B. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
            >
              Home
            </Link>
            <Link
              to="/works"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
            >
              Works
            </Link>
            <Link
              to="/resume"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
            >
              Resume
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}