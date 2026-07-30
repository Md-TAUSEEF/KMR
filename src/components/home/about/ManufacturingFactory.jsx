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

import factoryImage from "../../../assets/manufac/factory.png";

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
      value: "5+",
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
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Left Sky Glow */}

        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-sky-100/60 blur-[130px]" />

        {/* Right Blue Glow */}

        <div className="absolute -right-40 top-[300px] h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-[140px]" />

        {/* Bottom Sky Glow */}

        <div className="absolute bottom-0 left-1/2 h-[300px] w-[800px] -translate-x-1/2 rounded-full bg-sky-50/70 blur-[130px]" />

        {/* Soft Center Glow */}

        <div className="absolute left-1/2 top-[35%] h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-blue-50/40 blur-[120px]" />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
        {/* =======================================================
            TOP HEADER
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
          className="mx-auto mb-11 max-w-4xl text-center lg:mb-13"
        >
          {/* Badge */}

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-5 py-2">
            <Factory
              size={17}
              strokeWidth={2}
              className="text-sky-600"
            />

            <span className="text-xs font-extrabold uppercase tracking-[2px] text-sky-700 sm:text-sm">
              Manufacturing / Factory
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#102944] sm:text-4xl md:text-5xl lg:text-[50px]">
            Built for Quality.
            <span className="block bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Engineered for Performance.
            </span>
          </h2>

          {/* Divider */}

          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-[2px] w-12 bg-sky-300 sm:w-16" />

            <span className="h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_12px_rgba(14,165,233,0.45)]" />

            <span className="h-[2px] w-12 bg-blue-300 sm:w-16" />
          </div>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-3xl text-[14px] leading-6 text-slate-600 sm:text-base md:text-[17px] md:leading-7">
            Our modern manufacturing facility combines advanced production
            systems, technical expertise and strict quality control to
            manufacture reliable construction chemical solutions.
          </p>
        </motion.div>

        {/* =======================================================
            IMAGE + CONTENT
        ======================================================== */}

        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 xl:gap-16">
          {/* =====================================================
              LEFT — FACTORY IMAGE
          ====================================================== */}

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
            className="relative"
          >
            {/* Main Image Card */}

            <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-2 shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
              <div className="relative overflow-hidden rounded-[24px]">
                <img
                  src={factoryImage}
                  alt="KMR Conchem Manufacturing Facility"
                  className="h-[340px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[410px] lg:h-[460px] xl:h-[500px]"
                />

                {/* Image Overlay */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102944]/55 via-transparent to-transparent" />

                {/* Top Blue Glow */}

                <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-sky-400/15 to-transparent" />

                {/* Bottom Badge */}

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 rounded-2xl border border-white/20 bg-[#102944]/80 px-4 py-3 text-white shadow-xl backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-5">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-400/15">
                      <Factory
                        size={21}
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

                  <div className="hidden shrink-0 sm:block">
                    <CheckCircle2
                      size={24}
                      className="text-sky-400"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Experience Card */}

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
              }}
              transition={{
                delay: 0.5,
                duration: 0.6,
              }}
              className="absolute -bottom-6 -right-3 hidden w-[175px] rounded-[22px] border border-white/80 bg-white/95 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:block lg:-right-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50">
                  <Award
                    size={24}
                    className="text-sky-500"
                  />
                </div>

                <div>
                  <p className="text-2xl font-black text-[#102944]">
                    5+
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
            className="relative lg:-mt-1"
          >
            {/* Small Label */}

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-sky-500" />

              <span className="text-[10px] font-extrabold uppercase tracking-[1.8px] text-sky-700">
                Manufacturing Excellence
              </span>
            </div>

            {/* Heading */}

            <h3 className="max-w-xl text-2xl font-black leading-[1.12] tracking-tight text-[#102944] sm:text-3xl lg:text-[38px]">
              Where Technology
              <span className="block bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                Meets Precision
              </span>
            </h3>

            {/* Divider */}

            <div className="mt-4 flex items-center gap-2">
              <span className="h-[2px] w-14 bg-sky-300" />

              <span className="h-2 w-2 rounded-full bg-sky-500" />

              <span className="h-[2px] w-7 bg-blue-200" />
            </div>

            {/* Description */}

            <p className="mt-5 max-w-xl text-[14px] leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
              At KMR Conchem, manufacturing is driven by precision,
              consistency and a commitment to quality. Our facility is
              designed to support the production of high-performance
              construction chemical solutions for modern infrastructure.
            </p>

            <p className="mt-3 max-w-xl text-[14px] leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
              From carefully selected raw materials to controlled production
              and quality testing, every stage is managed to deliver
              dependable products that perform in demanding construction
              environments.
            </p>

            {/* =================================================
                HIGHLIGHTS
            ================================================== */}

            <div className="mt-6 space-y-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: 25,
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
                    className={`group flex gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-[0_8px_25px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 ${item.hoverBorder}`}
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.iconBg} ${item.hoverBg} transition-colors duration-300`}
                    >
                      <Icon
                        size={21}
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

            <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.06)]">
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.value}
                    className={`px-2 py-4 text-center sm:px-4 ${
                      index !== stats.length - 1
                        ? "border-r border-slate-200"
                        : ""
                    }`}
                  >
                    <div
                      className={`mx-auto mb-1.5 flex h-8 w-8 items-center justify-center rounded-lg ${stat.iconBg}`}
                    >
                      <Icon
                        size={17}
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

            {/* CTA */}

            <div className="mt-6">
              <button
                type="button"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-xs font-extrabold text-white shadow-[0_12px_30px_rgba(14,165,233,0.20)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(14,165,233,0.30)] sm:text-sm"
              >
                Explore Our Manufacturing

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingFactory;