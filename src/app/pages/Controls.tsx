import { useEffect, useState } from 'react';
import { Lock, Settings, Camera, MousePointer2 } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { ScrollReveal } from '../components/ScrollReveal';

export default function Controls() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      <Navbar />

      <section className="pt-32 pb-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal variant="fadeUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full mb-6">
              <Settings className="w-4 h-4" />
              Hidden Controls
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">
              Site Controls
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Private toggles for managing site behavior. Settings are saved on this device.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <ScrollReveal variant="fadeUp">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Case Study Access
              </h2>
            </div>
            <DexPasswordToggle />
          </ScrollReveal>

          <ScrollReveal variant="fadeUp">
            <div className="flex items-center gap-3 mb-4 mt-10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Home Page Sections
              </h2>
            </div>
            <PhotographySectionToggle />
          </ScrollReveal>

          <ScrollReveal variant="fadeUp">
            <div className="flex items-center gap-3 mb-4 mt-10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <MousePointer2 className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Pointer
              </h2>
            </div>
            <SmoothCursorToggle />
          </ScrollReveal>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">© 2026 Pramod B · Controls</p>
        </div>
      </footer>
    </div>
  );
}

function SmoothCursorToggle() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    setEnabled(localStorage.getItem('smooth-cursor-enabled') !== 'false');
  }, []);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    localStorage.setItem('smooth-cursor-enabled', next ? 'true' : 'false');
  };

  return (
    <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 flex items-center justify-between gap-6">
      <div>
        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
          Smooth Cursor
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Replaces the system pointer with an animated cursor that rotates toward
          your movement. Automatically off on touch devices. Reload to see the change.
        </p>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
          Status:{' '}
          <span className={enabled ? 'text-orange-600 dark:text-orange-400' : 'text-gray-500'}>
            {enabled ? 'Enabled' : 'Disabled'}
          </span>
        </p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={toggle}
        className={`relative inline-flex h-7 w-12 flex-shrink-0 items-center rounded-full transition-colors ${
          enabled ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gray-300 dark:bg-gray-700'
        }`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}

function PhotographySectionToggle() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setHidden(localStorage.getItem('photography-section-hidden') === 'true');
  }, []);

  const toggle = () => {
    const next = !hidden;
    setHidden(next);
    localStorage.setItem('photography-section-hidden', next ? 'true' : 'false');
  };

  const visible = !hidden;

  return (
    <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 flex items-center justify-between gap-6">
      <div>
        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
          "Through My Lens" Photography Section
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Show or hide the photography deck of cards on the home page. Reload the home page to see the change.
        </p>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
          Status:{' '}
          <span className={visible ? 'text-orange-600 dark:text-orange-400' : 'text-gray-500'}>
            {visible ? 'Visible' : 'Hidden'}
          </span>
        </p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={visible}
        onClick={toggle}
        className={`relative inline-flex h-7 w-12 flex-shrink-0 items-center rounded-full transition-colors ${
          visible ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gray-300 dark:bg-gray-700'
        }`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
            visible ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}

function DexPasswordToggle() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('dex-password-enabled');
    setEnabled(stored !== 'false');
  }, []);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    localStorage.setItem('dex-password-enabled', next ? 'true' : 'false');
  };

  return (
    <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 flex items-center justify-between gap-6">
      <div>
        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
          DEX Case Study — Password Protection
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          When enabled, visitors must enter the password to view the DEX case study.
        </p>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
          Status:{' '}
          <span className={enabled ? 'text-orange-600 dark:text-orange-400' : 'text-green-600 dark:text-green-400'}>
            {enabled ? 'Protected' : 'Public'}
          </span>
        </p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={toggle}
        className={`relative inline-flex h-7 w-12 flex-shrink-0 items-center rounded-full transition-colors ${
          enabled ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gray-300 dark:bg-gray-700'
        }`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}
