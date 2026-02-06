import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", to: "services" },
    { name: "Pricing", to: "pricing" },
    { name: "About", to: "about" },
    { name: "Contact", to: "contact" },
    { name: "Book Now", to: "book-now" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <ScrollLink to="hero" smooth={true} duration={800} className="cursor-pointer z-50">
          <h1 className="text-2xl md:text-3xl font-black font-display tracking-tighter italic">
            <span className="text-white">CAR</span>
            <span className="text-primary">GROOMERS</span>
          </h1>
        </ScrollLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={800}
              offset={-80}
              className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-white cursor-pointer transition-colors nav-underline"
            >
              {link.name}
            </ScrollLink>
          ))}
          <ScrollLink to="book-now" smooth={true} duration={800} offset={-80}>
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider shadow-lg shadow-primary/20">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </ScrollLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-background flex flex-col items-center justify-center space-y-8 md:hidden"
            >
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold uppercase tracking-widest text-white hover:text-primary cursor-pointer transition-colors"
                >
                  {link.name}
                </ScrollLink>
              ))}
              <ScrollLink to="book-now" smooth={true} duration={800} offset={-80} onClick={() => setIsOpen(false)}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider mt-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Now
                </Button>
              </ScrollLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
