"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { getWhatsAppLink, OFFICIAL_PHONE } from "@/lib/whatsapp";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "AC Deals", href: "/deals" },
  { name: "Certifications", href: "/certifications" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const emergencyLink = getWhatsAppLink(
    OFFICIAL_PHONE,
    "Hello Ali Cool Point, I need urgent AC repair/maintenance service. Please contact me as soon as possible."
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-primary/20">
            <Image
              src="/images/logo.jpg"
              alt="Ali Cool Point Logo"
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
          <span className="font-heading text-lg font-bold tracking-tight text-foreground sm:text-xl">
            Ali Cool Point <span className="text-xs font-normal text-muted-foreground block sm:inline sm:ml-1">(SMC-Pvt) Ltd</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary font-semibold border-b-2 border-primary pb-1"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:03004599911"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-primary/20 text-foreground hover:bg-primary/5 flex items-center gap-2"
            )}
          >
            <Phone className="h-4 w-4 text-primary" />
            Call Now
          </a>
          <a
            href={emergencyLink}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-primary hover:bg-primary/95 text-primary-foreground shadow-md transition-all duration-200 hover:shadow-lg flex items-center gap-2"
            )}
          >
            <Wrench className="h-4 w-4 animate-bounce" />
            Emergency Repair
          </a>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className="flex items-center space-x-2 md:hidden">
          <a
            href={emergencyLink}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "bg-primary hover:bg-primary/95 text-primary-foreground text-xs px-3 flex items-center gap-1.5"
            )}
          >
            <Wrench className="h-3.5 w-3.5" />
            Emergency
          </a>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="h-9 w-9 text-foreground hover:bg-muted" aria-label="Toggle Menu" />}>
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background border-l border-border/40 p-6">
              <SheetHeader className="mb-6">
                <SheetTitle className="text-left font-heading text-lg font-bold text-foreground">
                  Navigation Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-primary py-2 border-b border-border/20",
                      pathname === item.href
                        ? "text-primary font-semibold pl-2 border-l-2 border-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col space-y-3 mt-8">
                <a
                  href="tel:03004599911"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full flex items-center justify-center gap-2"
                  )}
                >
                  <Phone className="h-4 w-4" />
                  Call Office
                </a>
                <a
                  href={emergencyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full bg-primary hover:bg-primary/95 text-primary-foreground flex items-center justify-center gap-2"
                  )}
                >
                  <Wrench className="h-4 w-4" />
                  WhatsApp Support
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
