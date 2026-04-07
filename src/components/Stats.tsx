import { motion } from "motion/react";

const stats = [
  { label: "Total Assets Sold", value: "$420M+" },
  { label: "Active Buyers", value: "15,000+" },
  { label: "Average Sale Price", value: "$85,000" },
  { label: "Success Rate", value: "94%" },
];

export default function Stats() {
  return (
    <section className="border-y bg-slate-950 py-12 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-display font-bold tracking-tight md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
