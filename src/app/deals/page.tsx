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
  // --- RESIDENTIAL PRODUCTS ---
  {
    id: "p-wall-mounted",
    name: "Wall Mounted Split AC",
    capacity: "1.0 Ton - 2.0 Ton",
    type: "Residential",
    features: [
      "High Efficiency Cooling & Heating",
      "Gold Fin Condenser protection",
      "Low Voltage Startup (150V)",
      "Turbo Cooling Mode",
      "Sleep and Silent Comfort settings"
    ],
    warranty: "10 Years Compressor, 1 Year Parts Warranty",
    image: "/images/products/WhatsApp Image 2026-07-16 at 11.13.35 AM (1).jpeg"
  },
  {
    id: "p-wind-free",
    name: "Wind Free Wall Mounted Split AC",
    capacity: "1.5 Ton - 2.0 Ton",
    type: "Residential",
    features: [
      "Draft-Free Cooling comfort",
      "Smart Inverter up to 75% Energy Saving",
      "Reversible Heat & Cool operations",
      "Silver Ion Antibacterial Filter",
      "Self-Diagnosis Auto Restart"
    ],
    warranty: "10 Years Compressor, 1 Year Parts Warranty",
    image: "/images/products/WhatsApp Image 2026-07-16 at 11.13.35 AM (2).jpeg"
  },

  // --- LIGHT COMMERCIAL PRODUCTS ---
  {
    id: "p-one-way-cassette",
    name: "One Way Ceiling Cassette AC",
    capacity: "1.5 Ton - 2.0 Ton",
    type: "Light Commercial",
    features: [
      "Ultra-slim body layout design",
      "Unidirectional wide air distribution",
      "Quiet operation blowers",
      "Built-in condensate water drain pump",
      "Elegant visible panel faceplate"
    ],
    warranty: "10 Years Compressor, 1 Year Parts Warranty",
    image: "/images/products/casset_ac.png"
  },
  {
    id: "p-four-way-cassette",
    name: "Four Way Ceiling Cassette AC",
    capacity: "2.0 Ton - 4.0 Ton",
    type: "Light Commercial",
    features: [
      "360-Degree round flow air delivery",
      "High lift built-in drain pump (750mm)",
      "Fresh air intake connection cutout",
      "Super slim aesthetic ceiling panel",
      "Easy clean washable air filter"
    ],
    warranty: "10 Years Compressor, 1 Year Parts Warranty",
    image: "/images/products/casset_ac.png"
  },
  {
    id: "p-ceiling-exposed",
    name: "Ceiling Exposed AC",
    capacity: "2.0 Ton - 4.0 Ton",
    type: "Light Commercial",
    features: [
      "Flexible under-ceiling exposed installation",
      "Wide angle horizontal and vertical swing",
      "Dual drainage connection outlets",
      "Easy service access structure",
      "Strong direct airflow throw"
    ],
    warranty: "10 Years Compressor, 1 Year Parts Warranty",
    image: "/images/products/ceiling_suspended_ac.png"
  },
  {
    id: "p-360-cassette",
    name: "360 Cassette AC",
    capacity: "3.0 Ton - 4.0 Ton",
    type: "Light Commercial",
    features: [
      "Bladeless booster fan circular design",
      "Zero cold air drafts distribution",
      "Intuitive LED display circular panel",
      "High capacity cooling airflow",
      "Perfect aesthetic match for open ceilings"
    ],
    warranty: "10 Years Compressor, 1 Year Parts Warranty",
    image: "/images/products/round_360_cassette.png"
  },
  {
    id: "p-floor-standing",
    name: "Floor Standing AC",
    capacity: "2.0 Ton - 8.0 Ton",
    type: "Light Commercial",
    features: [
      "Turbo long-distance air throw (15m+)",
      "Vibrant LCD digital controls",
      "Multi-bend high efficiency evaporator",
      "Intelligent defrost & anti-cold logic",
      "Commercial grade metal outer casing"
    ],
    warranty: "10 Years Compressor, 1 Year Parts Warranty",
    image: "/images/products/flore mounted 1.jpeg"
  },
  {
    id: "p-ducted-split",
    name: "Ducted Split AC",
    capacity: "2.0 Ton - 6.0 Ton",
    type: "Light Commercial",
    features: [
      "High external static pressure design",
      "Concealed in-ceiling aesthetic setup",
      "Customizable duct layouts support",
      "Washable return air filtration grid",
      "Flexible return air inlet configurations"
    ],
    warranty: "10 Years Compressor, 1 Year Parts Warranty",
    image: "/images/products/package_ac_unit.png"
  },

  // --- COMMERCIAL & INDUSTRIAL PRODUCTS ---
  {
    id: "p-air-cooled-package",
    name: "Air Cooled Package Air Conditioner",
    capacity: "5.0 Ton - 30.0 Ton",
    type: "Commercial & Industrial",
    features: [
      "All-in-one outdoor rooftop package unit",
      "Weatherproof painted steel structure",
      "Scroll compressors for industrial duty",
      "Easy duct connection ports",
      "Complete safety protection diagnostics"
    ],
    warranty: "10 Years Compressor, 1 Year Parts Warranty",
    image: "/images/products/package_ac_unit.png"
  },
  {
    id: "p-water-cooled-package",
    name: "Water Cooled Package Air Conditioner",
    capacity: "5.0 Ton - 25.0 Ton",
    type: "Commercial & Industrial",
    features: [
      "High-efficiency water-cooled condenser",
      "Compact indoor installation casing",
      "Quiet running centrifugal fans",
      "Copper tube-in-tube heat exchangers",
      "Compatible with cooling tower circuits"
    ],
    warranty: "10 Years Compressor, 1 Year Parts Warranty",
    image: "/images/products/package_ac_unit.png"
  },
  {
    id: "p-air-cooled-chiller",
    name: "Air Cooled Liquid Chiller",
    capacity: "10.0 Ton - 100.0 Ton",
    type: "Commercial & Industrial",
    features: [
      "Industrial liquid cooling chiller system",
      "V-shape condenser coils array",
      "Shell and tube water heat exchanger",
      "Intelligent microcomputer controls",
      "Anti-freeze safety switch integration"
    ],
    warranty: "10 Years Compressor, 1 Year Parts Warranty",
    image: "/images/products/industrial_chiller.png"
  },
  {
    id: "p-water-cooled-chiller",
    name: "Water Cooled Liquid Chiller",
    capacity: "15.0 Ton - 150.0 Ton",
    type: "Commercial & Industrial",
    features: [
      "Extremely high efficiency water cooling",
      "Shell and tube condenser & evaporator",
      "Micro-channel controller management",
      "Saves indoor plant floor space",
      "Requires external cooling tower setup"
    ],
    warranty: "10 Years Compressor, 1 Year Parts Warranty",
    image: "/images/products/industrial_chiller.png"
  },
  {
    id: "p-ahu",
    name: "Air Handling Unit (AHU)",
    capacity: "Custom CFM Sizing",
    type: "Commercial & Industrial",
    features: [
      "Double-skin modular cabinet paneling",
      "High quality air filtration filters",
      "Chilled water or DX cooling coils",
      "Variable pitch pulley belt-driven fans",
      "Fresh air mixing damper control section"
    ],
    warranty: "10 Years Compressor, 1 Year Parts Warranty",
    image: "/images/products/ahu_cabinet.png"
  },
  {
    id: "p-commercial-ducted",
    name: "Commercial Ducted Air Conditioner",
    capacity: "5.0 Ton - 10.0 Ton",
    type: "Commercial & Industrial",
    features: [
      "Designed for large open space cooling",
      "High volume air distribution ducts",
      "Reinforced heavy-duty fan assembly",
      "Long refrigeration pipe layout options",
      "Phase sequence protection indicators"
    ],
    warranty: "10 Years Compressor, 1 Year Parts Warranty",
    image: "/images/products/package_ac_unit.png"
  },
  {
    id: "p-chilled-water-ducted-fcu",
    name: "Chilled Water Ducted Fan Coil Unit (FCU)",
    capacity: "200 CFM - 1400 CFM",
    type: "Commercial & Industrial",
    features: [
      "Compact ceiling void installation",
      "Connected to central chiller loops",
      "Quiet 3-speed running motor control",
      "Galvanized steel condensate drip pan",
      "High heat transfer copper piping"
    ],
    warranty: "10 Years Compressor, 1 Year Parts Warranty",
    image: "/images/products/ceiling_suspended_ac.png"
  },
  {
    id: "p-chilled-water-decorative-fcu",
    name: "Chilled Water Decorative Fan Coil Unit",
    capacity: "300 CFM - 1200 CFM",
    type: "Commercial & Industrial",
    features: [
      "Aesthetic exposed indoor casing unit",
      "Wall or under-ceiling mounting",
      "Direct central chiller connection",
      "Integrated electronic control valve",
      "Washable dust filter assembly"
    ],
    warranty: "10 Years Compressor, 1 Year Parts Warranty",
    image: "/images/products/ceiling_suspended_ac.png"
  },
  {
    id: "p-vrf-system",
    name: "Variable Refrigerant Flow (VRF) System",
    capacity: "8 HP - 80 HP Systems",
    type: "Commercial & Industrial",
    features: [
      "Inverter multi-split HVAC technology",
      "Dials up to 64 indoor units per loop",
      "Simultaneous heating & cooling recovery",
      "Extremely high seasonal energy index",
      "Smart central automation touchscreens"
    ],
    warranty: "10 Years Compressor, 1 Year Parts Warranty",
    image: "/images/products/vrf_outdoor_system.png"
  },
  {
    id: "p-erv",
    name: "Energy Recovery Ventilator (ERV)",
    capacity: "150 CFM - 1000 CFM",
    type: "Commercial & Industrial",
    features: [
      "Total heat exchanger core ventilation",
      "Recovers waste exhaust cool energy",
      "Maintains clean and fresh indoor air",
      "Reduces overall HVAC plant load",
      "Low sound level blower operation"
    ],
    warranty: "10 Years Compressor, 1 Year Parts Warranty",
    image: "/images/products/ahu_cabinet.png"
  }
];

export default function Deals() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const categories = ["All", "Residential", "Light Commercial", "Commercial & Industrial"];

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
              AC Deals & Technical Catalog
            </h1>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl mx-auto">
              Explore our complete range of Residential, Light Commercial, and Industrial HVAC solutions. Contact our engineering desk for custom project designs.
            </p>
          </div>
        </section>

        {/* Product Catalog Grid Layout */}
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
                      ? "bg-primary hover:bg-primary/95 text-white font-semibold"
                      : "border-slate-200 text-slate-700 hover:bg-slate-100 bg-white"
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
                  `Hi Ali Cool Point, I would like to inquire about the HVAC model: "${product.name}" (${product.capacity} capacity). Please provide specifications, pricing, and availability details.`
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
                            <span className="font-bold block text-slate-700">Official Brand Warranty:</span>
                            {product.warranty}
                          </div>
                        </div>
                      </div>

                      {/* Pricing & CTA */}
                      <div className="mt-6 border-t border-slate-100 pt-4">
                        <a
                          href={buyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            buttonVariants({ variant: "default" }),
                            "bg-emerald-600 hover:bg-emerald-700 text-white font-semibold flex items-center justify-center gap-1.5 w-full"
                          )}
                        >
                          <BadgeDollarSign className="h-4 w-4" />
                          Inquire on WhatsApp
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
              We specialize in full layout design and sizing calculations for large-scale VRF, cassette, chillers, and duct systems for commercial offices, banks, and schools.
            </p>
            <div>
              <a
                href={getWhatsAppLink(OFFICIAL_PHONE, "Hi Ali Cool Point, I would like to consult on a custom commercial HVAC installation/renovation project.")}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-primary hover:bg-primary/95 text-white font-semibold"
                )}
              >
                Consult Our Engineering Desk
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
