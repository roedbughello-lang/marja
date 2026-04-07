import { Check, X } from "lucide-react";
import { motion } from "motion/react";

const features = [
  { name: "Vetted Financials", marja: true, others: false },
  { name: "Secure Escrow Integration", marja: true, others: true },
  { name: "Post-Sale Support", marja: true, others: false },
  { name: "Expert Valuation Tools", marja: true, others: false },
  { name: "Verified Traffic Data", marja: true, others: "Partial" },
  { name: "Legal Contract Templates", marja: true, others: true },
];

export default function Comparison() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold tracking-tight md:text-5xl">Why Marja?</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            See how we compare to traditional marketplaces and private brokers.
          </p>
        </div>

        <div className="mt-16 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b">
                <th className="py-6 font-bold">Feature</th>
                <th className="py-6 font-bold text-primary">Marja</th>
                <th className="py-6 font-bold text-muted-foreground">Traditional Marketplaces</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b last:border-0"
                >
                  <td className="py-6 text-sm font-medium">{feature.name}</td>
                  <td className="py-6">
                    {feature.marja === true ? (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                        <Check className="h-4 w-4" />
                      </div>
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground" />
                    )}
                  </td>
                  <td className="py-6">
                    {feature.others === true ? (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-500/10 text-slate-500">
                        <Check className="h-4 w-4" />
                      </div>
                    ) : feature.others === "Partial" ? (
                      <span className="text-xs font-medium text-muted-foreground uppercase">Partial</span>
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground" />
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
