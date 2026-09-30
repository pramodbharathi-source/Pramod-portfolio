import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import '../../styles/nasdaq-calypso.css';
import rawHtml from '../../imports/nasdaq/nasdaq-case-study.html?raw';
import teamworkImg from '../../imports/nasdaq/nasdaq-teamwork.jpg';

// The case study is authored as standalone HTML + a stylesheet scoped under `.cs`
// (source: ~/Downloads/Nasdaq case study). It is embedded verbatim rather than
// ported to JSX so the original stays the single source of truth and can be
// re-exported without a rewrite. Rewrite the one relative asset path to the
// bundled URL Vite generates.
const html = rawHtml.replace('assets/nasdaq-teamwork.jpg', teamworkImg);

export default function NasdaqCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      <Navbar />
      {/* Static, author-controlled markup from the local case-study file — no user input. */}
      <div className="pt-20" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
