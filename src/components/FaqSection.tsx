import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "What interior design services do you offer?",
    a: "We offer a comprehensive range of design services including space planning, concept design, 3D visualization, material selection, and full execution for residential and commercial spaces."
  },
  {
    q: "Do you handle both design and execution?",
    a: "Yes, we provide end-to-end turnkey solutions. Our team handles everything from the initial design concept through to the complete execution and final handover."
  },
  {
    q: "How long does an interior project take?",
    a: "The timeline varies based on the scope and complexity of the project. A typical residential project can take anywhere from 8 to 16 weeks from design approval to final handover."
  },
  {
    q: "How do I get started?",
    a: "You can start by contacting us through our website, calling our direct lines, or visiting our studio. We'll schedule an initial consultation to understand your requirements."
  },
  {
    q: "Need to know more about our services?",
    a: "Feel free to reach out to our team at any time or explore our detailed services section on the website. We're always happy to answer any specific questions you might have."
  }
];

const FaqSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".faq-anim",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%" }
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-secondary/10">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-16 faq-anim">
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground block mb-2">Common Questions</span>
          <h2 className="text-4xl md:text-5xl font-sans font-medium">Frequently Asked Questions</h2>
        </div>
        
        <div className="faq-anim">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline hover:text-primary transition-colors py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
