import { useState } from "react";
import { motion } from "framer-motion";

const questions = [
  {
    q: "What's my favorite way to spend time with you?",
    options: ["Movie night 🎬", "Long walks 🚶", "Cooking together 🍳", "Anything with You 🤗"],
    answer: 3,
  },
  {
    q: "What do I love most about you?",
    options: ["Your smile 😊", "Your kindness 💛", "Everything 💕", "Your humor 😂"],
    answer: 2,
  },
  {
    q: "What's my favorite melody?",
    options: ["Your Voice 🎵", "Perfect - Ed Sheeran 🎶", "All of Me 🎤", "Can't Help Falling in Love 💙"],
    answer: 0,
  },
  {
    q: "Where do I want to travel with you?",
    options: ["Paris 🗼", "Maldives 🏝️", "Everywhere! 🌍", "Anywhere with you 💝"],
    answer: 3,
  },
];

const LoveQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const handleSelect = (optionIndex: number) => {
    if (selected !== null) return;
    setSelected(optionIndex);
    if (optionIndex === questions[current].answer) {
      setScore((s) => s + 1);
    }
    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent((c) => c + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 1200);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative z-10">
      <motion.h2
        className="font-cursive text-3xl md:text-5xl text-primary-foreground text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
      >
        Love Quiz 💘
      </motion.h2>

      {!finished ? (
        <motion.div
          key={current}
          className="bg-cream/90 backdrop-blur-sm rounded-2xl p-5 md:p-10 max-w-sm w-full shadow-romantic mx-4"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <p className="font-body text-xs text-muted-foreground mb-2">
            Question {current + 1}/{questions.length}
          </p>
          <h3 className="font-cursive text-xl md:text-2xl text-rose-deep mb-5">
            {questions[current].q}
          </h3>
          <div className="space-y-2">
            {questions[current].options.map((opt, i) => {
              let bg = "bg-card";
              if (selected !== null) {
                if (i === questions[current].answer) bg = "bg-green-100";
                else if (i === selected) bg = "bg-red-100";
              }
              return (
                <motion.button
                  key={i}
                  className={`w-full text-left p-3 md:p-4 rounded-xl font-body text-sm md:text-base text-foreground ${bg} shadow-sm transition-colors`}
                  onClick={() => handleSelect(i)}
                  whileTap={{ scale: 0.97 }}
                >
                  {opt}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="bg-cream/90 backdrop-blur-sm rounded-2xl p-6 md:p-12 max-w-sm text-center shadow-romantic mx-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring" }}
        >
          <span className="text-5xl md:text-6xl block mb-3">
            {score === questions.length ? "🏆" : score >= 2 ? "🥰" : "😘"}
          </span>
          <h3 className="font-cursive text-2xl md:text-3xl text-rose-deep mb-2">
            {score}/{questions.length} correct!
          </h3>
          <p className="font-body text-sm md:text-base text-foreground">
            {score === questions.length
              ? "You know me so well! 💗"
              : score >= 2
              ? "Pretty good! You're learning 💕"
              : "We have so much to discover together! 💝"}
          </p>
          <motion.button
            className="mt-5 px-5 py-2 rounded-full gradient-romantic text-primary-foreground font-cursive text-base shadow-romantic"
            onClick={() => { setCurrent(0); setScore(0); setSelected(null); setFinished(false); }}
            whileTap={{ scale: 0.95 }}
          >
            Play Again 🔄
          </motion.button>
        </motion.div>
      )}
    </section>
  );
};

export default LoveQuiz;
