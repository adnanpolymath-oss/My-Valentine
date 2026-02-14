import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reasons = [
  { emoji: "😊", text: "Your smile lights up my entire world" },
  { emoji: "🤗", text: "The way you talk comfort me the most" },
  { emoji: "😂", text: "Your laugh is my favorite sound" },
  { emoji: "💪", text: "You make me want to be a better person" },
  { emoji: "🌙", text: "Even silence with you feels like a conversation" },
  { emoji: "😘", text: "The little things you do for me every day" },
  { emoji: "👀", text: "The way you look at me like I'm your whole world" },
  { emoji: "🤝", text: "You always believe in me, even when I don't" },
  { emoji: "🫠", text: "Your name makes my heart melt" },
  { emoji: "∞", text: "I could give a million reasons and still have more" },
];

const ReasonsCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + reasons.length) % reasons.length);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative z-10">
      <motion.h2
        className="font-cursive text-3xl md:text-5xl text-primary-foreground text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
      >
        Reasons I Love You 💖
      </motion.h2>

      <div className="relative w-full max-w-sm md:max-w-md mx-auto">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 150 : -150 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -150 : 150 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-cream/90 backdrop-blur-sm rounded-2xl p-6 md:p-10 text-center shadow-romantic"
          >
            <span className="text-5xl md:text-6xl block mb-3">{reasons[index].emoji}</span>
            <p className="font-cursive text-lg md:text-2xl text-rose-deep">
              #{index + 1}
            </p>
            <p className="font-body text-base md:text-xl text-foreground mt-2">
              {reasons[index].text}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-6 mt-6">
          <motion.button
            onClick={() => paginate(-1)}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cream/80 flex items-center justify-center shadow-card text-rose-deep"
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={20} />
          </motion.button>
          <span className="font-body text-sm text-primary-foreground self-center"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}>
            {index + 1} / {reasons.length}
          </span>
          <motion.button
            onClick={() => paginate(1)}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cream/80 flex items-center justify-center shadow-card text-rose-deep"
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ReasonsCarousel;
