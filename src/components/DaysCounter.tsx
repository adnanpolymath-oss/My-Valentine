import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DaysCounter = () => {
  const startDate = new Date("2024-08-04"); // Change to your actual date
  const [elapsed, setElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      setElapsed({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: elapsed.days },
    { label: "Hours", value: elapsed.hours },
    { label: "Minutes", value: elapsed.minutes },
    { label: "Seconds", value: elapsed.seconds },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative z-10">
      <motion.h2
        className="font-cursive text-3xl md:text-5xl text-primary-foreground text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
      >
        Falling in love for...
      </motion.h2>

      <div className="flex gap-2 md:gap-6 mt-4">
        {units.map((unit, i) => (
          <motion.div
            key={unit.label}
            className="bg-cream/90 backdrop-blur-sm rounded-xl p-3 md:p-6 text-center shadow-card min-w-[65px] md:min-w-[100px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <motion.span
              key={unit.value}
              className="font-cursive text-2xl md:text-5xl text-rose-deep block"
              initial={{ scale: 1.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {unit.value}
            </motion.span>
            <span className="font-body text-[10px] md:text-sm text-muted-foreground mt-1 block">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="font-cursive text-lg md:text-xl text-primary-foreground mt-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ textShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
      >
        ...and counting every beautiful second 💕
      </motion.p>
    </section>
  );
};

export default DaysCounter;
