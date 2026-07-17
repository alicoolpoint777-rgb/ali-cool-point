"use client";

import * as React from "react";
import { Search, Wrench, ShieldAlert, BadgeInfo, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getWhatsAppLink, OFFICIAL_PHONE } from "@/lib/whatsapp";

// Data extracted directly from Pearl Customer Service.docx
const tariffData = [
  { sNo: 1, desc: "Unit Installation 1, 1.5 and 2 Ton Wall Mounted", unit: "Per Unit", price: "2500" },
  { sNo: 2, desc: "Unit Installation 02 Ton Floor Stand / Cassette and Duct Type", unit: "Per Unit", price: "4000" },
  { sNo: 3, desc: "Unit Installation 04 Ton Floor Stand / Cassette and Duct Type", unit: "Per Unit", price: "7000" },
  { sNo: 4, desc: "Unit Installation 08 Ton Floor Stand / Cassette and Duct Type", unit: "Per Unit", price: "12000" },
  { sNo: 5, desc: "Outdoor Bracket With Rawal Bolt (Powder Coated) 1 and 1.5 Ton", unit: "Per Pcs", price: "1500" },
  { sNo: 6, desc: "Outdoor Bracket With Rawal Bolt (Iron Angle Without Powder Coated) 1 and 1.5 Ton", unit: "Per Pcs", price: "1200" },
  { sNo: 7, desc: "Outdoor Bracket With Rawal Bolt (Powder Coated) 02 Ton", unit: "Per Pcs", price: "2000" },
  { sNo: 8, desc: "Copper Pipe (GD China) (1 Ton With Insulation)", unit: "Per Feet", price: "700" },
  { sNo: 9, desc: "Copper Pipe (GD China) (1.5 and 02 Ton With Insulation)", unit: "Per Feet", price: "800" },
  { sNo: 10, desc: "Copper Control Wire 110/76 (Fast, Pakistan, Newage, or equivalent)", unit: "Per Feet", price: "170" },
  { sNo: 11, desc: "Labor Charges of Extra Pipe (above 15 Feet)", unit: "Per Feet", price: "120" },
  { sNo: 12, desc: "Flare Nut 3/8, 1/4, 1/2", unit: "Per Pcs", price: "50 / 100 / 180" },
  { sNo: 13, desc: "Rawal Bolt", unit: "Per Pcs", price: "50" },
  { sNo: 14, desc: "Brazing / Welding Charges Per Joint/Unit", unit: "Per Unit", price: "600" },
  { sNo: 15, desc: "Installation of Pipe Plastic Duct Cover (GM & Popular) 40x40", unit: "Per Feet", price: "180" },
  { sNo: 16, desc: "Installation of Pipe Plastic Duct Cover (GM & Popular) 60x60", unit: "Per Feet", price: "230" },
  { sNo: 17, desc: "Flashing and Cleaning of Existing Pipe (For concealed piping)", unit: "Per Feet", price: "100" },
  { sNo: 18, desc: "Additional Hole Charges (Core Cutting / Drilling)", unit: "Per Inch", price: "100" },
  { sNo: 19, desc: "Power Plug Switch", unit: "Per Pcs", price: "500" },
  { sNo: 20, desc: "Power Plug Switch with Breaker", unit: "Per Pcs", price: "1000" },
  { sNo: 21, desc: "Extra Gas Charging For Extra Piping (25 Gram Per Meter)", unit: "Per Feet", price: "100" },
  { sNo: 22, desc: "Old Unit Dismantling Charges", unit: "Per Unit", price: "800" },
  { sNo: 23, desc: "Dismantling & Re-installation Charges", unit: "Per Unit", price: "2800" },
  { sNo: 24, desc: "Drain Pipe Flexible", unit: "Per Feet", price: "30" },
  { sNo: 25, desc: "Complaint Call Charges Visit Within City", unit: "First Time", price: "1000" },
  { sNo: 26, desc: "Complaint Call 2nd Visit PTA (Parts to Attend)", unit: "2nd Time", price: "700" },
  { sNo: 27, desc: "Gas Charging 1 Ton Including Visit Charges (All Types)", unit: "Per Unit", price: "6000" },
  { sNo: 28, desc: "Gas Charging 1.5 Ton Including Visit Charges (All Types)", unit: "Per Unit", price: "7500" },
  { sNo: 29, desc: "Gas Charging 2 Ton Including Visit Charges (All Types)", unit: "Per Unit", price: "8500" },
  { sNo: 30, desc: "Gas Charging 2 Ton Floor Standing / Cassette and Duct Type", unit: "Per Unit", price: "9000" },
  { sNo: 31, desc: "Gas Charging 4 Ton Floor Standing / Cassette and Duct Type", unit: "Per Unit", price: "16000" },
  { sNo: 32, desc: "Gas Charging 8 Ton Floor Standing / Cassette and Duct Type", unit: "Per Unit", price: "32000" },
];

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
    desc: "Bespoke carpentry and wood finishings.",
    points: [
      "Kitchen cabinets, corporate desks, and partitions",
      "Solid and semi-solid door installations and lock setups",
      "Legacy wood polishing, varnishing, and repair",
      "Modern space-saving drawer design fittings"
    ]
  }
];

export default function Services() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredTariff = tariffData.filter((item) =>
    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const tariffMessageLink = getWhatsAppLink(
    OFFICIAL_PHONE,
    "Hello Ali Cool Point, I would like to book a service based on the official pricing tariff chart. Please contact me."
  );

  return (
    <>
      <Navbar />

      <main className="flex-grow bg-slate-50">
        {/* Page Banner */}
        <section className="bg-slate-900 text-white py-12 sm:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20"></div>
          <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Services Portfolio & Tariff Chart
            </h1>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl mx-auto">
              Transparent, authorized rates and certified engineering expertise for residential and corporate contracts in Karachi.
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

        {/* Interactive Tariff Chart Table */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-1">Rate Transparency</span>
              <h2 className="font-heading text-3xl font-extrabold text-slate-900 tracking-tight">
                Official Pearl AC Service Tariff Chart
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                All prices are fixed in PKR, exclude tax, and follow the authorized installer tariff table. Installer charging extra is strictly prohibited.
              </p>
            </div>

            {/* Search Input */}
            <div className="max-w-md mx-auto mb-8 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Search AC services, gas charging, brackets, labor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-slate-50 border-slate-200 text-foreground"
              />
            </div>

            {/* Table */}
            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <Table>
                <TableHeader className="bg-slate-50">
                  <TableRow>
                    <TableHead className="w-[80px]">S.No</TableHead>
                    <TableHead>Service Description</TableHead>
                    <TableHead className="w-[120px]">Billing Unit</TableHead>
                    <TableHead className="w-[150px] text-right">Charges (PKR)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTariff.length > 0 ? (
                    filteredTariff.map((item) => (
                      <TableRow key={item.sNo} className="hover:bg-slate-50 transition-colors">
                        <TableCell className="font-mono text-xs text-slate-400">{item.sNo}</TableCell>
                        <TableCell className="font-medium text-slate-900 text-sm">{item.desc}</TableCell>
                        <TableCell className="text-xs text-slate-500">{item.unit}</TableCell>
                        <TableCell className="font-bold text-slate-900 text-right text-sm">
                          {item.price === "50 / 100 / 180" ? item.price : `PKR ${item.price}`}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-8 text-slate-400 text-sm">
                        No service matching "{searchQuery}" found. Try another search.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {/* Terms and Conditions Accordion Panel */}
            <div className="mt-8 p-6 rounded-2xl bg-amber-50/50 border border-amber-200/60 max-w-4xl mx-auto flex gap-4">
              <ShieldAlert className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-800 space-y-2 leading-relaxed">
                <h4 className="font-bold text-sm text-amber-900 flex items-center gap-1.5">
                  <BadgeInfo className="h-4 w-4 shrink-0" />
                  Official Tariff Terms & Conditions
                </h4>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li><strong>Warranty:</strong> 6 Months gas leakage and installation drain leakage warranty provided by ASC and installers.</li>
                  <li><strong>Extra Material:</strong> Installers must follow the tariff table. If the customer arranges materials themselves, no extra charge is insisted.</li>
                  <li><strong>Overcharging Penalty:</strong> If any installer is found charging extra, they will be penalized, must refund the extra amount, and apologize.</li>
                  <li><strong>Ladder & Core Cutting:</strong> Ladders and core beam cutting machines are arranged by the customer; if the installer arranges them, market prices apply.</li>
                  <li>All listed prices are without any tax deductions.</li>
                </ul>
                <div className="mt-4">
                  <a
                    href={tariffMessageLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "default", size: "sm" }),
                      "bg-amber-700 hover:bg-amber-800 text-white font-semibold"
                    )}
                  >
                    Book Service via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
