import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoveQuestion = () => {
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);
  const [noCount, setNoCount] = useState(0);

  const noMessages = [
    "Are you sure? 🥺",
    "Really really sure? 😢",
    "Think again... 💔",
    "Please? 🥹",
    "I'll be sad... 😭",
    "You're breaking my heart 💔",
    "Last chance... 🙏",
    "Okay fine... just kidding, try again! 😄",
  ];

  const handleNo = () => {
    setNoCount((prev) => Math.min(prev + 1, noMessages.length - 1));
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative z-10">
      <AnimatePresence mode="wait">
        {answer === "yes" ? (
          <motion.div
            key="yes"
            className="text-center px-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
            <motion.span
              className="text-7xl md:text-8xl block mb-4"
              animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              🥰
            </motion.span>
            <h2 className="font-cursive text-3xl md:text-6xl text-primary-foreground"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
              Yay! I love you! 💗
            </h2>
            <motion.div className="flex justify-center gap-2 mt-4">
              {["❤️", "💕", "💗", "💖", "💝"].map((heart, i) => (
                <motion.span
                  key={i}
                  className="text-2xl md:text-3xl"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                >
                  {heart}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div key="question" className="text-center px-4">
            <motion.h2
              className="font-cursive text-2xl md:text-5xl text-primary-foreground mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
            >
              Will you be my Valentine? 💝
            </motion.h2>

            {noCount > 0 && (
              <motion.p
                key={noCount}
                className="font-body text-base md:text-lg text-cream mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {noMessages[noCount - 1]}
              </motion.p>
            )}

            <div className="flex gap-4 justify-center mt-6">
              <motion.button
                className="px-6 md:px-8 py-3 rounded-full gradient-romantic text-primary-foreground font-cursive text-lg md:text-xl shadow-romantic"
                onClick={() => setAnswer("yes")}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: 1 + noCount * 0.08 }}
              >
                Yes! 💕
              </motion.button>
              <motion.button
                className="px-6 md:px-8 py-3 rounded-full bg-cream text-rose-deep font-cursive text-lg md:text-xl shadow-card"
                onClick={handleNo}
                whileTap={{ scale: 0.85 }}
                animate={{ scale: Math.max(1 - noCount * 0.08, 0.4) }}
              >
                No 😅
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LoveQuestion;
