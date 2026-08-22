import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Beaker,
  Building2,
  CheckCircle2,
  Droplets,
  Factory,
  ShieldCheck,
  Layers3,
  Sparkles,
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
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* ======================================================
          PREMIUM BACKGROUND
      ======================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Top center glow */}

        <div className="absolute left-1/2 top-[-180px] h-[460px] w-[820px] -translate-x-1/2 rounded-full bg-sky-500/[0.035] blur-3xl" />

        {/* Left glow */}

        <div className="absolute -left-48 top-[300px] h-[430px] w-[430px] rounded-full bg-sky-100/50 blur-[120px]" />

        {/* Right glow */}

        <div className="absolute -right-48 bottom-[120px] h-[480px] w-[480px] rounded-full bg-blue-100/40 blur-[130px]" />

        {/* Premium grid */}

        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #EEF1F6 1px, transparent 1px), linear-gradient(to bottom, #EEF1F6 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 72% 55% at 50% 18%, black 15%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 72% 55% at 50% 18%, black 15%, transparent 100%)",
          }}
        />

        {/* Decorative circles */}

        <div className="absolute left-1/2 top-[500px] h-[680px] w-[680px] -translate-x-1/2 rounded-full border border-sky-100/40" />

        <div className="absolute left-1/2 top-[540px] h-[580px] w-[580px] -translate-x-1/2 rounded-full border border-sky-100/30" />
      </div>

      {/* ======================================================
          MAIN CONTAINER
      ======================================================= */}

      <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
        {/* ====================================================
            SECTION HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Section Label */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-slate-900" />

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500 sm:text-[11px]">
              About KMR Conchem
            </span>

            <span className="h-px w-8 bg-slate-900" />
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-[3.15rem]">
            Building Better.
            <span className="block text-slate-400">
              With Chemistry &amp; Innovation.
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-[15px]">
            KMR Conchem is a trusted manufacturer of high-performance
            construction chemicals delivering strength, durability and
            long-lasting protection for modern infrastructure.
          </p>
        </motion.div>

        {/* ====================================================
            MAIN ABOUT CONTENT
        ===================================================== */}

        <div className="mt-12 sm:mt-14 lg:mt-16">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
            {/* =================================================
                FACTORY VIDEO
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
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
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative min-w-0"
            >
              {/* Video Card */}

              <div className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-shadow duration-500 hover:shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
                <div className="relative overflow-hidden rounded-[20px]">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="block h-[330px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025] sm:h-[400px] lg:h-[450px] xl:h-[480px]"
                  >
                    <source
                      src={factoryVideo}
                      type="video/mp4"
                    />

                    Your browser does not support the video tag.
                  </video>

                  {/* Bottom overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />

                  {/* Top subtle light */}

                  <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-sky-400/10 to-transparent" />

                  {/* Manufacturing badge */}

                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-slate-950/80 px-4 py-2.5 text-white shadow-xl backdrop-blur-xl">
                      <Factory
                        size={16}
                        strokeWidth={2}
                        className="shrink-0 text-sky-300"
                      />

                      <span className="text-[11px] font-semibold tracking-wide sm:text-xs">
                        Advanced Manufacturing
                      </span>
                    </div>

                    <div className="hidden items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[10px] font-medium text-white backdrop-blur-xl sm:flex">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Manufacturing Excellence
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  QUALITY FLOATING CARD
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                }}
                className="absolute -left-5 top-10 z-20 hidden w-[145px] rounded-2xl border border-slate-200/80 bg-white/95 p-4 text-center shadow-[0_15px_45px_rgba(15,23,42,0.10)] backdrop-blur-xl xl:block"
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50">
                  <ShieldCheck
                    size={23}
                    strokeWidth={1.8}
                    className="text-sky-500"
                  />
                </div>

                <p className="text-xs font-bold leading-5 text-slate-900">
                  Trusted
                  <br />
                  Quality
                </p>

                <p className="mt-1 text-[9px] text-slate-400">
                  Consistent standards
                </p>
              </motion.div>

              {/* =================================================
                  EXPERIENCE CARD
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                }}
                className="absolute -right-5 bottom-10 z-20 hidden w-[155px] rounded-2xl border border-slate-200/80 bg-white/95 p-4 text-center shadow-[0_15px_45px_rgba(15,23,42,0.10)] backdrop-blur-xl xl:block"
              >
                <div className="text-3xl font-bold tracking-tight text-sky-500">
                  10+
                </div>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-700">
                  Years Experience
                </p>

                <div className="mx-auto mt-3 h-px w-10 bg-sky-200" />
              </motion.div>
            </motion.div>

            {/* =================================================
                ABOUT CONTENT
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
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
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative min-w-0"
            >
              {/* Small label */}

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-sky-500" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-600">
                  Construction Chemical Expertise
                </span>
              </div>

              {/* Heading */}

              <h3 className="max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[2.75rem]">
                Delivering Innovative
                <span className="block text-sky-500">
                  Solutions For Modern
                </span>
                Infrastructure.
              </h3>

              {/* Divider */}

              <div className="mt-6 flex items-center gap-2">
                <span className="h-px w-14 bg-sky-400" />

                <span className="h-1.5 w-1.5 rounded-full bg-sky-500 shadow-[0_0_12px_rgba(14,165,233,0.45)]" />

                <span className="h-px w-8 bg-sky-200" />
              </div>

              {/* Description */}

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-[15px]">
                KMR Conchem Pvt. Ltd. is committed to manufacturing premium
                construction chemical products that improve the strength,
                durability and performance of buildings, bridges, industrial
                facilities and infrastructure projects.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-[15px]">
                Through advanced manufacturing processes, strict quality
                control and a customer-focused approach, we deliver reliable
                solutions for waterproofing, repair, flooring and structural
                protection.
              </p>

              {/* =================================================
                  QUICK HIGHLIGHTS
              ================================================== */}

              <div className="mt-7 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
                {/* Quality */}

                <div className="group rounded-xl border border-slate-200 bg-white p-4 shadow-[0_5px_20px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_12px_30px_rgba(15,23,42,0.07)]">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50">
                    <CheckCircle2
                      size={17}
                      strokeWidth={2}
                      className="text-emerald-500"
                    />
                  </div>

                  <p className="text-[11px] font-bold uppercase tracking-wide text-slate-800">
                    Quality
                  </p>

                  <p className="mt-1 text-[10px] leading-4 text-slate-400">
                    Consistent &amp; reliable
                  </p>
                </div>

                {/* Protection */}

                <div className="group rounded-xl border border-slate-200 bg-white p-4 shadow-[0_5px_20px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_12px_30px_rgba(15,23,42,0.07)]">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50">
                    <Droplets
                      size={17}
                      strokeWidth={2}
                      className="text-sky-500"
                    />
                  </div>

                  <p className="text-[11px] font-bold uppercase tracking-wide text-slate-800">
                    Protection
                  </p>

                  <p className="mt-1 text-[10px] leading-4 text-slate-400">
                    Durable solutions
                  </p>
                </div>

                {/* Performance */}

                <div className="group rounded-xl border border-slate-200 bg-white p-4 shadow-[0_5px_20px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_12px_30px_rgba(15,23,42,0.07)]">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50">
                    <Layers3
                      size={17}
                      strokeWidth={2}
                      className="text-violet-500"
                    />
                  </div>

                  <p className="text-[11px] font-bold uppercase tracking-wide text-slate-800">
                    Performance
                  </p>

                  <p className="mt-1 text-[10px] leading-4 text-slate-400">
                    Built to perform
                  </p>
                </div>
              </div>

              {/* =================================================
                  CTA BUTTONS
              ================================================== */}

              <div className="mt-8 flex flex-wrap gap-3">
                {/* Explore Products */}

                <button
                  type="button"
                  onClick={() => navigate("/products")}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-slate-950 px-5 py-3 text-[11px] font-semibold text-white shadow-[0_10px_25px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_15px_30px_rgba(15,23,42,0.22)] sm:text-xs"
                >
                  Explore Products

                  <ArrowRight
                    size={15}
                    strokeWidth={2.5}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                {/* Learn More */}

                <button
                  type="button"
                  onClick={() => navigate("/about")}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-3 text-[11px] font-semibold text-slate-700 shadow-[0_6px_18px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 sm:text-xs"
                >
                  Learn More

                  <ArrowRight
                    size={15}
                    className="text-slate-400 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ====================================================
            TRUST STRIP
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            delay: 0.1,
          }}
          className="mx-auto mt-16 max-w-6xl sm:mt-20"
        >
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-5 sm:px-7">
            <div className="grid grid-cols-1 divide-y divide-slate-200/80 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {/* Item 1 */}

              <div className="flex items-center justify-center gap-3 px-4 py-4 sm:py-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                  <ShieldCheck
                    size={16}
                    className="text-emerald-500"
                  />
                </span>

                <div>
                  <p className="text-[11px] font-semibold text-slate-800">
                    Quality Focused
                  </p>

                  <p className="mt-0.5 text-[9.5px] text-slate-400">
                    Reliable construction solutions
                  </p>
                </div>
              </div>

              {/* Item 2 */}

              <div className="flex items-center justify-center gap-3 px-4 py-4 sm:py-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-500/10">
                  <Factory
                    size={16}
                    className="text-sky-500"
                  />
                </span>

                <div>
                  <p className="text-[11px] font-semibold text-slate-800">
                    Advanced Manufacturing
                  </p>

                  <p className="mt-0.5 text-[9.5px] text-slate-400">
                    Modern production capabilities
                  </p>
                </div>
              </div>

              {/* Item 3 */}

              <div className="flex items-center justify-center gap-3 px-4 py-4 sm:py-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">
                  <Beaker
                    size={16}
                    className="text-violet-500"
                  />
                </span>

                <div>
                  <p className="text-[11px] font-semibold text-slate-800">
                    Innovative Solutions
                  </p>

                  <p className="mt-0.5 text-[9.5px] text-slate-400">
                    Chemistry driven performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ====================================================
            PREMIUM DIVIDER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0.7,
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
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-14 flex max-w-sm items-center justify-center gap-3 sm:mt-16"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-200 to-sky-400" />

          <span className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span className="absolute h-5 w-5 animate-ping rounded-full bg-sky-400/15" />

            <span className="relative h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_12px_rgba(14,165,233,0.45)]" />
          </span>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-sky-200 to-sky-400" />
        </motion.div>

        {/* ====================================================
            SMALL TRUST NOTE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-6 flex items-center justify-center gap-2 text-center"
        >
          <Sparkles
            size={11}
            className="shrink-0 text-sky-400"
          />

          <p className="text-[9px] leading-5 text-slate-400 sm:text-[10px]">
            Built around quality, innovation and dependable construction
            solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}