import { Link } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import profileImage from '../../imports/ChatGPT_Image_May_20__2026__08_04_56_AM.png';
import heroProfileImage from '../../imports/ChatGPT_Image_May_20__2026__08_19_51_AM.png';
import { Navbar } from '../components/Navbar';
import { ScrollReveal } from '../components/ScrollReveal';
import { Parallax } from '../components/Parallax';
import { CountUp } from '../components/CountUp';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  ArrowLeft,
  ArrowRight,
  Moon,
  Sun,
  Heart,
  Target,
  Lightbulb,
  Users,
  Eye,
  Palette,
  Code,
  Layers,
  GraduationCap,
  Award,
  BookOpen,
  Camera,
  Music,
  Mountain,
  Mail,
  Linkedin,
  Github,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

const designPhilosophy = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'User-First Approach',
    description:
      'Every design decision starts with understanding the user. I conduct thorough research to uncover needs, pain points, and motivations before putting pen to paper.',
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Clarity Over Complexity',
    description:
      'I believe the best interfaces are the ones users don\'t have to think about. Simplicity, hierarchy, and intuitive patterns guide my design process.',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Systematic Thinking',
    description:
      'From design tokens to component libraries, I build scalable systems that ensure consistency across products and empower teams to move faster.',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Iterate & Validate',
    description:
      'Design is never done on the first try. I prototype quickly, test with real users, and iterate based on data — not assumptions.',
  },
];

const skills = [
  { category: 'Research', items: ['User Interviews', 'Usability Testing', 'Competitive Analysis', 'Persona Creation', 'Journey Mapping'] },
  { category: 'Design', items: ['UI Design', 'Wireframing', 'Prototyping', 'Design Systems', 'Responsive Design'] },
  { category: 'Tools', items: ['Figma', 'FigJam', 'Adobe XD', 'Miro', 'Maze', 'Hotjar'] },
  { category: 'Soft Skills', items: ['Cross-functional Collaboration', 'Presentation', 'Stakeholder Management', 'Mentoring', 'Agile/Scrum'] },
];

const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Electronics and Communication Engineering',
    institution: 'B.S. Abdur Rahman Crescent Institute of Science and Technology',
    year: '2018 – 2022',
    description: 'Studied electronics and communication fundamentals while developing a passion for human-computer interaction and visual design.',
  },
];

const certifications = [
  {
    title: 'Google UX Design',
    issuer: 'Google',
    year: 'Sep 2025',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/E642HSYI16X3',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    ),
  },
  {
    title: 'GenAI for UX Designers',
    issuer: 'Coursera Instructor Network',
    year: 'Jul 2025',
    credentialId: '9WCT6QLKMAW0',
    link: 'https://www.coursera.org/account/accomplishments/verify/9WCT6QLKMAW0',
    icon: <Award className="w-8 h-8 text-blue-500" />,
  },
  {
    title: 'Enterprise Design Thinking Practitioner',
    issuer: 'IBM',
    year: 'Apr 2024',
    link: 'https://www.credly.com/badges/51da710e-c9b8-48c4-9c8b-5c2676463752/linked_in_profile',
    icon: (
      <span className="text-blue-600 font-bold text-sm tracking-tight">IBM</span>
    ),
  },
  {
    title: 'User Experience Design Fundamental',
    issuer: 'Udemy',
    year: 'Jun 2023',
    link: undefined as string | undefined,
    icon: <Award className="w-8 h-8 text-purple-500" />,
  },
  {
    title: 'Learn Figma – UI/UX Design Essential Training',
    issuer: 'Udemy',
    year: 'Sep 2022',
    link: undefined as string | undefined,
    icon: <Palette className="w-8 h-8 text-purple-500" />,
  },
];

const hobbies = [
  { icon: <Camera className="w-5 h-5" />, label: 'Photography' },
  { icon: <Music className="w-5 h-5" />, label: 'Music' },
  { icon: <Mountain className="w-5 h-5" />, label: 'Trekking' },
  { icon: <BookOpen className="w-5 h-5" />, label: 'Reading' },
  { icon: <Code className="w-5 h-5" />, label: 'Coding' },
];

export default function About() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      {/* Navigation */}
      <Navbar />

      {/* Hero — Editorial split layout */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-500/10 to-red-500/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
            {/* Text */}
            <div className="md:col-span-8 order-2 md:order-1">
              <ScrollReveal variant="fadeUp">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-xs mb-6 border border-green-200 dark:border-green-800">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  Available for new projects
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-[1.05] mb-6">
                  Hi, I'm Pramod —
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    a designer who listens.
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mb-8">
                  I craft intuitive, user-centered digital experiences that bridge complex business requirements and delightful interfaces. 4+ years across fintech, HR-tech, and consumer products — building design systems, championing accessibility, and shipping products that matter.
                </p>
                <div className="flex items-center gap-3">
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition font-medium flex items-center gap-2 shadow-lg shadow-orange-500/20"
                  >
                    <Mail className="w-4 h-4" /> Let's Talk
                  </Link>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Portrait */}
            <div className="md:col-span-4 order-1 md:order-2 max-w-xs md:max-w-none mx-auto md:mx-0 w-full">
              <ScrollReveal variant="fadeUp" delay={0.1}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl blur-2xl"></div>
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800">
                    <img
                      src={heroProfileImage}
                      alt="Pramod B - UI/UX Designer"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800';
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-900 px-4 py-2 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Based in</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Chennai, India</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <Parallax speed={-0.05} maxOffset={25}>
              <div className="text-center mb-16">
                <p className="text-sm text-orange-500 font-semibold tracking-wider uppercase mb-3">Philosophy</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  How I Approach Design
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  My design process is rooted in empathy, driven by data, and refined through iteration.
                </p>
              </div>
            </Parallax>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {designPhilosophy.map((item, i) => (
              <ScrollReveal key={i} variant="fadeUp" delay={i * 0.1}>
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:shadow-lg hover:border-orange-200 dark:hover:border-orange-800 transition-all duration-300 h-full group">
                  <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center text-orange-500 mb-5 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* My Process */}
      <section className="py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <Parallax speed={-0.05} maxOffset={25}>
              <div className="text-center mb-16">
                <p className="text-sm text-orange-500 font-semibold tracking-wider uppercase mb-3">Process</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  My Design Process
                </h2>
              </div>
            </Parallax>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connecting line — desktop only */}
            <div className="hidden md:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-orange-300 via-red-300 to-orange-300 dark:from-orange-800 dark:via-red-800 dark:to-orange-800"></div>

            {[
              { step: '01', title: 'Discover', desc: 'Research users, stakeholders, and market to define the problem space.', icon: <Target className="w-6 h-6" /> },
              { step: '02', title: 'Define', desc: 'Synthesize findings into personas, journey maps, and clear design goals.', icon: <Lightbulb className="w-6 h-6" /> },
              { step: '03', title: 'Design', desc: 'Ideate solutions through wireframes, prototypes, and visual design.', icon: <Palette className="w-6 h-6" /> },
              { step: '04', title: 'Deliver', desc: 'Test with users, iterate based on feedback, and hand off to engineering.', icon: <Sparkles className="w-6 h-6" /> },
            ].map((item, i) => (
              <ScrollReveal key={i} variant="fadeUp" delay={i * 0.12}>
                <div className="text-center relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-5 relative z-10 shadow-lg shadow-orange-500/20">
                    {item.icon}
                  </div>
                  <div className="text-xs text-orange-500 font-bold tracking-widest mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Process image */}
          <ScrollReveal variant="fadeUp" delay={0.3}>
            <div className="mt-16 rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1618229620434-ffcad889ffb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMGRlc2lnbiUyMHByb2Nlc3MlMjB3aGl0ZWJvYXJkJTIwc3RpY2t5JTIwbm90ZXN8ZW58MXx8fHwxNzcyNzExMzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="UX Design Process"
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <Parallax speed={-0.05} maxOffset={25}>
              <div className="text-center mb-16">
                <p className="text-sm text-orange-500 font-semibold tracking-wider uppercase mb-3">Skills</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  What I Bring to the Table
                </h2>
              </div>
            </Parallax>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((group, i) => (
              <ScrollReveal key={i} variant="fadeUp" delay={i * 0.1}>
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 h-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                    {group.category}
                  </h3>
                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Certifications — 2×3 grid */}
          <ScrollReveal variant="fadeUp">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center text-orange-500">
                <Award className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Certifications</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {certifications.map((cert, i) => {
              const CardWrapper = cert.link ? 'a' : 'div';
              const linkProps = cert.link
                ? { href: cert.link, target: '_blank' as const, rel: 'noopener noreferrer' }
                : {};
              return (
                <ScrollReveal key={i} variant="fadeUp" delay={i * 0.08}>
                  <CardWrapper
                    {...linkProps}
                    className={`bg-gray-50 dark:bg-gray-900 rounded-2xl p-5 border border-gray-200 dark:border-gray-800 flex items-center gap-4 hover:shadow-md hover:border-orange-200 dark:hover:border-orange-800 transition-all h-full relative ${cert.link ? 'cursor-pointer group' : ''}`}
                  >
                    <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-200 dark:border-gray-700">
                      {cert.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold text-gray-900 dark:text-white text-sm ${cert.link ? 'group-hover:text-orange-500 transition-colors' : ''}`}>
                        {cert.title}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-full whitespace-nowrap">
                        {cert.year}
                      </span>
                      <ExternalLink className={`w-4 h-4 flex-shrink-0 ${cert.link ? 'text-gray-400 group-hover:text-orange-500 transition-colors' : 'text-gray-300 dark:text-gray-600'}`} />
                    </div>
                  </CardWrapper>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Education */}
          <ScrollReveal variant="fadeUp">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center text-orange-500">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
            </div>
          </ScrollReveal>

          <div>
            {education.map((edu, i) => (
              <ScrollReveal key={i} variant="fadeUp" delay={0.1}>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                      <p className="text-orange-500 font-medium">{edu.field}</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{edu.institution}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Design — Personal Interests */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-950 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <div className="text-center mb-12">
              <p className="text-sm text-orange-500 font-semibold tracking-wider uppercase mb-3">Beyond Design</p>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">When I'm Not Designing</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                Creativity doesn't stop at the screen. Here's what fuels my inspiration outside of work.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.15}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {hobbies.map((hobby, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-700 hover:shadow-md transition-all group cursor-default"
                >
                  <div className="text-orange-500 group-hover:scale-110 transition-transform">{hobby.icon}</div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{hobby.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Creative workspace image */}
          <ScrollReveal variant="fadeUp" delay={0.25}>
            <div className="mt-12 rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHdvcmtzcGFjZSUyMGNyZWF0aXZlJTIwc2V0dXB8ZW58MXx8fHwxNzcyNzExMzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Creative workspace"
                className="w-full h-[280px] md:h-[360px] object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal variant="scaleUp">
        <section className="py-20 px-6 bg-gradient-to-br from-orange-500 to-red-600 text-white overflow-hidden relative">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Parallax speed={-0.05} maxOffset={25}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Great</h2>
              <p className="text-xl mb-8 opacity-90">
                I'm always excited to take on new challenges and collaborate with forward-thinking teams.
              </p>
            </Parallax>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </Link>
              <Link
                to="/works"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition text-lg font-semibold"
              >
                View My Work <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 dark:text-gray-400">© 2026 Pramod B. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Home</Link>
            <Link to="/works" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Works</Link>
            <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}