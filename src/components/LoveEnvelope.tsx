import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoveEnvelope = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10">
      <motion.p
        className="font-cursive text-xl md:text-3xl text-primary-foreground mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{ textShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
      >
        You have a special message...
      </motion.p>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            className="cursor-pointer flex flex-col items-center"
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, rotateY: 90 }}
            transition={{ type: "spring", duration: 0.6 }}
          >
            {/* Simple envelope */}
            <div className="w-56 h-40 md:w-72 md:h-48 relative">
              {/* Envelope body */}
              <div className="absolute inset-0 bg-cream rounded-lg shadow-romantic overflow-hidden">
                {/* Envelope flap triangle */}
                <div
                  className="absolute top-0 left-0 right-0 h-1/2"
                  style={{
                    clipPath: "polygon(0 0, 50% 60%, 100% 0)",
                    background: "linear-gradient(180deg, hsl(30 50% 90%), hsl(30 50% 94%))",
                    borderBottom: "2px solid hsl(30 40% 85%)",
                  }}
                />
                {/* Bottom V shape */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-full"
                  style={{
                    clipPath: "polygon(0 100%, 50% 40%, 100% 100%)",
                    background: "hsl(30 50% 93%)",
                  }}
                />
              </div>
              {/* Heart seal */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.span
                  className="text-4xl"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  💌
                </motion.span>
              </div>
            </div>
            <motion.p
              className="font-cursive text-base md:text-lg text-primary-foreground mt-4 text-center"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
            >
              Tap to open 💕
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            className="bg-cream rounded-2xl p-6 md:p-10 max-w-sm mx-4 shadow-romantic"
            initial={{ opacity: 0, scale: 0.3, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            <h2 className="font-cursive text-2xl md:text-4xl text-rose-deep text-center mb-4">
              My Dearest ❤️
            </h2>
            <p className="font-body text-foreground leading-relaxed text-center text-sm md:text-base">
              I am really the luckiest boy because I get to meet you and love you, My Asiya ❤️.
              You are my baby, my wife, my darling, my Everything. I really love you alot and I am so grateful to have you in my life.
              You are the best thing that has ever happened to me, and I promise to cherish and love you.
              I love you more than words could ever express.
            </p>
            <p className="font-cursive text-lg md:text-xl text-rose-deep text-center mt-5">
              Forever & Always yours, My Asiya 💗
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LoveEnvelope;
