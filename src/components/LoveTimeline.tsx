import { motion } from "framer-motion";

const milestones = [
  { date: "May  16th 2024", title: "First Meeting ✨", desc: "The moment everything changed" },
  { date: "August 4th 2024", title: "First 'I Love You' 💕", desc: "Three words, infinite meaning" },
  { date: "October 8th 2024", title: "First Call 📞", desc: "We listened to our voices and had a great talk on call" },
  { date: "August 22th 2024", title: "Asiya's Birthday 🥳", desc: "My Favorite Person's Birthday" },
  { date: "October 8th 2024", title: "Our First Movie 🎥", desc: "The Tunnel to Summer, the Exit of Goodbyes -Our first movie together" },
  { date: "May 12th 2025", title: "The day we stopped talking 🫠", desc: "We both stop talking to each other" },
  { date: "June 27th 2025", title: "The day we talked again 🥰", desc: "I love my Asiya, we both got to talk with eacother again" },
];

const LoveTimeline = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative z-10">
      <motion.h2
        className="font-cursive text-3xl md:text-5xl text-primary-foreground text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
      >
        Our Love Story 📖
      </motion.h2>

      <div className="relative max-w-sm md:max-w-lg w-full">
        {/* Vertical line */}
        <div className="absolute left-5 md:left-8 top-0 bottom-0 w-0.5 bg-cream/50" />

        {milestones.map((ms, i) => (
          <motion.div
            key={i}
            className="flex gap-3 md:gap-6 mb-6 relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12 }}
          >
            {/* Dot */}
            <div className="w-10 md:w-16 flex-shrink-0 flex items-start justify-center pt-2">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full gradient-romantic shadow-glow z-10" />
            </div>
            {/* Card */}
            <div className="bg-cream/90 backdrop-blur-sm rounded-xl p-3 md:p-5 shadow-card flex-1">
              <span className="font-body text-[10px] md:text-xs text-muted-foreground">{ms.date}</span>
              <h3 className="font-cursive text-base md:text-xl text-rose-deep mt-0.5">{ms.title}</h3>
              <p className="font-body text-xs md:text-sm text-foreground mt-0.5">{ms.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LoveTimeline;
