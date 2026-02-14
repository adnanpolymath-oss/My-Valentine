import { useState } from "react";
import { motion } from "framer-motion";

const VirtualHug = () => {
  const [hugging, setHugging] = useState(false);
  const [hugCount, setHugCount] = useState(0);

  const startHug = () => {
    setHugging(true);
    setHugCount((c) => c + 1);
  };

  const endHug = () => {
    setHugging(false);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative z-10">
      <motion.h2
        className="font-cursive text-3xl md:text-5xl text-primary-foreground text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
      >
        Virtual Hug 🤗
      </motion.h2>

      <motion.div
        className="cursor-pointer select-none touch-none"
        onPointerDown={startHug}
        onPointerUp={endHug}
        onPointerLeave={endHug}
        onPointerCancel={endHug}
        animate={hugging ? { scale: 1.2 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <div className="relative">
          <motion.span
            className="text-[100px] md:text-[140px] block"
            animate={hugging ? { rotate: [0, -5, 5, -5, 5, 0] } : {}}
            transition={{ repeat: hugging ? Infinity : 0, duration: 0.5 }}
          >
            🫂
          </motion.span>
          {hugging && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute text-xl"
                  initial={{ opacity: 1, x: 0, y: 0 }}
                  animate={{
                    opacity: 0,
                    x: (Math.random() - 0.5) * 120,
                    y: (Math.random() - 0.5) * 120,
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                  style={{ left: "50%", top: "50%" }}
                >
                  ❤️
                </motion.span>
              ))}
            </>
          )}
        </div>
      </motion.div>

      <p className="font-body text-primary-foreground/80 text-center mt-3 text-sm"
        style={{ textShadow: "0 1px 4px rgba(0,0,0,0.2)" }}>
        {hugging ? "Sending love... 💗" : "Press and hold for a hug!"}
      </p>

      {hugCount > 0 && (
        <motion.p
          className="font-cursive text-base text-primary-foreground mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.2)" }}
        >
          {hugCount} hug{hugCount !== 1 ? "s" : ""} sent! 🤗
        </motion.p>
      )}
    </section>
  );
};

export default VirtualHug;
