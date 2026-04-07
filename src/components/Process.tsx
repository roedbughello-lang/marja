import { motion } from "motion/react";
import { Search, MessageSquare, Shield, RefreshCw } from "lucide-react";

const steps = [
  {
    title: "Browse & Discover",
    description: "Explore our curated marketplace of vetted digital assets and find the perfect fit for your goals.",
    icon: Search,
  },
  {
    title: "Negotiate & Due Diligence",
    description: "Connect with sellers directly, review financials, and verify traffic through our secure platform.",
    icon: MessageSquare,
  },
  {
    title: "Secure Escrow",
    description: "Funds are held in a secure escrow account until the asset transfer is fully completed and verified.",
    icon: Shield,
  },
  {
    title: "Seamless Transfer",
    description: "Our experts guide you through the technical handover of domains, hosting, and accounts.",
    icon: RefreshCw,
  },
];

export default function Process() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold tracking-tight md:text-5xl">How Marja Works</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            We've streamlined the entire acquisition process to make buying and selling digital assets as simple as possible.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              {index < steps.length - 1 && (
                <div className="absolute top-10 left-1/2 hidden h-px w-full bg-slate-800 lg:block" />
              )}
              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
                <step.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mt-8 text-xl font-bold">{step.title}</h3>
              <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
