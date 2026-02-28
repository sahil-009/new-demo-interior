import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", title: "Discovery", desc: "We listen to your vision, understand your lifestyle, and define the project scope through in-depth consultation." },
  { num: "02", title: "Design", desc: "Our team develops detailed concepts, mood boards, 3D visualisations, and material selections tailored to you." },
  { num: "03", title: "Execution", desc: "Expert craftsmen bring designs to life with precision, quality materials, and meticulous project management." },
  { num: "04", title: "Handover", desc: "We ensure every detail is perfect before handing over your beautifully transformed space, ready to live in." },
];

const ProcessSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".process-step").forEach((el, i) => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, delay: i * 0.15, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground border border-border px-4 py-1.5 rounded-full mb-6">
            How We Work
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light">Our Process</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-primary/20" />
          {steps.map((s) => (
            <div key={s.num} className="process-step opacity-0 text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-primary/30 mb-6 mx-auto md:mx-0">
                <span className="font-serif text-xl text-primary">{s.num}</span>
              </div>
              <h3 className="font-serif text-2xl font-light mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
