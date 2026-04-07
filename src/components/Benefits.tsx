import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Vetted Listings",
    description: "Every listing undergoes a rigorous verification process to ensure traffic and revenue data is accurate.",
  },
  {
    title: "Secure Transactions",
    description: "We partner with industry-leading escrow services to protect both buyers and sellers throughout the deal.",
  },
  {
    title: "Expert Support",
    description: "Our team of M&A experts is available to help with valuation, negotiation, and technical transfers.",
  },
  {
    title: "Post-Sale Guidance",
    description: "Get access to resources and tools to help you grow your new acquisition from day one.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-display font-bold tracking-tight md:text-5xl">
              The safest way to buy and sell digital assets.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Whether you're looking to acquire your first SaaS or exit a multi-million dollar portfolio, 
              Marja provides the infrastructure and expertise you need for a successful transaction.
            </p>
            <div className="mt-10 grid gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-500" />
                  <div>
                    <h3 className="font-bold">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square overflow-hidden rounded-3xl bg-muted"
          >
            <img
              src="https://picsum.photos/seed/business/1000/1000"
              alt="Business growth"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border bg-background/50 p-6 backdrop-blur-md">
              <p className="text-lg font-medium italic">
                "Marja made the acquisition of TravelPulse seamless. Their due diligence process gave us the confidence we needed to close the deal in record time."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20" />
                <div>
                  <div className="font-bold">Jamin Sironel</div>
                  <div className="text-xs text-muted-foreground">CEO, Digital Ventures Group</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
