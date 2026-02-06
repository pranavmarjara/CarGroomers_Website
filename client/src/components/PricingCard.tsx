import { motion } from "framer-motion";
import { Check, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";

interface PricingItem {
  name: string;
  price: string;
  features?: string[];
}

interface PricingCardProps {
  title: string;
  items: PricingItem[];
  featured?: boolean;
}

export function PricingCard({ title, items, featured = false }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`relative rounded-2xl overflow-hidden h-full flex flex-col ${
        featured 
          ? "bg-gradient-to-b from-card to-background border-2 border-primary shadow-2xl shadow-primary/20" 
          : "bg-card border border-white/10"
      }`}
    >
      {featured && (
        <div className="bg-primary text-white text-center py-2 text-sm font-bold uppercase tracking-widest">
          Most Popular
        </div>
      )}

      <div className="p-8 flex-grow">
        <h3 className={`text-2xl font-bold mb-6 font-display uppercase tracking-wider ${featured ? 'text-primary' : 'text-white'}`}>
          {title}
        </h3>

        <div className="space-y-6">
          {items.map((item, idx) => (
            <div key={idx} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
              <div className="flex justify-between items-baseline mb-2">
                <span className="font-semibold text-lg text-foreground">{item.name}</span>
                <span className={`text-xl font-bold ${featured ? 'text-white' : 'text-primary'}`}>
                  {item.price}
                </span>
              </div>
              {item.features && (
                <ul className="space-y-2 mt-2">
                  {item.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mr-2 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 pt-0 mt-auto">
        <ScrollLink to="book-now" smooth={true} duration={800} offset={-80}>
          <Button 
            className={`w-full h-12 text-lg uppercase tracking-wider font-bold shadow-lg hover-gold-shimmer ${
              featured 
                ? 'bg-primary hover:bg-primary/90 text-white' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <PhoneCall className="mr-2 w-5 h-5" />
            Book Now
          </Button>
        </ScrollLink>
      </div>
    </motion.div>
  );
}
