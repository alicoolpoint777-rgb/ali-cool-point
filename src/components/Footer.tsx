import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { OFFICIAL_PHONE, SECONDARY_PHONE } from "@/lib/whatsapp";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services Portfolio", href: "/services" },
  { name: "AC Deals & Catalog", href: "/deals" },
  { name: "Verifications", href: "/certifications" },
  { name: "Get in Touch", href: "/contact" },
];

const services = [
  "HVAC & AC Service",
  "AC Installation Tariff",
  "Commercial Renovation",
  "Professional Paint Work",
  "False Ceiling Fitting",
  "Woodwork & Cabinets",
];

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t border-slate-900">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Company Profile */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-9 w-9 overflow-hidden rounded-lg border border-primary/20">
                <Image
                  src="/images/logo.jpg"
                  alt="Ali Cool Point Logo"
                  fill
                  className="object-cover"
                  sizes="36px"
                />
              </div>
              <span className="font-heading text-lg font-bold tracking-tight text-white">
                Ali Cool Point
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ali Cool Point (SMC-Private) Limited is a certified and trusted engineering and maintenance service provider specializing in HVAC solutions, commercial renovations, and home appliance repairs across Karachi.
            </p>
            <div className="flex items-center gap-2 text-xs text-primary font-semibold">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>SECP SEC. 16 Compliant Company</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-heading text-sm font-semibold text-white uppercase tracking-wider">Quick Navigation</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-heading text-sm font-semibold text-white uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((item, idx) => (
                <li key={idx} className="text-slate-400 hover:text-slate-200 transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Registration */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-heading text-sm font-semibold text-white uppercase tracking-wider">Contact Details</h3>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>
                  Shop No 780, Sector 4-C, Near Qabil Masjid, New Saeedabad, Baldia Town, Karachi, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href={`tel:+923004599911`} className="hover:text-white transition-colors">0300-4599911</a>
                <span className="text-slate-600">|</span>
                <a href={`tel:+923172615265`} className="hover:text-white transition-colors">0317-2615265</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:alicoolpoint777@gmail.com" className="hover:text-white transition-colors">
                  alicoolpoint777@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-slate-900" />

        {/* Lower Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Ali Cool Point (SMC-Private) Limited. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <span>SECP CUIN: 0324097</span>
            <span className="text-slate-800">•</span>
            <span>SRB STN: S4791217-0</span>
            <span className="text-slate-800">•</span>
            <span>FBR NTN: 4240123542475</span>
            <span className="text-slate-800">•</span>
            <span>SESSI No: 2026030012</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
