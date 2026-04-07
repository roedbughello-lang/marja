import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

const faqs = [
  {
    question: "How does Marja verify listings?",
    answer: "We use a combination of automated data verification (connecting to Google Analytics, Stripe, etc.) and manual review by our team of analysts to ensure all traffic and revenue data is accurate.",
  },
  {
    question: "What are the fees for selling on Marja?",
    answer: "Our success fee ranges from 5% to 15% depending on the size of the transaction. There are no upfront listing fees for most assets.",
  },
  {
    question: "How long does the transfer process take?",
    answer: "Most transfers are completed within 7-14 days. This includes the inspection period where the buyer verifies the asset before funds are released from escrow.",
  },
  {
    question: "Is my data safe during the sale process?",
    answer: "Yes, we use secure data rooms and NDAs to protect sensitive information. Only verified buyers with proof of funds can access detailed financials.",
  },
  {
    question: "Can I buy a site if I'm not in the US?",
    answer: "Absolutely. Marja is a global marketplace. We facilitate international transactions and handle the complexities of cross-border asset transfers.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-muted/30 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-display font-bold tracking-tight md:text-5xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground">Everything you need to know about buying and selling on Marja.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-bold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
