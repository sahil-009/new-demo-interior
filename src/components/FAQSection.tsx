import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How long does a typical interior design project take?", a: "Project timelines vary based on scope and complexity. A standard residential project typically takes 8–16 weeks from concept to completion. We provide a detailed timeline during the initial consultation." },
  { q: "Do you work on projects outside of Hyderabad?", a: "Yes, we take on projects across India. Our team is experienced in managing remote projects with regular site visits and virtual updates to ensure quality at every stage." },
  { q: "What is your design fee structure?", a: "Our fees are tailored to each project based on scope, size, and requirements. We offer transparent pricing with no hidden costs. Contact us for a personalised quote during your consultation." },
  { q: "Can you work with existing furniture and layouts?", a: "Absolutely. We often integrate existing pieces into new designs. Our goal is to create a cohesive space that honours what you already love while introducing fresh elements." },
];

const FAQSection = () => (
  <section className="py-24 md:py-36 px-6">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground border border-border px-4 py-1.5 rounded-full mb-6">
          FAQ
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-light">Common Questions</h2>
      </div>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/50">
            <AccordionTrigger className="font-serif text-lg font-light hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
