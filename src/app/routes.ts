import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import { ScrollToTopLayout } from "./components/ScrollToTop";

// Home and the layout stay eager: App.tsx keeps RouterProvider mounted behind
// the PageLoader so the landing page is painted the moment the loader exits.
// Every other route is code-split and fetched on navigation.
export const router = createBrowserRouter([
  {
    Component: ScrollToTopLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/works",
        lazy: async () => ({ Component: (await import("./pages/Works")).default }),
      },
      {
        path: "/case-study/design-system",
        lazy: async () => ({ Component: (await import("./pages/DesignSystemCaseStudy")).default }),
      },
      {
        path: "/case-study/dex",
        lazy: async () => ({ Component: (await import("./pages/DexCaseStudyPage")).default }),
      },
      {
        path: "/case-study/ather-widget",
        lazy: async () => ({ Component: (await import("./pages/AtherCaseStudy")).default }),
      },
      {
        path: "/case-study/nasdaq",
        lazy: async () => ({ Component: (await import("./pages/NasdaqCaseStudy")).default }),
      },
      {
        path: "/resume",
        lazy: async () => ({ Component: (await import("./pages/Resume")).default }),
      },
      {
        path: "/experience",
        lazy: async () => ({ Component: (await import("./pages/Experience")).default }),
      },
      {
        path: "/contact",
        lazy: async () => ({ Component: (await import("./pages/Contact")).default }),
      },
      {
        path: "/about",
        lazy: async () => ({ Component: (await import("./pages/About")).default }),
      },
      {
        path: "/brand-kit",
        lazy: async () => ({ Component: (await import("./pages/BrandKit")).default }),
      },
      {
        path: "/controls",
        lazy: async () => ({ Component: (await import("./pages/Controls")).default }),
      },
      {
        path: "/privacy-policy",
        lazy: async () => ({ Component: (await import("./pages/PrivacyPolicy")).default }),
      },
      {
        path: "/terms-of-service",
        lazy: async () => ({ Component: (await import("./pages/TermsOfService")).default }),
      },
    ],
  },
]);
