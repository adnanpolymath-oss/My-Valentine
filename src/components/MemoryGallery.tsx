import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import memory4 from "@/assets/memory-4.jpg";
import memory5 from "@/assets/memory-5.jpg";
import memory6 from "@/assets/memory-6.jpg";

const memories = [
  { src: memory1, caption: "Us in Minecraft 🎮" },
  { src: memory2, caption: "Lovely Hand 🫳" },
  { src: memory3, caption: "My Asiya's Autograph 🫣" },
  { src: memory4, caption: "Most Beautiful Girl 🥺" },
  { src: memory5, caption: "Cutie (cuteness overload)😘" },
  { src: memory6, caption: "Prettiest and Perfect Girl 🫠" },
];

const MemoryGallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (selected === null) return;
    setSelected((selected + dir + memories.length) % memories.length);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative z-10">
      <motion.h2
        className="font-cursive text-3xl md:text-5xl text-primary-foreground text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
      >
        Our Memories 📸
      </motion.h2>

      {/* Grid - 2 columns on mobile, 3 on desktop */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 max-w-lg md:max-w-3xl mx-auto w-full">
        {memories.map((memory, i) => (
          <motion.div
            key={i}
            className="relative cursor-pointer overflow-hidden rounded-xl shadow-card aspect-square"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelected(i)}
          >
            <img
              src={memory.src}
              alt={memory.caption}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Always visible caption on mobile */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-2 md:p-3">
              <p className="font-cursive text-primary-foreground text-xs md:text-sm leading-tight">
                {memory.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cream/20 flex items-center justify-center text-primary-foreground"
              onClick={() => setSelected(null)}
              whileTap={{ scale: 0.9 }}
            >
              <X size={20} />
            </motion.button>

            <motion.button
              className="absolute left-2 md:left-4 w-10 h-10 rounded-full bg-cream/20 flex items-center justify-center text-primary-foreground z-10"
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.div
              key={selected}
              className="max-w-sm md:max-w-lg w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={memories[selected].src}
                alt={memories[selected].caption}
                className="w-full rounded-xl shadow-romantic"
              />
              <p className="font-cursive text-lg text-primary-foreground text-center mt-4"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
                {memories[selected].caption}
              </p>
            </motion.div>

            <motion.button
              className="absolute right-2 md:right-4 w-10 h-10 rounded-full bg-cream/20 flex items-center justify-center text-primary-foreground z-10"
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MemoryGallery;
