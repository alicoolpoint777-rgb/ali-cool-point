import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Wrench, 
  Settings, 
  Hammer, 
  Palette, 
  Grid, 
  ChevronRight, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  Users 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/VideoPlayer";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { getWhatsAppLink, OFFICIAL_PHONE } from "@/lib/whatsapp";

const servicesPreview = [
  {
    title: "AC Installation & Repair",
    desc: "Authorized Pearl Dealer & Service Centre. Complete split, floor stand, and cassette AC setup, maintenance, and gas charging.",
    icon: Wrench,
    href: "/services",
  },
  {
    title: "Commercial Renovation",
    desc: "Complete building maintenance and structural renovations designed to enhance business functionality and visual appeal.",
    icon: Settings,
    href: "/services",
  },
  {
    title: "Color / Paint Work",
    desc: "Professional interior and exterior painting services using premium materials for long-lasting, elegant finishes.",
    icon: Palette,
    href: "/services",
  },
  {
    title: "Wooden & Carpentry Work",
    desc: "Custom wood cabinet designing, door installations, partition setups, repairs, and professional polishing solutions.",
    icon: Hammer,
    href: "/services",
  },
  {
    title: "False Ceiling Work",
    desc: "Expert installations of gypsum, POP, and aluminum ceiling systems with premium LED lighting setups.",
    icon: Grid,
    href: "/services",
  },
];

const trustBadges = [
  { name: "SECP", doc: "secp_certificate.pdf", details: "Incorporated Company (SMC-Pvt) Ltd" },
  { name: "FBR NTN", doc: "fbr_ntn.pdf", details: "Registered Active Income Taxpayer" },
  { name: "SRB STN", doc: "srb_stn.pdf", details: "Sindh Sales Tax Registered Firm" },
  { name: "KCCI", doc: "kcci_certificate.jpg", details: "Karachi Chamber Member (#150350)" },
  { name: "SESSI", doc: "sessi_certificate.pdf", details: "Social Security Employer Registered" },
  { name: "Labour Dept", doc: "labour_certificate.pdf", details: "Sindh Shops & Establishments Act" },
  { name: "IPO", doc: "ipo_certificate.pdf", details: "Trademark Registry Protection" },
];

const featuredDeals = [
  {
    name: "Pearl Smart Inverter AC",
    capacity: "1.5 Ton",
    price: "185,000",
    features: ["75% Energy Saving", "T3 Inverter Compressor", "Heat & Cool", "10 Years Compressor & 1 Year Parts Warranty"],
    image: "/images/products/WhatsApp Image 2026-07-16 at 11.13.35 AM (1).jpeg"
  },
  {
    name: "Pearl Eco-Split AC",
    capacity: "1.0 Ton",
    price: "155,000",
    features: ["Gold Fin Condenser", "Low Voltage Startup", "R410 Eco Gas", "10 Years Compressor & 1 Year Parts Warranty"],
    image: "/images/products/WhatsApp Image 2026-07-16 at 11.13.35 AM (2).jpeg"
  },
  {
    name: "Pearl Floor Standing AC",
    capacity: "2.0 Ton",
    price: "350,000",
    features: ["Heavy Duty Air Throw", "Digital Control Panel", "Auto Restart", "10 Years Compressor & 1 Year Parts Warranty"],
    image: "/images/products/flore mounted 1.jpeg"
  }
];

const clients = [
  { name: "State Bank of Pakistan", logo: "State Bank of Pakistan" },
  { name: "Habib Bank Limited (HBL)", logo: "Habib Bank Limited (HBL)" },
  { name: "Meezan Bank", logo: "Meezan Bank" },
  { name: "TCS Express", logo: "TCS Express" },
  { name: "foodpanda", logo: "foodpanda" },
  { name: "Virtual University", logo: "Virtual University" },
];

export default function Home() {
  const quoteLink = getWhatsAppLink(
    OFFICIAL_PHONE,
    "Hello Ali Cool Point, I would like to get a quote/estimate for AC or commercial renovation services."
  );

  return (
    <>
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-16 lg:py-24">
          {/* Decorative background grids */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
          
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Hero Left Content */}
              <div className="lg:col-span-6 flex flex-col space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center self-center lg:self-start gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary backdrop-blur-md">
                  <ShieldCheck className="h-4 w-4" />
                  SECP & FBR Registered SMC-Private Limited
                </div>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight uppercase">
                  HVAC Electrical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Maintenance</span> & Renovation
                </h1>
                <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0">
                  Authorized Dealer and Certified Service Centre for **Pearl Air Conditioners**. Specializing in expert installations, repairs, commercial renovations, false ceiling, paint, and woodwork.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/services"
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" }),
                      "bg-primary hover:bg-primary/95 text-white font-semibold shadow-lg shadow-primary/20 w-full sm:w-auto"
                    )}
                  >
                    View Services & Tariff
                  </Link>
                  <a
                    href={quoteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-transparent px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 hover:text-white transition-colors w-full sm:w-auto"
                  >
                    Get Free Quote
                  </a>
                </div>
              </div>

              {/* Hero Right Video Frame */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="relative p-2 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-2xl">
                  <div className="flex items-center space-x-2 px-4 pb-2 text-slate-500 text-xs border-b border-white/5 mb-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block"></span>
                    <span className="ml-2 font-mono text-[10px] text-slate-400 uppercase tracking-widest">Company Presentation Video</span>
                  </div>
                  <VideoPlayer />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WE ARE CERTIFIED / TRUST SECTION */}
        <section className="bg-slate-50 py-12 border-y border-slate-200">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                100% Certified & Registered Business
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                We are fully compliant with Pakistan's corporate, tax, labor, and local Chamber standards to handle government, commercial, and residential projects.
              </p>
            </div>
            
            {/* Grid of Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 items-stretch">
              {trustBadges.map((badge, idx) => (
                <Link
                  key={idx}
                  href="/certifications"
                  className="group flex flex-col items-center justify-between p-4 rounded-xl bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/45 hover:-translate-y-0.5 text-center"
                >
                  <div className="h-10 flex items-center justify-center font-heading font-extrabold text-slate-400 group-hover:text-primary transition-colors text-lg tracking-wider">
                    {badge.name}
                  </div>
                  <div className="mt-2">
                    <h4 className="text-[11px] font-bold text-slate-700 leading-tight">{badge.name} Document</h4>
                    <p className="text-[9px] text-slate-400 leading-tight mt-0.5">{badge.details}</p>
                  </div>
                  <span className="text-[9px] text-primary font-medium mt-3 inline-flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    Verify Document <ChevronRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CORE SERVICES */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-1">Our Expertise</span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Comprehensive Services We Provide
                </h2>
              </div>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-primary/20 text-primary hover:bg-primary/5 self-start flex items-center gap-2"
                )}
              >
                View Service Tariff Chart
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {servicesPreview.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <Card key={idx} className="border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20 flex flex-col justify-between group">
                    <CardContent className="p-5 flex flex-col h-full justify-between">
                      <div>
                        <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <h3 className="font-heading text-base font-bold text-slate-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                      <Link 
                        href={service.href} 
                        className="text-xs font-semibold text-primary flex items-center gap-0.5 mt-4 group-hover:translate-x-1 transition-transform"
                      >
                        Learn More <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* AC DEALS PREVIEW */}
        <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-1">Authorized Pearl Partner</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Pearl Air Conditioners Deals
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                Get special discount deals on Pearl smart split and floor standing AC units, fully backed by official manufacturer warranty and installation service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredDeals.map((product, idx) => {
                const buyLink = getWhatsAppLink(
                  OFFICIAL_PHONE,
                  `Hi Ali Cool Point, I want to order the Pearl AC: "${product.name} (${product.capacity})" priced at PKR ${product.price}. Please share availability and order steps.`
                );
                return (
                  <div key={idx} className="flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
                    {/* Placeholder Image container */}
                    <div className="relative aspect-video w-full bg-slate-100 flex items-center justify-center border-b border-slate-200 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent z-10"></div>
                      {/* Using custom generated image path safely */}
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-20">
                        {product.capacity}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-xs text-slate-400 mt-1">Authorized dealer pricing</p>
                        
                        <div className="mt-4 space-y-2">
                          {product.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-600">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

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
                            buttonVariants({ variant: "default", size: "sm" }),
                            "bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
                          )}
                        >
                          Order via WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/deals"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-primary/20 text-primary hover:bg-primary/5"
                )}
              >
                View Full AC Catalog
              </Link>
            </div>
          </div>
        </section>

        {/* TRUSTED CLIENTS */}
        <section className="py-12 bg-white border-t border-slate-200">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-center font-heading text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">
              Trusted by Leading Organizations
            </h3>
            
            {/* Logo grid wrapper */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
              {clients.map((client, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-center p-6 h-16 w-full max-w-[200px] border border-slate-100 rounded-xl bg-slate-50/50 shadow-sm text-slate-500 font-heading font-extrabold text-xs uppercase tracking-wider transition-colors hover:text-slate-800 text-center"
                >
                  {client.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US ACCORDION PREVIEW */}
        <section className="py-16 sm:py-24 bg-gradient-to-r from-slate-900 to-slate-950 text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-1">Our Strengths</span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  Why Commercial & Residential Clients Choose Us
                </h2>
                <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                  Ali Cool Point (SMC-Private) Limited is structured to offer premium quality project execution with complete legal assurance. Our skilled workforce, transparent tariff systems, and official dealer licenses make us Karachi's top climate control firm.
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="flex flex-col space-y-1">
                    <span className="text-2xl font-extrabold text-primary flex items-center gap-1">
                      <Clock className="h-5 w-5 text-primary shrink-0" />
                      100%
                    </span>
                    <span className="text-xs text-slate-400">On-Time Completion</span>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <span className="text-2xl font-extrabold text-primary flex items-center gap-1">
                      <TrendingUp className="h-5 w-5 text-primary shrink-0" />
                      Licensed
                    </span>
                    <span className="text-xs text-slate-400">Authorized by Pearl</span>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <span className="text-2xl font-extrabold text-primary flex items-center gap-1">
                      <Users className="h-5 w-5 text-primary shrink-0" />
                      Expert
                    </span>
                    <span className="text-xs text-slate-400">Skilled Engineers</span>
                  </div>
                </div>
              </div>

              {/* CEO Message CTA */}
              <div className="relative p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">Message From Our CEO</h3>
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    "At Ali Cool Point, our journey is built on trust, quality, and dedication to serving our customers with excellence. From the very beginning, our goal has been simple: to provide reliable, efficient, and high quality maintenance, renovation, and appliance repair services that truly make a difference in people's lives."
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-6 border-t border-white/5 pt-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20">
                    <Image
                      src="/images/ceo.jpg"
                      alt="Hasnain Ali"
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Hasnain Ali</h4>
                    <p className="text-[10px] text-slate-500">CEO, Ali Cool Point (SMC-Pvt) Ltd</p>
                  </div>
                  <Link
                    href="/about"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "sm" }),
                      "text-primary hover:text-primary-foreground hover:bg-primary ml-auto"
                    )}
                  >
                    Read CEO Profile
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
