"use client";

import * as React from "react";
import { Mail, MapPin, Phone, MessageSquare, ShieldCheck, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getWhatsAppLink, OFFICIAL_PHONE } from "@/lib/whatsapp";
import { toast, Toaster } from "sonner";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    service: "AC Installation",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Please fill in the required fields: Name, Phone, and Message.");
      return;
    }

    setIsSubmitting(true);

    // Format WhatsApp Message Payload
    const textMessage = `Hello Ali Cool Point, I would like to request a quote.
    
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Service: ${formData.service}
Message: ${formData.message}`;

    const whatsappLink = getWhatsAppLink(OFFICIAL_PHONE, textMessage);

    // Trigger toast and delay redirect
    toast.success("Quote generated! Redirecting to WhatsApp to send request...");
    
    setTimeout(() => {
      window.open(whatsappLink, "_blank", "noopener,noreferrer");
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "AC Installation",
        message: ""
      });
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <Toaster position="top-center" richColors />

      <main className="flex-grow bg-slate-50">
        {/* Banner Section */}
        <section className="bg-slate-900 text-white py-12 sm:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20"></div>
          <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Get in Touch
            </h1>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl mx-auto">
              Have a query? Request a quote, book a service visit, or contact Founder Hasnain Ali directly.
            </p>
          </div>
        </section>

        {/* Contact Split Grid */}
        <section className="py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Form (7 Cols) */}
              <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="mb-6">
                  <h3 className="font-heading text-lg font-bold text-slate-900">Request a Service Quote</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out this form and submit. Your details will be formatted into a WhatsApp message payload so you can chat directly with our technicians.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Name <span className="text-red-500">*</span></label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Hasnain Ali"
                        className="bg-slate-50 border-slate-200 text-foreground"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                      <Input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="0300-4599911"
                        className="bg-slate-50 border-slate-200 text-foreground"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Email Address (Optional)</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="alicoolpoint777@gmail.com"
                        className="bg-slate-50 border-slate-200 text-foreground"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Service Category</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="AC Installation">AC Installation</option>
                        <option value="AC Gas Charging">AC Gas Charging</option>
                        <option value="AC Dismantling & General Service">AC Dismantling & Service</option>
                        <option value="Commercial Renovation">Commercial Renovation</option>
                        <option value="Professional Painting">Professional Painting</option>
                        <option value="False Ceiling fitting">False Ceiling fitting</option>
                        <option value="Wooden Cabinetry / Carpentry">Wooden Carpentry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Detailed Message <span className="text-red-500">*</span></label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please explain the details of the service required (e.g. how many AC units, ton capacity, dimensions of paint area...)"
                      rows={5}
                      className="bg-slate-50 border-slate-200 text-foreground"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/95 text-white font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting ? "Generating WhatsApp Payload..." : "Send Request via WhatsApp"}
                  </Button>
                </form>
              </div>

              {/* Right Column: Cards & Maps (5 Cols) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Contact Info Cards */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                  <h3 className="font-heading text-lg font-bold text-slate-900">Direct Office Contact</h3>
                  
                  <div className="space-y-4 text-sm text-slate-600">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-800 block">Office Address</span>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Shop No 780, Sector 4-C, Near Qabil Masjid, New Saeedabad, Baldia Town, Karachi, Sindh, Pakistan
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-800 block">Mobile Numbers</span>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Primary: <a href="tel:+923004599911" className="hover:text-primary transition-colors">0300-4599911</a> (Hasnain Ali) <br />
                          Secondary: <a href="tel:+923172615265" className="hover:text-primary transition-colors">0317-2615265</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-800 block">Email Address</span>
                        <p className="text-xs text-slate-500 mt-0.5">
                          <a href="mailto:alicoolpoint777@gmail.com" className="hover:text-primary transition-colors">
                            alicoolpoint777@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4 flex items-center gap-2 text-xs text-primary font-semibold">
                    <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                    <span>Registered SECP & FBR active taxpayer business</span>
                  </div>
                </div>

                {/* Google Maps Card */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm aspect-video relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.3243178229864!2d66.96781297597148!3d24.921024842838965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fa34b07f8df%3A0xe54ef84c7f078e47!2sSaeedabad%20Baldia%20Town%2C%20Karachi!5e0!3m2!1sen!2spk!4v1719918239088!5m2!1sen!2spk"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    title="Ali Cool Point Location Map"
                  />
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
