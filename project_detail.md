# Project Details: Ali Cool Point (SMC-Private) Limited Website

This document outlines the complete specifications, page structure, design aesthetics, and content details for the official website of **Ali Cool Point (SMC-Private) Limited**.

---

## 🛠️ Technology Stack
The web application will be developed using the following modern web technologies:
1. **Frontend Framework**: Next.js 14+ (App Router, React 18)
2. **Styling**: Tailwind CSS & Custom Vanilla CSS (for glassmorphic elements and premium metallic effects)
3. **UI Library**: shadcn/ui (accessible, customizable component library built on Radix UI)
4. **Icons**: Lucide React
5. **Animations**: Framer Motion (for smooth micro-animations, slide-ins, and transitions)
6. **Form Validation**: React Hook Form + Zod
7. **Hosting**: Vercel (or equivalent optimized Next.js deployment platform)

---

## 🎨 Design System & Aesthetics
To create a premium look that satisfies the client, the UI will be designed around the colors and texture of the official **Ali Cool Point (ACP)** logo:

*   **Primary Palette (Logo Metallic Blue)**:
    *   `#00A8E8` (Vibrant Cyan/Blue)
    *   `#0088CC` (Deep Sky Blue)
    *   Gradient: `from-cyan-500 to-blue-600` (Brushed metal style)
*   **Secondary Palette**:
    *   `#0F172A` (Slate 900 / Dark Navy - base for dark mode and rich backgrounds)
    *   `#F8FAFC` (Slate 50 / Off-white - clean background for light mode)
*   **Accent Colors**:
    *   `#E2E8F0` (Silver/Ice Blue highlights)
    *   White (`#FFFFFF`) for typography and high contrast text
*   **Visual Style**:
    *   **Glassmorphism**: Translucent cards with frosted glass effect (`backdrop-blur-md bg-white/10 border border-white/20`) for dark mode elements.
    *   **Brushed Metallic Texture**: Subtle gradients mimicking the ACP logo's metallic appearance for buttons, headers, and key features.
    *   **Micro-Animations**: Hover animations on buttons, trust badges, and cards using Framer Motion.

---

## 📂 Website Structure & Pages

The website will be organized into **5 main pages** and **1 document viewing portal**:

### 1. 🏠 Home Page (`/`)
*   **Hero Section**: 
    *   A premium, bold header with a metallic gradient title: *"Your Trusted Partner in Climate Control & Engineering Solutions."*
    *   Background featuring a stylized video player running the intro video (`WhatsApp Video 2026-07-16 at 11.22.51 AM.mp4`). The video will be styled inside a sleek browser/device frame with autoplay (muted), loop, and custom premium controls.
    *   Primary CTA: *"Explore Services"* & Secondary CTA: *"Get a Free Quote (WhatsApp)"*.
*   **Core Services Section**: Grid showing the top 3 services (AC Services, Renovations, Appliance Repair) with icons and hover animations.
*   **AC Deals / E-Commerce Gallery**: Highlights of premium split and floor-standing AC units with pricing and a *"Buy via WhatsApp"* button.
*   **"We Are Certified" Trust Badges**: 
    *   A highly styled, grid-based showcase of the official registrations: **SECP, FBR, KCCI, PEC, SESSI, SRB, and IPO**.
    *   **Design**: Monochrome grey badges that smoothly transition to their full corporate colors on hover, aligned with the metallic blue aesthetic.
*   **Clients Section**: A rolling carousel showing trusted clients: **Virtual University, Meezan Bank, TCS, and Foodpanda**.

### 2. 🏢 About Us Page (`/about`)
*   **CEO Message Section**:
    *   Displays the professional portrait of **Hasnain Ali (CEO)** (`owner pic .jpeg`) in a premium geometric frame with metallic borders.
    *   Text: A statement detailing commitment to trust, quality, and servicing Karachi with integrity.
*   **Vision & Mission**:
    *   *Vision*: To become Pakistan's leading, most trusted service provider, setting new standards of integrity and innovation.
    *   *Mission*: To deliver reliable, cost-effective maintenance, renovation, and repair solutions with the highest standards of professionalism.
*   **Core Values Grid**: Quality, Integrity, Commitment, Reliability, and Responsibility.
*   **Why Choose Us?**: Certified & Registered Company, Experienced & Skilled Technicians, Fast & Reliable Service, Customer Satisfaction Focus, and On-Time Project Completion.

### 3. 🛠️ Services Page (`/services`)
Detailed sections with descriptions and pricing tables:
*   **HVAC / Air Conditioning Services**:
    *   Installation & Dismantling
    *   Gas Charging & Leakage Repair
    *   General Service & Chemical Washing
*   **AC Installation Tariff Table**: An interactive, search-enabled pricing table constructed directly from `Pearl Customer Service.docx`:
    *   *Wall Mounted (1, 1.5, 2 Ton)*: PKR 2,500
    *   *Floor Standing / Cassette / Duct Type (2 Ton)*: PKR 4,000
    *   *Floor Standing / Cassette / Duct Type (4 Ton)*: PKR 7,000
    *   *Floor Standing / Cassette / Duct Type (8 Ton)*: PKR 12,000
    *   *Gas Charging (1 Ton / 1.5 Ton / 2 Ton / Floor Standing)*: PKR 6,000 to PKR 32,000
    *   *Materials & Extra pipe tariffs* (copper pipes, brackets, wires, etc.).
*   **Commercial Renovation & Maintenance**: Carpentry, false ceilings (gypsum/aluminum), interior/exterior paint, and woodwork.

### 4. 🛍️ E-Commerce / AC Deals Page (`/deals`)
*   A filterable catalog of air conditioning systems.
*   Categories: Split AC, Floor Standing, Cassette AC, Inverter Series.
*   Integration: Clicking on a product opens a modal with specifications and a dynamic *"Order via WhatsApp"* button that pre-fills a message containing the product name, ton capacity, and price.

### 5. 📜 Official Certifications Page (`/certifications`)
A page highlighting the company's verified credentials to build absolute trust for government and commercial contracts:
*   Interactive thumbnails of the registration certificates:
    *   **SECP Incorporation Certificate** (CUIN: 0324097)
    *   **FBR NTN Certificate** (NTN: 4240123542475)
    *   **Sindh Revenue Board (SRB) STN Certificate** (S4791217-0)
    *   **Karachi Chamber of Commerce & Industry (KCCI) Certificate** (Membership No: 150350)
    *   **Sindh Employees' Social Security Institution (SESSI) Certificate** (Reg No: 2026030012)
    *   **Labour Department Sindh (Shops & Establishments) License** (Reg No: LHRD-2026-02-22735)
    *   **IPO Trademark Certificate**
*   Clicking a certificate opens a beautiful full-screen document lightbox where the user can verify registration dates, names, and validity.

### 6. 📞 Contact Us Page (`/contact`)
*   **Contact Info Cards**:
    *   **Phone Numbers**: `0300-4599911` | `0317-2615265`
    *   **Email Address**: `alicoolpoint777@gmail.com`
    *   **Website**: `www.alicoolpoint.com`
    *   **Physical Address**: `Shop No 780, Sector 4-C, Near Qabil Masjid, New Saeedabad, Baldia Town, Karachi, Sindh, Pakistan`
*   **Interactive Contact Form**: Handled via Zod schema, allowing commercial clients to request custom quotes.
*   **Interactive Map**: Google Map embed highlighting Saeedabad, Baldia Town, Karachi.

---

## 🗃️ Verification Details & Official Credentials

For absolute accuracy, the website will display and cite the exact verified registration info:

| Authority / Certificate | Registered Name | Number / ID | Issue Date | Address on Document |
| :--- | :--- | :--- | :--- | :--- |
| **SECP (Incorporation)** | Ali Cool Point (SMC-Private) Limited | CUIN: 0324097 | 23-Jan-2026 | Head Office, Islamabad (Electronic) |
| **SRB (Sales Tax - STN)** | Hasnain Ali / Ali Cool Point | S4791217-0 | 23-Feb-2026 | Shop No. 780, Sector 4, Block C, Saeedabad, Baldia Town, Karachi |
| **FBR (Income Tax - NTN)**| Hasnain Ali | 4240123542475 | 01-Oct-2021 | Shop No. 780, Sec. 4, Block C, Saeedabad Baldia Town, Karachi |
| **KCCI (Membership)** | M/s. Ali Cool Point | Member No: 150350 | 07-May-2026 | Shop No. 780, Sector 4, Block -C, Saeedabad Baldia Town, Karachi |
| **Labour Department Sindh** | Ali Cool Point / Hasnain Ali | LHRD-2026-02-22735 | 27-Feb-2026 | Shop No. 780, Sec 4, Block D, New Saeedabad, Baldia Town, Karachi |
| **SESSI (Social Security)** | M/s. Ali Cool Point | Reg No: 2026030012 | 09-Mar-2026 | Shop No. 780, Sec 4, Block D, New Saeedabad, Baldia Town, Karachi |
| **PEC (Engineering)** | Ali Cool Point | Firm Reg. Processed | *Expected* | *Registered business activity: Maintenance & Renovation* |
| **IPO (Trademark)** | Ali Cool Point | Filed/Registered | -- | -- |

---

## ⚡ Next Steps
1. Initialize the Next.js app in the `./ali-cool-point-smc` folder using `npx create-next-app`.
2. Configure Tailwind CSS with the metallic blue palette tokens.
3. Install and configure shadcn/ui components (Button, Dialog, Sheet, Carousel, Card, Table).
4. Place assets (`owner pic .jpeg`, `main logo .jpeg`, certificates, and video) in the `/public` folder.
5. Create page components and write dynamic interactions.
