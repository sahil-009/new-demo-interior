import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-title",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-card",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full px-4 lg:px-8 pt-24 pb-12 flex justify-center bg-background">
      <div className="relative w-full max-w-[1400px] h-[85vh] min-h-[600px] rounded-[2rem] overflow-hidden shadow-2xl">
        {/* Main Background Image */}
        <img
          src="/assests-heroSection/hero.jpg"
          alt="Luxury contemporary interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Huge Centered Typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="hero-title font-sans text-5xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-bold text-white tracking-tighter drop-shadow-lg">
            Contemporary
          </h1>
        </div>

        {/* Bottom Left Glassmorphism Card */}
        <div className="hero-card absolute bottom-6 left-6 md:bottom-10 md:left-10 w-[calc(100%-3rem)] md:w-auto md:max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center shadow-2xl">
          <div className="flex-1 space-y-6">
            <p className="text-white/95 text-xs md:text-sm leading-relaxed font-medium">
              Crafting spaces that harmonize modern aesthetics with timeless elegance, our contemporary interior designs breathe life into every room, redefining the essence of chic living.
            </p>
            <button className="bg-black text-white px-6 py-2.5 rounded-full text-[10px] md:text-xs font-semibold tracking-wider hover:bg-black/80 transition-colors uppercase">
              View More ↗
            </button>
          </div>
          <div className="relative w-full md:w-56 h-36 rounded-2xl overflow-hidden shrink-0 hidden md:block border border-white/30 shadow-inner">
            <video
              src="/assests-heroSection/redesign-this-image-with-enhanced-color-grading-fo.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/20 cursor-pointer pointer-events-none">
              <div className="w-12 h-12 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white pl-1 border border-white/50">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
