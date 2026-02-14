import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";

const LoveNotes = () => {
  const [notes, setNotes] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addNote = () => {
    if (!input.trim()) return;
    setNotes((prev) => [...prev, input.trim()]);
    setInput("");
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative z-10">
      <motion.h2
        className="font-cursive text-3xl md:text-5xl text-primary-foreground text-center mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
      >
        Leave a Love Note 💌
      </motion.h2>
      <p className="font-body text-primary-foreground/80 text-center mb-6 text-sm"
        style={{ textShadow: "0 1px 4px rgba(0,0,0,0.2)" }}>
        Write something sweet...
      </p>

      <div className="flex gap-2 w-full max-w-sm">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addNote()}
          placeholder="I love you because..."
          className="flex-1 px-4 py-3 rounded-full bg-cream/90 text-foreground font-body text-sm shadow-card outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
        />
        <motion.button
          onClick={addNote}
          className="w-11 h-11 rounded-full gradient-romantic flex items-center justify-center shadow-romantic text-primary-foreground flex-shrink-0"
          whileTap={{ scale: 0.9 }}
        >
          <Send size={16} />
        </motion.button>
      </div>

      <div className="flex flex-wrap gap-2 mt-6 max-w-sm justify-center">
        <AnimatePresence>
          {notes.map((note, i) => (
            <motion.div
              key={i}
              className="bg-cream/90 rounded-xl px-3 py-2 shadow-card font-body text-xs text-foreground"
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: Math.random() * 6 - 3 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              💕 {note}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LoveNotes;
