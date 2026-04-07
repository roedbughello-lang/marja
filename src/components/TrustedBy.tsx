import { motion } from "motion/react";

const logos = [
  "DigitalOcean", "Stripe", "Escrow.com", "Shopify", "Cloudflare", "Vercel"
];

export default function TrustedBy() {
  return (
    <section className="py-12 border-b bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Trusted by founders and investors worldwide
        </p>
        <div className="mt-8 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
          {logos.map((logo, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-xl font-display font-bold"
            >
              {logo}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
