import { motion } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export function ServiceCard({ title, description, icon: Icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative p-8 rounded-2xl bg-card border border-white/5 hover:border-accent/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 p-4 rounded-xl bg-primary/10 w-fit group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
        </div>
        
        <h3 className="text-2xl font-bold mb-3 text-white font-display uppercase tracking-wide group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        <ScrollLink to="book-now" smooth={true} duration={800} offset={-80} className="cursor-pointer">
          <div className="flex items-center text-sm font-bold uppercase tracking-wider text-white group-hover:text-primary transition-colors">
            View Plans <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </ScrollLink>
      </div>
    </motion.div>
  );
}
