import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-display font-bold text-xl">
            M
          </div>
          <span className="text-xl font-display font-bold tracking-tight">Marja</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Marketplace</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Sell a Site</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Valuation</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Resources</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost">Log in</Button>
          <Button>Get Started</Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b bg-background"
          >
            <div className="container mx-auto flex flex-col gap-4 p-4">
              <a href="#" className="text-lg font-medium">Marketplace</a>
              <a href="#" className="text-lg font-medium">Sell a Site</a>
              <a href="#" className="text-lg font-medium">Valuation</a>
              <a href="#" className="text-lg font-medium">Resources</a>
              <hr />
              <div className="flex flex-col gap-2">
                <Button variant="outline" className="w-full">Log in</Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
