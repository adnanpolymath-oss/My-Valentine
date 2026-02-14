import { useEffect, useState } from "react";

const hearts = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  size: Math.random() * 20 + 10,
  delay: Math.random() * 10,
  duration: Math.random() * 8 + 8,
  opacity: Math.random() * 0.4 + 0.2,
}));

const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute animate-float-up text-primary"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            opacity: heart.opacity,
          }}
        >
          ❤
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
