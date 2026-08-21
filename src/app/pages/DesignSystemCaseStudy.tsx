import designSystemCover from 'figma:asset/a4f0044400029c030fa38048de440178aded1eba.png';
import imgScreenshot1 from 'figma:asset/8620b230d94b9f86e641d17b8879be7db29bb5a6.png';
import imgScreenshot2 from 'figma:asset/096e3877b3c372147bd632d4e16ea4e8f3a1e518.png';
import imgExample from 'figma:asset/b7d74a9e8c5565886d93a2df15edff41acaa92e0.png';
import imgIconSystem from 'figma:asset/5d0a9cfeeb3a7aafa4decb1ce976010bb00ae55f.png';
import imgExampleDark from 'figma:asset/b31ab0ff842ab558423243777a1d1fb99d68d37b.png';

import { useNavigate } from 'react-router';
import { Navbar } from '../components/Navbar';
import { useEffect, useState, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  Layers,
  Users,
  Clock,
  Palette,
  Type,
  Component,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Target,
  Lightbulb,
  Eye,
  ArrowRight,
  Moon,
  Sun,
  Variable,
  Boxes,
  Puzzle,
  FileText,
  Zap,
  Grid3x3,
  X,
  ZoomIn,
} from 'lucide-react';

// Lightbox component
function ImageLightbox({
  src,
  alt,
  isOpen,
  onClose,
}: {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[90vh] z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />
        <p className="text-center text-white/60 text-sm mt-3">{alt}</p>
      </div>
    </div>
  );
}

// Clickable image wrapper
function ClickableImage({
  src,
  alt,
  className,
  onOpen,
}: {
  src: string;
  alt: string;
  className?: string;
  onOpen: (src: string, alt: string) => void;
}) {
  return (
    <div className="relative overflow-hidden">
      <ImageWithFallback src={src} alt={alt} className={`max-w-full h-auto object-contain ${className || ''}`} />
    </div>
  );
}

export default function DesignSystemCaseStudy() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [exampleTheme, setExampleTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openLightbox = useCallback((src: string, alt: string) => {
    setLightbox({ src, alt });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
  }, []);

  const colorPalette = [
    {
      name: 'Primary (Orange)',
      colors: ['#ffe0cc', '#ffc299', '#ffa366', '#ff8533', '#ff6701', '#cc5200', '#993d00', '#662900', '#331400', '#1a0a00'],
    },
    {
      name: 'Warning (Yellow)',
      colors: ['#fff4cc', '#ffe999', '#ffde66', '#ffd333', '#ffc800', '#cca000', '#997800', '#665000', '#332800', '#1a1400'],
    },
    {
      name: 'Accent (Purple)',
      colors: ['#e4d6f2', '#c9ade6', '#ae84d9', '#935bcc', '#7832bf', '#602899', '#482073', '#30144d', '#180a26', '#0c0513'],
    },
    {
      name: 'Success (Green)',
      colors: ['#d4edda', '#a9dcb5', '#7eca90', '#53b96b', '#24943a', '#1d772e', '#165a23', '#0f3c17', '#071e0c', '#040f06'],
    },
    {
      name: 'Info (Blue)',
      colors: ['#ccd7ff', '#99afff', '#6687ff', '#335fff', '#0037ff', '#002ccc', '#002199', '#001666', '#000b33', '#00061a'],
    },
  ];

  // Sample components linked to images
  const sampleComponents = [
    { icon: <Puzzle className="w-5 h-5" />, name: 'Buttons', desc: 'Primary, secondary, ghost, and icon variants', image: imgScreenshot1, imageAlt: 'Button components — Light Theme' },
    { icon: <FileText className="w-5 h-5" />, name: 'Input Fields', desc: 'Text, select, textarea with validation states', image: imgScreenshot2, imageAlt: 'Input field components — Dark Theme' },
    { icon: <Grid3x3 className="w-5 h-5" />, name: 'Cards', desc: 'Content cards with header, body, and actions', image: imgExample, imageAlt: 'Card component examples' },
    { icon: <Layers className="w-5 h-5" />, name: 'Modals', desc: 'Overlay dialogs with confirmation patterns', image: imgScreenshot1, imageAlt: 'Modal components — Light Theme' },
    { icon: <Type className="w-5 h-5" />, name: 'Typography', desc: 'Heading, body, caption, and label styles', image: imgScreenshot2, imageAlt: 'Typography system — Dark Theme' },
    { icon: <Palette className="w-5 h-5" />, name: 'Badges & Tags', desc: 'Status indicators and label chips', image: imgExample, imageAlt: 'Badge and tag components' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      {/* Lightbox */}
      <ImageLightbox
        src={lightbox?.src || ''}
        alt={lightbox?.alt || ''}
        isOpen={!!lightbox}
        onClose={closeLightbox}
      />

      {/* Navigation */}
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 rounded-full text-sm mb-8 border border-blue-100 dark:border-blue-900">
              <Variable className="w-4 h-4" />
              Internal Project — Design System
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Design System Using Variables
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
              Building a unified design language leveraging Figma's variables feature — creating 30+ components with full light and dark theme support to establish a single source of truth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Meta */}
      <section className="px-6 pb-8">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-sm text-gray-500 dark:text-gray-500 border-y border-gray-200 dark:border-gray-800 py-5">
            <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> PRAMOD</span>
            <span className="flex items-center gap-1.5"><Layers className="w-3.5 h-3.5" /> Figma Variables</span>
            <span className="flex items-center gap-1.5"><Component className="w-3.5 h-3.5" /> 30+ Components</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Internal Tool</span>
            <span className="flex items-center gap-1.5"><Target className="w-3.5 h-3.5" /> Design System</span>
          </div>
        </ScrollReveal>
      </section>

      {/* Hero Image */}
      <section className="px-6 pb-16">
        <ScrollReveal variant="fadeUp" delay={0.15}>
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden">
            <ClickableImage
              src={designSystemCover}
              alt="Design System cover"
              className="w-full h-[300px] md:h-[460px] object-cover"
              onOpen={openLightbox}
            />
          </div>
        </ScrollReveal>
      </section>

      {/* ===== THE CHALLENGE ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">The Challenge</h2>
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-800 dark:text-gray-200 font-medium">
                  Without a design system, the internal application suffered from fragmented and inconsistent design, leading to an unstructured user experience.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Inconsistent', desc: 'Fragmented UI patterns' },
                { label: 'Unstructured', desc: 'No single source of truth' },
                { label: 'Inefficient', desc: 'Repeated design effort' },
              ].map((item) => (
                <div key={item.label} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800 text-center overflow-hidden break-words">
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">{item.label}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 break-words">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== THE APPROACH ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">The Approach</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Establishing a design system served as the singular source of truth, unifying design foundations and components while providing clear and precise guidelines for implementation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Variable className="w-5 h-5" />, title: 'Figma Variables', desc: 'Leveraged Figma\'s variables feature for dynamic theming' },
                { icon: <Boxes className="w-5 h-5" />, title: 'Component Library', desc: 'Built 30+ reusable, consistent components' },
                { icon: <Sun className="w-5 h-5" />, title: 'Light & Dark Themes', desc: 'Full theme support with seamless switching' },
                { icon: <BookOpen className="w-5 h-5" />, title: 'Documentation', desc: 'Comprehensive usage guidelines for every component' },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-blue-500">{item.icon}</div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== KEY OUTCOME ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Key Outcome</h2>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-6 border border-blue-200 dark:border-blue-900">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Leveraging the new <strong className="text-gray-900 dark:text-white">variables feature</strong> in Figma, we developed over 30 components. The design system supports both light and dark themes, ensuring flexibility and consistency.
              </p>
              <div className="space-y-3">
                {[
                  '30+ reusable components built with Figma variables',
                  'Full light and dark theme support',
                  'Unified design foundations across all products',
                  'Comprehensive documentation for seamless handoff',
                ].map((goal) => (
                  <div key={goal} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{goal}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SCREENSHOT 1 ===== */}
      <section className="px-6 pb-16">
        <ScrollReveal variant="fadeUp">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Component Showcase</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                
                <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
                  <ImageWithFallback
                    src={imgScreenshot1}
                    alt="Design system components in light theme"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div>
                
                <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
                  <ImageWithFallback
                    src={imgScreenshot2}
                    alt="Design system components in dark theme"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== COLOR PALETTE ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Color Palette</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              A structured color system with 10-step shade scales for each semantic color, ensuring accessible contrast across both themes.
            </p>
            <div className="space-y-6">
              {colorPalette.map((group) => (
                <div key={group.name}>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{group.name}</p>
                  <div className="flex rounded-xl overflow-hidden">
                    {group.colors.map((color, i) => (
                      <div
                        key={i}
                        className="flex-1 h-10 md:h-12 relative group"
                        style={{ backgroundColor: color }}
                      >
                        <span className="absolute inset-0 flex items-center justify-center text-[9px] md:text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: i < 5 ? '#000' : '#fff' }}>
                          {color}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== TYPOGRAPHY ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Typography</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              A clear typographic hierarchy using <strong className="text-gray-900 dark:text-white">Inter</strong> font family with consistent scales, ensuring readability and visual harmony across all components and screens.
            </p>
            <div className="space-y-4">
              {[
                { label: 'Display', size: 'text-4xl md:text-5xl', weight: 'font-bold', sample: 'Aa' },
                { label: 'Heading 1', size: 'text-3xl md:text-4xl', weight: 'font-bold', sample: 'Aa' },
                { label: 'Heading 2', size: 'text-2xl md:text-3xl', weight: 'font-semibold', sample: 'Aa' },
                { label: 'Heading 3', size: 'text-xl md:text-2xl', weight: 'font-semibold', sample: 'Aa' },
                { label: 'Body Large', size: 'text-lg', weight: 'font-normal', sample: 'The quick brown fox jumps over the lazy dog' },
                { label: 'Body', size: 'text-base', weight: 'font-normal', sample: 'The quick brown fox jumps over the lazy dog' },
                { label: 'Caption', size: 'text-sm', weight: 'font-normal', sample: 'The quick brown fox jumps over the lazy dog' },
              ].map((item) => (
                <div key={item.label} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 flex items-center gap-4">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 w-24 shrink-0">{item.label}</span>
                  <span className={`${item.size} ${item.weight} text-gray-900 dark:text-white truncate`}>{item.sample}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SAMPLE COMPONENTS ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Sample Components</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              A curated collection of foundational UI components, each built with Figma variables for seamless theme switching and consistent spacing.
            </p>

            {/* Component preview grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {sampleComponents.map((comp) => (
                <div
                  key={comp.name}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden"
                >
                  {/* Preview thumbnail */}
                  <div className="relative h-32 overflow-hidden">
                    <ImageWithFallback
                      src={comp.image}
                      alt={comp.imageAlt}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* Card content */}
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="text-orange-500">{comp.icon}</div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{comp.name}</h3>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 pl-8">{comp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== ICON SYSTEM ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Icon System</h2>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 mb-6">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                A collection of 1,200+ icons, designed with simplicity and modern aesthetics. Each icon is crafted with minimal detail, focusing on essential characteristics while maintaining clarity and style.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 italic">
                Built on core icon design principles for consistency and usability.
              </p>
            </div>
          </ScrollReveal>
        </div>
        {/* Icon system image — full width */}
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800">
              <ImageWithFallback
                src={imgIconSystem}
                alt="Icon system — 1,200+ outline icons, hand crafted for UI UX and graphic design"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== DOCUMENTATION ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Documentation</h2>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Effective documentation of components and design foundations plays a vital role in maintaining clarity, consistency, and efficiency throughout the design and development process. Serving as a central reference, well-organized documentation offers precise instructions on the creation, implementation, and usage of components.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Effective documentation also enhances collaboration between designers and developers by streamlining workflows and minimizing the time spent on troubleshooting or rework. With comprehensive usage guidelines, code snippets, and accessibility standards, team members can quickly understand and apply components without unnecessary delays.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                By ensuring that every element of the design system is thoroughly documented, teams can improve productivity, accelerate onboarding for new members, and create a more structured, maintainable, and future-proof design ecosystem.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== THEME SUPPORT ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Theme Support</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Every component is designed to work seamlessly in both light and dark modes, powered by Figma's variables for automatic theme switching.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <Sun className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">Light Mode</h3>
                <p className="text-sm text-gray-500">Clean, bright interfaces</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 text-center">
                <Moon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-1">Dark Mode</h3>
                <p className="text-sm text-gray-400">Accessible, low-light interfaces</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Example Image */}
      <section className="px-6 pb-16">
        <ScrollReveal variant="fadeUp">
          <div className="max-w-4xl mx-auto">
            {/* Header with theme toggle */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Component Examples</h3>
              <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1 border border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setExampleTheme('light')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${
                    exampleTheme === 'light'
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  Light
                </button>
                <button
                  onClick={() => setExampleTheme('dark')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${
                    exampleTheme === 'dark'
                      ? 'bg-gray-900 dark:bg-gray-600 text-white shadow-sm'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  Dark
                </button>
              </div>
            </div>
            {/* Image container */}
            <div className="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800">
              <ImageWithFallback
                src={exampleTheme === 'light' ? imgExample : imgExampleDark}
                alt={`Design system component examples — ${exampleTheme === 'light' ? 'Light' : 'Dark'} Theme`}
                className="w-full h-auto object-contain transition-opacity duration-300"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== KEY LEARNINGS ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Key Learnings</h2>
            <div className="space-y-4">
              {[
                { icon: <Lightbulb className="w-5 h-5 text-yellow-500" />, text: 'Figma variables drastically reduce the effort of maintaining multiple themes' },
                { icon: <Target className="w-5 h-5 text-orange-500" />, text: 'A single source of truth eliminates design debt and inconsistencies' },
                { icon: <Eye className="w-5 h-5 text-blue-500" />, text: 'Comprehensive documentation accelerates onboarding and team collaboration' },
                { icon: <Zap className="w-5 h-5 text-green-500" />, text: 'Reusable components significantly speed up the design-to-development handoff' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800">
                  <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                  <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== REFLECTION ===== */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Reflection</h2>
              <p className="leading-relaxed opacity-90">
                This project reinforced that a well-structured design system is not just about visual consistency — it's about building a shared language that empowers teams to work faster, communicate better, and deliver cohesive experiences at scale.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== MORE CASE STUDIES CTA ===== */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Explore More Work</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-8">
                Check out other case studies to see the range of my design approach.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => navigate('/works/ather-widget')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:opacity-90 transition-opacity"
                >
                  Ather Widget Case Study
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate('/works')}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  View All Works
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}