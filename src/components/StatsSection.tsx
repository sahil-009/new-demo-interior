import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 23, suffix: "+", label: "Years Experience" },
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
          v: target, duration: 2, ease: "power2.out",
          onUpdate: () => setVal(Math.round(obj.v)),
        });
      },
      once: true,
    });
    return () => st.kill();
  }, [target]);

  return <span ref={ref}>{val}{suffix}</span>;
};

const StatsSection = () => (
  <section className="py-20 px-6 bg-background">
    <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 text-center">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col items-center gap-3 md:gap-4">
          <p className="font-sans text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground">
            <Counter target={s.value} suffix={s.suffix} />
          </p>
          <p className="text-[10px] md:text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;
