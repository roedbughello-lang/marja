import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-display font-bold text-xl">
                M
              </div>
              <span className="text-xl font-display font-bold tracking-tight">Marja</span>
            </div>
            <p className="mt-6 max-w-sm text-muted-foreground">
              The premier marketplace for high-value digital assets. We help entrepreneurs find their next big idea and founders achieve life-changing exits.
            </p>
            <div className="mt-8 flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider text-xs">Marketplace</h4>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">All Listings</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">SaaS</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">E-commerce</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Content Sites</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Apps</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider text-xs">Stay Updated</h4>
            <p className="mt-6 text-sm text-muted-foreground">
              Get the latest listings and market insights delivered to your inbox.
            </p>
            <form className="mt-4 flex gap-2">
              <Input placeholder="Email address" className="max-w-[240px]" />
              <Button type="submit">Join</Button>
            </form>
          </div>
        </div>
        <div className="mt-24 border-t pt-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 Marja Marketplace Inc. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
