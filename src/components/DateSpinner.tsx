import { useState } from "react";
import { motion } from "framer-motion";

const dateIdeas = [
  "Movie Night 🎬",
  "Gaming Together 🎮",
  "Talking All Night 💬",
];

const DateSpinner = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setResult(null);
    const randomIdx = Math.floor(Math.random() * dateIdeas.length);
    // Calculate the exact rotation to land on the selected segment
    const segmentAngle = 360 / dateIdeas.length;
    // We want the selected segment to be at the top (0 degrees / 12 o'clock)
    // Each segment i starts at angle i * segmentAngle
    // To land on segment randomIdx, we need to rotate so that segment is at top
    const targetAngle = randomIdx * segmentAngle;
    // Add full rotations for visual effect, then rotate to position
    const newRotation = rotation + 1080 + (360 - targetAngle);
    setRotation(newRotation);

    setTimeout(() => {
      setResult(dateIdeas[randomIdx]);
      setSpinning(false);
    }, 3000);
  };

  const segmentAngle = 360 / dateIdeas.length;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative z-10">
      <motion.h2
        className="font-cursive text-3xl md:text-5xl text-primary-foreground text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
      >
        Date Night Spinner 🎡
      </motion.h2>

      <div className="relative w-56 h-56 md:w-72 md:h-72 mb-6">
        {/* Arrow pointer at top */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-2xl z-20">
          🔻
        </div>

        {/* Wheel */}
        <motion.div
          className="w-full h-full rounded-full shadow-romantic relative overflow-hidden border-4 border-cream/50"
          animate={{ rotate: rotation }}
          transition={{ duration: 3, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ transformOrigin: "center center" }}
        >
          {dateIdeas.map((idea, i) => {
            const startAngle = i * segmentAngle;
            const colors = [
              "hsl(340 85% 45%)",
              "hsl(350 80% 55%)",
              "hsl(15 80% 60%)",
            ];
            return (
              <div
                key={i}
                className="absolute inset-0"
                style={{
                  background: `conic-gradient(from ${startAngle}deg at 50% 50%, ${colors[i]} 0deg, ${colors[i]} ${segmentAngle}deg, transparent ${segmentAngle}deg)`,
                }}
              >
                <div
                  className="absolute inset-0 flex items-start justify-center"
                  style={{
                    transform: `rotate(${startAngle + segmentAngle / 2}deg)`,
                  }}
                >
                  <div className="mt-6 md:mt-8">
                    <span className="font-body text-xs md:text-sm font-bold text-primary-foreground drop-shadow-md">
                      {idea}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Center circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-cream shadow-glow flex items-center justify-center z-10">
              <span className="text-xl md:text-2xl">💕</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={spin}
        className="px-8 py-3 rounded-full gradient-romantic text-primary-foreground font-cursive text-lg md:text-xl shadow-romantic"
        whileTap={{ scale: 0.95 }}
        animate={spinning ? { scale: [1, 0.95, 1] } : {}}
        transition={{ repeat: spinning ? Infinity : 0, duration: 0.5 }}
      >
        {spinning ? "Spinning... 🎰" : "Spin the wheel! 🎯"}
      </motion.button>

      {result && (
        <motion.div
          className="mt-6 bg-cream/90 rounded-xl p-5 shadow-romantic text-center mx-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="font-body text-sm text-muted-foreground">Your next date:</p>
          <p className="font-cursive text-2xl text-rose-deep mt-1">{result}</p>
        </motion.div>
      )}
    </section>
  );
};

export default DateSpinner;
