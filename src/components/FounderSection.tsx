import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FounderSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".founder-anim",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="founder-anim w-full md:w-1/2 aspect-square md:aspect-[4/5] bg-muted rounded-3xl overflow-hidden relative">
          <img
            src="/public/founder-side.jpg"
            alt="Founder"
            className="w-full h-full object-cover"
          />
          {/* Glassmorphism Card Overlay */}
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 w-[calc(100%-3rem)] md:w-auto md:max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center shadow-2xl z-10">
            <div className="flex-1 space-y-4 md:space-y-6">
              <p className="text-white/95 text-[10px] md:text-sm leading-relaxed font-medium">
                Curating environments that blend personal narratives with sophisticated design, our bespoke interiors capture the true spirit of refined living.
              </p>
              <button className="bg-black text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full text-[10px] md:text-xs font-semibold tracking-wider hover:bg-black/80 transition-colors uppercase">
                View More ↗
              </button>
            </div>
            <div className="relative w-full md:w-32 h-20 md:h-24 rounded-xl overflow-hidden shrink-0 border border-white/30 shadow-inner">
              <video
                src="/public/video-founder.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/20 cursor-pointer pointer-events-none">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white pl-1 border border-white/50">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="founder-anim w-full md:w-1/2 flex flex-col items-start text-left">
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">About the Founder</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium tracking-tight mb-8">
            Designing spaces that tell your unique story.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8">
            With a passion for aesthetics and functional design, we strive to bring spaces to life. Our approach is deeply personal, ensuring that every project reflects the true essence of its inhabitants.
          </p>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-lg text-foreground">Founder Name</span>
            <span className="text-sm text-muted-foreground">Founder and CEO</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
