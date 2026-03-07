import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    title: "Living Spaces",
    desc: "Transform your living room into a sanctuary of comfort and sophistication, where every element speaks to your lifestyle."
  },
  {
    num: "02",
    title: "Modular Kitchens",
    desc: "Culinary spaces that blend functionality with aesthetics, designed for the modern epicurean."
  },
  {
    num: "03",
    title: "Bedrooms",
    desc: "Intimate retreats crafted for rest and rejuvenation, balancing serenity with personal expression."
  },
  {
    num: "04",
    title: "Wardrobes",
    desc: "Custom storage solutions that celebrate organization while adding architectural beauty to your space."
  },
  {
    num: "05",
    title: "Bathrooms",
    desc: "Spa-inspired sanctuaries that transform daily rituals into moments of luxury and calm."
  },
  {
    num: "06",
    title: "Custom Furniture",
    desc: "Bespoke pieces designed and crafted to perfectly match your space and functional requirements."
  }
];

const ServicesGridSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".svc-item",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%" }
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#F9F8F6]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20 svc-item flex flex-col items-center">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/80 mb-4 block">Our Services</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground tracking-tight">What We Create</h2>
          <div className="w-16 h-[1px] bg-foreground/20 mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((s, i) => (
            <div key={i} className="svc-item group flex flex-col pt-6 relative">
              {/* Top Border with hover animation */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-border transition-all duration-500 overflow-hidden">
                <div className="w-full h-full bg-foreground transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              </div>
              
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-sm font-semibold tracking-wider text-primary/70">{s.num}</span>
                <h3 className="text-2xl lg:text-3xl font-serif text-foreground transition-colors duration-300">{s.title}</h3>
              </div>
              <p className="text-foreground/70 leading-relaxed text-sm md:text-base font-light">
                {s.desc}
              </p>
              
              <div className="mt-8 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-xs font-semibold uppercase tracking-wider text-foreground">
                <span className="mr-2">Explore</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGridSection;
