"use client";

import * as React from "react";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const serviceDetails = [
  {
    title: "AC Dealer & Installation Services",
    intro: "We are the authorized service center and business partner for Pearl Air Conditioners. Our engineers strictly follow official brand standards.",
    points: [
      "Authentic split, floor standing, and cassette AC sales",
      "Official 6-Month gas leakage and drain installation warranty",
      "Brushed copper piping with premium thermal insulation",
      "Safety compliant core drilling and beam core cutting"
    ]
  },
  {
    title: "Commercial Maintenance & Renovation",
    intro: "Complete commercial property renovation and maintenance contracts tailored for banks, universities, offices, and warehouses.",
    points: [
      "Custom layout plans for corporate renovations",
      "Structural inspects and preventative maintenance",
      "Electrical, carpentry, and hardware upgrades",
      "Corporate site supervisor assignment for quality execution"
    ]
  },
  {
    title: "False Ceiling & Gypsum Fitting",
    intro: "Sleek ceiling layouts that enhance interior illumination, heat insulation, and sound proofing.",
    points: [
      "Gypsum, POP, and PVC false ceiling installations",
      "Durable aluminum panel grids for damp zones",
      "Integrated electrical layout setup for LED profile lighting",
      "Repair and refurbishment of legacy ceiling systems"
    ]
  },
  {
    title: "Professional Paint & Decor",
    intro: "Transforming surfaces using high-quality paints and careful surface preparations.",
    points: [
      "High durability weather-sheet coating for exterior facades",
      "Premium gloss, matte, and velvet interior wall finishes",
      "Core scraping, plastering, and water-seepage treatment",
      "Clean, dust-free paint execution with floor protections"
    ]
  },
  {
    title: "Custom Wooden & Carpentry Work",
    intro: "Bespoke carpentry and wood finishings.",
    points: [
      "Kitchen cabinets, corporate desks, and partitions",
      "Solid and semi-solid door installations and lock setups",
      "Legacy wood polishing, varnishing, and repair",
      "Modern space-saving drawer design fittings"
    ]
  }
];

export default function Services() {
  return (
    <>
      <Navbar />

      <main className="flex-grow bg-slate-50">
        {/* Page Banner */}
        <section className="bg-slate-900 text-white py-12 sm:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20"></div>
          <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Services Portfolio
            </h1>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl mx-auto">
              Certified engineering expertise and premium capabilities for residential and corporate contracts in Karachi.
            </p>
          </div>
        </section>

        {/* Detailed Services Layout */}
        <section className="py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-1">Our Capabilities</span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Engineering & Decoration Solutions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceDetails.map((service, idx) => (
                <Card key={idx} className="border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow bg-white">
                  <CardHeader className="p-6">
                    <CardTitle className="font-heading text-lg font-bold text-slate-900">{service.title}</CardTitle>
                    <CardDescription className="text-xs leading-relaxed mt-2 text-slate-500">
                      {service.intro}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 flex-grow flex flex-col justify-between">
                    <div className="space-y-2 mt-2">
                      {service.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
