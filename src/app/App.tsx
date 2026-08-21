import { useCallback, useEffect, useState } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { ThemeProvider } from './context/ThemeContext';
import { PageLoader } from './components/PageLoader';
import { SmoothCursor } from './components/magicui/smooth-cursor';

const FAVICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#F97316"/><stop offset="100%" stop-color="#EF4444"/></linearGradient></defs><rect width="64" height="64" rx="14" fill="url(#g)"/><text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" font-family="Inter,system-ui,-apple-system,sans-serif" font-size="38" font-weight="900" fill="#ffffff">P</text></svg>`;

function useFavicon() {
  useEffect(() => {
    const href = `data:image/svg+xml;utf8,${encodeURIComponent(FAVICON_SVG)}`;
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image/svg+xml';
    link.href = href;

    if (!document.title || document.title === 'Vite + React') {
      document.title = 'Pramod B — UX Designer';
    }
  }, []);
}

export default function App() {
  useFavicon();
  const [showLoader, setShowLoader] = useState(true);
  const [smoothCursor, setSmoothCursor] = useState(true);

  useEffect(() => {
    setSmoothCursor(localStorage.getItem('smooth-cursor-enabled') !== 'false');
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setShowLoader(false);
  }, []);

  return (
    <ThemeProvider>
      {/* RouterProvider is ALWAYS mounted so content is ready the moment loader exits */}
      <div
        style={{
          opacity: showLoader ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
          pointerEvents: showLoader ? 'none' : 'auto',
        }}
      >
        <RouterProvider router={router} />
      </div>

      {/* Loader sits on top while content mounts underneath */}
      {showLoader && (
        <PageLoader onLoadingComplete={handleLoadingComplete} />
      )}

      {/* Mounted only after the loader exits: SmoothCursor sets `body { cursor: none }`,
          and the loader (z-9999) sits above the cursor (z-100), so mounting it earlier
          would leave no visible pointer at all while loading. Self-disables on touch. */}
      {!showLoader && smoothCursor && <SmoothCursor />}
    </ThemeProvider>
  );
}