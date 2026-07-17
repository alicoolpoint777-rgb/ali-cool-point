import Image from "next/image";
import Link from "next/link";
import { Eye, Target, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const values = [
  {
    title: "Quality",
    desc: "We are committed to quality, ensuring that every service we provide meets the highest standards and guidelines of the engineering sector.",
  },
  {
    title: "Integrity",
    desc: "Integrity drives our transparent and honest approach. We guarantee clear invoicing, authorized pricing tariff structures, and authentic spare parts.",
  },
  {
    title: "Commitment",
    desc: "Commitment reflects our dedication to completing every commercial and residential project efficiently, reliably, and on schedule.",
  },
  {
    title: "Reliability",
    desc: "Our customers can depend on us at all times. We provide continuous support, expert diagnostics, and rapid emergency repair operations.",
  },
  {
    title: "Responsibility",
    desc: "We take full responsibility for our workforce, environmental safety, and structural integrity, ensuring peace of mind for every client.",
  },
];

const checklist = [
  "Certified & Registered Company (SECP, FBR, SRB, KCCI, SESSI)",
  "Experienced & Highly Skilled Technicians",
  "Fast Response & Reliable Doorstep Service",
  "Strict Customer Satisfaction Focus",
  "On-Time Project Completion & Handover",
  "Transparent Fixed-Rate Tariff Charts",
];

export default function About() {
  return (
    <>
      <Navbar />

      <main className="flex-grow bg-slate-50">
        {/* Banner Section */}
        <section className="bg-slate-900 text-white py-12 sm:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20"></div>
          <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              About Our Company
            </h1>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl mx-auto">
              Ali Cool Point (SMC-Private) Limited — leading the climate control and engineering services sector in Karachi.
            </p>
          </div>
        </section>

        {/* CEO Message Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Portrait */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[360px] aspect-[3/4] rounded-3xl overflow-hidden border-4 border-slate-100 shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10"></div>
                  <Image
                    src="/images/ceo.jpg"
                    alt="Hasnain Ali CEO"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-102"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20 bg-slate-950/60 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white text-center">
                    <h3 className="font-heading text-lg font-bold">Hasnain Ali</h3>
                    <p className="text-xs text-slate-300">Founder & CEO</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Statement */}
              <div className="lg:col-span-7 flex flex-col space-y-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-widest self-start">Leadership Message</span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Welcome to Ali Cool Point (SMC-Private) Limited
                </h2>
                
                <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                  <p>
                    <strong>"At Ali Cool Point, our journey is built on trust, quality, and dedication to serving our customers with excellence."</strong>
                  </p>
                  <p>
                    From the very beginning, our goal has been simple: to provide reliable, efficient, and high quality maintenance, renovation, and appliance repair services that truly make a difference in people's lives. We understand the importance of comfort, functionality, and timely service, whether it is a commercial project or a home appliance repair.
                  </p>
                  <p>
                    That is why our team is committed to delivering solutions that are not only effective but also long lasting and cost efficient. We proudly serve residential, corporate, and public clients across Karachi, providing professional services backed by skilled technicians, modern tools, and industry standard practices.
                  </p>
                  <p>
                    We thank you for choosing us as your engineering and climate control partner. We look forward to executing your projects with precision and dedication.
                  </p>
                </div>
                
                <div className="flex gap-4 border-t border-slate-100 pt-6">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">Position</span>
                    <span className="text-sm font-bold text-slate-900">Chief Executive Officer</span>
                  </div>
                  <div className="border-l border-slate-200 pl-4 flex flex-col">
                    <span className="text-xs text-slate-400">Company ID</span>
                    <span className="text-sm font-bold text-slate-900">SECP CUIN: 0324097</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Split-grid */}
        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col items-start space-y-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900">Our Vision</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Our vision is to become one of the most trusted and leading service providers in Pakistan, recognized for delivering high quality maintenance, renovation, and appliance repair solutions. We aim to set new standards of excellence in the industry through integrity, innovation.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col items-start space-y-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900">Our Mission</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Our mission is to provide reliable and cost effective services that meet the evolving needs of our customers while maintaining the highest standards of workmanship and professionalism. We strive to deliver quick and efficient solutions, ensuring timely service and long lasting results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-1">Corporate DNA</span>
              <h2 className="font-heading text-3xl font-extrabold text-slate-900 tracking-tight">Our Core Values</h2>
              <p className="text-sm text-slate-500 mt-2">
                These values guide our daily operations, hiring decisions, customer policies, and project executions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {values.map((value, idx) => (
                <div key={idx} className="flex flex-col bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs font-bold text-primary mb-2">0{idx + 1}. {value.title}</span>
                  <p className="text-xs text-slate-500 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us & Verification Checklist */}
        <section className="py-16 sm:py-24 bg-slate-900 text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col space-y-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-widest self-start">The ACP Advantage</span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Why We Are Karachi's Top Choice
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We don't just execute repairs; we offer legal protection, safety compliance, and official manufacturer authorization. Here is why residential, commercial, and banking clients contract their HVAC and renovation works to us:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {checklist.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Mini CTA card */}
              <div className="lg:col-span-5 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold">Ready to Start?</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Get in touch with Hasnain Ali or the Ali Cool Point sales office to discuss your building maintenance contract, AC deals, or renovation work today.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "bg-primary hover:bg-primary/95 text-white flex items-center justify-center gap-1"
                    )}
                  >
                    Contact Sales Office
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/certifications"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "border-white/20 text-white hover:bg-white/10"
                    )}
                  >
                    Verify Our Certificates
                  </Link>
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
