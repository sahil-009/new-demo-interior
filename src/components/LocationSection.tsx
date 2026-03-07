import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const LocationSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".loc-anim",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%" }
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 loc-anim">
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground block mb-2">Location</span>
          <h2 className="text-4xl md:text-5xl font-sans font-medium">Visit Our Studio</h2>
          <p className="text-muted-foreground mt-4 text-sm md:text-base">We welcome you to experience our design philosophy in person.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Contact Info & Form */}
          <div className="loc-anim flex flex-col gap-10">
            <div>
              <h3 className="text-2xl font-medium mb-6">Contact Us</h3>
              <div className="space-y-4 text-muted-foreground text-sm md:text-base">
                <p>
                  <strong className="text-foreground block mb-1">Jainam Decor</strong>
                  No. 238/1, Balaraju Building<br/>
                  17th, Begur Rd<br/>
                  Near St Francis School, Amalodhbhava Nagar<br/>
                  Begur, Bengaluru, Karnataka 560068
                </p>
                <div className="flex flex-col gap-1 mt-4">
                  <a href="tel:+919581017161" className="hover:text-foreground transition-colors">+91 9581017161</a>
                  <a href="tel:+918431473987" className="hover:text-foreground transition-colors">+91 8431473987</a>
                </div>
              </div>
            </div>

            <div className="bg-secondary/20 p-8 rounded-2xl">
              <h3 className="text-xl font-medium mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <Input placeholder="Your Name" className="bg-background" />
                <Input placeholder="Your Email" type="email" className="bg-background" />
                <Input placeholder="Phone Number" type="tel" className="bg-background" />
                <Textarea placeholder="How can we help you?" className="bg-background min-h-[120px]" />
                <Button className="w-full mt-2">Submit Request</Button>
              </form>
            </div>
          </div>

          {/* Right: Map */}
          <div className="loc-anim h-[400px] lg:h-full min-h-[500px] bg-muted rounded-3xl overflow-hidden relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.075777377628!2d73.89202231059296!3d18.525477482496324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1fd5f3cf5b7%3A0xb844f0a6650d55fe!2sJainam%20Decors!5e0!3m2!1sen!2sin!4v1772867646977!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
