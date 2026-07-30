import React from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  CheckCircle2,
  Factory,
  ShieldCheck,
  Beaker,
  Building2,
  Lightbulb,
  Handshake,
  Award,
  FlaskConical,
  Users,
  Globe2,
} from "lucide-react";

// ============================================================
// FACTORY VIDEO
// ============================================================

import factoryVideo from "../../../assets/hero/factory.mp4";

// ============================================================
// ABOUT COMPONENT
// ============================================================

export default function About() {
  // ==========================================================
  // ABOUT FEATURES
  // ==========================================================

  const aboutFeatures = [
    {
      icon: Factory,
      title: "Advanced Manufacturing",
      description:
        "Modern production facilities ensuring consistent quality and superior product performance.",
    },

    {
      icon: ShieldCheck,
      title: "Quality Tested Products",
      description:
        "Every product undergoes rigorous testing to ensure reliable and long-lasting performance.",
    },

    {
      icon: FlaskConical,
      title: "Innovative Chemical Solutions",
      description:
        "Advanced construction chemical solutions developed for demanding infrastructure requirements.",
    },

    {
      icon: Beaker,
      title: "Technical Expertise",
      description:
        "Strong technical knowledge and continuous innovation help us deliver dependable solutions.",
    },

    {
      icon: Users,
      title: "Customer Satisfaction",
      description:
        "Customer requirements remain at the heart of our products, service and technical support.",
    },

    {
      icon: Globe2,
      title: "Sustainable & Eco Friendly",
      description:
        "Responsible solutions focused on durability, efficiency and a better environment.",
    },
  ];

  // ==========================================================
  // BOTTOM HIGHLIGHTS
  // ==========================================================

  const aboutHighlights = [
    {
      icon: FlaskConical,
      title: "Superior Quality",
      description:
        "Every product is developed with precision and tested to ensure high quality and performance.",
    },

    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description:
        "We continuously innovate to bring advanced solutions that meet evolving construction needs.",
    },

    {
      icon: Handshake,
      title: "Trusted Partnership",
      description:
        "Strong relationships, transparent business and long-term trust are at the core of what we do.",
    },
  ];

  // ==========================================================
  // COMPANY STATS
  // ==========================================================

  const companyStats = [
    {
      icon: Factory,
      value: "50+",
      title: "Premium",
      subtitle: "Products",
    },

    {
      icon: Users,
      value: "5+",
      title: "Years of",
      subtitle: "Experience",
    },

    {
      icon: ShieldCheck,
      value: "500+",
      title: "Projects",
      subtitle: "Completed",
    },

    {
      icon: FlaskConical,
      value: "10+",
      title: "Quality",
      subtitle: "Tests",
    },

    {
      icon: Globe2,
      value: "25+",
      title: "States",
      subtitle: "Served",
    },
  ];

  // ==========================================================
  // MAIN SECTION
  // ==========================================================

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f8fbff] py-20 md:py-24 lg:py-28"
    >
      {/* ======================================================
          BACKGROUND DECORATION
      ======================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* LEFT BLUE GLOW */}

        <div className="absolute -left-40 top-32 h-[420px] w-[420px] rounded-full bg-sky-100/70 blur-[120px]" />

        {/* RIGHT BLUE GLOW */}

        <div className="absolute -right-40 top-[420px] h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-[140px]" />

        {/* BOTTOM CENTER GLOW */}

        <div className="absolute bottom-0 left-1/2 h-[350px] w-[900px] -translate-x-1/2 rounded-full bg-sky-100/40 blur-[130px]" />

        {/* ====================================================
            SOFT DOT PATTERN — LEFT
        ===================================================== */}

        <div
          className="absolute left-5 top-20 h-32 w-32 opacity-50 md:left-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(14,165,233,0.35) 2px, transparent 2px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* ====================================================
            SOFT DOT PATTERN — RIGHT
        ===================================================== */}

        <div
          className="absolute right-5 bottom-28 h-32 w-32 opacity-40 md:right-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(14,165,233,0.30) 2px, transparent 2px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* ====================================================
            LARGE SOFT CIRCLE
        ===================================================== */}

        <div className="absolute left-1/2 top-[260px] h-[700px] w-[700px] -translate-x-1/2 rounded-full border border-sky-100/60" />

        <div className="absolute left-1/2 top-[310px] h-[600px] w-[600px] -translate-x-1/2 rounded-full border border-sky-100/40" />
      </div>

      {/* ======================================================
          MAIN CONTAINER
      ======================================================= */}

      <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
        {/* ====================================================
            TOP HEADING
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-5xl text-center"
        >
          {/* TOP BADGE */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-sky-400 bg-white px-5 py-2 shadow-[0_6px_25px_rgba(14,165,233,0.08)] md:px-6">
            <Building2 size={17} strokeWidth={2} className="text-sky-500" />

            <span className="text-xs font-bold tracking-[2px] text-sky-500 sm:text-sm">
              ABOUT KMR CONCHEM
            </span>
          </div>

          {/* MAIN HEADING */}

          <h2 className="text-3xl font-extrabold leading-[1.08] tracking-tight text-[#102944] sm:text-4xl md:text-5xl lg:text-[54px]">
            Building Better
            <span className="block bg-gradient-to-r from-sky-500 via-blue-600 to-sky-500 bg-clip-text text-transparent">
              With Chemistry & Innovation
            </span>
          </h2>

          {/* DIVIDER */}

          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-[2px] w-12 bg-sky-300 sm:w-14" />

            <span className="h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_12px_rgba(14,165,233,0.55)]" />

            <span className="h-[2px] w-12 bg-sky-300 sm:w-14" />
          </div>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-7 text-slate-600 sm:text-base md:text-lg md:leading-8">
            KMR Conchem is a trusted manufacturer of high-performance
            construction chemicals delivering strength, durability and
            long-lasting protection for every structure.
          </p>
        </motion.div>

        {/* ====================================================
            PART 2 STARTS HERE
        ===================================================== */}

        <div className="mt-12 md:mt-16"></div>
        {/* ==================================================
              VIDEO + CONTENT GRID
          ================================================== */}

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          {/* =========================================================
                LEFT — FACTORY VIDEO
            ========================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative min-w-0"
          >
            {/* =====================================================
                  MAIN VIDEO CARD
              ====================================================== */}

            <div className="relative overflow-hidden rounded-[28px] border border-white bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
              <div className="relative overflow-hidden rounded-[22px]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="block h-[360px] w-full object-cover sm:h-[420px] lg:h-[450px] xl:h-[470px]"
                >
                  <source src={factoryVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* =================================================
                      VIDEO OVERLAY
                  ================================================== */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102944]/35 via-transparent to-transparent" />

                {/* =================================================
                      TOP BLUE GLOW
                  ================================================== */}

                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-400/10 to-transparent" />
              </div>
            </div>

            {/* =====================================================
                  FLOATING QUALITY CARD
              ====================================================== */}

            <div className="absolute -left-4 top-10 z-20 hidden w-[155px] rounded-[22px] border border-white/80 bg-white/95 p-5 text-center shadow-[0_15px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl xl:block">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-sky-50">
                <ShieldCheck
                  size={32}
                  strokeWidth={1.6}
                  className="text-sky-500"
                />
              </div>

              <p className="text-sm font-extrabold leading-5 text-[#102944]">
                Trusted
                <br />
                Quality
              </p>
            </div>

            {/* =====================================================
                  FLOATING EXPERIENCE CARD
              ====================================================== */}

            <div className="absolute -right-4 bottom-10 z-20 hidden w-[165px] rounded-[22px] border border-white/80 bg-white/95 p-5 text-center shadow-[0_15px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl xl:block">
              <div className="text-3xl font-black text-sky-500">5+</div>

              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#102944]">
                Years Experience
              </p>
            </div>

            {/* =====================================================
                  BOTTOM VIDEO BADGE
              ====================================================== */}

            <div className="absolute bottom-5 left-5 z-20 inline-flex max-w-[calc(100%-40px)] items-center gap-2 rounded-full border border-white/20 bg-[#102944]/85 px-5 py-3 text-white shadow-xl backdrop-blur-xl">
              <Factory size={18} className="shrink-0 text-sky-300" />

              <span className="text-sm font-bold">Advanced Manufacturing</span>
            </div>
          </motion.div>

          {/* =========================================================
                RIGHT — ABOUT CONTENT
            ========================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative min-w-0"
          >
            {/* =====================================================
                  TOP BADGE
              ====================================================== */}

            <div className="mb-6 inline-flex max-w-full items-center gap-3 rounded-full border border-sky-200 bg-white px-5 py-2.5 shadow-[0_8px_25px_rgba(14,165,233,0.08)]">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-50">
                <Beaker size={16} strokeWidth={2} className="text-sky-500" />
              </div>

              <span className="text-xs font-extrabold uppercase tracking-[2px] text-sky-600">
                Trusted Construction Chemical Manufacturer
              </span>
            </div>

            {/* =====================================================
                  MAIN HEADING
              ====================================================== */}

            <h3 className="max-w-xl text-3xl font-extrabold leading-[1.1] tracking-tight text-[#102944] sm:text-4xl lg:text-5xl">
              Delivering Innovative
              <span className="block text-sky-500">Solutions For Modern</span>
              Infrastructure
            </h3>

            {/* =====================================================
                  SMALL DIVIDER
              ====================================================== */}

            <div className="mt-6 flex items-center gap-2">
              <span className="h-[2px] w-16 bg-sky-300" />

              <span className="h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_12px_rgba(14,165,233,0.5)]" />

              <span className="h-[2px] w-8 bg-sky-200" />
            </div>

            {/* =====================================================
                  FIRST DESCRIPTION
              ====================================================== */}

            <p className="mt-7 max-w-xl text-[15px] leading-7 text-slate-600 md:text-lg">
              KMR Conchem Pvt. Ltd. is committed to manufacturing premium
              construction chemical products that improve the strength,
              durability and performance of buildings, bridges, industrial
              facilities and infrastructure projects.
            </p>

            {/* =====================================================
                  SECOND DESCRIPTION
              ====================================================== */}

            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 md:text-lg">
              Our advanced manufacturing process, strict quality control and
              customer-focused approach enable us to provide reliable
              waterproofing, repair, flooring and protection systems that
              perform even in the most demanding environments.
            </p>

            {/* =====================================================
                  FEATURE LIST
              ====================================================== */}
            <div className="mt-9 flex flex-wrap gap-4">
              {/* =================================================
                    EXPLORE PRODUCTS
                ================================================== */}

              <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(14,165,233,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(14,165,233,0.35)]">
                Explore Products
                <ArrowRight
                  size={19}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </button>

              {/* =================================================
                    LEARN MORE
                ================================================== */}

              <button className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-[#102944] shadow-[0_8px_20px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600">
                Learn More
                <ArrowRight
                  size={18}
                  className="text-slate-400 transition-all duration-300"
                />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
