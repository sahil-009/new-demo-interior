import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { quote: "company transformed our home into something we could never have imagined. Every corner speaks elegance and warmth. Their attention to detail is unmatched.", name: "Aditya & Family", role: "Residential Client, Hyderabad" },
  { quote: "Working with the company team was a seamless experience. They understood our lifestyle perfectly and delivered a space that feels both luxurious and deeply personal.", name: "Vikash & Rupali", role: "Villa Project, Bangalore" },
  { quote: "From concept to completion, the professionalism and creative vision were extraordinary. Our commercial space now truly reflects our brand's identity.", name: "Rupesh & Family", role: "Commercial Client, Mumbai" },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (quoteRef.current) {
      gsap.fromTo(quoteRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
    }
  }, [active]);

  return (
    <section ref={ref} className="py-24 md:py-36 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground border border-border px-4 py-1.5 rounded-full mb-10">
          Client Stories
        </span>
        <div ref={quoteRef} className="min-h-[250px] flex flex-col items-center justify-center">
          <p className="font-serif text-2xl md:text-4xl font-light leading-relaxed italic text-foreground mb-10">
            "{testimonials[active].quote}"
          </p>
          <p className="font-medium text-foreground">{testimonials[active].name}</p>
          <p className="text-sm text-muted-foreground mt-1">{testimonials[active].role}</p>
        </div>
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? "bg-primary w-8" : "bg-primary/30"}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
