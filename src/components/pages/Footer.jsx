
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  Building2,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const pathname = location.pathname;

  // ============================================================
  // ACTIVE PAGE
  // ============================================================

  const isActive = (href) => {
    // Home only active on exact home page
    if (href === "/") {
      return pathname === "/";
    }

    // Products active on:
    // /products
    // /products/admixtures
    // /products/anything
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // ============================================================
  // QUICK LINKS
  // ============================================================

  const quickLinks = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Products", "/products"],
    ["Services", "/service"],
    ["Gallery", "/gallery"],
    ["Clients", "/clients"],
    ["Certificates", "/certificate"],
    ["Contact Us", "/contact"],
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* ============================================================
          BACKGROUND GLOW
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-sky-500/10 blur-[100px]" />

        <div className="absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />

        <div className="absolute inset-0 opacity-[0.018]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      {/* ============================================================
          TOP CTA
      ============================================================ */}

      <div className="relative mx-auto max-w-7xl px-5 pt-6 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-sky-500/15 via-blue-500/10 to-transparent p-4 shadow-xl shadow-sky-950/20 sm:p-5 lg:p-6">
          {/* Glow */}

          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />

          <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-sky-300">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50" />
                Let's Build Together
              </div>

              <h2 className="text-xl font-black leading-tight sm:text-2xl lg:text-3xl">
                Building Better with{" "}
                <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Chemistry & Innovation
                </span>
              </h2>

              <p className="mt-1.5 max-w-xl text-[11px] leading-5 text-slate-300 sm:text-xs">
                Reliable construction chemical solutions engineered for
                strength, durability, protection and long-lasting performance.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-black text-sky-700 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-5 sm:py-3 sm:text-sm"
            >
              Contact Us

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ============================================================
          MAIN FOOTER
      ============================================================ */}

      <div className="relative mx-auto max-w-7xl px-5 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-7 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">

          {/* ========================================================
              BRAND
          ======================================================== */}

          <div>
            <Link to="/" className="group inline-flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 shadow-lg shadow-sky-900/30 transition-transform duration-300 group-hover:scale-105">
                <Building2 size={19} strokeWidth={2.5} />
              </div>

              <div>
                <div className="text-base font-black tracking-tight sm:text-lg">
                  KMR <span className="text-sky-400">CONCHEM</span>
                </div>

                <div className="text-[7px] font-bold uppercase tracking-[0.25em] text-slate-500">
                  Construction Chemicals
                </div>
              </div>
            </Link>

            <p className="mt-3 max-w-sm text-[11px] leading-5 text-slate-400 sm:text-xs">
              Advanced construction chemical solutions designed for stronger,
              safer and more durable infrastructure. We combine chemistry,
              technology and innovation to build better.
            </p>

            {/* ======================================================
                SOCIAL ICONS
            ====================================================== */}

            <div className="mt-3 flex items-center gap-2">

              {/* Facebook */}

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-sky-500/10 hover:text-sky-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.8V3.94c-.31-.04-1.37-.14-2.6-.14-2.57 0-4.33 1.57-4.33 4.46V10H7.15v3h2.72v8h3.63Z" />
                </svg>
              </a>

              {/* Instagram */}

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-sky-500/10 hover:text-sky-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* LinkedIn */}

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-sky-500/10 hover:text-sky-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M6.5 8.5H3.2V21h3.3V8.5ZM4.85 3A1.95 1.95 0 1 0 4.85 6.9 1.95 1.95 0 0 0 4.85 3ZM21 13.8c0-3.77-2.01-5.52-4.69-5.52-2.17 0-3.14 1.2-3.68 2.05V8.5H9.33V21h3.3v-6.19c0-1.63.31-3.2 2.32-3.2 1.98 0 2 1.85 2 3.3V21H21v-7.2Z" />
                </svg>
              </a>

              {/* X / Twitter */}

              <a
                href="#"
                aria-label="X"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-sky-500/10 hover:text-sky-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-6.41L6.45 22H3.33l7.24-8.28L2.8 2h6.4l4.43 5.86L18.9 2Zm-1.1 17.85h1.73L8.28 4.02H6.42L17.8 19.85Z" />
                </svg>
              </a>

            </div>
          </div>

          {/* ========================================================
              QUICK LINKS
          ======================================================== */}

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>

            <div className="mt-3 space-y-1.5">
              {quickLinks.map(([name, path]) => {
                const active = isActive(path);

                return (
                  <Link
                    key={name}
                    to={path}
                    className={`group flex items-center gap-1.5 text-[11px] transition-all duration-300 sm:text-xs ${
                      active
                        ? "font-bold text-sky-400"
                        : "text-slate-400 hover:text-sky-400"
                    }`}
                  >
                    <ChevronRight
                      size={11}
                      className={`transition-all duration-300 ${
                        active
                          ? "translate-x-1 text-sky-400 opacity-100"
                          : "text-sky-500 opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                      }`}
                    />

                    <span
                      className={`transition-transform duration-300 ${
                        active
                          ? "translate-x-1"
                          : "group-hover:translate-x-1"
                      }`}
                    >
                      {name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ========================================================
              PRODUCTS
          ======================================================== */}

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.18em] text-white">
              Our Products
            </h3>

            <div className="mt-3 space-y-1.5">
              {[
                "Admixtures",
                "Water Proofing Compounds",
                "Curing Compounds",
                "Accelerators & Shotcrete",
                "Shutter Release Agents",
                "Water Reducing Admixture",
              ].map((product) => (
                <Link
                  key={product}
                  to="/products"
                  className="group flex items-center gap-1.5 text-[11px] text-slate-400 transition-colors duration-300 hover:text-sky-400 sm:text-xs"
                >
                  <ChevronRight
                    size={11}
                    className="text-sky-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  />

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {product}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* ========================================================
              CONTACT
          ======================================================== */}

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.18em] text-white">
              Get In Touch
            </h3>

            <div className="mt-3 space-y-2.5">

              {/* ==================================================
                  ADDRESS
              ================================================== */}

              <div className="flex gap-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-sky-400/10 bg-sky-500/10 text-sky-400">
                  <MapPin size={14} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                    Head Office
                  </p>

                  <p className="mt-0.5 text-[11px] leading-4 text-slate-300">
                    Plot No:- 1110, Sector 123,
                    <br />
                    Sunny Enclave, Mohali,
                    <br />
                    Punjab - 140301
                  </p>
                </div>
              </div>

              {/* ==================================================
                  PHONE
              ================================================== */}

              <div className="flex gap-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-sky-400/10 bg-sky-500/10 text-sky-400">
                  <Phone size={14} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                    Call Us
                  </p>

                  <a
                    href="tel:+918950744069"
                    className="mt-0.5 block text-[11px] font-semibold text-slate-300 transition-colors hover:text-sky-400"
                  >
                    +91 895-074-4069
                  </a>
                </div>
              </div>

              {/* ==================================================
                  EMAIL
              ================================================== */}

              <div className="flex gap-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-sky-400/10 bg-sky-500/10 text-sky-400">
                  <Mail size={14} />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                    Email Us
                  </p>

                  <a
                    href="mailto:kmrindia.in@gmail.com"
                    className="mt-0.5 block break-all text-[11px] font-semibold text-slate-300 transition-colors hover:text-sky-400"
                  >
                    kmrindia.in@gmail.com
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          BOTTOM BAR
      ============================================================ */}

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">

          <p className="text-center text-[10px] text-slate-500 sm:text-left">
            © {currentYear}{" "}
            <span className="font-semibold text-slate-300">
              KMR Conchem
            </span>
            . All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-3 text-[10px] text-slate-500">
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-sky-400"
            >
              Privacy Policy
            </Link>

            <span className="h-3 w-px bg-white/10" />

            <Link
              to="/terms"
              className="transition-colors hover:text-sky-400"
            >
              Terms & Conditions
            </Link>
          </div>

          <p className="text-center text-[10px] text-slate-600 sm:text-right">
            Built with Chemistry & Innovation
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
