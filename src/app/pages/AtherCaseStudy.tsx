import { useNavigate, Link } from 'react-router';
import { Navbar } from '../components/Navbar';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, Moon, Sun, Smartphone, Calendar, Users, Clock, Layers, Battery, Zap, Eye, Shield, AlertTriangle, CheckCircle2, Minus, ChevronRight, Target, BatteryCharging, Layout, Lightbulb, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useEffect } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import atherWidgetDesigns from 'figma:asset/9bfbb1642dce5617bba88e3d53ae32693e5e78ee.png';
import heroImage from 'figma:asset/69e4632b959f6f4ac2b3396da949790e8e4371b9.png';
import atherWidgetDesignsNew from 'figma:asset/041073cb8eb4965cf8f17cf11606ba9555c2ee52.png';
import deviceImage from '../../imports/Device.png';

const widgetImage = "https://images.unsplash.com/photo-1621691187532-bbeb671757ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpT1MlMjB3aWRnZXQlMjBtb2JpbGUlMjBpbnRlcmZhY2UlMjBkYXJrJTIwbW9kZXxlbnwxfHx8fDE3NzI5MzY2MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const batteryImage = "https://images.unsplash.com/photo-1760074016722-04b95a22a310?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYmF0dGVyeSUyMGluZGljYXRvciUyMHNjcmVlbnxlbnwxfHx8fDE3NzI5MzY2Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const wireframeImage = "https://images.unsplash.com/photo-1541462608143-67571c6738dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMHdpcmVmcmFtZSUyMHNrZXRjaCUyMHBhcGVyfGVufDF8fHx8MTc3MjkzNjYzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const riderImage = "https://images.unsplash.com/photo-1770323806351-7d17af4920aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBzY29vdGVyJTIwcmlkZXIlMjB1cmJhbnxlbnwxfHx8fDE3NzI5MzY2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export default function AtherCaseStudy() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      {/* Navigation */}
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-950/50 text-green-600 dark:text-green-400 rounded-full text-sm mb-8 border border-green-100 dark:border-green-900">
              <Zap className="w-4 h-4" />
              Concept Project — Mobile Widget Design
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Ather Widget Reducing Friction for EV Riders
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
              A self-initiated UX case study solving a real, recurring problem I experience as an Ather rider — checking battery status without launching the full app every single time.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Meta */}
      <section className="px-6 pb-8">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-sm text-gray-500 dark:text-gray-500 border-y border-gray-200 dark:border-gray-800 py-5">
            <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> PRAMOD</span>
            <span className="flex items-center gap-1.5"><Smartphone className="w-3.5 h-3.5" /> iOS & Android</span>
            <span className="flex items-center gap-1.5"><Layers className="w-3.5 h-3.5" /> Figma</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Self-initiated</span>
            <span className="flex items-center gap-1.5"><Target className="w-3.5 h-3.5" /> Concept Project</span>
          </div>
        </ScrollReveal>
      </section>

      {/* Hero Image */}
      <section className="px-6 pb-16">
        <ScrollReveal variant="fadeUp" delay={0.15}>
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden">
            <ImageWithFallback
              src={heroImage}
              alt="Ather electric scooter"
              className="w-full h-auto object-contain"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* ===== CONTEXT ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Context</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              As an Ather rider and daily app user, I noticed a recurring pattern in my own behavior — I frequently open the Ather app for just one reason: <strong className="text-gray-900 dark:text-white">to check the current battery percentage</strong>.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              This project is grounded in a real, recurring problem explored through a product and platform-conscious design lens, focusing specifically on Small and Medium mobile widgets across both iOS and Android.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== THE PROBLEM ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">The Problem</h2>
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-800 dark:text-gray-200 font-medium">
                  Checking battery status — a simple, repetitive, time-sensitive action — requires a full app launch every time.
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm italic ml-8">
                "As an Ather rider, accessing battery status requires disproportionate effort for a simple, high-frequency need."
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Simple", desc: "One data point needed" },
                { label: "Repetitive", desc: "Multiple times daily" },
                { label: "Time-sensitive", desc: "Before every ride" },
              ].map((item) => (
                <div key={item.label} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800 text-center">
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">{item.label}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Rider context image */}
      <section className="px-6 pb-16">
        <ScrollReveal variant="fadeUp">
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden">
            <ImageWithFallback
              src={riderImage}
              alt="Electric scooter rider in urban environment"
              className="w-full h-[250px] md:h-[380px] object-cover object-[center_65%]"
            />
            
          </div>
        </ScrollReveal>
      </section>

      {/* ===== WHY THIS MATTERS ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why This Matters</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Battery status is a <strong className="text-gray-900 dark:text-white">confidence signal</strong> for EV riders. Before stepping out, users often ask:
            </p>
            <div className="space-y-3 mb-6">
              {[
                '"How much charge do I have?"',
                '"Do I need to charge before riding?"',
              ].map((q) => (
                <div key={q} className="flex items-center gap-3 bg-green-50 dark:bg-green-950/20 rounded-xl px-5 py-4 border border-green-200 dark:border-green-900">
                  <BatteryCharging className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <p className="text-gray-800 dark:text-gray-200 font-medium">{q}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Reducing friction at this moment improves trust, speed, and daily usability.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PLATFORM CONSTRAINTS ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Platform Constraints</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              This solution was designed within Apple's WidgetKit and Android's App Widgets guidelines, along with each platform's Human Interface and Material Design principles. Rather than treating these constraints as limitations, the design intentionally uses them to drive clarity and focus.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Eye className="w-5 h-5" />, title: "Glanceable Only", desc: "Widgets are for awareness, not interaction" },
                { icon: <Minus className="w-5 h-5" />, title: "No Controls", desc: "No quick actions or interactive controls allowed" },
                { icon: <Clock className="w-5 h-5" />, title: "System Refresh", desc: "System-managed refresh frequency" },
                { icon: <Shield className="w-5 h-5" />, title: "Privacy Rules", desc: "Strict privacy rules on the Lock Screen" },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-orange-500">{item.icon}</div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== DESIGN GOAL ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Design Goal</h2>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl p-6 border border-green-200 dark:border-green-900">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Design a lightweight, platform-native mobile widget that:
              </p>
              <div className="space-y-3">
                {[
                  "Answers the battery status question in under 2 seconds",
                  "Reduces unnecessary app opens",
                  "Feels native to each platform",
                  "Maintains user trust through honest data states",
                ].map((goal) => (
                  <div key={goal} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{goal}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SCOPE & FOCUS ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Scope & Focus</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              To maintain clarity and avoid feature creep, the scope was deliberately constrained:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 dark:bg-green-950/20 rounded-xl p-5 border border-green-200 dark:border-green-900">
                <div className="flex items-center gap-2 mb-2">
                  <Layout className="w-4 h-4 text-green-600" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Small Widget</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Instant battery check</p>
              </div>
              <div className="bg-green-50 dark:bg-green-950/20 rounded-xl p-5 border border-green-200 dark:border-green-900">
                <div className="flex items-center gap-2 mb-2">
                  <Layout className="w-4 h-4 text-green-600" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Medium Widget</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Battery with contextual clarity</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500 italic">
              Large widgets were excluded to preserve glanceability.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== INFORMATION ARCHITECTURE ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Information Architecture</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              A clear hierarchy guided all layouts. Lower-priority information is progressively removed on smaller widgets.
            </p>
            <div className="space-y-3">
              {[
                { level: "Primary", item: "Battery percentage", color: "bg-orange-500" },
                { level: "Secondary", item: "Charging state", color: "bg-orange-400" },
                { level: "Context", item: "Estimated range", color: "bg-orange-300" },
                { level: "Trust", item: "Last updated time", color: "bg-orange-200" },
              ].map((row, i) => (
                <div key={row.level} className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${row.color} flex-shrink-0`} />
                  <div className="flex-1 bg-gray-50 dark:bg-gray-900 rounded-lg px-4 py-3 border border-gray-200 dark:border-gray-800 flex items-center justify-between">
                    <span className="font-medium text-gray-900 dark:text-white">{row.item}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{row.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Wireframe placeholder image */}
      <section className="px-6 pb-16">
        <ScrollReveal variant="fadeUp">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Widget Design Explorations</h3>
            <div className="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800">
              <ImageWithFallback
                src={atherWidgetDesigns}
                alt="Ather widget design explorations across small and medium sizes with light and dark themes"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-3">
              Widget variations across Ather 450x and Ritza models
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== SOLUTION OVERVIEW ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Solution Overview</h2>

            {/* Small Widget */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <Battery className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Small Widget</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">"How much charge do I have right now?"</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Content:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs">Battery % (hero)</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs">Charging / Parked state</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">UX Rationale:</p>
                  <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                    <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-1 text-orange-500 flex-shrink-0" /> Large numeric emphasis for instant readability</li>
                    <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-1 text-orange-500 flex-shrink-0" /> Minimal text</li>
                    <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-1 text-orange-500 flex-shrink-0" /> One-second comprehension</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Medium Widget */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <BatteryCharging className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Medium Widget</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">"Do I have enough charge for my next ride?"</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Content:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs">Battery %</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs">Charging state</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs">Estimated range</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs">Last updated</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">UX Rationale:</p>
                  <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                    <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-1 text-orange-500 flex-shrink-0" /> Adds context without adding complexity</li>
                    <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-1 text-orange-500 flex-shrink-0" /> Supports quick decision-making</li>
                    <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-1 text-orange-500 flex-shrink-0" /> Maintains trust with data freshness</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Widget placeholder image */}
      <section className="px-6 pb-16">
        <ScrollReveal variant="fadeUp">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">High-Fidelity Widget Screens</h3>
            <div className="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800">
              <ImageWithFallback
                src={atherWidgetDesignsNew}
                alt="High-fidelity Ather widget screens across multiple scooter models and themes"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-3">
              Final high-fidelity designs showing battery %, range, charging state, and last synced info
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== VISUAL DESIGN DECISIONS ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Visual Design Decisions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Platform Typography", desc: "SF Pro on iOS, Roboto on Android for native consistency" },
                { title: "Light & Dark Mode", desc: "System colors with full mode support" },
                { title: "Minimal Branding", desc: "Ather green used only as accent" },
                { title: "Calm Layout", desc: "Neutral, aligned with native platform widgets" },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500 italic mt-4">
              The widget intentionally avoids heavy branding to prioritize clarity, neutrality, and platform consistency.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== EDGE CASES & STATES ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Edge Cases & States</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              To ensure reliability, key edge states were designed — each communicating clearly without alarming the user.
            </p>
            <div className="space-y-3">
              {[
                { state: "No scooter connected", icon: <AlertTriangle className="w-4 h-4 text-yellow-500" /> },
                { state: "User logged out", icon: <Shield className="w-4 h-4 text-red-500" /> },
                { state: "Data unavailable or stale", icon: <Clock className="w-4 h-4 text-gray-500" /> },
              ].map((item) => (
                <div key={item.state} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-900 rounded-xl px-5 py-4 border border-gray-200 dark:border-gray-800">
                  {item.icon}
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{item.state}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== INTERACTION MODEL ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Interaction Model</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Widgets are designed as contextual entry points, not destinations — preserving continuity while avoiding unnecessary navigation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">Small</span>
                  <ArrowRight className="w-3 h-3 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Opens scooter overview screen</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full">Medium</span>
                  <ArrowRight className="w-3 h-3 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Opens charging details screen</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHY NO CONTROLS? ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why No Controls?</h2>
            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-2xl p-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Mobile widgets are designed for <strong className="text-gray-900 dark:text-white">awareness, not control</strong>. Adding actions such as charging controls would:
              </p>
              <ul className="space-y-2">
                {[
                  "Increase cognitive load",
                  "Reduce reliability",
                  "Conflict with platform widget philosophy",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Minus className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 italic">
                The design intentionally focuses on awareness over interaction.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Battery placeholder image */}
      <section className="px-6 pb-16">
        <ScrollReveal variant="fadeUp">
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden">
            <ImageWithFallback
              src={deviceImage}
              alt="Battery indicator interface"
              className="block mx-auto w-auto max-w-[280px] md:max-w-[340px] h-auto object-contain"
            />
            
          </div>
        </ScrollReveal>
      </section>

      {/* ===== OUTCOME ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Outcome</h2>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl p-6 border border-green-200 dark:border-green-900">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">This concept demonstrates that:</p>
              <div className="space-y-3">
                {[
                  "Personal user pain points can inform meaningful UX solutions",
                  "Platform constraints can lead to clearer, more focused designs",
                  "Reducing features can improve everyday usability",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== KEY LEARNINGS ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Key Learnings</h2>
            <div className="space-y-4">
              {[
                { icon: <Lightbulb className="w-5 h-5 text-yellow-500" />, text: "Designing from personal experience increases clarity" },
                { icon: <Target className="w-5 h-5 text-orange-500" />, text: "Constraints help prioritize what truly matters" },
                { icon: <Eye className="w-5 h-5 text-blue-500" />, text: "Glanceable design requires restraint, not feature depth" },
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
                This project reflects my approach to constraint-driven, user-centered design — where success is defined by reducing friction and cognitive load rather than adding features.
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
              <Link
                to="/works"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition font-medium shadow-lg shadow-orange-500/20"
              >
                View All Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
            <ArrowLeft className="w-5 h-5" />
            Back to home
          </button>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}