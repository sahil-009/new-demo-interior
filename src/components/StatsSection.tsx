import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 12, suffix: "+", label: "Years of Excellence" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 350, suffix: "+", label: "Happy Clients" },
  { value: 25, suffix: "", label: "Design Awards" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obj = { v: 0 };
    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      onEnter: () => {
        gsap.to(obj, {
          v: target, duration: 2.5, ease: "power2.out",
          onUpdate: () => setVal(Math.round(obj.v)),
        });
      },
      once: true,
    });
    return () => st.kill();
  }, [target]);

  return <span ref={ref}>{val}{suffix}</span>;
};

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".stat-item",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%" }
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-12 bg-[#0F0F0F] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s, i) => (
            <div key={s.label} className="stat-item flex flex-col items-center gap-4 text-center relative group">
              {/* Vertical divider (not on first) */}
              {i > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10"></div>
              )}
              <p className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white">
                <Counter target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] text-white/40 uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
