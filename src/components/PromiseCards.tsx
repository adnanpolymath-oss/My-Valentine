import { useState } from "react";
import { motion } from "framer-motion";

const promises = [
  { front: "🤗", back: "I promise to always hold you tight" },
  { front: "🌹", back: "I promise to surprise you with love" },
  { front: "👂", back: "I promise to always listen to you" },
  { front: "😂", back: "I promise to make you laugh every day" },
  { front: "🛡️", back: "I promise to protect your heart" },
  { front: "🌟", back: "I promise to support all your dreams" },
  { front: "🫂", back: "I promise unlimited hugs and kisses" },
  { front: "♾️", back: "I promise to love you forever" },
];

const PromiseCards = () => {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const toggleFlip = (i: number) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative z-10">
      <motion.h2
        className="font-cursive text-3xl md:text-5xl text-primary-foreground text-center mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
      >
        My Promises To You 🤞
      </motion.h2>
      <motion.p
        className="font-body text-primary-foreground/80 text-center mb-8 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ textShadow: "0 1px 4px rgba(0,0,0,0.2)" }}
      >
        Tap each card to reveal ✨
      </motion.p>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 max-w-sm md:max-w-3xl mx-auto w-full">
        {promises.map((promise, i) => (
          <motion.div
            key={i}
            className="cursor-pointer"
            style={{ perspective: 1000 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            onClick={() => toggleFlip(i)}
          >
            <motion.div
              className="relative w-full h-28 md:h-40"
              animate={{ rotateY: flipped.has(i) ? 180 : 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 bg-cream rounded-xl shadow-card flex items-center justify-center"
                style={{ backfaceVisibility: "hidden" }}
              >
                <span className="text-3xl md:text-4xl">{promise.front}</span>
              </div>
              {/* Back */}
              <div
                className="absolute inset-0 gradient-romantic rounded-xl shadow-romantic flex items-center justify-center p-3"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <p className="font-cursive text-xs md:text-base text-primary-foreground text-center leading-tight">
                  {promise.back}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {flipped.size === promises.length && (
        <motion.p
          className="font-cursive text-lg text-primary-foreground mt-6 text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
        >
          You found all my promises! 💗
        </motion.p>
      )}
    </section>
  );
};

export default PromiseCards;
