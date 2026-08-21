import image_dfb91b740a84162bbb05a16298b0558a453f149d from 'figma:asset/dfb91b740a84162bbb05a16298b0558a453f149d.png';
import designSystemCover from 'figma:asset/a4f0044400029c030fa38048de440178aded1eba.png';
import profileImage from '../../imports/ChatGPT_Image_May_20__2026__08_04_56_AM.png';
import heroProfileImage from '../../imports/image_282.png';
import image_5606b750ff9cbbf5b2dc4438d87fa78f25fb68b3 from 'figma:asset/5606b750ff9cbbf5b2dc4438d87fa78f25fb68b3.png';
import image_80e81d2d90c0cdbdc9bce32e3c2950bbd9695deb from 'figma:asset/80e81d2d90c0cdbdc9bce32e3c2950bbd9695deb.png';
import image_011a6a4d16f92c906acb9b21a2df7e5fcd6ff41f from 'figma:asset/011a6a4d16f92c906acb9b21a2df7e5fcd6ff41f.png';
import nasdaqDarkLogo from '../../imports/image.png';
import npciDarkLogo from '../../imports/image-1.png';
import altimetrikDarkLogo from '../../imports/image-2.png';
import visaLightLogo from '../../imports/image-3.png';
import image_11c290a19a18e16ae74bab159390d1f60ca620f8 from 'figma:asset/11c290a19a18e16ae74bab159390d1f60ca620f8.png';
import atherCoverImage from 'figma:asset/69e4632b959f6f4ac2b3396da949790e8e4371b9.png';
import shashankImage from 'figma:asset/589989abd5cd229c64b11d27037acfbd9ba8e9a3.png';
import narasimhanImage from 'figma:asset/9e0a26e725558fe50b2e3913d2ebf7f28ab59bfd.png';
import meenakshiImage from 'figma:asset/4ce541cd4616ca2c1ce453981f8fccc6bfe33657.png';
import antonyImage from 'figma:asset/90afe7406c679efb8ba48749ba41c6a9d182e313.png';
import altimetrikLogo from 'figma:asset/9ba42e126655eaa40c657d7b740bf3d26bac192b.png';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowRight, Mail, Linkedin, Github, Sparkles, Users, Target, Zap, Menu, X, PenTool, Moon, Sun, Component, Briefcase, Instagram, Heart } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ServicesCarousel } from '../components/ServicesCarousel';
import { CountUp } from '../components/CountUp';
import { ScrollReveal } from '../components/ScrollReveal';
import { Parallax } from '../components/Parallax';
import { useScrollY } from '../hooks/useParallax';
import { DexCoverImage } from '../components/DexCoverImage';
import { PhotographySection } from '../components/PhotographySection';
import { ToolsSection } from '../components/ToolsSection';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { Navbar } from '../components/Navbar';

// Force module re-evaluation after useParallax hook fix (v2)

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const scrollY = useScrollY();

  const projects = [
    {
      id: 4,
      title: "Ather Widget Reducing Friction for EV Riders",
      category: "Concept · Mobile Widget",
      description: "A self-initiated UX case study solving a recurring problem for Ather riders — checking battery status without launching the full app, designed for both iOS and Android platforms.",
      image: atherCoverImage,
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
    {
      id: 6,
      title: "Banking App Interface",
      category: "FinTech",
      description: "Simplified financial management with intuitive navigation and real-time insights for modern users.",
      image: "https://images.unsplash.com/photo-1681826291722-70bd7e9e6fc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwfGVufDF8fHx8MTc3MTg4MDU4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "#",
      tags: ["FinTech", "Mobile Design", "Security"],
    },
    {
      id: 7,
      title: "Food Delivery Experience",
      category: "Mobile App",
      description: "Reimagined ordering flow with personalized recommendations and seamless payment integration.",
      image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxODc3NjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "#",
      tags: ["Mobile App", "User Flow", "Personalization"],
    },
  ];

  const services = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "UX Research",
      description: "I focus on understanding user needs and behaviors to design experiences that feel seamless and intuitive.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "UI Design",
      description: "I love creating interfaces that are not only visually stunning but also easy to use and functional.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Testing",
      description: "Validate designs with real users before development",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Prototyping",
      description: "Interactive prototypes to bring ideas to life",
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Icon Creation",
      description: "I have a passion for crafting icons that are detailed, meaningful, and enhance the overall design.",
    },
    {
      icon: <Component className="w-6 h-6" />,
      title: "Design System",
      description: "I enjoy building design systems that bring consistency, efficiency, and scalability to projects.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Antony S",
      role: "Senior Principal Architect - UX",
      image: antonyImage,
      quote: "Thank you for your continued hard work and dedication to our company. We truly appreciate your contributions and look forward to another successful year ahead.",
    },
    {
      id: 2,
      name: "Narasimhan C",
      role: "Product Leader - DEX",
      image: narasimhanImage,
      quote: "You've truly brought the DEX web experience to life! The positive reception from HR and country leads speaks volumes. I want to extend a heartfelt thank you for your creativity, timely design enablement, and collaborative effort in making this project a reality. Receiving such feedback before the Go Live date.",
    },
    {
      id: 3,
      name: "Meenakshi Sundar Rajasekaran",
      role: "Engineering Manager - Domestic and General",
      image: meenakshiImage,
      quote: "The design suggestions are spot on and the automated features save me so much time. I can focus more on creativity rather than getting bogged down in details.",
    },
    {
      id: 4,
      name: "Shashank Shekhar",
      role: "Manager - Product Management",
      image: shashankImage,
      quote: "Appreciation to Pramod for his creative design and excellent work on Gamification. His attention to detail and innovative approach have significantly enhanced the overall user experience for DEX app.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <ScrollReveal variant="fadeRight" className="order-2 lg:order-1">
              <Parallax speed={-0.05} maxOffset={30}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-sm mb-6 border border-green-200 dark:border-green-800">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for new projects
              </div>
              </Parallax>
              <Parallax speed={-0.08} maxOffset={40}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Crafting delightful user experiences
              </h1>
              </Parallax>
              <Parallax speed={-0.04} maxOffset={20}>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I'm a UI/UX designer passionate about crafting intuitive, user-centered experiences through research-driven design. From wireframes to design systems, I transform complex workflows into seamless digital products that users love.
              </p>
              </Parallax>
              
              {/* Stats Cards */}
              <Parallax speed={-0.06} maxOffset={25}>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 border border-blue-100 dark:border-gray-800">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1"><CountUp end={4} suffix="+" duration={3000} /></div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years of Experience</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 border border-purple-100 dark:border-gray-800">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1"><CountUp end={10} suffix="+" duration={3000} /></div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 border border-green-100 dark:border-gray-800">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1"><CountUp end={12} suffix="+" duration={3000} /></div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Worldwide Clients</div>
                </div>
              </div>
              </Parallax>

              <div className="flex flex-row items-center gap-4">
                <Link 
                  to="/contact" 
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition flex items-center gap-2 shadow-lg shadow-orange-500/30"
                >
                  Get in touch <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/works" 
                  className="px-6 py-3 border border-orange-300 dark:border-orange-700 text-orange-600 dark:text-orange-400 rounded-lg hover:border-orange-400 dark:hover:border-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition"
                >
                  View work
                </Link>
              </div>
            </ScrollReveal>

            {/* Right Content - Profile Picture */}
            <ScrollReveal variant="fadeLeft" delay={0.2} className="order-1 lg:order-2 relative">
              <div className="relative min-h-[520px]">

                {/* SVG background — soft blob + subtle arcs */}
                <div className="absolute inset-0 pointer-events-none z-0">
                  <svg viewBox="0 0 520 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <defs>
                      <radialGradient id="mainBlob" cx="50%" cy="44%" r="50%">
                        <stop offset="0%"   stopColor="rgba(209,196,253,0.72)"/>
                        <stop offset="45%"  stopColor="rgba(221,214,254,0.38)"/>
                        <stop offset="75%"  stopColor="rgba(237,233,254,0.14)"/>
                        <stop offset="100%" stopColor="rgba(237,233,254,0)"/>
                      </radialGradient>
                      <radialGradient id="secBlob" cx="50%" cy="50%" r="50%">
                        <stop offset="0%"   stopColor="rgba(237,233,254,0.45)"/>
                        <stop offset="100%" stopColor="rgba(237,233,254,0)"/>
                      </radialGradient>
                    </defs>
                    {/* Primary lavender glow — behind upper body */}
                    <ellipse cx="258" cy="270" rx="200" ry="210" fill="url(#mainBlob)"/>
                    {/* Secondary soft circle lower-right */}
                    <ellipse cx="380" cy="430" rx="120" ry="115" fill="url(#secBlob)"/>
                    {/* Diagonal arc 1 */}
                    <path d="M 30 500 C 100 370, 200 210, 390 70"
                      stroke="rgba(167,139,250,0.22)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                    {/* Diagonal arc 2 — offset parallel */}
                    <path d="M 80 540 C 160 400, 270 230, 490 100"
                      stroke="rgba(196,181,253,0.13)" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>

                {/* Floating accent dots */}
                <div className="absolute top-[13%] left-[24%] w-3 h-3 rounded-full bg-green-400 z-10 animate-bounce"  style={{ animationDuration: '3.2s' }} />
                <div className="absolute top-[46%] left-[1%]  w-2.5 h-2.5 rounded-full bg-yellow-400 z-10 animate-bounce" style={{ animationDuration: '2.6s', animationDelay: '0.7s' }} />
                <div className="absolute top-[38%] right-[1%] w-2.5 h-2.5 rounded-full bg-purple-400 z-10 animate-bounce" style={{ animationDuration: '3.6s', animationDelay: '1.2s' }} />

                {/* Portrait — transparent PNG, natural bottom dissolve */}
                <Parallax speed={-0.12} maxOffset={60}>
                  <div
                    className="relative mx-auto z-10"
                    style={{
                      maxWidth: '420px',
                      maskImage: `linear-gradient(
                        to bottom,
                        black      0%,
                        black     52%,
                        rgba(0,0,0,0.96) 60%,
                        rgba(0,0,0,0.85) 68%,
                        rgba(0,0,0,0.60) 76%,
                        rgba(0,0,0,0.30) 84%,
                        rgba(0,0,0,0.08) 91%,
                        transparent     97%
                      )`,
                      WebkitMaskImage: `linear-gradient(
                        to bottom,
                        black      0%,
                        black     52%,
                        rgba(0,0,0,0.96) 60%,
                        rgba(0,0,0,0.85) 68%,
                        rgba(0,0,0,0.60) 76%,
                        rgba(0,0,0,0.30) 84%,
                        rgba(0,0,0,0.08) 91%,
                        transparent     97%
                      )`,
                    }}
                  >
                    <img
                      src={heroProfileImage}
                      alt="Pramod B - UI/UX Designer"
                      className="w-full object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800";
                      }}
                    />
                  </div>
                </Parallax>

                {/* Certification Badge */}
                <div
                  className="absolute top-4 right-0 bg-white rounded-2xl shadow-lg p-3 border border-gray-100 max-w-[210px] hidden lg:block z-20"
                  style={{
                    transform: `translateY(${scrollY * -0.08}px)`,
                    willChange: 'transform',
                    transition: 'transform 0.1s linear',
                  }}
                >
                  <a
                    href="https://www.coursera.org/account/accomplishments/professional-cert/E642HSYI16X3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 border border-gray-200">
                      <svg className="w-7 h-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-gray-900 leading-tight group-hover:text-orange-500 transition-colors">Google Certified</div>
                      <div className="text-xs text-gray-600">UX Designer</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <a
                  href="mailto:pramodbharathi@gmail.com"
                  className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition flex items-center justify-center text-gray-700 dark:text-gray-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pramod-b-388b3720a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition flex items-center justify-center text-gray-700 dark:text-gray-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/pramod_.20/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition flex items-center justify-center text-gray-700 dark:text-gray-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects Worked On - Horizontal Scroll Animation */}
      <ScrollReveal variant="fadeIn" duration={0.9}>
      <section className="py-2 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Row 1 - Scrolls left (default direction) */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling container - Row 1: seamless loop with 2 identical copies */}
            <div className="flex animate-scroll" style={{ width: 'max-content' }}>
              {[0, 1].map((setIndex) => (
                <div key={`row1-set-${setIndex}`} className="flex items-center flex-shrink-0">
                  <div className="flex-shrink-0 w-28 md:w-48 h-12 md:h-16 flex items-center justify-center mx-6 md:mx-8">
                    <img src={visaLightLogo} alt="Visa" className="max-w-full max-h-full object-contain scale-75 dark:brightness-0 dark:invert" />
                  </div>
                  <div className="flex-shrink-0 w-28 md:w-48 h-12 md:h-16 flex items-center justify-center mx-6 md:mx-8">
                    <img src={image_5606b750ff9cbbf5b2dc4438d87fa78f25fb68b3} alt="Twiq Academy" className="max-w-full max-h-full object-contain dark:brightness-0 dark:invert" />
                  </div>
                  <div className="flex-shrink-0 w-28 md:w-48 h-12 md:h-16 flex items-center justify-center mx-6 md:mx-8">
                    <>
                    <img src={image_11c290a19a18e16ae74bab159390d1f60ca620f8} alt="NPCI" className="max-w-full max-h-full object-contain block dark:hidden" />
                    <img src={npciDarkLogo} alt="NPCI" className="max-w-full max-h-full object-contain hidden dark:block" />
                  </>
                  </div>
                  <div className="flex-shrink-0 w-28 md:w-48 h-12 md:h-16 flex items-center justify-center mx-6 md:mx-8">
                    <>
                    <img src={image_dfb91b740a84162bbb05a16298b0558a453f149d} alt="Altimetrik" className="max-w-full max-h-full object-contain block dark:hidden" />
                    <img src={altimetrikDarkLogo} alt="Altimetrik" className="max-w-full max-h-full object-contain hidden dark:block" />
                  </>
                  </div>
                  <div className="flex-shrink-0 w-28 md:w-48 h-12 md:h-16 flex items-center justify-center mx-6 md:mx-8">
                    <>
                    <img src={image_011a6a4d16f92c906acb9b21a2df7e5fcd6ff41f} alt="Nasdaq" className="max-w-full max-h-full object-contain block dark:hidden" />
                    <img src={nasdaqDarkLogo} alt="Nasdaq" className="max-w-full max-h-full object-contain hidden dark:block" />
                  </>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scrolls right (reverse direction) - visible on mobile only */}
          <div className="relative overflow-hidden mt-6 md:hidden">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling container - Row 2 (reverse): mixed order, seamless loop */}
            <div className="flex animate-scroll-reverse" style={{ width: 'max-content' }}>
              {[0, 1].map((setIndex) => (
                <div key={`row2-set-${setIndex}`} className="flex items-center flex-shrink-0">
                  <div className="flex-shrink-0 w-28 h-12 flex items-center justify-center mx-6">
                    <>
                    <img src={image_011a6a4d16f92c906acb9b21a2df7e5fcd6ff41f} alt="Nasdaq" className="max-w-full max-h-full object-contain block dark:hidden" />
                    <img src={nasdaqDarkLogo} alt="Nasdaq" className="max-w-full max-h-full object-contain hidden dark:block" />
                  </>
                  </div>
                  <div className="flex-shrink-0 w-28 h-12 flex items-center justify-center mx-6">
                    <>
                    <img src={image_dfb91b740a84162bbb05a16298b0558a453f149d} alt="Altimetrik" className="max-w-full max-h-full object-contain block dark:hidden" />
                    <img src={altimetrikDarkLogo} alt="Altimetrik" className="max-w-full max-h-full object-contain hidden dark:block" />
                  </>
                  </div>
                  <div className="flex-shrink-0 w-28 h-12 flex items-center justify-center mx-6">
                    <img src={image_5606b750ff9cbbf5b2dc4438d87fa78f25fb68b3} alt="Twiq Academy" className="max-w-full max-h-full object-contain dark:brightness-0 dark:invert" />
                  </div>
                  <div className="flex-shrink-0 w-28 h-12 flex items-center justify-center mx-6">
                    <img src={visaLightLogo} alt="Visa" className="max-w-full max-h-full object-contain scale-75 dark:brightness-0 dark:invert" />
                  </div>
                  <div className="flex-shrink-0 w-28 h-12 flex items-center justify-center mx-6">
                    <>
                    <img src={image_11c290a19a18e16ae74bab159390d1f60ca620f8} alt="NPCI" className="max-w-full max-h-full object-contain block dark:hidden" />
                    <img src={npciDarkLogo} alt="NPCI" className="max-w-full max-h-full object-contain hidden dark:block" />
                  </>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Featured Work */}
      <section id="work" className="py-12 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="fadeUp">
          <Parallax speed={-0.06} maxOffset={30}>
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Work</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Selected projects that showcase my approach to UX design</p>
          </div>
          </Parallax>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, index) => (
              <ScrollReveal key={project.id} variant="fadeUp" delay={index * 0.15}>
              <Link
                to={project.link}
                className="group block bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className={`relative overflow-hidden h-[200px] sm:h-[240px] md:h-[280px]`}>
                  {'useCoverComponent' in project && project.useCoverComponent ? (
                    <div className="w-full h-full group-hover:scale-105 transition-transform duration-300">
                      <DexCoverImage className="w-full h-full" />
                    </div>
                  ) : (
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
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
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-orange-500 font-medium group-hover:gap-2 transition-all">
                    View case study <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-0" />
                  </div>
                </div>
              </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* View All Projects Link */}
          <ScrollReveal variant="fadeUp" delay={0.3}>
          <div className="mt-12 text-center">
            <Link 
              to="/works" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition font-semibold shadow-lg shadow-orange-500/20"
            >
              View All Projects <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience Timeline Tree */}
      <section className="py-20 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <Parallax speed={-0.06} maxOffset={30}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-2">4+ YEARS OF</h2>
                <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">EXPERIENCE</h2>
              </div>
            </Parallax>
          </ScrollReveal>

          {/* Tree Timeline */}
          <div className="relative">
            {/* Vertical tree line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-orange-300 to-transparent md:-translate-x-px" />

            {/* Experience Node -1 - Current */}
            <ScrollReveal variant="fadeUp">
              <div className="relative flex items-start mb-12 md:justify-end">
                {/* Tree dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-orange-500 rounded-full -translate-x-1/2 mt-6 z-10 ring-4 ring-orange-100 dark:ring-orange-900/30" />

                <div className="ml-14 md:ml-0 md:w-[calc(50%-2rem)] md:pr-0 md:mr-[calc(50%+2rem)]">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Senior Engineer – User Experience</h3>
                        <p className="text-sm text-orange-600 dark:text-orange-400">Altimetrik</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Apr 2026 – Present</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      Leading UX direction across squads, owning research-to-delivery and shaping the experience strategy.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Experience Node 0 */}
            <ScrollReveal variant="fadeUp" delay={0.05}>
              <div className="relative flex items-start mb-12">
                {/* Tree dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-orange-400 rounded-full -translate-x-1/2 mt-6 z-10 ring-4 ring-orange-100 dark:ring-orange-900/30" />

                <div className="ml-14 md:ml-[calc(50%+2rem)] md:w-[calc(50%-2rem)]">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Engineer – Digital Experience Design</h3>
                        <p className="text-sm text-orange-600 dark:text-orange-400">Altimetrik</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Jan 2026 – Mar 2026</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      Driving end-to-end UX strategy across product lines, scaling the design system, and mentoring designers.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* View More CTA */}
          <ScrollReveal variant="fadeUp" delay={0.3}>
            <div className="text-center mt-8">
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition font-medium shadow-lg shadow-orange-500/20"
              >
                <Briefcase className="w-4 h-4" />
                View Full Experience <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <ScrollReveal variant="slideUp">
      <ServicesCarousel services={services} />
      </ScrollReveal>

      {/* Tools I Use */}
      <ScrollReveal variant="fadeUp">
      <ToolsSection />
      </ScrollReveal>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="fadeUp">
          <Parallax speed={-0.06} maxOffset={30}>
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 dark:text-white mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">What people say about working with me</p>
          </div>
          </Parallax>
          </ScrollReveal>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Community Involvement — compact */}
      <ScrollReveal variant="fadeUp">
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="w-4 h-4 text-orange-500" />
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">Community Involvement</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {[
              {
                name: 'Friends of Figma — Chennai',
                role: 'Volunteer',
                Logo: () => (
                  <svg viewBox="0 0 38 57" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" aria-label="Figma">
                    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
                    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/>
                    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/>
                    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
                    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/>
                  </svg>
                ),
              },
              {
                name: 'Notion Community — Chennai',
                role: 'Volunteer',
                Logo: () => (
                  <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" aria-label="Notion">
                    <rect width="24" height="24" rx="4" fill="#ffffff"/>
                    <path d="M5 5.2c.6.5 1 .6 2 .5l9.4-.6c.2 0 0-.2-.1-.2L14.9 3.7c-.3-.2-.7-.5-1.5-.4L4.3 4c-.2 0-.2.1-.1.2L5 5.2zm.5 2.1v9.9c0 .5.3.7.9.7l10.4-.6c.6 0 .7-.4.7-.8V6.7c0-.4-.2-.6-.5-.6l-10.9.7c-.4 0-.6.2-.6.5zm10.2.6c.1.3 0 .6-.3.6l-.5.1v7.3c-.4.2-.8.4-1.2.4-.6 0-.7-.2-1.1-.7l-3.5-5.5v5.3l1 .2s0 .6-.8.6l-2.2.1c-.1-.1 0-.5.3-.5l.6-.2V8.9l-.8-.1c-.1-.3.1-.8.6-.8l2.4-.2 3.3 5V8.4l-.8-.1c-.1-.4.2-.7.6-.7l2.4-.1z" fill="#000000"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-3 px-4 py-3 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900"
              >
                <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center flex-shrink-0">
                  <item.Logo />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-gray-900 dark:text-white truncate">{item.name}</p>
                  <p className="text-xs text-orange-600 dark:text-orange-400">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Photography Passion */}
      {typeof window !== 'undefined' && localStorage.getItem('photography-section-hidden') !== 'true' && (
        <PhotographySection />
      )}

      {/* Contact */}
      <ScrollReveal variant="scaleUp">
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-orange-500 to-red-600 text-white overflow-hidden relative">
        {/* Parallax decorative elements in contact */}
        <div
          className="absolute -top-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.08}px)`,
            willChange: 'transform',
            transition: 'transform 0.15s linear',
          }}
        ></div>
        <div
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * -0.06}px)`,
            willChange: 'transform',
            transition: 'transform 0.15s linear',
          }}
        ></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Parallax speed={-0.05} maxOffset={25}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 opacity-90">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
          </Parallax>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </Link>
          <div className="flex items-center justify-center gap-6 mt-8">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Footer */}
      <ScrollReveal variant="fadeUp" duration={0.5}>
      <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 dark:text-gray-400">© 2026 Pramod B. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </footer>
      </ScrollReveal>
    </div>
  );
}