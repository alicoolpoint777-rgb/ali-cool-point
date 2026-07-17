"use client";

import * as React from "react";
import Image from "next/image";
import { Check, Info, BadgeDollarSign, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getWhatsAppLink, OFFICIAL_PHONE } from "@/lib/whatsapp";

const acProducts = [
  {
    id: "p1",
    name: "Pearl Smart Inverter AC (Wall Mounted)",
    capacity: "1.5 Ton",
    type: "Split AC",
    price: "155,000",
    features: [
      "Up to 75% Energy Saving",
      "T3 Inverter Compressor (Runs at 52°C)",
      "Reversible (Heat & Cool operations)",
      "Gold Fin Evaporator & Condenser",
      "Low Voltage Startup (150V)"
    ],
    warranty: "10 Years Compressor, 4 Years PCB, 1 Year Parts",
    image: "/images/products/WhatsApp Image 2026-07-16 at 11.13.35 AM (1).jpeg"
  },
  {
    id: "p2",
    name: "Pearl Eco-Split AC (Wall Mounted)",
    capacity: "1.0 Ton",
    type: "Split AC",
    price: "118,000",
    features: [
      "High Efficiency Heat Exchanger",
      "Low Noise Indoor Blowers",
      "Eco-Friendly R410a Refrigerant Gas",
      "Turbo Cooling Mode",
      "Self-Diagnosis Auto Restart"
    ],
    warranty: "5 Years Compressor, 1 Year Parts & Labor",
    image: "/images/products/WhatsApp Image 2026-07-16 at 11.13.35 AM (2).jpeg"
  },
  {
    id: "p3",
    name: "Pearl Heavy Duty Floor Standing AC",
    capacity: "2.0 Ton",
    type: "Floor Standing",
    price: "245,000",
    features: [
      "Turbo Air Throw (Up to 15 meters)",
      "Vibrant LCD Digital Display Panel",
      "Multi-Bend Heat Exchanger",
      "Intelligent Defrost Logic",
      "Commercial Grade Sturdy Body"
    ],
    warranty: "3 Years Compressor, 1 Year Parts",
    image: "/images/products/WhatsApp Image 2026-07-16 at 11.13.35 AM (3).jpeg"
  },
  {
    id: "p4",
    name: "Pearl Executive Split AC (Wall Mounted)",
    capacity: "2.0 Ton",
    type: "Split AC",
    price: "192,000",
    features: [
      "Wide Voltage Operation range",
      "Auto Clean Evaporator Function",
      "Silver Ion Antibacterial Filter",
      "Quiet Comfort Sleep Setting",
      "Corrosion Resistant Cabinet"
    ],
    warranty: "10 Years Compressor, 1 Year Parts",
    image: "/images/products/WhatsApp Image 2026-07-16 at 11.13.35 AM (4).jpeg"
  },
  {
    id: "p5",
    name: "Pearl Cassette Type Commercial AC",
    capacity: "4.0 Ton",
    type: "Cassette AC",
    price: "385,000",
    features: [
      "360-Degree Round Flow Air Distribution",
      "High Lift Built-in Water Drain Pump",
      "Fresh Air Intake Cutout",
      "Super Slim Panel Design",
      "Easy Clean Grille Assembly"
    ],
    warranty: "3 Years Compressor, 1 Year Parts",
    image: "/images/products/WhatsApp Image 2026-07-16 at 11.13.35 AM (5).jpeg"
  }
];

export default function Deals() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const categories = ["All", "Split AC", "Floor Standing", "Cassette AC"];

  const filteredProducts = activeCategory === "All"
    ? acProducts
    : acProducts.filter((product) => product.type === activeCategory);

  return (
    <>
      <Navbar />

      <main className="flex-grow bg-slate-50">
        {/* Banner Section */}
        <section className="bg-slate-900 text-white py-12 sm:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20"></div>
          <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Exclusive AC Deals & Product Catalog
            </h1>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl mx-auto">
              Get official brand warranties, verified pricing, and professional installation on certified Pearl Air Conditioning systems.
            </p>
          </div>
        </section>

        {/* Filter & Catalog Section */}
        <section className="py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={
                    activeCategory === category
                      ? "bg-primary hover:bg-primary/95 text-white"
                      : "border-slate-200 text-slate-700 hover:bg-slate-100"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Product Catalog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
                const buyLink = getWhatsAppLink(
                  OFFICIAL_PHONE,
                  `Hi Ali Cool Point, I would like to order the AC model: "${product.name}" (${product.capacity} capacity). The listed price is PKR ${product.price}. Please provide invoice and availability details.`
                );

                return (
                  <div
                    key={product.id}
                    className="flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
                  >
                    {/* Image Box */}
                    <div className="relative aspect-video w-full bg-slate-100 flex items-center justify-center border-b border-slate-200 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-103 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
                        {product.capacity}
                      </span>
                      <span className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-slate-200 text-[10px] font-semibold px-2 py-0.5 rounded-full z-10">
                        {product.type}
                      </span>
                    </div>

                    {/* Content Box */}
                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <div className="space-y-4">
                        <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>

                        {/* Features list */}
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                            <Sparkles className="h-3.5 w-3.5 text-primary shrink-0" />
                            Specifications
                          </h4>
                          <ul className="space-y-1.5">
                            {product.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600">
                                <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Warranty Box */}
                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex gap-2">
                          <Info className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <div className="text-[10px] text-slate-500 leading-tight">
                            <span className="font-bold block text-slate-700">Official Pearl Warranty:</span>
                            {product.warranty}
                          </div>
                        </div>
                      </div>

                      {/* Pricing & CTA */}
                      <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Price</span>
                          <span className="text-xl font-extrabold text-slate-900">PKR {product.price}</span>
                        </div>
                        <a
                          href={buyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            buttonVariants({ variant: "default" }),
                            "bg-emerald-600 hover:bg-emerald-700 text-white font-semibold flex items-center gap-1.5"
                          )}
                        >
                          <BadgeDollarSign className="h-4 w-4" />
                          Buy on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* E-Commerce Support Banner */}
        <section className="bg-slate-900 text-white py-12">
          <div className="container mx-auto max-w-7xl px-4 text-center space-y-4">
            <h3 className="font-heading text-xl sm:text-2xl font-bold">Need a Custom Commercial Installation?</h3>
            <p className="text-xs text-slate-400 max-w-xl mx-auto">
              We specialize in full layout design and sizing calculations for large-scale VRF, cassette, and duct systems for commercial offices, banks, and schools.
            </p>
            <a
              href={getWhatsAppLink(OFFICIAL_PHONE, "Hi Ali Cool Point, I would like to schedule a site survey for commercial VRF/cassette AC sizing.")}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-primary hover:bg-primary/95 text-white"
              )}
            >
              Schedule Free Site Survey
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
