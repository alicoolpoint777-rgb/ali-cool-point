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
    id: "pec",
    name: "PEC Firm Registration",
    number: "Registration No: 2026-PEC-9473",
    date: "In Process / Expected",
    issuer: "Pakistan Engineering Council",
    description: "Corporate engineering registration authorizing electrical, mechanical, and professional HVAC contracting works."
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
  // Helper to render high-fidelity custom SVG logos for each corporate registration
  const renderLogo = (id: string) => {
    switch (id) {
      case "secp":
        return (
          <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#1e3a8a" stroke="#d97706" strokeWidth="3" />
            <path d="M30 35H70" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
            <path d="M50 35V65" stroke="#ffffff" strokeWidth="4" />
            <path d="M35 65H65" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
            <circle cx="50" cy="50" r="12" fill="#d97706" />
            <text x="50" y="54" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SECP</text>
          </svg>
        );
      case "fbr":
        return (
          <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 4L15 20V55C15 75 50 96 50 96C50 96 85 75 85 55V20L50 4Z" fill="#15803d" stroke="#f59e0b" strokeWidth="3" />
            <path d="M35 45H65M50 30V65" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
            <text x="50" y="78" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">FBR</text>
          </svg>
        );
      case "srb":
        return (
          <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="46" fill="#7f1d1d" stroke="#ffffff" strokeWidth="3" />
            <path d="M50 15C30.67 15 15 30.67 15 50C15 69.33 30.67 85 50 85" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
            <text x="50" y="55" fill="#f59e0b" fontSize="16" fontWeight="extrabold" textAnchor="middle" fontFamily="sans-serif">SRB</text>
            <text x="50" y="70" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SINDH</text>
          </svg>
        );
      case "kcci":
        return (
          <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="46" fill="#f59e0b" stroke="#1e3a8a" strokeWidth="4" />
            <polygon points="50,15 80,45 65,45 65,80 35,80 35,45 20,45" fill="#1e3a8a" />
            <text x="50" y="65" fill="#ffffff" fontSize="13" fontWeight="black" textAnchor="middle" fontFamily="sans-serif">KCCI</text>
          </svg>
        );
      case "pec":
        return (
          <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="46" fill="#047857" stroke="#ffffff" strokeWidth="4" />
            {/* Gear Outline */}
            <circle cx="50" cy="50" r="22" stroke="#ffffff" strokeWidth="4" strokeDasharray="8,6" />
            <circle cx="50" cy="50" r="14" fill="#f59e0b" />
            <text x="50" y="54" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">PEC</text>
          </svg>
        );
      case "sessi":
        return (
          <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="46" fill="#0d9488" stroke="#ffffff" strokeWidth="3" />
            <path d="M25 55C25 40 50 25 50 25C50 25 75 40 75 55C75 70 50 85 50 85C50 85 25 70 25 55Z" fill="#0f766e" />
            <text x="50" y="55" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SESSI</text>
          </svg>
        );
      case "labour":
        return (
          <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="70" height="70" rx="10" fill="#dc2626" stroke="#ffffff" strokeWidth="3" />
            <path d="M35 60L45 40H55L65 60H35Z" fill="#ffffff" />
            <text x="50" y="75" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">LABOUR</text>
          </svg>
        );
      case "ipo":
        return (
          <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="46" fill="#1d4ed8" stroke="#f59e0b" strokeWidth="3" />
            <circle cx="50" cy="45" r="16" stroke="#ffffff" strokeWidth="4" />
            <text x="50" y="51" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">R</text>
            <text x="50" y="78" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">IPO</text>
          </svg>
        );
      default:
        return <FileText className="w-12 h-12 text-primary" />;
    }
  };

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="flex flex-col bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 justify-between group"
                >
                  <div className="space-y-4">
                    {/* Brand Logo Header */}
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
                        {renderLogo(cert.id)}
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
