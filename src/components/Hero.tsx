import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=2070" 
          alt="Sale Background" 
          className="h-full w-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border bg-background/50 px-3 py-1 text-sm font-medium backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>$12.4M+ in assets sold this month</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 text-4xl font-display font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Own your next <br />
          <span className="text-amber-500">digital empire.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Marja is the premier marketplace for high-value websites, SaaS, and digital assets. 
          Vetted listings, secure escrow, and expert support for every transaction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button size="lg" className="h-12 px-8 text-base">
            Browse Marketplace <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base">
            Sell Your Website
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-medium">Vetted Listings</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-medium">Fast Transfers</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-medium">Global Reach</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-medium">Secure Escrow</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
