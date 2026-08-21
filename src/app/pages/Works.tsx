import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import designSystemCover from 'figma:asset/a4f0044400029c030fa38048de440178aded1eba.png';
import atherCover from 'figma:asset/69e4632b959f6f4ac2b3396da949790e8e4371b9.png';
import { DexCoverImage } from '../components/DexCoverImage';
import { Navbar } from '../components/Navbar';

export default function Works() {
  const projects = [
    {
      id: 4,
      title: "Ather Widget Reducing Friction for EV Riders",
      category: "Concept · Mobile Widget",
      description: "A self-initiated UX case study solving a recurring problem for Ather riders — checking battery status without launching the full app, designed for both iOS and Android platforms.",
      image: atherCover,
      link: "/case-study/ather-widget",
      tags: ["Mobile Widget", "Constraint-driven", "EV", "Concept"],
      isLatest: true,
    },
    {
      id: 1,
      title: "Design System Case Study",
      category: "Design System",
      description: "A comprehensive design system built from the ground up, featuring reusable components, typography scales, color palettes, and both light and dark theme support for seamless cross-platform consistency.",
      image: designSystemCover,
      link: "/case-study/design-system",
      tags: ["Components", "Dark Theme", "Light Theme"],
      fullCover: true,
    },
    {
      id: 2,
      title: "DEX – Seamless Workplace Connectivity",
      category: "Enterprise Mobile App",
      description: "A Digital Employee Xperience platform built to unify workplace tools into one mobile-friendly app, empowering employees with anytime, anywhere access to company updates, timesheets, leave management, and goal tracking.",
      image: "",
      useCoverComponent: true,
      link: "/case-study/dex",
      tags: ["Mobile App", "Employee Experience", "Enterprise UX", "Engagement"],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">All Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            A collection of my design work spanning mobile apps, web platforms, and enterprise solutions. Each project showcases my approach to solving real user problems.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={project.link}
                className="group block bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <div className="relative overflow-hidden h-[280px]">
                  {'useCoverComponent' in project && project.useCoverComponent ? (
                    <div className="w-full h-full group-hover:scale-105 transition-transform duration-300">
                      <DexCoverImage className="w-full h-full" />
                    </div>
                  ) : (
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm text-gray-900">
                    {project.category}
                  </div>
                  {'isLatest' in project && project.isLatest && (
                    <div className="absolute top-4 right-4">
                      <span className="latest-badge-wrapper">
                        <span className="latest-badge-border"></span>
                        <span className="latest-badge-text">Latest</span>
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-orange-500 font-medium group-hover:gap-2 transition-all">
                    View case study <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-0" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 dark:text-gray-400">&copy; 2026 Pramod B. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}