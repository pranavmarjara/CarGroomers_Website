import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface PhoneCardProps {
  number: string;
}

function PhoneCard({ number }: PhoneCardProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(number);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = number;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      toast({
        title: "Number Copied",
        description: `${number} has been copied to your clipboard.`,
      });
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Please try again or select the text manually.",
        variant: "destructive",
      });
    }
  };

  const handleCall = () => {
    window.location.href = `tel:${number.replace(/\D/g, "")}`;
  };

  const handleDoubleClick = () => {
    if (!/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      handleCopy();
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative group overflow-visible"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent/50 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <div className="relative bg-card border border-white/10 rounded-xl p-6 flex flex-col items-center gap-6 group-hover:border-accent/30 transition-colors">
        <div 
          className="text-2xl md:text-3xl font-black font-display tracking-tight text-white cursor-pointer select-all md:select-auto"
          onClick={() => {
            if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
              handleCall();
            }
          }}
          onDoubleClick={handleDoubleClick}
        >
          {number}
        </div>
        
        <div className="flex gap-4 w-full">
          <Button 
            onClick={handleCall}
            className="flex-1 bg-primary hover:bg-primary/90 text-white h-12 text-lg font-bold uppercase tracking-wider"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={handleCopy}
            className="h-12 w-12 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Check className="h-5 w-5 text-green-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Copy className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function BookingSection() {
  return (
    <section id="book-now" className="py-24 bg-background relative overflow-visible">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black font-display text-white mb-4 uppercase tracking-tighter">
            Book Your <span className="text-primary italic">Service</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground uppercase tracking-[0.2em]">
            Call us directly or copy the number
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PhoneCard number="+1 (780) 655-3757" />
          <PhoneCard number="+1 (780) 818-0211" />
        </div>
        
        <div className="mt-16 flex items-center justify-center gap-4 text-accent/60">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-accent/20 max-w-[100px]" />
          <Sparkles className="w-5 h-5" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-accent/20 max-w-[100px]" />
        </div>
      </div>
    </section>
  );
}

import { Sparkles } from "lucide-react";
