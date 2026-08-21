import { useRef, useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

import imgGroup     from '../../imports/WhatsApp_Image_2026-08-16_at_9.06.50_AM.jpeg';
import imgAudience  from '../../imports/WhatsApp_Image_2026-08-16_at_8.56.37_AM.jpeg';
import imgPresent   from '../../imports/WhatsApp_Image_2026-08-16_at_9.02.46_AM.jpeg';
import imgBadge     from '../../imports/IMG_3642.JPG';
import imgConvo     from '../../imports/A7_02594.JPG';
import imgSpeaking  from '../../imports/A7_02814.JPG';
import imgScreen    from '../../imports/A7_02812.JPG';
import imgNotes     from '../../imports/A7_02818.JPG';
import imgNotebook  from '../../imports/A7_02448.JPG';

// Landscape: Group, Convo, Notes, Notebook  → wide cells (col-span-2 or more)
// Portrait:  Audience, Present, Badge, Speaking, Screen → narrow cells (col-span-1)
//
// 4-col grid, 4 rows
// Row 1 (240px):  Group(4)
// Row 2 (340px):  Convo(2) | Audience(1) | Present(1)
// Row 3 (280px):  Notes(2) | Badge(1) | Speaking(1)
// Row 4 (300px):  Screen(1) | Notebook(3)

const photos = [
  { id: 1, src: imgGroup,    alt: 'Friends of Figma Chennai — group photo',     pos: 'object-center' },
  { id: 2, src: imgConvo,    alt: 'Conversation at the event',                  pos: 'object-center' },
  { id: 3, src: imgAudience, alt: 'Presenting to the audience',                 pos: 'object-center' },
  { id: 4, src: imgPresent,  alt: 'Speaking with mic in front of projector',    pos: 'object-center' },
  { id: 5, src: imgNotes,    alt: 'Event sketchbook notes',                     pos: 'object-center' },
  { id: 6, src: imgBadge,    alt: 'Friends of Figma Chennai badge',             pos: 'object-center' },
  { id: 7, src: imgSpeaking, alt: 'Presenting at the event',                    pos: 'object-center' },
  { id: 8, src: imgScreen,   alt: 'Demo at the screen',                         pos: 'object-center' },
  { id: 9, src: imgNotebook, alt: 'MCP Build Design notes',                     pos: 'object-center' },
];

const bentoClasses: Record<number, string> = {
  1: 'col-start-1 col-end-5 row-start-1 row-end-2',   // Group — full width
  2: 'col-start-1 col-end-3 row-start-2 row-end-3',   // Convo — landscape 2-col
  3: 'col-start-3 col-end-4 row-start-2 row-end-3',   // Audience — portrait 1-col
  4: 'col-start-4 col-end-5 row-start-2 row-end-3',   // Present — portrait 1-col
  5: 'col-start-1 col-end-3 row-start-3 row-end-4',   // Notes — landscape 2-col
  6: 'col-start-3 col-end-4 row-start-3 row-end-4',   // Badge — portrait 1-col
  7: 'col-start-4 col-end-5 row-start-3 row-end-4',   // Speaking — portrait 1-col
  8: 'col-start-1 col-end-2 row-start-4 row-end-5',   // Screen — portrait 1-col
  9: 'col-start-2 col-end-5 row-start-4 row-end-5',   // Notebook — landscape 3-col
};

export function PhotographySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = () => setLightboxIndex(null);
  const lightboxNav = (dir: 'prev' | 'next') => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      dir === 'next'
        ? (lightboxIndex + 1) % photos.length
        : (lightboxIndex - 1 + photos.length) % photos.length
    );
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full border-2 border-orange-500/40"
              />
            </div>
            <span className="text-sm text-orange-500 tracking-widest uppercase">Beyond Design</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-3">
            Through My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Lens
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg">
            Moments, events, and stories captured in frames.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
          style={{ gridTemplateRows: '240px 340px 280px 300px' }}
        >
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer ${bentoClasses[photo.id]}`}
              onClick={() => setLightboxIndex(i)}
            >
              <ImageWithFallback
                src={photo.src}
                alt={photo.alt}
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${photo.pos}`}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-sm p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={photos[lightboxIndex].src}
                alt={photos[lightboxIndex].alt}
                className="w-full max-h-[82vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white/50 text-sm">{lightboxIndex + 1} / {photos.length}</p>
              </div>
              <button
                onClick={() => lightboxNav('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => lightboxNav('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
