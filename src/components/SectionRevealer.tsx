import { useState, useEffect, useRef, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface SectionRevealerProps {
  children: ReactNode[];
}

const SectionRevealer = ({ children }: SectionRevealerProps) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  const markCompleted = () => {
    setCompleted((prev) => new Set(prev).add(currentSection));
  };

  const goNext = () => {
    if (currentSection < children.length - 1) {
      markCompleted();
      setCurrentSection((prev) => prev + 1);
      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isLast = currentSection === children.length - 1;

  return (
    <div ref={containerRef} className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="min-h-screen flex flex-col"
        >
          <div className="flex-1">{children[currentSection]}</div>

          {!isLast && (
            <motion.div
              className="flex justify-center pb-8 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.button
                onClick={goNext}
                className="flex flex-col items-center gap-1 text-primary-foreground font-cursive text-lg"
                whileTap={{ scale: 0.95 }}
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
              >
                <span>Continue</span>
                <ChevronDown size={24} />
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
        {children.map((_, i) => (
          <motion.div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentSection
                ? "bg-primary-foreground scale-125"
                : i < currentSection
                ? "bg-primary-foreground/50"
                : "bg-primary-foreground/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionRevealer;
