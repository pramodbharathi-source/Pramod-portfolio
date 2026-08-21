import { motion } from 'motion/react';

/* ─── SVG Icons ─── */

const FigmaIcon = () => (
  <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="fig-red" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FF9580"/>
        <stop offset="100%" stopColor="#F24E1E"/>
      </radialGradient>
      <radialGradient id="fig-purple" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#C8A0FF"/>
        <stop offset="100%" stopColor="#A259FF"/>
      </radialGradient>
      <radialGradient id="fig-blue" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#6FD9FF"/>
        <stop offset="100%" stopColor="#1ABCFE"/>
      </radialGradient>
      <radialGradient id="fig-green" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#5FFFC2"/>
        <stop offset="100%" stopColor="#0ACF83"/>
      </radialGradient>
      <radialGradient id="fig-orange" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FFB380"/>
        <stop offset="100%" stopColor="#FF7262"/>
      </radialGradient>
      <filter id="fig-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#A259FF" floodOpacity="0.4"/>
      </filter>
    </defs>
    <g filter="url(#fig-shadow)">
      {/* Top-left: red */}
      <path d="M0 100 C0 55.8 36 20 80 20 L100 20 L100 100 L80 100 C36 100 0 144.2 0 100Z" fill="url(#fig-red)"/>
      {/* Bottom-left: purple */}
      <path d="M0 200 C0 155.8 36 120 80 120 L100 120 L100 200 L80 200 C36 200 0 244.2 0 200Z" fill="url(#fig-purple)"/>
      {/* Top: orange */}
      <path d="M100 20 L120 20 C164 20 200 55.8 200 100 C200 144.2 164 180 120 180 L100 180 Z" fill="url(#fig-orange)" transform="rotate(0)"/>
      {/* Bottom-right: green */}
      <path d="M100 120 L120 120 C164 120 200 155.8 200 200 L100 280 Z" fill="url(#fig-green)"/>
      {/* Center: blue circle */}
      <circle cx="150" cy="100" r="50" fill="url(#fig-blue)"/>
    </g>
  </svg>
);

const FigmaIcon3D = () => (
  <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="f1" cx="40%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FF9580"/>
        <stop offset="100%" stopColor="#F24E1E"/>
      </radialGradient>
      <radialGradient id="f2" cx="40%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#C8A0FF"/>
        <stop offset="100%" stopColor="#A259FF"/>
      </radialGradient>
      <radialGradient id="f3" cx="40%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#6FD9FF"/>
        <stop offset="100%" stopColor="#1ABCFE"/>
      </radialGradient>
      <radialGradient id="f4" cx="40%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#5FFFC2"/>
        <stop offset="100%" stopColor="#0ACF83"/>
      </radialGradient>
      <radialGradient id="f5" cx="40%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FFAA80"/>
        <stop offset="100%" stopColor="#FF7262"/>
      </radialGradient>
    </defs>
    {/* Red: top-left pill */}
    <path d="M100 20 Q100 20 80 20 Q36 20 36 65 Q36 110 80 110 L100 110 Z" fill="url(#f1)"/>
    {/* Purple: bottom-left pill */}
    <path d="M100 110 L80 110 Q36 110 36 155 Q36 200 80 200 Q124 200 124 155 L100 155 Z" fill="url(#f2)"/>
    {/* Orange: top-right pill */}
    <path d="M100 20 L120 20 Q164 20 164 65 Q164 110 120 110 L100 110 Z" fill="url(#f5)"/>
    {/* Green: bottom half */}
    <path d="M100 155 L124 155 Q124 200 100 210 Q76 200 76 155 Z" fill="url(#f4)"/>
    {/* Blue circle */}
    <circle cx="142" cy="65" r="44" fill="url(#f3)"/>
  </svg>
);

const NotionIcon = () => (
  <svg viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="notion-bg" x1="0" y1="0" x2="88" y2="88" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#2D2D2D"/>
        <stop offset="100%" stopColor="#111111"/>
      </linearGradient>
      <linearGradient id="notion-shine" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="white" stopOpacity="0.15"/>
        <stop offset="100%" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      <filter id="notion-glow">
        <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#000" floodOpacity="0.5"/>
      </filter>
    </defs>
    <rect width="88" height="88" rx="20" fill="url(#notion-bg)" filter="url(#notion-glow)"/>
    <rect width="88" height="44" rx="20" fill="url(#notion-shine)"/>
    {/* Notion N mark */}
    <path d="M20 22 C20 19.8 21.5 18 23.5 17.5 L56 14 C58.5 13.6 61 14.5 62.5 16.5 L67 22 C68.5 24 69 26.5 68.5 29 L62 68 C61.5 70.5 59.5 72.5 57 73 L30 76 C27 76.5 24 75 22.5 72.5 L19 66 C18 64 18 61.5 19 59.5 L20 22Z" fill="white"/>
    <path d="M28 25 L28 65 L34 65 L50 42 L50 65 L57 65 L57 25 L51 25 L35 48 L35 25 Z" fill="#111"/>
  </svg>
);

const ClaudeIcon = () => (
  <svg viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="claude-bg" x1="0" y1="0" x2="88" y2="88" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E8835A"/>
        <stop offset="100%" stopColor="#C96A3A"/>
      </linearGradient>
      <linearGradient id="claude-shine" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="white" stopOpacity="0.25"/>
        <stop offset="60%" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      <filter id="claude-glow">
        <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#D97757" floodOpacity="0.6"/>
      </filter>
    </defs>
    <rect width="88" height="88" rx="20" fill="url(#claude-bg)" filter="url(#claude-glow)"/>
    <rect width="88" height="50" rx="20" fill="url(#claude-shine)"/>
    {/* Anthropic / Claude mark — asterisk-like */}
    <g transform="translate(44,44)">
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
        <rect
          key={i}
          x="-4" y="-22" width="8" height="20" rx="4"
          fill="white" fillOpacity="0.9"
          transform={`rotate(${deg})`}
        />
      ))}
    </g>
  </svg>
);

const ChatGPTIcon = () => (
  <svg viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="gpt-bg" x1="0" y1="0" x2="88" y2="88" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1A1A1A"/>
        <stop offset="100%" stopColor="#0D0D0D"/>
      </linearGradient>
      <linearGradient id="gpt-shine" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="white" stopOpacity="0.1"/>
        <stop offset="100%" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      <filter id="gpt-glow">
        <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#10A37F" floodOpacity="0.4"/>
      </filter>
    </defs>
    <rect width="88" height="88" rx="20" fill="url(#gpt-bg)" filter="url(#gpt-glow)"/>
    <rect width="88" height="44" rx="20" fill="url(#gpt-shine)"/>
    {/* OpenAI logo */}
    <g transform="translate(44,44) scale(1.1)">
      <path d="M0-22 C12-22 22-12 22 0 C22 8 18 15 12 19 L12 26 L6 26 L6 19 C-2 22 -12 20 -18 13 C-24 6 -22-5 -16-13 C-10-21 0-22 0-22Z" fill="white" fillOpacity="0.15"/>
      <path d="M0-20 C10-20 20-10 20 0 C20 10 10 20 0 20 C-10 20 -20 10 -20 0 C-20-10 -10-20 0-20Z" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M-20 0 L20 0 M0-20 L0 20 M-14-14 L14 14 M14-14 L-14 14" stroke="white" strokeWidth="1.5" opacity="0.4"/>
    </g>
  </svg>
);

const FoFIcon = () => (
  <svg viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="fof-bg" x1="0" y1="0" x2="88" y2="88" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#222222"/>
        <stop offset="100%" stopColor="#0A0A0A"/>
      </linearGradient>
      <linearGradient id="fof-shine" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="white" stopOpacity="0.12"/>
        <stop offset="60%" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      <filter id="fof-glow">
        <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#F5C518" floodOpacity="0.4"/>
      </filter>
    </defs>
    <rect width="88" height="88" rx="20" fill="url(#fof-bg)" filter="url(#fof-glow)"/>
    <rect width="88" height="44" rx="20" fill="url(#fof-shine)"/>
    {/* Figma F shape in yellow */}
    <path d="M28 20 L28 68 L36 68 L36 48 L56 48 L56 40 L36 40 L36 28 L58 28 L58 20 Z" fill="#F5C518"/>
  </svg>
);

/* ─── Chip definitions ─── */

interface Chip {
  id: string;
  icon: React.ReactNode;
  // position relative to the hero right column container
  style: React.CSSProperties;
  tilt: string;
  floatY: number[];
  duration: number;
  delay: number;
  size: number;
}

const chips: Chip[] = [
  {
    id: 'figma',
    icon: <FigmaIcon3D />,
    style: { top: '2%', left: '5%' },
    tilt: 'perspective(700px) rotateX(10deg) rotateY(25deg) rotateZ(-10deg)',
    floatY: [0, -18, 0],
    duration: 3.6,
    delay: 0,
    size: 72,
  },
  {
    id: 'claude',
    icon: <ClaudeIcon />,
    style: { top: '6%', right: '2%' },
    tilt: 'perspective(700px) rotateX(8deg) rotateY(-20deg) rotateZ(8deg)',
    floatY: [0, -14, 0],
    duration: 3.2,
    delay: 0.5,
    size: 78,
  },
  {
    id: 'fof',
    icon: <FoFIcon />,
    style: { top: '42%', left: '-4%' },
    tilt: 'perspective(700px) rotateX(5deg) rotateY(22deg) rotateZ(-5deg)',
    floatY: [0, -16, 0],
    duration: 4.0,
    delay: 1.0,
    size: 66,
  },
  {
    id: 'chatgpt',
    icon: <ChatGPTIcon />,
    style: { bottom: '20%', right: '-2%' },
    tilt: 'perspective(700px) rotateX(12deg) rotateY(-18deg) rotateZ(6deg)',
    floatY: [0, -20, 0],
    duration: 3.4,
    delay: 0.8,
    size: 72,
  },
  {
    id: 'notion',
    icon: <NotionIcon />,
    style: { bottom: '6%', left: '15%' },
    tilt: 'perspective(700px) rotateX(15deg) rotateY(15deg) rotateZ(-12deg)',
    floatY: [0, -12, 0],
    duration: 2.8,
    delay: 1.4,
    size: 64,
  },
];

export function FloatingToolLogos() {
  return (
    <>
      {chips.map((chip) => (
        <motion.div
          key={chip.id}
          className="absolute z-20 hidden lg:block"
          style={{ ...chip.style, width: chip.size, height: chip.size }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 + chip.delay, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={{ y: chip.floatY }}
            transition={{ duration: chip.duration, repeat: Infinity, ease: 'easeInOut', delay: chip.delay }}
            style={{ transform: chip.tilt, filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.35))' }}
            className="w-full h-full"
          >
            {chip.icon}
          </motion.div>
        </motion.div>
      ))}
    </>
  );
}
