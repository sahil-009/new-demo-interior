const Footer = () => (
  <footer className="py-20 px-4 md:px-8 lg:px-12 bg-[#0A0A0A] text-white">
    <div className="max-w-[1400px] mx-auto flex flex-col gap-20">

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="max-w-2xl flex flex-col gap-8 lg:pt-8">
          <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Engage with Us in<br />Conversation.
          </h2>
          <p className="text-[#A1A1A1] text-xs md:text-sm font-medium leading-relaxed max-w-md">
            In a global world based on communication, a brand must look beyond its borders, opening up to new experiences, and dare to be different. Meeting the brightest minds of one's time is the most effective way to nurture creativity.
          </p>
        </div>

        <div className="w-full lg:w-[500px] h-[250px] md:h-[300px] rounded-2xl overflow-hidden shrink-0">
          <img
            src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=80"
            alt="Dark interior styling"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 border-t border-white/10 pt-16">

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 w-full lg:w-3/4">
          <div className="flex flex-col gap-5">
            <h4 className="text-white text-xs md:text-sm font-semibold tracking-wider">About</h4>
            <div className="flex flex-col gap-3">
              {["Our Story", "Store Locator", "Sustainability", "Careers", "Contact"].map((l) => (
                <a key={l} href="#" className="text-[#888888] hover:text-white transition-colors text-[10px] md:text-xs font-medium">
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-white text-xs md:text-sm font-semibold tracking-wider">Customer Service</h4>
            <div className="flex flex-col gap-3">
              {["Prices and Payments", "Shipping", "Return Policy", "Terms of Service", "Privacy Policy"].map((l) => (
                <a key={l} href="#" className="text-[#888888] hover:text-white transition-colors text-[10px] md:text-xs font-medium">
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-white text-xs md:text-sm font-semibold tracking-wider">Social Media</h4>
            <div className="flex flex-col gap-3">
              {["Instagram", "Facebook", "LinkedIn"].map((l) => (
                <a key={l} href="#" className="text-[#888888] hover:text-white transition-colors text-[10px] md:text-xs font-medium">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-auto flex justify-start lg:justify-end">
          <span className="font-sans text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tighter text-white">
            company name
          </span>
        </div>

      </div>
    </div>
  </footer>
);

export default Footer;
