import FloatingHearts from "@/components/FloatingHearts";
import MusicPlayer from "@/components/MusicPlayer";
import LoveEnvelope from "@/components/LoveEnvelope";
import MemoryGallery from "@/components/MemoryGallery";
import DaysCounter from "@/components/DaysCounter";
import ReasonsCarousel from "@/components/ReasonsCarousel";
import PromiseCards from "@/components/PromiseCards";
import LoveQuiz from "@/components/LoveQuiz";
import DateSpinner from "@/components/DateSpinner";
import LoveTimeline from "@/components/LoveTimeline";
import LoveNotes from "@/components/LoveNotes";
import VirtualHug from "@/components/VirtualHug";
import LoveQuestion from "@/components/LoveQuestion";
import SectionRevealer from "@/components/SectionRevealer";

const Index = () => {
  return (
    <div className="min-h-screen gradient-sunset overflow-x-hidden no-scrollbar">
      <FloatingHearts />
      <MusicPlayer />

      <SectionRevealer>
        <LoveEnvelope />
        <DaysCounter />
        <ReasonsCarousel />
        <MemoryGallery />
        <LoveTimeline />
        <PromiseCards />
        <LoveQuiz />
        <VirtualHug />
        <DateSpinner />
        <LoveNotes />
        <LoveQuestion />
      </SectionRevealer>

      {/* Footer */}
      <footer className="text-center py-8 relative z-10">
        <p className="font-cursive text-xl md:text-2xl text-primary-foreground"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
          Made with all my love, for you 💗
        </p>
      </footer>
    </div>
  );
};

export default Index;
