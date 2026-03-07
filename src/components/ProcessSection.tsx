import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processes = [
  {
    num: "01",
    title: "Discovery",
    desc: "We begin with deep listening understanding your lifestyle, aspirations, and the stories you want your space to tell."
  },
  {
    num: "02",
    title: "Design",
    desc: "Translating your vision into comprehensive design concepts, mood boards, and detailed 3D spatial visualizations."
  },
  {
    num: "03",
    title: "Execution",
    desc: "Our master craftsmen and project managers bring the design to life with unparalleled attention to detail."
  },
  {
    num: "04",
    title: "Handover",
    desc: "The final reveal—a fully realized space where every element is perfected and ready for you to enjoy."
  }
];

const ProcessSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".process-item",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%" }
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Decorative subtle background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F9F8F6] rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-24 process-item flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-primary/40"></span>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/80">How We Work</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground tracking-tight leading-[1.1]">
              Our Process
            </h2>
          </div>
          <p className="text-foreground/60 max-w-sm text-base md:text-lg font-sans font-light leading-relaxed">
            A seamless, curated journey from initial concept to the final, breathtaking reality of your space.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {processes.map((p, i) => (
            <div 
              key={i} 
              className="process-item group relative bg-[#F9F8F6] p-10 lg:p-12 rounded-[2rem] overflow-hidden transition-all duration-500 hover:bg-foreground hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Big background number */}
              <span className="absolute -top-4 -right-4 text-[120px] font-serif font-bold text-black/5 group-hover:text-white/5 transition-colors duration-500 pointer-events-none select-none">
                {p.num}
              </span>
              
              <div className="relative z-10 flex flex-col h-full">
                <span className="text-sm font-semibold tracking-wider text-primary mb-12 group-hover:text-white/70 transition-colors duration-500">
                  Step {p.num}
                </span>
                <h3 className="text-2xl font-serif text-foreground mb-4 group-hover:text-white transition-colors duration-500">
                  {p.title}
                </h3>
                <p className="text-foreground/60 text-sm md:text-base font-sans font-light leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
