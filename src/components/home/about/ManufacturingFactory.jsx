import React from "react";
import { motion } from "framer-motion";

import {
  Factory,
  ShieldCheck,
  FlaskConical,
  Settings2,
  ArrowRight,
  CheckCircle2,
  Award,
  Users,
} from "lucide-react";

import factoryImage from "../../../assets/manufac/factory.webp";

const ManufacturingFactory = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Quality Controlled",
      description:
        "Strict quality checks throughout the manufacturing process.",
      iconBg: "bg-sky-50",
      iconColor: "text-sky-600",
      hoverBg: "group-hover:bg-sky-100",
      hoverBorder: "hover:border-sky-200",
    },
    {
      icon: FlaskConical,
      title: "Advanced Formulation",
      description:
        "Modern chemical formulations engineered for reliable performance.",
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
      hoverBg: "group-hover:bg-violet-100",
      hoverBorder: "hover:border-violet-200",
    },
    {
      icon: Settings2,
      title: "Modern Production",
      description:
        "Efficient manufacturing systems designed for consistency.",
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
      hoverBg: "group-hover:bg-cyan-100",
      hoverBorder: "hover:border-cyan-200",
    },
  ];

  const stats = [
    {
      icon: Factory,
      value: "10+",
      label: "Years",
      subLabel: "Experience",
      iconColor: "text-sky-500",
      iconBg: "bg-sky-50",
    },
    {
      icon: Users,
      value: "300+",
      label: "Projects",
      subLabel: "Delivered",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
    },
    {
      icon: Award,
      value: "100%",
      label: "Quality",
      subLabel: "Focused",
      iconColor: "text-violet-500",
      iconBg: "bg-violet-50",
    },
  ];

  return (
    <section
      id="manufacturing"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Main glow */}

        <div className="absolute left-1/2 top-[-180px] h-[460px] w-[800px] -translate-x-1/2 rounded-full bg-sky-500/[0.035] blur-3xl" />

        {/* Left glow */}

        <div className="absolute -left-48 top-40 h-[420px] w-[420px] rounded-full bg-sky-100/60 blur-[130px]" />

        {/* Right glow */}

        <div className="absolute -right-48 top-[480px] h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-[140px]" />

        {/* Bottom glow */}

        <div className="absolute bottom-0 left-1/2 h-[320px] w-[850px] -translate-x-1/2 rounded-full bg-sky-50/70 blur-[130px]" />

        {/* Premium grid */}

        <div
          className="absolute inset-0 opacity-[0.24]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #EEF1F6 1px, transparent 1px), linear-gradient(to bottom, #EEF1F6 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 75% 55% at 50% 15%, black 15%, transparent 100%)",
          }}
        />

        {/* Decorative dots */}

        <div
          className="absolute left-5 top-28 h-32 w-32 opacity-40 md:left-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(14,165,233,0.30) 2px, transparent 2px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div
          className="absolute right-5 bottom-32 h-32 w-32 opacity-30 md:right-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(14,165,233,0.28) 2px, transparent 2px)",
            backgroundSize: "18px 18px",
          }}
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
        {/* =======================================================
            HEADER
        ======================================================== */}

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
          className="mx-auto max-w-4xl text-center"
        >
          {/* Section Label */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-slate-900" />

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500 sm:text-[11px]">
              Manufacturing / Factory
            </span>

            <span className="h-px w-8 bg-slate-900" />
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#102944] sm:text-4xl md:text-5xl lg:text-[3.15rem]">
            Built for Quality.
            <span className="block bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Engineered for Performance.
            </span>
          </h2>

          {/* Divider */}

          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-px w-12 bg-sky-300 sm:w-14" />

            <span className="h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_12px_rgba(14,165,233,0.45)]" />

            <span className="h-px w-12 bg-blue-300 sm:w-14" />
          </div>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-500 sm:text-[15px]">
            Our modern manufacturing facility combines advanced production
            systems, technical expertise and strict quality control to
            manufacture reliable construction chemical solutions.
          </p>
        </motion.div>

        {/* =======================================================
            MAIN CONTENT
        ======================================================== */}

        <div className="mt-12 grid items-center gap-12 lg:mt-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 xl:gap-20">
          {/* =====================================================
              LEFT — IMAGE
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
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
            {/* Image Card */}

            <div className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.09)]">
              <div className="relative overflow-hidden rounded-[22px]">
                <img
                  src={factoryImage}
                  alt="KMR Conchem Manufacturing Facility"
                  loading="lazy"
                  className="block h-[340px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025] sm:h-[410px] lg:h-[455px] xl:h-[490px]"
                />

                {/* Image overlay */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102944]/60 via-[#102944]/5 to-transparent" />

                {/* Top light */}

                <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-sky-400/15 to-transparent" />

                {/* Bottom Information */}

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-[#102944]/85 px-4 py-3 text-white shadow-xl backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-5">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-400/15">
                      <Factory
                        size={20}
                        className="text-sky-300"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[9px] font-bold uppercase tracking-[2px] text-sky-300">
                        KMR Conchem
                      </p>

                      <p className="mt-0.5 truncate text-xs font-bold sm:text-sm">
                        Advanced Manufacturing Facility
                      </p>
                    </div>
                  </div>

                  <CheckCircle2
                    size={23}
                    className="hidden shrink-0 text-sky-400 sm:block"
                  />
                </div>
              </div>
            </div>

            {/* Floating Experience */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.45,
                duration: 0.6,
              }}
              className="absolute -bottom-5 -right-3 hidden w-[175px] rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-[0_15px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:block lg:-right-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50">
                  <Award
                    size={23}
                    className="text-sky-500"
                  />
                </div>

                <div>
                  <p className="text-2xl font-black text-[#102944]">
                    10+
                  </p>

                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                    Years Experience
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT — CONTENT
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
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
            {/* Small Label */}

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-sky-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
                Manufacturing Excellence
              </span>
            </div>

            {/* Heading */}

            <h3 className="max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#102944] sm:text-4xl lg:text-[2.65rem]">
              Where Technology
              <span className="block bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                Meets Precision
              </span>
            </h3>

            {/* Divider */}

            <div className="mt-5 flex items-center gap-2">
              <span className="h-px w-14 bg-sky-300" />

              <span className="h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_12px_rgba(14,165,233,0.45)]" />

              <span className="h-px w-7 bg-blue-200" />
            </div>

            {/* Description */}

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-[15px]">
              At KMR Conchem, manufacturing is driven by precision, consistency
              and a commitment to quality. Our facility is designed to support
              the production of high-performance construction chemical solutions
              for modern infrastructure.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-[15px]">
              From carefully selected raw materials to controlled production and
              quality testing, every stage is managed to deliver dependable
              products that perform in demanding construction environments.
            </p>

            {/* =================================================
                HIGHLIGHTS
            ================================================== */}

            <div className="mt-7 space-y-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                    }}
                    className={`group flex gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-[0_6px_22px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(15,23,42,0.07)] ${item.hoverBorder}`}
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.iconBg} ${item.hoverBg} transition-colors duration-300`}
                    >
                      <Icon
                        size={20}
                        className={item.iconColor}
                      />
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-sm font-extrabold text-[#102944]">
                        {item.title}
                      </h4>

                      <p className="mt-0.5 text-[11px] leading-5 text-slate-500 sm:text-xs">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* =================================================
                STATS
            ================================================== */}

            <div className="mt-7 grid grid-cols-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.045)]">
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={`${stat.value}-${stat.label}`}
                    className={`px-2 py-4 text-center sm:px-4 ${
                      index !== stats.length - 1
                        ? "border-r border-slate-200"
                        : ""
                    }`}
                  >
                    <div
                      className={`mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg ${stat.iconBg}`}
                    >
                      <Icon
                        size={16}
                        className={stat.iconColor}
                      />
                    </div>

                    <div className="text-lg font-black text-[#102944] sm:text-xl">
                      {stat.value}
                    </div>

                    <p className="mt-0.5 text-[8px] font-bold uppercase tracking-wider text-slate-500 sm:text-[9px]">
                      {stat.label}
                    </p>

                    <p className="text-[8px] font-semibold text-slate-400 sm:text-[9px]">
                      {stat.subLabel}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* =================================================
                CTA
            ================================================== */}

            <div className="mt-7">
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-xs font-bold text-white shadow-[0_12px_30px_rgba(14,165,233,0.20)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(14,165,233,0.30)] sm:text-sm"
              >
                Explore Our Manufacturing

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </button>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            BOTTOM TRUST STRIP
        ======================================================== */}

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
          }}
          className="mx-auto mt-14 max-w-6xl sm:mt-16"
        >
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-5 shadow-[0_8px_25px_rgba(15,23,42,0.025)] sm:px-7">
            <div className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {/* ITEM 1 */}

              <div className="flex items-center justify-center gap-3 px-4 py-4 sm:py-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-50">
                  <ShieldCheck
                    size={17}
                    className="text-sky-500"
                  />
                </div>

                <div>
                  <p className="text-[11px] font-semibold text-slate-800">
                    Quality Focused
                  </p>

                  <p className="mt-0.5 text-[9.5px] text-slate-400">
                    Reliable construction solutions
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}

              <div className="flex items-center justify-center gap-3 px-4 py-4 sm:py-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-50">
                  <Factory
                    size={17}
                    className="text-sky-500"
                  />
                </div>

                <div>
                  <p className="text-[11px] font-semibold text-slate-800">
                    Advanced Manufacturing
                  </p>

                  <p className="mt-0.5 text-[9.5px] text-slate-400">
                    Modern production capabilities
                  </p>
                </div>
              </div>

              {/* ITEM 3 */}

              <div className="flex items-center justify-center gap-3 px-4 py-4 sm:py-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-50">
                  <FlaskConical
                    size={17}
                    className="text-sky-500"
                  />
                </div>

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

        {/* =======================================================
            PREMIUM DIVIDER
        ======================================================== */}

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
          className="mx-auto mt-14 flex max-w-md items-center justify-center gap-3 sm:mt-16"
        >
          {/* LEFT */}

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
            className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-300 to-sky-400"
          />

          {/* CENTER */}

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

          {/* RIGHT */}

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
            className="h-px flex-1 bg-gradient-to-l from-transparent via-sky-300 to-sky-400"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ManufacturingFactory;