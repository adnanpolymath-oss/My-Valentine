import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Using a royalty-free romantic instrumental as placeholder
    // Replace the src with your preferred audio file
    const audio = new Audio();
    // Blue by Yung Kai instrumental - user should replace with their own audio file
    audio.src = "https://soundcloud.com/rukateto/blue-yung-kai-piano-cover?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    if (isMuted) {
      audioRef.current.play().catch(() => {
        // Autoplay blocked, user needs to tap
      });
    } else {
      audioRef.current.pause();
    }
    setIsMuted(!isMuted);
  };

  return (
    <motion.button
      onClick={toggleMute}
      className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full gradient-romantic flex items-center justify-center shadow-romantic text-primary-foreground"
      whileTap={{ scale: 0.9 }}
      animate={isMuted ? {} : { scale: [1, 1.1, 1] }}
      transition={{ repeat: isMuted ? 0 : Infinity, duration: 1.5 }}
      aria-label={isMuted ? "Unmute music" : "Mute music"}
    >
      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
    </motion.button>
  );
};

export default MusicPlayer;
