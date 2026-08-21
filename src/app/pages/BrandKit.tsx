import { useEffect, useState } from 'react';
import { Check, Copy, Palette, Type, Layout, Sparkles } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { ScrollReveal } from '../components/ScrollReveal';

type Swatch = {
  name: string;
  value: string;
  text?: string;
  border?: boolean;
};

const brandColors: Swatch[] = [
  { name: 'Orange 500', value: '#F97316' },
  { name: 'Red 500', value: '#EF4444' },
  { name: 'Orange 600', value: '#EA580C' },
  { name: 'Orange 100', value: '#FFEDD5', text: '#7C2D12' },
  { name: 'Orange 900/30', value: 'rgba(124,45,18,0.3)', text: '#FDBA74' },
];

const neutralLight: Swatch[] = [
  { name: 'White', value: '#FFFFFF', text: '#111827', border: true },
  { name: 'Gray 50', value: '#F9FAFB', text: '#111827', border: true },
  { name: 'Gray 100', value: '#F3F4F6', text: '#111827' },
  { name: 'Gray 200', value: '#E5E7EB', text: '#111827' },
  { name: 'Gray 400', value: '#9CA3AF', text: '#111827' },
  { name: 'Gray 600', value: '#4B5563' },
  { name: 'Gray 900', value: '#111827' },
];

const neutralDark: Swatch[] = [
  { name: 'Black', value: '#000000' },
  { name: 'Gray 950', value: '#030712' },
  { name: 'Gray 900', value: '#111827' },
  { name: 'Gray 800', value: '#1F2937' },
  { name: 'Gray 700', value: '#374151' },
  { name: 'Gray 500', value: '#6B7280' },
  { name: 'Gray 300', value: '#D1D5DB', text: '#111827' },
];

const gradients = [
  { name: 'Primary CTA', value: 'linear-gradient(90deg, #F97316 0%, #EF4444 100%)' },
  { name: 'Loader Pulse', value: 'linear-gradient(90deg, #F97316, #EF4444, #F97316)' },
  { name: 'Accent Pill', value: 'linear-gradient(135deg, #FFEDD5 0%, #FECACA 100%)' },
];

const typeScale = [
  { label: 'Display / H1', cls: 'text-5xl md:text-7xl font-black', sample: '4+ YEARS' },
  { label: 'H2', cls: 'text-3xl md:text-4xl font-bold', sample: 'Featured Work' },
  { label: 'H3', cls: 'text-2xl font-bold', sample: 'Section title' },
  { label: 'Lead', cls: 'text-xl', sample: 'Selected projects that showcase my approach.' },
  { label: 'Body', cls: 'text-base', sample: 'Default paragraph text used across the site.' },
  { label: 'Small / Meta', cls: 'text-sm', sample: 'Dec 2022 – Present · Chennai, India' },
  { label: 'Eyebrow', cls: 'text-xs uppercase tracking-[0.25em]', sample: 'UX Designer' },
];

const radii = [
  { name: 'sm', cls: 'rounded-md', px: '6px' },
  { name: 'md', cls: 'rounded-lg', px: '8px' },
  { name: 'lg', cls: 'rounded-xl', px: '12px' },
  { name: 'xl', cls: 'rounded-2xl', px: '16px' },
  { name: 'full', cls: 'rounded-full', px: '9999px' },
];

const spacing = [
  { name: '1', px: '4px' },
  { name: '2', px: '8px' },
  { name: '4', px: '16px' },
  { name: '6', px: '24px' },
  { name: '8', px: '32px' },
  { name: '12', px: '48px' },
];

const shadows = [
  { name: 'sm', cls: 'shadow-sm' },
  { name: 'md', cls: 'shadow-md' },
  { name: 'xl', cls: 'shadow-xl' },
  { name: 'Brand glow', cls: 'shadow-xl shadow-orange-500/25' },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-orange-500 transition"
      aria-label={`Copy ${text}`}
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      <span className="tabular-nums">{text}</span>
    </button>
  );
}

function SwatchCard({ s }: { s: Swatch }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div
        className={`h-24 ${s.border ? 'border-b border-gray-200 dark:border-gray-800' : ''}`}
        style={{ background: s.value, color: s.text ?? '#fff' }}
      />
      <div className="p-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-900 dark:text-white">{s.name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">{s.value}</p>
        </div>
        <CopyButton text={s.value} />
      </div>
    </div>
  );
}

function SectionHeader({ icon: Icon, eyebrow, title, desc }: { icon: any; eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mb-8">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full mb-4 text-sm">
        <Icon className="w-4 h-4" />
        {eyebrow}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>
      {desc && <p className="text-gray-600 dark:text-gray-400 max-w-2xl">{desc}</p>}
    </div>
  );
}

export default function BrandKit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal variant="fadeUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full mb-6 text-sm">
              <Sparkles className="w-4 h-4" />
              Brand Kit
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-2">PRAMOD B</h1>
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-6">
              DESIGN SYSTEM
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The visual language behind this portfolio — colors, typography, spacing, components, and motion.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Logo */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <SectionHeader icon={Sparkles} eyebrow="Identity" title="Logo" desc="A stylized P inside a 16px rounded square with the brand gradient." />
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { bg: 'bg-white', label: 'Light surface', text: 'text-gray-900', border: true },
                { bg: 'bg-black', label: 'Dark surface', text: 'text-white', border: false },
              ].map((v) => (
                <div
                  key={v.label}
                  className={`${v.bg} ${v.border ? 'border border-gray-200' : ''} rounded-2xl p-12 flex flex-col items-center justify-center gap-6`}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-xl shadow-orange-500/25">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 4H13C15.7614 4 18 6.23858 18 9C18 11.7614 15.7614 14 13 14H6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6 4V17L4.5 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6 17L7.5 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <path d="M6 21.5V22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className={`text-sm uppercase tracking-[0.25em] ${v.text}`}>{v.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Colors */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <SectionHeader
              icon={Palette}
              eyebrow="Colour"
              title="Palette"
              desc="Warm orange-to-red gradient is the signature, paired with neutral grays for surfaces and text."
            />

            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Brand</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
              {brandColors.map((s) => <SwatchCard key={s.name} s={s} />)}
            </div>

            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Neutrals — Light</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-10">
              {neutralLight.map((s) => <SwatchCard key={s.name} s={s} />)}
            </div>

            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Neutrals — Dark</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-10">
              {neutralDark.map((s) => <SwatchCard key={s.name} s={s} />)}
            </div>

            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Gradients</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {gradients.map((g) => (
                <div key={g.name} className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                  <div className="h-24" style={{ background: g.value }} />
                  <div className="p-4">
                    <p className="text-sm text-gray-900 dark:text-white mb-1">{g.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 break-all">{g.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Typography */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <SectionHeader
              icon={Type}
              eyebrow="Typography"
              title="Type system"
              desc="System sans stack for performance and clarity. Display weights lean heavy (800–900); body uses regular and medium."
            />
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
              {typeScale.map((t) => (
                <div key={t.label} className="p-6 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                  <div className="md:w-40 flex-shrink-0">
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">{t.label}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{t.cls}</p>
                  </div>
                  <p className={`${t.cls} text-gray-900 dark:text-white`}>{t.sample}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Spacing & Radius */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <ScrollReveal variant="fadeUp">
            <SectionHeader icon={Layout} eyebrow="Layout" title="Radius" />
            <div className="space-y-3">
              {radii.map((r) => (
                <div key={r.name} className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                  <div className={`w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 ${r.cls}`} />
                  <div>
                    <p className="text-sm text-gray-900 dark:text-white">{r.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{r.px} · {r.cls}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.1}>
            <SectionHeader icon={Layout} eyebrow="Layout" title="Spacing" />
            <div className="space-y-3">
              {spacing.map((sp) => (
                <div key={sp.name} className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                  <div className="h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" style={{ width: sp.px }} />
                  <div>
                    <p className="text-sm text-gray-900 dark:text-white">space-{sp.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{sp.px}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Components */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <SectionHeader icon={Sparkles} eyebrow="Components" title="Building blocks" />

            <div className="grid md:grid-cols-2 gap-6">
              {/* Buttons */}
              <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 mb-4">Buttons</p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25">Primary</button>
                  <button className="px-5 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900">Secondary</button>
                  <button className="px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white">Ghost</button>
                </div>
              </div>

              {/* Pills / Badges */}
              <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 mb-4">Badges</p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full text-sm">
                    <Sparkles className="w-3.5 h-3.5" /> Eyebrow
                  </span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">Tool</span>
                  <span className="latest-badge-wrapper">
                    <span className="latest-badge-border" />
                    <span className="latest-badge-text">Latest</span>
                  </span>
                </div>
              </div>

              {/* Card */}
              <div className="md:col-span-2 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 mb-4">Card</p>
                <div className="max-w-md bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm">
                  <div className="h-32 bg-gradient-to-br from-orange-500 to-red-500" />
                  <div className="p-5">
                    <p className="text-xs text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-1">UX · Case Study</p>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Project Title</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Short description of the project, kept concise and direct.</p>
                  </div>
                </div>
              </div>

              {/* Shadows */}
              <div className="md:col-span-2 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 mb-4">Elevation</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {shadows.map((sh) => (
                    <div key={sh.name} className="flex flex-col items-center gap-3">
                      <div className={`w-20 h-20 rounded-2xl bg-white dark:bg-gray-800 ${sh.cls}`} />
                      <p className="text-xs text-gray-500 dark:text-gray-400">{sh.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Voice */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <SectionHeader icon={Sparkles} eyebrow="Voice" title="Tone & writing" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Clear', body: 'Plain language. No jargon. Say what something is and why it matters.' },
                { title: 'Confident', body: 'Lead with outcomes. Show craft through specifics, not adjectives.' },
                { title: 'Warm', body: 'Friendly, human, never corporate. The orange gradient is the tone in colour form.' },
              ].map((v) => (
                <div key={v.title} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{v.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">© 2026 Pramod B · Brand Kit</p>
        </div>
      </footer>
    </div>
  );
}

