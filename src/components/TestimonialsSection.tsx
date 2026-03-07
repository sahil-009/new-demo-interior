import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    author: "Aditya & family",
    role: "Homeowner",
    quote: "RU Interior Design paid attention to the smallest details. The space feels calm, functional, and timeless. We couldn't have asked for a better experience."
  },
  {
    author: "Vikash and Rupali",
    role: "Homeowner",
    quote: "RU Interior Design paid attention to the smallest details. The space feels calm, functional, and timeless. We couldn't have asked for a better experience."
  },
  {
    author: "Rupesh and family",
    role: "Architect & Homeowner",
    quote: "As an architect myself, I'm incredibly selective. INTERIOR exceeded every expectation. Their craftsmanship and vision are truly world-class."
  }
];

const TestimonialsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".test-anim",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%" }
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-secondary/10">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 test-anim">
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground block mb-2">Voices of Trust</span>
          <h2 className="text-4xl md:text-5xl font-sans font-medium">Client Stories</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="test-anim bg-background p-10 rounded-2xl shadow-sm border border-border/40 flex flex-col justify-between">
              <div>
                <span className="text-5xl font-serif text-muted-foreground/30 leading-none block mb-4">"</span>
                <p className="text-foreground/80 leading-relaxed font-serif italic mb-8">
                  {t.quote}
                </p>
              </div>
              <div className="border-t border-border pt-6 mt-auto">
                <span className="block font-semibold text-sm">{t.author}</span>
                <span className="block text-xs text-muted-foreground mt-1">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
