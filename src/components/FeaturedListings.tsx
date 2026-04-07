import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { TrendingUp, DollarSign, BarChart3 } from "lucide-react";

const listings = [
  {
    title: "EcoStore - Sustainable E-commerce",
    category: "E-commerce",
    revenue: "$12,500/mo",
    profit: "$4,200/mo",
    price: "$145,000",
    image: "https://picsum.photos/seed/eco/800/600",
    tags: ["High Growth", "Vetted"],
  },
  {
    title: "DevTools SaaS - Automation Platform",
    category: "SaaS",
    revenue: "$8,200/mo",
    profit: "$7,100/mo",
    price: "$280,000",
    image: "https://picsum.photos/seed/saas/800/600",
    tags: ["Recurring Revenue", "Low Maintenance"],
  },
  {
    title: "TravelPulse - Content & Affiliate",
    category: "Content",
    revenue: "$3,400/mo",
    profit: "$3,100/mo",
    price: "$95,000",
    image: "https://picsum.photos/seed/travel/800/600",
    tags: ["Established", "Passive"],
  },
];

export default function FeaturedListings() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-display font-bold tracking-tight md:text-5xl">Featured Listings</h2>
            <p className="mt-4 text-muted-foreground">Hand-picked premium assets currently available on the marketplace.</p>
          </div>
          <Button variant="outline">View All Listings</Button>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {listing.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardHeader className="p-6 pb-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {listing.category}
                  </div>
                  <h3 className="text-xl font-bold">{listing.title}</h3>
                </CardHeader>
                <CardContent className="p-6 pt-2">
                  <div className="grid grid-cols-2 gap-4 border-y py-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-emerald-500" />
                      <div>
                        <div className="text-[10px] uppercase text-muted-foreground">Revenue</div>
                        <div className="text-sm font-bold">{listing.revenue}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-blue-500" />
                      <div>
                        <div className="text-[10px] uppercase text-muted-foreground">Profit</div>
                        <div className="text-sm font-bold">{listing.profit}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between p-6 pt-0">
                  <div className="flex items-center gap-1 text-2xl font-bold">
                    <span className="text-sm font-normal text-muted-foreground">Asking</span>
                    {listing.price}
                  </div>
                  <Button size="sm">View Details</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
