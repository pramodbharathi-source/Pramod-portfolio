import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const tools = [
  {
    name: "Figma",
    category: "Design Tool",
    icon: (
      <svg width="32" height="32" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
      </svg>
    ),
    bgColor: "bg-white dark:bg-gray-800",
  },
  {
    name: "Photoshop",
    category: "Design Tool",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-[#001E36] flex items-center justify-center">
        <span className="text-[#31A8FF] text-sm" style={{ fontWeight: 700 }}>Ps</span>
      </div>
    ),
    bgColor: "bg-[#001E36]",
    noBg: true,
  },
  {
    name: "Illustrator",
    category: "Design Tool",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-[#330000] flex items-center justify-center">
        <span className="text-[#FF9A00] text-sm" style={{ fontWeight: 700 }}>Ai</span>
      </div>
    ),
    bgColor: "bg-[#330000]",
    noBg: true,
  },
  {
    name: "Framer",
    category: "Website Maker",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-white">
        <path d="M4 0h16v8H12l8 8H12v8l-8-8V0z"/>
      </svg>
    ),
    bgColor: "bg-black dark:bg-gray-800",
  },
  {
    name: "Miro",
    category: "Productivity Tool",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-[#FFD02F] flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M17.4 2H15.2L17.6 7.6L12.8 2H10.6L15 9.2L8.6 2H6.4L12.4 10.8L4.2 2H2L12 22L22 2H17.4Z" fill="#050038"/>
        </svg>
      </div>
    ),
    bgColor: "bg-[#FFD02F]",
    noBg: true,
  },
  {
    name: "Premiere Pro",
    category: "Video Editing Software",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-[#00005B] flex items-center justify-center">
        <span className="text-[#9999FF] text-sm" style={{ fontWeight: 700 }}>Pr</span>
      </div>
    ),
    bgColor: "bg-[#00005B]",
    noBg: true,
  },
];

export function ToolsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-gray-900 dark:text-white mb-4">
            Tools I Use <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Mostly</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">The design toolkit that powers my creative workflow</p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.15 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-700 hover:shadow-lg transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110 [&>svg]:w-8 [&>svg]:h-8 [&>div]:w-full [&>div]:h-full [&>div]:rounded-xl ${
                  tool.noBg ? '' : tool.bgColor
                }`}
              >
                {tool.icon}
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-sm text-gray-900 dark:text-white">
                  {tool.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">
                  {tool.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}