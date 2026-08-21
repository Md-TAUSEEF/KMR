import React from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Factory,
  ShieldCheck,
  Beaker,
  Building2,
  CheckCircle2,
  Droplets,
  Layers3,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

// ============================================================
// FACTORY VIDEO
// ============================================================

import factoryVideo from "../../../assets/hero/factory.mp4";

// ============================================================
// ABOUT COMPONENT
// ============================================================

export default function About() {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f8fbff] py-16 md:py-20 lg:py-24"
    >
      {/* ======================================================
          BACKGROUND DECORATION
      ======================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* LEFT GLOW */}

        <div className="absolute -left-40 top-28 h-[420px] w-[420px] rounded-full bg-sky-100/70 blur-[120px]" />

        {/* RIGHT GLOW */}

        <div className="absolute -right-40 top-[400px] h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-[140px]" />

        {/* BOTTOM GLOW */}

        <div className="absolute bottom-0 left-1/2 h-[350px] w-[900px] -translate-x-1/2 rounded-full bg-sky-100/40 blur-[130px]" />

        {/* LEFT DOTS */}

        <div
          className="absolute left-5 top-20 h-32 w-32 opacity-50 md:left-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(14,165,233,0.35) 2px, transparent 2px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* RIGHT DOTS */}

        <div
          className="absolute right-5 bottom-28 h-32 w-32 opacity-40 md:right-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(14,165,233,0.30) 2px, transparent 2px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* LARGE CIRCLES */}

        <div className="absolute left-1/2 top-[240px] h-[700px] w-[700px] -translate-x-1/2 rounded-full border border-sky-100/60" />

        <div className="absolute left-1/2 top-[290px] h-[600px] w-[600px] -translate-x-1/2 rounded-full border border-sky-100/40" />
      </div>

      {/* ======================================================
          MAIN CONTAINER
      ======================================================= */}

      <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">

        {/* ====================================================
            TOP ABOUT HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          {/* BADGE */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-sky-400 bg-white px-5 py-2 shadow-[0_6px_25px_rgba(14,165,233,0.08)] md:px-6">
            <Building2
              size={17}
              strokeWidth={2}
              className="text-sky-500"
            />

            <span className="text-xs font-bold tracking-[2px] text-sky-500 sm:text-sm">
              ABOUT KMR CONCHEM
            </span>
          </div>

          {/* HEADING */}

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
            long-lasting protection for modern infrastructure.
          </p>
        </motion.div>

        {/* ====================================================
            VIDEO + CONTENT
        ===================================================== */}

        <div className="mt-10 md:mt-14 lg:mt-16">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">

            {/* =================================================
                FACTORY VIDEO
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -70,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative min-w-0"
            >
              {/* VIDEO CONTAINER */}

              <div className="relative overflow-hidden rounded-[28px] border border-white bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
                <div className="relative overflow-hidden rounded-[22px]">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="block h-[340px] w-full object-cover sm:h-[400px] lg:h-[440px] xl:h-[460px]"
                  >
                    <source src={factoryVideo} type="video/mp4" />

                    Your browser does not support the video tag.
                  </video>

                  {/* DARK OVERLAY */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102944]/40 via-transparent to-transparent" />

                  {/* TOP LIGHT */}

                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-400/10 to-transparent" />
                </div>
              </div>

              {/* =================================================
                  QUALITY CARD
              ================================================== */}

              <div className="absolute -left-4 top-10 z-20 hidden w-[155px] rounded-[22px] border border-white/80 bg-white/95 p-5 text-center shadow-[0_15px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl xl:block">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-sky-50">
                  <ShieldCheck
                    size={30}
                    strokeWidth={1.7}
                    className="text-sky-500"
                  />
                </div>

                <p className="text-sm font-extrabold leading-5 text-[#102944]">
                  Trusted
                  <br />
                  Quality
                </p>
              </div>

              {/* =================================================
                  EXPERIENCE CARD
              ================================================== */}

              <div className="absolute -right-4 bottom-10 z-20 hidden w-[165px] rounded-[22px] border border-white/80 bg-white/95 p-5 text-center shadow-[0_15px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl xl:block">
                <div className="text-3xl font-black text-sky-500">
                  10+
                </div>

                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#102944]">
                  Years Experience
                </p>
              </div>

              {/* =================================================
                  VIDEO BADGE
              ================================================== */}

              <div className="absolute bottom-5 left-5 z-20 inline-flex max-w-[calc(100%-40px)] items-center gap-2 rounded-full border border-white/20 bg-[#102944]/85 px-5 py-3 text-white shadow-xl backdrop-blur-xl">
                <Factory
                  size={18}
                  className="shrink-0 text-sky-300"
                />

                <span className="text-sm font-bold">
                  Advanced Manufacturing
                </span>
              </div>
            </motion.div>

            {/* =================================================
                ABOUT CONTENT
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 70,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative min-w-0"
            >
              {/* BADGE */}

              <div className="mb-6 inline-flex max-w-full items-center gap-3 rounded-full border border-sky-200 bg-white px-5 py-2.5 shadow-[0_8px_25px_rgba(14,165,233,0.08)]">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-50">
                  <Beaker
                    size={16}
                    strokeWidth={2}
                    className="text-sky-500"
                  />
                </div>

                <span className="text-xs font-extrabold uppercase tracking-[2px] text-sky-600">
                  Trusted Construction Chemical Manufacturer
                </span>
              </div>

              {/* HEADING */}

              <h3 className="max-w-xl text-3xl font-extrabold leading-[1.1] tracking-tight text-[#102944] sm:text-4xl lg:text-5xl">
                Delivering Innovative

                <span className="block text-sky-500">
                  Solutions For Modern
                </span>

                Infrastructure
              </h3>

              {/* DIVIDER */}

              <div className="mt-6 flex items-center gap-2">
                <span className="h-[2px] w-16 bg-sky-300" />

                <span className="h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_12px_rgba(14,165,233,0.5)]" />

                <span className="h-[2px] w-8 bg-sky-200" />
              </div>

              {/* DESCRIPTION */}

              <p className="mt-7 max-w-xl text-[15px] leading-7 text-slate-600 md:text-lg">
                KMR Conchem Pvt. Ltd. is committed to manufacturing premium
                construction chemical products that improve the strength,
                durability and performance of buildings, bridges, industrial
                facilities and infrastructure projects.
              </p>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 md:text-lg">
                Through advanced manufacturing processes, strict quality
                control and a customer-focused approach, we deliver reliable
                solutions for waterproofing, repair, flooring and structural
                protection.
              </p>

              {/* =================================================
                  QUICK HIGHLIGHTS
              ================================================== */}

              <div className="mt-7 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
                {/* QUALITY */}

                <div className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_8px_25px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_12px_30px_rgba(14,165,233,0.10)]">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50">
                    <CheckCircle2
                      size={18}
                      className="text-sky-500"
                    />
                  </div>

                  <p className="text-xs font-extrabold uppercase tracking-wide text-[#102944]">
                    Quality
                  </p>

                  <p className="mt-1 text-[11px] leading-4 text-slate-500">
                    Consistent & reliable
                  </p>
                </div>

                {/* WATERPROOFING */}

                <div className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_8px_25px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_12px_30px_rgba(14,165,233,0.10)]">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50">
                    <Droplets
                      size={18}
                      className="text-sky-500"
                    />
                  </div>

                  <p className="text-xs font-extrabold uppercase tracking-wide text-[#102944]">
                    Protection
                  </p>

                  <p className="mt-1 text-[11px] leading-4 text-slate-500">
                    Durable solutions
                  </p>
                </div>

                {/* PERFORMANCE */}

                <div className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_8px_25px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_12px_30px_rgba(14,165,233,0.10)]">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50">
                    <Layers3
                      size={18}
                      className="text-sky-500"
                    />
                  </div>

                  <p className="text-xs font-extrabold uppercase tracking-wide text-[#102944]">
                    Performance
                  </p>

                  <p className="mt-1 text-[11px] leading-4 text-slate-500">
                    Built to perform
                  </p>
                </div>
              </div>

              {/* =================================================
                  BUTTONS
              ================================================== */}

              <div className="mt-9 flex flex-wrap gap-4">
                {/* EXPLORE PRODUCTS */}

                <button
                  type="button"
                  onClick={() => navigate("/products")}
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(14,165,233,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(14,165,233,0.35)]"
                >
                  Explore Products

                  <ArrowRight
                    size={19}
                    strokeWidth={2.5}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </button>

                {/* LEARN MORE */}

                <button
                  type="button"
                  onClick={() => navigate("/about")}
                  className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-[#102944] shadow-[0_8px_20px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600"
                >
                  Learn More

                  <ArrowRight
                    size={18}
                    className="text-slate-400 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ====================================================
            BOTTOM TRUST STRIP
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
          className="mx-auto mt-16 max-w-6xl md:mt-20"
        >
          <div className="rounded-[24px] border border-sky-100 bg-white/90 p-5 shadow-[0_15px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-6">
            <div className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {/* ITEM 1 */}

              <div className="flex items-center justify-center gap-3 px-4 py-4 sm:py-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50">
                  <ShieldCheck
                    size={20}
                    className="text-sky-500"
                  />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-[#102944]">
                    Quality Focused
                  </p>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Reliable construction solutions
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}

              <div className="flex items-center justify-center gap-3 px-4 py-4 sm:py-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50">
                  <Factory
                    size={20}
                    className="text-sky-500"
                  />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-[#102944]">
                    Advanced Manufacturing
                  </p>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Modern production capabilities
                  </p>
                </div>
              </div>

              {/* ITEM 3 */}

              <div className="flex items-center justify-center gap-3 px-4 py-4 sm:py-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50">
                  <Beaker
                    size={20}
                    className="text-sky-500"
                  />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-[#102944]">
                    Innovative Solutions
                  </p>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Chemistry driven performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ====================================================
            PREMIUM ANIMATED DIVIDER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="mx-auto mt-14 flex max-w-md items-center justify-center gap-3 md:mt-16"
        >
          {/* LEFT LINE */}

          <motion.span
            initial={{
              width: 0,
            }}
            whileInView={{
              width: "100%",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-sky-300 to-sky-400"
          />

          {/* CENTER DOT */}

          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className="relative flex h-3 w-3 shrink-0 items-center justify-center"
          >
            <span className="absolute h-6 w-6 animate-ping rounded-full bg-sky-400/20" />

            <span className="relative h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 shadow-[0_0_15px_rgba(14,165,233,0.55)]" />
          </motion.div>

          {/* RIGHT LINE */}

          <motion.span
            initial={{
              width: 0,
            }}
            whileInView={{
              width: "100%",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-sky-300 to-sky-400"
          />
        </motion.div>
      </div>
    </section>
  );
}