"use client";

import * as React from "react";
import Image from "next/image";
import { Download, Eye, FileText, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const certificates = [
  {
    id: "secp",
    name: "SECP Incorporation Certificate",
    number: "CUIN: 0324097",
    date: "January 23, 2026",
    issuer: "Securities and Exchange Commission of Pakistan",
    src: "/documents/secp_certificate.pdf",
    previewImage: null, // PDF viewer fallback
    description: "Certifies that Ali Cool Point (SMC-Private) Limited is incorporated under the Companies Act, 2017 as a Private Limited Company limited by shares."
  },
  {
    id: "srb",
    name: "Sindh Revenue Board STN",
    number: "SSTN: S4791217-0",
    date: "February 23, 2026",
    issuer: "Government of Sindh, Sindh Revenue Board",
    src: "/documents/srb_stn.pdf",
    previewImage: null,
    description: "Official Sindh Sales Tax on Services registration certificate authorizing electrical installations and goods repair services."
  },
  {
    id: "fbr",
    name: "FBR Income Tax NTN Registration",
    number: "Registration No: 4240123542475",
    date: "October 01, 2021",
    issuer: "Federal Board of Revenue, RTO-I Karachi",
    src: "/documents/fbr_ntn.pdf",
    previewImage: null,
    description: "Verifies the business income tax registration status as an Active Taxpayer under the Federal Board of Revenue."
  },
  {
    id: "kcci",
    name: "KCCI Membership Certificate",
    number: "Membership No: 150350",
    date: "May 07, 2026 (Valid to 2027)",
    issuer: "Karachi Chamber of Commerce & Industry",
    src: "/documents/kcci_certificate.jpg",
    previewImage: "/documents/kcci_certificate.jpg",
    description: "Official registered member of the Karachi Chamber of Commerce and Industry, affiliated with the FPCCI."
  },
  {
    id: "sessi",
    name: "SESSI Social Security Registration",
    number: "Registration No: 2026030012",
    date: "March 09, 2026",
    issuer: "Sindh Employees' Social Security Institution",
    src: "/documents/sessi_certificate.pdf",
    previewImage: null,
    description: "employer registration under the SESSI social security scheme, ensuring healthcare and worker safety benefits."
  },
  {
    id: "labour",
    name: "Sindh Labour Department License",
    number: "Registration No: LHRD-2026-02-22735",
    date: "February 27, 2026",
    issuer: "Directorate General of Labour, Govt. of Sindh",
    src: "/documents/labour_certificate.pdf",
    previewImage: null,
    description: "Shop and Commercial Establishment license issued under the Sindh Shops & Commercial Establishments Act, 2015."
  },
  {
    id: "ipo",
    name: "IPO Trademark Registry",
    number: "Filed & Protected Status",
    date: "In Process / Expected",
    issuer: "Intellectual Property Organization of Pakistan",
    src: "/documents/ipo_certificate.pdf",
    previewImage: null,
    description: "Intellectual property and brand protection registration for the 'Ali Cool Point' trademark logo."
  }
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = React.useState<typeof certificates[0] | null>(null);

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
              Verify our business incorporation, chamber memberships, and corporate tax certificates. Complete audit logs for contracting officers.
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
                        <span className="text-[10px] font-mono text-slate-400">{cert.number}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="text-[11px] text-slate-400 space-y-1 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div className="flex justify-between">
                        <span>Issuer:</span>
                        <span className="font-semibold text-slate-600">{cert.issuer}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Registered Date:</span>
                        <span className="font-semibold text-slate-600">{cert.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs gap-1 border-slate-200 text-slate-700 hover:bg-slate-50"
                      onClick={() => setSelectedCert(cert)}
                    >
                      <Eye className="h-3.5 w-3.5" />
                      View Document
                    </Button>
                    <a
                      href={cert.src}
                      download
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "h-8 w-8 shrink-0 text-slate-400 hover:text-slate-700 border border-slate-200 rounded-md hover:bg-slate-50 flex items-center justify-center"
                      )}
                    >
                      <Download className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificate overlay Lightbox */}
        <Dialog open={!!selectedCert} onOpenChange={(open) => !open && setSelectedCert(null)}>
          <DialogContent className="max-w-4xl w-[95vw] bg-white border border-slate-200 rounded-2xl overflow-hidden p-6 max-h-[90vh] flex flex-col justify-between">
            {selectedCert && (
              <>
                <DialogHeader className="mb-4">
                  <DialogTitle className="font-heading text-lg font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    {selectedCert.name}
                  </DialogTitle>
                  <DialogDescription className="text-xs text-slate-400 font-mono">
                    {selectedCert.issuer} | {selectedCert.number}
                  </DialogDescription>
                </DialogHeader>

                {/* Display PDF preview in iframe, or Image if available */}
                <div className="flex-grow relative w-full h-[55vh] bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
                  {selectedCert.previewImage ? (
                    <Image
                      src={selectedCert.previewImage}
                      alt={selectedCert.name}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <iframe
                      src={`${selectedCert.src}#toolbar=0&navpanes=0`}
                      className="w-full h-full"
                      title={selectedCert.name}
                    />
                  )}
                </div>

                <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4 text-xs text-slate-500">
                  <p className="leading-tight text-center sm:text-left">
                    Registered business activity: <strong>Maintenance, Renovation, and HVAC Installations</strong>.
                  </p>
                  <a
                    href={selectedCert.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "default", size: "sm" }),
                      "bg-primary hover:bg-primary/95 text-white flex items-center gap-1"
                    )}
                  >
                    <Download className="h-3.5 w-3.5" />
                    Open Full Document
                  </a>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </main>

      <Footer />
    </>
  );
}
