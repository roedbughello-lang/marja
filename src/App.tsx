/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Stats from "@/components/Stats";
import FeaturedListings from "@/components/FeaturedListings";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import Comparison from "@/components/Comparison";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustedBy />
        <Stats />
        <FeaturedListings />
        <Process />
        <Benefits />
        <Comparison />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
