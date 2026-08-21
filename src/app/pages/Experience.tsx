import { Link } from 'react-router';
import { ArrowLeft, Moon, Sun, Briefcase, Calendar, MapPin, ExternalLink, Heart } from 'lucide-react';

const FigmaLogo = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 38 57" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Figma">
    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/>
    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/>
    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/>
  </svg>
);

const NotionLogo = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Notion">
    <rect width="24" height="24" rx="4" fill="#ffffff"/>
    <path d="M5 5.2c.6.5 1 .6 2 .5l9.4-.6c.2 0 0-.2-.1-.2L14.9 3.7c-.3-.2-.7-.5-1.5-.4L4.3 4c-.2 0-.2.1-.1.2L5 5.2zm.5 2.1v9.9c0 .5.3.7.9.7l10.4-.6c.6 0 .7-.4.7-.8V6.7c0-.4-.2-.6-.5-.6l-10.9.7c-.4 0-.6.2-.6.5zm10.2.6c.1.3 0 .6-.3.6l-.5.1v7.3c-.4.2-.8.4-1.2.4-.6 0-.7-.2-1.1-.7l-3.5-5.5v5.3l1 .2s0 .6-.8.6l-2.2.1c-.1-.1 0-.5.3-.5l.6-.2V8.9l-.8-.1c-.1-.3.1-.8.6-.8l2.4-.2 3.3 5V8.4l-.8-.1c-.1-.4.2-.7.6-.7l2.4-.1z" fill="#000000"/>
  </svg>
);
import { useTheme } from '../context/ThemeContext';
import { ScrollReveal } from '../components/ScrollReveal';
import { useEffect } from 'react';
import altimetrikLogo from 'figma:asset/9ba42e126655eaa40c657d7b740bf3d26bac192b.png';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Navbar } from '../components/Navbar';

const experiences = [
  {
    id: -1,
    role: 'Senior Engineer – User Experience',
    company: 'Altimetrik',
    logo: altimetrikLogo,
    period: 'Apr 2026 – Present',
    location: 'India',
    type: 'Full-time',
    description:
      'Leading UX direction across multiple product squads, owning research-to-delivery for high-impact initiatives, and partnering with engineering and product leadership to set the experience strategy at scale.',
    highlights: [
      'Setting the UX vision and quality bar across squads',
      'Driving discovery, research, and end-to-end design for flagship initiatives',
      'Coaching designers and growing the team’s design maturity',
      'Aligning roadmap, design, and engineering through clear systems and rituals',
    ],
    tools: ['Figma', 'FigJam', 'Notion', 'Jira', 'Maze'],
  },
  {
    id: 0,
    role: 'Engineer – Digital Experience Design',
    company: 'Altimetrik',
    logo: altimetrikLogo,
    period: 'Jan 2026 – Mar 2026',
    location: 'India',
    type: 'Full-time',
    description:
      'Promoted to Engineer – Digital Experience Design, where I drive end-to-end UX strategy across multiple product lines. My work spans research, interaction design, prototyping, and partnering with engineering to ship polished, accessible experiences at scale.',
    highlights: [
      'Owning the digital experience direction for key client engagements',
      'Mentoring junior designers and shaping the team’s design practice',
      'Scaling the design system with new patterns and contribution guidelines',
      'Partnering closely with product and engineering on roadmap decisions',
    ],
    tools: ['Figma', 'FigJam', 'Notion', 'Jira', 'Maze'],
  },
  {
    id: 1,
    role: 'Associative UX Designer',
    company: 'Altimetrik',
    logo: altimetrikLogo,
    period: 'Dec 2022 – Dec 2025',
    location: 'India',
    type: 'Full-time',
    description:
      'As an Associative UX Designer at Altimetrik, I work collaboratively with cross-functional teams to create user-centered designs that enhance the overall experience. I focus on translating user research, business requirements, and technical constraints into intuitive, accessible, and visually appealing interfaces. My goal is to ensure every design decision drives user satisfaction while contributing to the success of the product.',
    highlights: [
      'Led the UX redesign of the DEX platform, improving employee engagement by 40%',
      'Created and maintained a comprehensive design system with 120+ reusable components',
      'Conducted user research sessions with 50+ participants across 3 product lines',
      'Collaborated with engineering teams to ensure pixel-perfect implementation',
      'Introduced accessibility standards (WCAG 2.1 AA) across all product interfaces',
    ],
    tools: ['Figma', 'FigJam', 'Miro', 'Jira', 'Confluence', 'Maze', 'Hotjar'],
  },
  {
    id: 2,
    role: 'UX Design Intern',
    company: 'Altimetrik',
    logo: altimetrikLogo,
    period: 'Feb 2022 – Dec 2022',
    location: 'India',
    type: 'Internship',
    description:
      'During my internship at Altimetrik, I had the opportunity to learn and grow as a UX designer by working alongside experienced professionals. I gained hands-on experience in user research, wireframing, prototyping, and usability testing, which allowed me to refine my design skills and apply theory to real-world projects. This experience has shaped my approach to user-centered design, enhancing my ability to create intuitive and impactful digital experiences.',
    highlights: [
      'Assisted in redesigning onboarding flows, reducing user drop-off by 25%',
      'Created wireframes and prototypes for 5+ product features',
      'Participated in usability testing sessions and synthesized user feedback',
      'Contributed to design system documentation and component library',
      'Presented design concepts to stakeholders in weekly review meetings',
    ],
    tools: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Miro'],
  },
];

export default function Experience() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      {/* Navigation */}
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal variant="fadeUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full mb-6">
              <Briefcase className="w-4 h-4" />
              Professional Journey
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-2">
              4+ YEARS OF
            </h1>
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-6">
              EXPERIENCE
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional journey in UX design, from intern to leading design initiatives at Altimetrik.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Detailed Experience Cards */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.id} variant="fadeUp" delay={index * 0.15}>
              <div className="relative">
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-full w-0.5 h-12 bg-gradient-to-b from-orange-400 to-transparent hidden md:block" />
                )}

                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                  {/* Card Header */}
                  <div className="p-6 md:p-8 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                      
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.role}</h2>
                        <p className="text-lg text-orange-600 dark:text-orange-400">{exp.company}</p>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-sm rounded-full self-start">
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 md:p-8">
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
                        Key Highlights
                      </h3>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
                        Tools & Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {exp.tools.slice(0, -1).map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Community Involvement */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full mb-4">
                <Heart className="w-4 h-4" />
                Community Involvement
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Giving Back to the Design Community
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'Friends of Figma — Chennai',
                role: 'Volunteer',
                description:
                  'Volunteering with the Friends of Figma Chennai chapter to help organize local meetups, workshops, and design conversations that bring the city’s product and design community together.',
                Logo: FigmaLogo,
                logoBg: 'bg-white dark:bg-gray-800',
              },
              {
                name: 'Notion Community — Chennai',
                role: 'Volunteer',
                description:
                  'Supporting the Notion Chennai community by helping coordinate events and share knowledge around productivity, workflows, and tooling for designers and creators.',
                Logo: NotionLogo,
                logoBg: 'bg-white dark:bg-gray-800',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.name} variant="fadeUp" delay={i * 0.1}>
                <div className="h-full bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${item.logoBg} border border-gray-200 dark:border-gray-700 flex items-center justify-center flex-shrink-0 p-2`}>
                      <item.Logo className="w-full h-full" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.name}</h3>
                      <p className="text-orange-600 dark:text-orange-400">{item.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 dark:text-gray-400">© 2026 Pramod B. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}