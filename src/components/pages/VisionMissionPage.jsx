import React from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Target,
  Sparkles,
  ShieldCheck,
  Users,
  Lightbulb,
  HeartHandshake,
  Award,
  Factory,
  Layers3,
  CheckCircle2,
  ArrowRight,
  Building2,
  Gem,
  TrendingUp,
  Handshake,
  Compass,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";

// ============================================================
// ANIMATION VARIANTS
// ============================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const viewport = {
  once: true,
  amount: 0.2,
};

// ============================================================
// CORE VALUES
// ============================================================

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Quality",
    description:
      "We focus on delivering quality-driven construction chemical solutions with consistent performance and reliability.",
    iconColor: "text-sky-600",
    iconBg: "bg-sky-50",
    border: "border-sky-100",
  },

  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously look for better ideas, improved processes and innovative solutions for modern construction needs.",
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
    border: "border-amber-100",
  },

  {
    icon: HeartHandshake,
    title: "Customer Focus",
    description:
      "Our customers remain at the center of everything we do, from product development to service and support.",
    iconColor: "text-rose-500",
    iconBg: "bg-rose-50",
    border: "border-rose-100",
  },

  {
    icon: Gem,
    title: "Reliability",
    description:
      "We believe in dependable products, consistent service and relationships built on trust.",
    iconColor: "text-violet-500",
    iconBg: "bg-violet-50",
    border: "border-violet-100",
  },

  {
    icon: Handshake,
    title: "Integrity",
    description:
      "We operate with honesty, responsibility and transparency while building long-term relationships.",
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
    border: "border-emerald-100",
  },

  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description:
      "We believe in learning, improving and strengthening our products and processes over time.",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    border: "border-blue-100",
  },
];

// ============================================================
// WHAT DRIVES US
// ============================================================

const drivingPoints = [
  {
    icon: Layers3,
    title: "Strength",
    description:
      "Solutions designed to contribute to stronger and more dependable structures.",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },

  {
    icon: ShieldCheck,
    title: "Durability",
    description:
      "Focused on long-lasting performance across demanding construction applications.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },

  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "A continuous focus on improving solutions for evolving infrastructure requirements.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },

  {
    icon: CheckCircle2,
    title: "Performance",
    description:
      "Reliable solutions created with quality and practical project requirements in mind.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
];

// ============================================================
// VISION & MISSION PAGE
// ============================================================

const VisionMissionPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* ======================================================
          GLOBAL BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-64 top-[650px] h-[500px] w-[500px] rounded-full bg-sky-100/50 blur-[150px]" />

        <div className="absolute -right-64 top-[1200px] h-[550px] w-[550px] rounded-full bg-blue-100/40 blur-[160px]" />

        <div className="absolute left-1/2 top-[2200px] h-[500px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-100/30 blur-[160px]" />
      </div>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#061A35]">
        {/* Background */}

        <div className="pointer-events-none absolute inset-0">
          {/* Glow */}

          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-sky-500/20 blur-[130px]" />

          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />

          <div className="absolute bottom-0 left-1/2 h-[300px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

          {/* Grid */}

          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

          {/* Decorative circles */}

          <div className="absolute -right-32 bottom-[-180px] h-[500px] w-[500px] rounded-full border border-sky-400/10" />

          <div className="absolute -right-20 bottom-[-120px] h-[380px] w-[380px] rounded-full border border-sky-400/10" />
        </div>

        {/* Hero Content */}

        <div className="relative mx-auto max-w-[1500px] px-5 pb-24 pt-28 sm:px-7 sm:pb-28 sm:pt-32 lg:px-10 lg:pb-32 lg:pt-36">
          {/* Breadcrumb */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mb-9 flex items-center gap-2 text-xs font-semibold text-slate-400"
          >
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>

            <span>/</span>

            <span className="text-white">Vision & Mission</span>
          </motion.div>

          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
            {/* ==================================================
                HERO LEFT
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -45,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.75,
              }}
            >
              {/* Badge */}

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2">
                <Compass
                  size={17}
                  strokeWidth={2}
                  className="text-cyan-300"
                />

                <span className="text-xs font-extrabold uppercase tracking-[2px] text-cyan-300">
                  Our Direction
                </span>
              </div>

              {/* Heading */}

              <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[68px]">
                Vision & Mission Behind
                <span className="block">
                  <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                    KMR Conchem
                  </span>
                </span>
              </h1>

              {/* Description */}

              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Our vision defines where we want to go, while our mission
                defines how we create value through quality, innovation and
                customer-focused construction chemical solutions.
              </p>

              {/* Trust points */}

              <div className="mt-9 flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10">
                    <Eye size={18} className="text-cyan-300" />
                  </div>

                  <span className="text-sm font-semibold text-slate-200">
                    Clear Vision
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-400/30 bg-sky-400/10">
                    <Target size={18} className="text-sky-300" />
                  </div>

                  <span className="text-sm font-semibold text-slate-200">
                    Focused Mission
                  </span>
                </div>
              </div>
            </motion.div>

            {/* ==================================================
                HERO RIGHT
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="relative flex min-h-[360px] items-center justify-center"
            >
              {/* Main glow */}

              <div className="absolute h-[300px] w-[300px] rounded-full bg-sky-400/15 blur-[90px]" />

              {/* Orbit */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[310px] w-[310px] rounded-full border border-dashed border-sky-400/20"
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[230px] w-[230px] rounded-full border border-sky-400/15"
              />

              {/* Vision card */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-[4%] top-5 z-20 w-[190px] rounded-[24px] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:w-[210px]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15">
                  <Eye size={25} className="text-cyan-300" />
                </div>

                <p className="text-xs font-extrabold uppercase tracking-[2px] text-cyan-300">
                  Our Vision
                </p>

                <p className="mt-2 text-sm font-semibold leading-6 text-white">
                  Building a stronger and more dependable future.
                </p>
              </motion.div>

              {/* Mission card */}

              <motion.div
                animate={{
                  y: [0, 9, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-5 right-[4%] z-30 w-[190px] rounded-[24px] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:w-[210px]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/15">
                  <Target size={25} className="text-sky-300" />
                </div>

                <p className="text-xs font-extrabold uppercase tracking-[2px] text-sky-300">
                  Our Mission
                </p>

                <p className="mt-2 text-sm font-semibold leading-6 text-white">
                  Creating value through quality and innovation.
                </p>
              </motion.div>

              {/* Center */}

              <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-[0_20px_70px_rgba(14,165,233,0.2)] backdrop-blur-xl">
                <Building2
                  size={45}
                  strokeWidth={1.5}
                  className="text-white"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================
          VISION + MISSION
      ====================================================== */}

      <section className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10">
          {/* Section header */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{
              duration: 0.6,
            }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-sky-300" />

              <span className="text-xs font-extrabold uppercase tracking-[2px] text-sky-600">
                What Guides Us
              </span>

              <span className="h-px w-12 bg-sky-300" />
            </div>

            <h2 className="text-4xl font-black tracking-tight text-[#102944] sm:text-5xl">
              Our Vision & Mission
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500">
              The principles that guide KMR Conchem towards meaningful,
              sustainable and customer-focused growth.
            </p>
          </motion.div>

          {/* Cards */}

          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            {/* VISION */}

            <motion.article
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{
                duration: 0.7,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-sky-100 bg-white p-2 shadow-[0_20px_65px_rgba(15,23,42,0.07)]"
            >
              <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-sky-50 via-white to-white p-7 sm:p-9 lg:p-11">
                {/* Decorative */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-sky-100/70 blur-3xl transition-all duration-500 group-hover:bg-sky-200/80" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 shadow-sm">
                        <Eye size={31} strokeWidth={1.8} />
                      </div>

                      <span className="text-xs font-extrabold uppercase tracking-[2px] text-sky-600">
                        01 — Our Vision
                      </span>
                    </div>

                    <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-sky-100 bg-white text-sky-300 sm:flex">
                      <Compass size={22} />
                    </div>
                  </div>

                  <h3 className="mt-6 max-w-2xl text-3xl font-black leading-tight tracking-tight text-[#102944] sm:text-4xl">
                    Building a Stronger Future Through
                    <span className="text-sky-500"> Innovation & Quality</span>
                  </h3>

                  <p className="mt-6 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                    Our vision is to become a trusted and leading name in
                    construction chemicals by delivering innovative,
                    high-performance and dependable solutions that contribute
                    to stronger, safer and more durable infrastructure.
                  </p>

                  {/* Highlight */}

                  <div className="mt-8 flex items-start gap-3 rounded-2xl border border-sky-100 bg-white/80 p-4">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-sky-500"
                    />

                    <p className="text-sm font-semibold leading-6 text-[#102944]">
                      A future built around dependable solutions, continuous
                      improvement and long-term customer trust.
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* MISSION */}

            <motion.article
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{
                duration: 0.7,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-blue-100 bg-white p-2 shadow-[0_20px_65px_rgba(15,23,42,0.07)]"
            >
              <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-blue-50 via-white to-white p-7 sm:p-9 lg:p-11">
                {/* Decorative */}

                <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-blue-100/70 blur-3xl transition-all duration-500 group-hover:bg-blue-200/80" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 shadow-sm">
                        <Target size={31} strokeWidth={1.8} />
                      </div>

                      <span className="text-xs font-extrabold uppercase tracking-[2px] text-blue-600">
                        02 — Our Mission
                      </span>
                    </div>

                    <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-300 sm:flex">
                      <Target size={21} />
                    </div>
                  </div>

                  <h3 className="mt-6 max-w-2xl text-3xl font-black leading-tight tracking-tight text-[#102944] sm:text-4xl">
                    Creating Value Through
                    <span className="text-blue-600"> Quality & Service</span>
                  </h3>

                  <p className="mt-6 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                    Our mission is to manufacture quality-driven construction
                    chemical solutions while maintaining a strong customer-first
                    approach, reliable services and a continuous focus on
                    innovation and improvement.
                  </p>

                  {/* Points */}

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {[
                      "Quality-driven products",
                      "Customer-first approach",
                      "Reliable services",
                      "Continuous innovation",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white/80 px-3 py-3"
                      >
                        <CheckCircle2
                          size={17}
                          className="shrink-0 text-blue-500"
                        />

                        <span className="text-xs font-bold text-[#102944]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* ======================================================
          CORE VALUES
      ====================================================== */}

      <section className="relative bg-slate-50 py-24 sm:py-28">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10">
          {/* Header */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{
              duration: 0.6,
            }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-sky-300" />

              <span className="text-xs font-extrabold uppercase tracking-[2px] text-sky-600">
                Our Foundation
              </span>

              <span className="h-px w-12 bg-sky-300" />
            </div>

            <h2 className="text-4xl font-black tracking-tight text-[#102944] sm:text-5xl">
              Our Core Values
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500">
              The values that shape our decisions, products, relationships and
              approach to business.
            </p>
          </motion.div>

          {/* Values */}

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  className={`group relative overflow-hidden rounded-[24px] border ${value.border} bg-white p-6 shadow-[0_12px_45px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_55px_rgba(15,23,42,0.09)] sm:p-7`}
                >
                  {/* Top line */}

                  <div
                    className={`absolute left-0 top-0 h-1 w-full ${value.iconBg}`}
                  />

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${value.iconBg} ${value.iconColor} transition-transform duration-500 group-hover:scale-105`}
                  >
                    <Icon size={26} strokeWidth={1.9} />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-[#102944]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {value.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[1.5px] text-slate-400">
                    <span className="h-px w-7 bg-slate-200 transition-all duration-500 group-hover:w-11" />

                    KMR CONCHEM
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          WHAT DRIVES US
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            {/* LEFT */}

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{
                duration: 0.7,
              }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2">
                <Sparkles size={16} className="text-sky-600" />

                <span className="text-xs font-extrabold uppercase tracking-[1.8px] text-sky-600">
                  What Drives Us
                </span>
              </div>

              <h2 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-[#102944] sm:text-5xl">
                More Than Products.
                <span className="block text-sky-500">
                  We Build Confidence.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                KMR Conchem is committed to delivering construction chemical
                solutions that add value to projects through strength,
                durability, reliable performance and innovation.
              </p>

              <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                Backed by a skilled and dedicated team, we maintain a
                customer-first approach while continuously working to improve
                the quality and reliability of our products and services.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-50">
                  <Factory size={20} className="text-sky-600" />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-[#102944]">
                    Construction Chemical Manufacturing
                  </p>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Quality-driven solutions for modern projects
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT */}

            <div className="grid gap-5 sm:grid-cols-2">
              {drivingPoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                    }}
                    className="group rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_15px_45px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(15,23,42,0.09)]"
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg} ${item.color} transition-transform duration-500 group-hover:scale-105`}
                    >
                      <Icon size={26} strokeWidth={1.9} />
                    </div>

                    <h3 className="mt-5 text-lg font-black text-[#102944]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          CUSTOMER COMMITMENT
      ====================================================== */}

      <section className="relative bg-slate-50 py-24 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{
              duration: 0.7,
            }}
            className="relative overflow-hidden rounded-[32px] bg-[#061A35] px-7 py-12 shadow-[0_25px_80px_rgba(6,26,53,0.18)] sm:px-10 sm:py-14 lg:px-16 lg:py-16"
          >
            {/* Glow */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/15 blur-[90px]" />

            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[90px]" />

            {/* Grid */}

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
                backgroundSize: "35px 35px",
              }}
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              {/* Text */}

              <div className="max-w-3xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
                  <HeartHandshake size={16} className="text-cyan-300" />

                  <span className="text-xs font-extrabold uppercase tracking-[1.8px] text-cyan-300">
                    Our Commitment
                  </span>
                </div>

                <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                  Driven by Purpose.
                  <span className="block text-sky-300">
                    Focused on Your Success.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  At KMR Conchem, our vision and mission come together through
                  quality-driven products, reliable services and a
                  customer-first approach designed to add value to every
                  project.
                </p>
              </div>

              {/* CTA */}

              <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col">
                <Link
                  to="/products"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Explore Products

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-extrabold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  Contact Our Team

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          FINAL DIVIDER
      ====================================================== */}

      <div className="mx-auto flex max-w-md items-center justify-center gap-3 px-5 pb-14">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-300 to-sky-400" />

        <span className="relative flex h-3 w-3 items-center justify-center">
          <span className="absolute h-6 w-6 animate-ping rounded-full bg-sky-400/20" />

          <span className="relative h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 shadow-[0_0_15px_rgba(14,165,233,0.55)]" />
        </span>

        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-sky-300 to-sky-400" />
      </div>
    </main>
  );
};

export default VisionMissionPage;