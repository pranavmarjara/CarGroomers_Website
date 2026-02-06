import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { PricingCard } from "@/components/PricingCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { BookingSection } from "@/components/BookingSection";
import { Button } from "@/components/ui/button";
import { Shield, Sparkles, Car, Layers, MapPin, Mail, Phone, Calendar } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/60 z-10" />
          {/* Detailed dark car close-up */}
          <img 
            src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Car Detail" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-20 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-bold uppercase tracking-[0.3em] mb-4 text-sm md:text-lg">
              Est. 2024 • Beaumont, Canada
            </h2>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black font-display italic tracking-tighter mb-6 leading-none">
              <span className="text-white drop-shadow-2xl">CAR</span>
              <span className="text-primary drop-shadow-[0_0_30px_rgba(139,0,0,0.5)]">GROOMERS</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
              Premium Automotive Protection & Detailing. <br className="hidden md:block"/>
              <span className="text-white font-medium">Elevating your vehicle's aesthetic to perfection.</span>
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <ScrollLink to="book-now" smooth={true} duration={800} offset={-80} className="w-full md:w-auto">
                <Button size="lg" className="w-full md:w-auto min-w-[200px] h-[48px] md:h-14 text-lg font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25 border border-primary hover-gold-shimmer">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </Button>
              </ScrollLink>
              <ScrollLink to="book-now" smooth={true} duration={800} offset={-80} className="w-full md:w-auto">
                <Button size="lg" variant="outline" className="w-full md:w-auto min-w-[200px] h-[48px] md:h-14 text-lg font-bold uppercase tracking-wider bg-transparent border-2 border-white/20 text-white hover:bg-white hover:text-black hover:border-white backdrop-blur-sm">
                  <Calendar className="mr-2 w-5 h-5" />
                  Get Quote
                </Button>
              </ScrollLink>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white z-20 hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent mx-auto" />
          <span className="text-[10px] uppercase tracking-widest mt-2 block opacity-50">Scroll</span>
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="gold-separator absolute top-0 left-0" />
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Services" 
            subtitle="Meticulous attention to detail combined with industry-leading products to protect and enhance your investment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              title="Window Tint"
              description="Premium ceramic films that block 99% of UV rays, reduce heat, and provide privacy."
              icon={Shield}
              delay={0.1}
            />
            <ServiceCard 
              title="Paint Protection"
              description="Self-healing PPF technology to defend against rock chips, scratches, and road debris."
              icon={Layers}
              delay={0.2}
            />
            <ServiceCard 
              title="Ceramic Coating"
              description="Advanced nano-ceramic coatings providing unmatched gloss and hydrophobic protection."
              icon={Sparkles}
              delay={0.3}
            />
            <ServiceCard 
              title="Detailing"
              description="Comprehensive interior and exterior restoration services to bring back that showroom feel."
              icon={Car}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-16 md:py-24 bg-card/30 relative border-y border-white/5">
        <div className="gold-separator absolute top-0 left-0" />
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Pricing Packages" 
            subtitle="Transparent pricing for premium results. Custom packages available upon request."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Featured Combo Plan - Takes up full column height */}
            <div className="lg:col-span-3 mb-8">
              <PricingCard
                title="The Ultimate Protection Package"
                featured={true}
                items={[
                  {
                    name: "Full Vehicle Protection",
                    price: "$999*",
                    features: [
                      "Premium Ceramic Window Tint (All Windows)",
                      "Partial Front Paint Protection Film (PPF)",
                      "3-Year Ceramic Coating Application",
                      "Full Interior & Exterior Detail",
                      "Engine Bay Detail"
                    ]
                  }
                ]}
              />
            </div>

            {/* Other Plans */}
            <div className="h-full">
              <PricingCard
                title="Window Tinting"
                items={[
                  { name: "Basic Carbon", price: "$199" },
                  { name: "Standard Ceramic", price: "$299" },
                  { name: "Premium Ceramic", price: "$399" },
                  { name: "Ultimate IR Block", price: "$499" },
                ]}
              />
            </div>

            <div className="h-full">
              <PricingCard
                title="Ceramic Coating"
                items={[
                  { name: "1 Year Sport", price: "$299" },
                  { name: "3 Year Pro", price: "$599" },
                  { name: "5 Year Platinum", price: "$899" },
                  { name: "Lifetime Warranty", price: "$1299" },
                ]}
              />
            </div>

            <div className="h-full">
              <PricingCard
                title="Paint Protection Film"
                items={[
                  { name: "Partial Front", price: "$499" },
                  { name: "Full Front End", price: "$899" },
                  { name: "Track Package", price: "$1299" },
                  { name: "Full Body", price: "$2499+" },
                ]}
              />
            </div>
          </div>
          
          {/* Detailing separate row */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <PricingCard
                title="Detailing Services"
                items={[
                  { name: "Interior Only", price: "$149" },
                  { name: "Exterior Only", price: "$149" },
                  { name: "Full Detail", price: "$249" },
                  { name: "Showroom Prep", price: "$399" },
                ]}
              />
             <div className="flex items-center justify-center p-8 border border-white/5 border-dashed rounded-2xl bg-card/20">
               <div className="text-center">
                 <h3 className="text-2xl font-bold text-muted-foreground mb-2">More Services Coming Soon</h3>
                 <p className="text-sm text-muted-foreground/60">Wrap services, paint correction, and more.</p>
               </div>
             </div>
           </div>
           
           <p className="text-center text-muted-foreground text-sm mt-8 italic">* Prices are starting estimates and may vary based on vehicle size and condition.</p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 md:py-24 bg-background relative">
        <div className="gold-separator absolute top-0 left-0" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black font-display text-white mb-8 uppercase tracking-wide">
                Driven by <span className="text-primary">Perfection</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  At CarGroomers, we don't just wash cars; we curate automotive excellence. Located in Beaumont, Alberta, we specialize in high-end protection and aesthetic restoration.
                </p>
                <p>
                  Our team consists of certified installers passionate about preserving the beauty of your vehicle. We use only top-tier products from industry leaders to ensure your investment is shielded against the harsh Canadian elements.
                </p>
                <p>
                  Whether it's a daily driver needing a refresh or a supercar requiring full-body protection, we treat every vehicle with the same level of meticulous care and respect.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="p-4 bg-card border-l-4 border-primary">
                  <h4 className="font-bold text-white text-xl mb-1">Certified</h4>
                  <p className="text-sm text-muted-foreground">Professional Installers</p>
                </div>
                <div className="p-4 bg-card border-l-4 border-primary">
                  <h4 className="font-bold text-white text-xl mb-1">Insured</h4>
                  <p className="text-sm text-muted-foreground">Full coverage protection</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 border-2 border-primary/30 rounded-lg translate-x-4 translate-y-4 -z-10" />
              {/* Mechanic polishing car */}
              <img 
                src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=2070&auto=format&fit=crop" 
                alt="Detailing Process" 
                className="rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 md:py-24 bg-card border-t border-white/5">
        <div className="gold-separator absolute top-0 left-0" />
        <div className="container mx-auto px-4">
          <SectionHeader title="Get In Touch" subtitle="Ready to transform your vehicle? Contact us today." />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 uppercase">Location</h4>
                  <p className="text-muted-foreground">
                    132 Rue Montalet<br />
                    Beaumont, Alberta, Canada
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 uppercase">Phone</h4>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+17806553757" className="text-muted-foreground hover:text-white transition-colors">
                      +1 (780) 655-3757
                    </a>
                    <a href="tel:+17808180211" className="text-muted-foreground hover:text-white transition-colors">
                      +1 (780) 818-0211
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 uppercase">Email</h4>
                  <a href="mailto:cargroomers1@gmail.com" className="text-muted-foreground hover:text-white transition-colors">
                    cargroomers1@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="w-full h-64 bg-background rounded-xl border border-white/10 overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-muted-foreground">Map View Loading...</p>
                </div>
                {/* Embed a simple static map image or iframe if desired, using a placeholder for now */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <span className="text-white font-bold uppercase tracking-widest border-2 border-white px-4 py-2">View on Google Maps</span>
                </div>
                <a 
                  href="https://maps.google.com/?q=132+Rue+Montalet,+Beaumont,+AB" 
                  target="_blank" 
                  rel="noreferrer"
                  className="absolute inset-0 z-10"
                />
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <BookingSection />
      
      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-background/90 backdrop-blur-md border-t border-primary/20 p-4 z-40 flex gap-4 md:hidden">
        <ScrollLink to="book-now" smooth={true} duration={800} offset={-80} className="flex-1">
          <Button className="w-full h-12 bg-primary text-white font-bold uppercase tracking-wider">
            <Phone className="mr-2 h-5 w-5" />
            Book Now
          </Button>
        </ScrollLink>
      </div>

      {/* FOOTER */}
      <footer className="py-8 bg-black border-t border-white/10 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-black font-display italic tracking-tighter mb-4 text-white/50">
            CAR<span className="text-primary/50">GROOMERS</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} CarGroomers. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
