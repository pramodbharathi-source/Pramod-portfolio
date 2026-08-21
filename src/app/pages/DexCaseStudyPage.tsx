import { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { PasswordGate } from '../components/PasswordGate';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import dexCaseStudyImage from '../../imports/DEX_Case_Study.png';

export default function DexCaseStudyPage() {
  const [isUnlocked, setIsUnlocked] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('dex-password-enabled') === 'false';
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!isUnlocked) {
    return (
      <PasswordGate
        onSuccess={() => setIsUnlocked(true)}
        projectName="DEX – Case Study"
      />
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      <div className="pt-20 pb-12">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
          <ImageWithFallback
            src={dexCaseStudyImage}
            alt="DEX – Digital Employee Xperience Case Study"
            className="block w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
