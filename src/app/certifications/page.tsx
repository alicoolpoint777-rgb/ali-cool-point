"use client";

import * as React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const certificates = [
  {
    id: "secp",
    name: "SECP Incorporation Certificate",
    issuer: "Securities and Exchange Commission of Pakistan",
    description: "Incorporated under the Companies Act, 2017 as a Private Limited Company limited by shares (SMC-Private) Limited.",
    logo: "/images/logos/secp_logo.jpg"
  },
  {
    id: "srb",
    name: "Sindh Revenue Board STN",
    issuer: "Government of Sindh, Sindh Revenue Board",
    description: "Official Sindh Sales Tax on Services registration authorizing electrical installations and goods repair services.",
    logo: "/images/logos/srb_logo.jpg"
  },
  {
    id: "fbr",
    name: "FBR Income Tax NTN Registration",
    issuer: "Federal Board of Revenue, RTO-I Karachi",
    description: "Registered Active Income Taxpayer status under the Federal Board of Revenue.",
    logo: "/images/logos/fbr_logo.jpg"
  },
  {
    id: "kcci",
    name: "KCCI Membership Certificate",
    issuer: "Karachi Chamber of Commerce & Industry",
    description: "Registered member of the Karachi Chamber of Commerce and Industry.",
    logo: "/images/logos/kcci_logo.jpg"
  },
  {
    id: "pec",
    name: "PEC Firm Registration",
    issuer: "Pakistan Engineering Council",
    description: "Corporate engineering registration authorizing electrical, mechanical, and professional HVAC contracting works.",
    logo: "/images/logos/pec_logo.jpg"
  },
  {
    id: "sessi",
    name: "SESSI Social Security Registration",
    issuer: "Sindh Employees' Social Security Institution",
    description: "Employer registration under the SESSI social security scheme, ensuring healthcare and worker safety benefits.",
    logo: "/images/logos/sessi_logo.jpg"
  },
  {
    id: "labour",
    name: "Sindh Labour Department License",
    issuer: "Directorate General of Labour, Govt. of Sindh",
    description: "Shop and Commercial Establishment license issued under the Sindh Shops & Commercial Establishments Act, 2015.",
    logo: "/images/logos/labour_logo.jpg"
  },
  {
    id: "ipo",
    name: "IPO Trademark Registry",
    issuer: "Intellectual Property Organization of Pakistan",
    description: "Brand protection registration for the 'Ali Cool Point' trademark logo.",
    logo: "/images/logos/ipo_logo.jpg"
  }
];

export default function Certifications() {
  return (
    <>
      <Navbar />

      <main className="flex-grow bg-slate-50">
        {/* Banner Section */}
        <section className="bg-slate-900 text-white py-12 sm:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20"></div>
          <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Official Registrations & Verifications
            </h1>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl mx-auto">
              Verified corporate registrations and active compliance statuses for contracting audits.
            </p>
          </div>
        </section>

        {/* Certificate Listing Grid */}
        <section className="py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="flex flex-col bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 justify-between group"
                >
                  <div className="space-y-4">
                    {/* Brand Logo Header */}
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 relative h-12 w-12 rounded-lg overflow-hidden border border-slate-100 bg-slate-50 flex items-center justify-center p-1 transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={cert.logo}
                          alt={cert.name}
                          fill
                          className="object-contain p-0.5"
                          sizes="48px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-heading text-xs font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight">
                          {cert.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="text-[11px] text-slate-400 space-y-1 bg-slate-50/50 p-3 rounded-lg border border-slate-100">
                      <div className="flex justify-between items-start gap-1">
                        <span className="shrink-0">Authority:</span>
                        <span className="font-semibold text-slate-600 text-right leading-tight">{cert.issuer}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[10px] text-emerald-600 font-semibold">
                    <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Verified Active Compliance Status</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
