"use client";

import * as React from "react";
import { FileText, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const certificates = [
  {
    id: "secp",
    name: "SECP Incorporation Certificate",
    number: "CUIN: 0324097",
    date: "January 23, 2026",
    issuer: "Securities and Exchange Commission of Pakistan",
    description: "Incorporated under the Companies Act, 2017 as a Private Limited Company limited by shares (SMC-Private) Limited."
  },
  {
    id: "srb",
    name: "Sindh Revenue Board STN",
    number: "SSTN: S4791217-0",
    date: "February 23, 2026",
    issuer: "Government of Sindh, Sindh Revenue Board",
    description: "Official Sindh Sales Tax on Services registration authorizing electrical installations and goods repair services."
  },
  {
    id: "fbr",
    name: "FBR Income Tax NTN Registration",
    number: "Registration No: 4240123542475",
    date: "October 01, 2021",
    issuer: "Federal Board of Revenue, RTO-I Karachi",
    description: "Registered Active Income Taxpayer status under the Federal Board of Revenue."
  },
  {
    id: "kcci",
    name: "KCCI Membership Certificate",
    number: "Membership No: 150350",
    date: "May 07, 2026 (Valid to 2027)",
    issuer: "Karachi Chamber of Commerce & Industry",
    description: "Registered member of the Karachi Chamber of Commerce and Industry."
  },
  {
    id: "sessi",
    name: "SESSI Social Security Registration",
    number: "Registration No: 2026030012",
    date: "March 09, 2026",
    issuer: "Sindh Employees' Social Security Institution",
    description: "Employer registration under the SESSI social security scheme, ensuring healthcare and worker safety benefits."
  },
  {
    id: "labour",
    name: "Sindh Labour Department License",
    number: "Registration No: LHRD-2026-02-22735",
    date: "February 27, 2026",
    issuer: "Directorate General of Labour, Govt. of Sindh",
    description: "Shop and Commercial Establishment license issued under the Sindh Shops & Commercial Establishments Act, 2015."
  },
  {
    id: "ipo",
    name: "IPO Trademark Registry",
    number: "Filed & Protected Status",
    date: "In Process / Expected",
    issuer: "Intellectual Property Organization of Pakistan",
    description: "Brand protection registration for the 'Ali Cool Point' trademark logo."
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
              Verified corporate registration numbers and active compliance statuses for contracting audits.
            </p>
          </div>
        </section>

        {/* Certificate Listing Grid */}
        <section className="py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="flex flex-col bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 justify-between group"
                >
                  <div className="space-y-4">
                    {/* Icon Header */}
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-heading text-sm font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight">
                          {cert.name}
                        </h3>
                        <span className="text-xs font-bold text-primary block mt-1">{cert.number}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="text-[11px] text-slate-400 space-y-1 bg-slate-50/50 p-3 rounded-lg border border-slate-100">
                      <div className="flex justify-between">
                        <span>Authority:</span>
                        <span className="font-semibold text-slate-600 text-right">{cert.issuer}</span>
                      </div>
                      <div className="flex justify-between border-t border-slate-100/50 pt-1 mt-1">
                        <span>Registration Date:</span>
                        <span className="font-semibold text-slate-600">{cert.date}</span>
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
