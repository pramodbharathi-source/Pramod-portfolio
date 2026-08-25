import { useCallback, useEffect, useState } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { ThemeProvider } from './context/ThemeContext';
import { PageLoader } from './components/PageLoader';
import { SmoothCursor } from './components/magicui/smooth-cursor';

// No background square (icon only, per design choice). Adapts to the browser/OS
// chrome's own color scheme — not the site's theme toggle — since a favicon has
// no access to app state; black reads on a light tab, white on a dark one.
const FAVICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109 120">
<style>
  path { fill: #000000; }
  @media (prefers-color-scheme: dark) { path { fill: #ffffff; } }
</style>
<path d="M47.3697 0.263754C73.5697 -1.93323 96.759 9.58411 105.962 35.2195C115.372 61.4265 98.4692 92.9443 71.1838 98.8282C67.2982 99.6657 63.6437 100.498 59.8352 98.5919C57.5826 97.4838 55.8932 95.4849 55.1789 93.0783C54.4795 90.6614 54.5862 87.238 55.994 85.0318C58.374 81.2986 62.6746 81.2678 66.3142 80.1866C73.5134 78.0472 80.191 72.859 83.9492 66.4385C88.063 59.3632 89.2071 50.9458 87.1294 43.0289C85.2681 36.0635 80.0932 28.8423 73.8483 25.2434L73.466 25.0246C72.479 24.3431 71.2816 23.4413 70.2561 22.924C47.031 11.2069 21.9439 26.6628 18.7628 51.909C17.807 59.4951 18.0562 66.3517 18.1771 73.7831L18.4 93.8621C18.523 101.01 19.8194 110.912 10.7847 112.764C4.05135 114.144 0.263519 107.824 0.280117 101.947C0.358363 84.9915 -0.148458 67.632 0.0438974 50.7104C0.204835 36.5808 6.48439 24.7827 16.1644 14.9993C25.58 5.48244 34.6968 2.67477 47.3697 0.263754Z"/>
<path d="M55.9739 42.6799C59.2431 42.4398 65.9859 42.325 68.1436 44.0225C77.9659 51.748 70.7488 64.0868 58.8993 61.8097C57.6811 61.5758 53.8103 62.1103 52.7285 62.2814C52.3729 62.6075 52.0261 62.941 51.6882 63.2816C50.3604 64.6049 48.914 66.7266 48.5258 68.6295C46.085 80.5631 47.5684 94.2747 47.28 106.451C47.163 111.381 47.2445 114.362 43.7886 117.842C40.023 120.531 36.106 120.225 32.4758 117.334C28.2535 114.058 28.811 108.448 28.8949 103.625C29.038 95.3831 28.918 87.0672 28.8756 78.8114C28.8498 73.8307 28.613 67.9664 29.6919 63.1031C30.6435 58.9546 32.5763 55.0949 35.328 51.8476C40.8078 45.4253 47.8568 43.3709 55.9739 42.6799Z"/>
</svg>`;

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