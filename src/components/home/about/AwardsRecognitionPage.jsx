import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Trophy,
  Award,
  BadgeCheck,
  Medal,
  Star,
  ShieldCheck,
  Building2,
  CalendarDays,
  Search,
  X,
  ArrowRight,
  Sparkles,
  Globe2,
  CheckCircle2,
} from "lucide-react";

import { Link } from "react-router-dom";

// ============================================================
// AWARDS DATA
// ============================================================
//
// IMPORTANT:
// Replace placeholder title/image/details with actual awards
// when company provides verified award information.
// ============================================================

const awards = [
  {
    id: 1,

    title: "Award & Recognition",

    subtitle: "Quality & Manufacturing Excellence",

    image: "/awards/founder.webp",

    icon: Trophy,

    category: "Excellence",

    year: "2025",

    organization: "Recognition Body",

    description:
      "Recognition received for commitment to quality-focused manufacturing, dependable products and continuous improvement.",

    accent: "text-amber-600",

    iconBg: "bg-amber-50",

    border: "border-amber-100",
  },

  {
    id: 2,

    title: "Industry Recognition",

    subtitle: "Construction Chemical Solutions",

    image: "/awards/director.webp",

    icon: Medal,

    category: "Industry",

    year: "2025",

    organization: "Recognition Body",

    description:
      "Recognition highlighting the company's contribution toward reliable construction chemical solutions and customer-focused service.",

    accent: "text-violet-600",

    iconBg: "bg-violet-50",

    border: "border-violet-100",
  },

  {
    id: 3,

    title: "Business Recognition",

    subtitle: "Growth & Innovation",

    image: "/awards/achievement1.webp",

    icon: Star,

    category: "Innovation",

    year: "2025",

    organization: "Recognition Body",

    description:
      "Recognition reflecting the company's focus on innovation, responsible growth and evolving manufacturing capabilities.",

    accent: "text-sky-600",

    iconBg: "bg-sky-50",

    border: "border-sky-100",
  },
];

// ============================================================
// RECOGNITION STATS
// ============================================================

const recognitionStats = [
  {
    value: "Quality",
    title: "Focused",
    description: "Commitment to dependable manufacturing",
    icon: ShieldCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },

  {
    value: "Innovation",
    title: "Driven",
    description: "Continuous improvement and development",
    icon: Sparkles,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },

  {
    value: "Customer",
    title: "First",
    description: "Products and services built around value",
    icon: CheckCircle2,
    color: "text-sky-600",
    bg: "bg-sky-50",
  },

  {
    value: "Future",
    title: "Ready",
    description: "Growing capabilities for modern infrastructure",
    icon: Globe2,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

// ============================================================
// PAGE
// ============================================================

const AwardsRecognitionPage = () => {
  const [selectedAward, setSelectedAward] = useState(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* ======================================================
          GLOBAL BACKGROUND
      ======================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-64 top-[500px] h-[500px] w-[500px] rounded-full bg-amber-100/30 blur-[150px]" />

        <div className="absolute -right-64 top-[1000px] h-[550px] w-[550px] rounded-full bg-sky-100/40 blur-[160px]" />

        <div className="absolute left-1/2 top-[1800px] h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-blue-100/30 blur-[160px]" />
      </div>

      {/* ======================================================
          HERO
      ======================================================= */}

      <section className="relative overflow-hidden bg-[#061A35]">
        {/* Background */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-amber-500/15 blur-[130px]" />

          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-sky-600/20 blur-[140px]" />

          <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1500px] px-5 pb-28 pt-32 sm:px-7 sm:pb-32 sm:pt-36 lg:px-10 lg:pb-40 lg:pt-40">
          {/* Breadcrumb */}

          <div className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Link
              to="/"
              className="transition-colors hover:text-white"
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-white">
              Awards & Recognition
            </span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
            {/* LEFT */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-4 py-2">
                <Trophy
                  size={17}
                  className="text-amber-300"
                />

                <span className="text-xs font-extrabold uppercase tracking-[2px] text-amber-300">
                  Awards & Recognition
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[68px]">
                Recognition That
                <span className="block">
                  Reflects Our
                  <span className="bg-gradient-to-r from-amber-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                    {" "}
                    Commitment
                  </span>
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Recognition represents more than an achievement. It reflects
                our continued commitment to quality, innovation, responsible
                manufacturing and customer satisfaction.
              </p>

              <div className="mt-9 flex flex-wrap gap-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10">
                    <Award
                      size={18}
                      className="text-amber-300"
                    />
                  </div>

                  <span className="text-sm font-semibold text-slate-200">
                    Excellence Driven
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10">
                    <BadgeCheck
                      size={18}
                      className="text-cyan-300"
                    />
                  </div>

                  <span className="text-sm font-semibold text-slate-200">
                    Quality Focused
                  </span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT VISUAL */}

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
              className="relative flex min-h-[350px] items-center justify-center"
            >
              <div className="absolute h-[330px] w-[430px] rounded-full bg-amber-400/10 blur-[90px]" />

              {/* Main Award */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-20 flex h-[230px] w-[230px] items-center justify-center rounded-[55px] border border-white/10 bg-white/[0.07] shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              >
                <div className="absolute inset-5 rounded-[42px] border border-white/10" />

                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-500 shadow-[0_20px_50px_rgba(245,158,11,0.3)]">
                  <Trophy
                    size={60}
                    strokeWidth={1.6}
                    className="text-white"
                  />
                </div>
              </motion.div>

              {/* Floating Award */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [-4, 0, -4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-[4%] top-10 z-30 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl"
              >
                <Medal
                  size={24}
                  className="text-amber-300"
                />

                <p className="mt-2 text-xs font-bold text-white">
                  Excellence
                </p>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[4%] top-24 z-30 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl"
              >
                <Star
                  size={24}
                  className="text-cyan-300"
                />

                <p className="mt-2 text-xs font-bold text-white">
                  Recognition
                </p>
              </motion.div>

              <div className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 rounded-full border border-white/10 bg-white/10 px-5 py-2.5 backdrop-blur-xl">
                <span className="whitespace-nowrap text-xs font-extrabold text-cyan-200">
                  Excellence • Quality • Innovation
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================
          STATS
      ======================================================= */}

      <section className="relative z-30 -mt-14 px-5 sm:px-7 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {recognitionStats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.10)]"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${item.bg} ${item.color}`}
                  >
                    <Icon size={27} />
                  </div>

                  <div>
                    <div className="text-2xl font-black text-[#123B79]">
                      {item.value}
                    </div>

                    <div className="text-sm font-extrabold text-[#102944]">
                      {item.title}
                    </div>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ======================================================
          RECOGNITION SECTION
      ======================================================= */}

      <section className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10">
          {/* HEADER */}

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
            }}
            transition={{
              duration: 0.6,
            }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-amber-300" />

              <span className="text-xs font-extrabold uppercase tracking-[2px] text-amber-600">
                Recognition
              </span>

              <span className="h-px w-12 bg-amber-300" />
            </div>

            <h2 className="text-4xl font-black tracking-tight text-[#102944] sm:text-5xl">
              Awards & Recognition
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500">
              A collection of recognitions that represent our commitment to
              quality, innovation and excellence.
            </p>
          </motion.div>

          {/* AWARDS GRID */}

          <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {awards.map((award, index) => {
              const Icon = award.icon;

              return (
                <motion.article
                  key={award.id}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className={`group overflow-hidden rounded-[26px] border ${award.border} bg-white shadow-[0_15px_50px_rgba(15,23,42,0.07)] transition-shadow duration-500 hover:shadow-[0_25px_65px_rgba(15,23,42,0.12)]`}
                >
                  {/* IMAGE */}

                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-50 to-sky-50">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                        event.currentTarget.nextElementSibling.style.display =
                          "flex";
                      }}
                    />

                    {/* FALLBACK VISUAL */}

                    <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-[#f8fbff] to-sky-50">
                      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-[0_15px_45px_rgba(15,23,42,0.10)]">
                        <Icon
                          size={52}
                          className={award.accent}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#061A35]/55 via-transparent to-transparent opacity-70" />

                    {/* Category */}

                    <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#061A35]/75 px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[1.5px] text-white backdrop-blur-md">
                      {award.category}
                    </div>

                    {/* Year */}

                    <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-2 text-[10px] font-extrabold text-[#102944] shadow-lg backdrop-blur-md">
                      <CalendarDays size={13} />
                      {award.year}
                    </div>

                    {/* View */}

                    <button
                      type="button"
                      onClick={() => setSelectedAward(award)}
                      className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-extrabold text-[#102944] shadow-xl transition-all hover:-translate-y-1 hover:bg-sky-500 hover:text-white"
                    >
                      <Search size={14} />
                      View
                    </button>
                  </div>

                  {/* CONTENT */}

                  <div className="p-6">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${award.iconBg} ${award.accent}`}
                    >
                      <Icon size={24} />
                    </div>

                    <h3 className="mt-5 text-xl font-black text-[#102944]">
                      {award.title}
                    </h3>

                    <p className={`mt-1 text-sm font-bold ${award.accent}`}>
                      {award.subtitle}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      {award.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-xs font-bold text-slate-400">
                      <Building2 size={14} />

                      {award.organization}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedAward(award)}
                      className="group/btn mt-6 flex items-center gap-2 text-xs font-extrabold text-sky-600"
                    >
                      View Recognition

                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/btn:translate-x-1"
                      />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          WHAT RECOGNITION MEANS
      ======================================================= */}

      <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-7 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-[.8fr_1.2fr]">
            {/* ICON */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="flex justify-center"
            >
              <div className="relative flex h-[260px] w-[260px] items-center justify-center rounded-[55px] border border-sky-100 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
                <div className="absolute inset-5 rounded-[42px] border border-sky-100" />

                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-500 shadow-[0_20px_50px_rgba(245,158,11,0.22)]">
                  <Award
                    size={64}
                    className="text-white"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </motion.div>

            {/* CONTENT */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-12 bg-amber-300" />

                <span className="text-xs font-extrabold uppercase tracking-[2px] text-amber-600">
                  Beyond The Award
                </span>
              </div>

              <h2 className="text-3xl font-black tracking-tight text-[#102944] sm:text-4xl">
                Recognition is a Reflection
                <span className="block text-sky-600">
                  of Our Commitment
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Every recognition should represent something meaningful:
                consistent quality, responsible manufacturing, innovation and
                value delivered to customers.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <ShieldCheck
                    size={23}
                    className="text-emerald-600"
                  />

                  <h3 className="mt-3 text-sm font-black text-[#102944]">
                    Quality
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Maintaining dependable standards throughout our operations.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <Sparkles
                    size={23}
                    className="text-violet-600"
                  />

                  <h3 className="mt-3 text-sm font-black text-[#102944]">
                    Innovation
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Continuously improving products and manufacturing
                    capabilities.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================
          CTA
      ======================================================= */}

      <section className="relative px-5 py-20 sm:px-7 lg:px-10">
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
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-[#061A35] px-7 py-10 shadow-[0_25px_70px_rgba(6,26,53,0.22)] sm:px-10 sm:py-12 lg:px-14"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-[80px]" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-sky-500/10 blur-[80px]" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <Trophy
                  size={25}
                  className="text-amber-300"
                />

                <span className="text-xs font-extrabold uppercase tracking-[2px] text-amber-300">
                  KMR CONCHEM
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                Quality Today. Recognition Tomorrow.
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                We continue to build our capabilities with a strong focus on
                quality, innovation and customer value.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                to="/certificate"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-lg transition-all hover:-translate-y-1"
              >
                View Certifications

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-extrabold text-white backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/10"
              >
                Contact Us

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ======================================================
          AWARD MODAL
      ======================================================= */}

      <AnimatePresence>
        {selectedAward && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
            onClick={() => setSelectedAward(null)}
          >
            {/* Close */}

            <button
              type="button"
              onClick={() => setSelectedAward(null)}
              className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-7 sm:top-7"
              aria-label="Close award preview"
            >
              <X size={22} />
            </button>

            {/* Modal */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative grid max-h-[92vh] w-full max-w-[1050px] overflow-hidden rounded-[25px] bg-white shadow-2xl lg:grid-cols-[1fr_.8fr]"
            >
              {/* IMAGE */}

              <div className="relative flex min-h-[380px] items-center justify-center bg-slate-50 p-6 sm:p-10">
                <img
                  src={selectedAward.image}
                  alt={selectedAward.title}
                  className="max-h-[70vh] max-w-full object-contain"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget.nextElementSibling.style.display =
                      "flex";
                  }}
                />

                <div className="absolute inset-0 hidden items-center justify-center">
                  <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white shadow-xl">
                    {(() => {
                      const Icon = selectedAward.icon;

                      return (
                        <Icon
                          size={65}
                          className={selectedAward.accent}
                          strokeWidth={1.5}
                        />
                      );
                    })()}
                  </div>
                </div>
              </div>

              {/* DETAILS */}

              <div className="flex flex-col justify-center p-7 sm:p-10">
                {(() => {
                  const Icon = selectedAward.icon;

                  return (
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${selectedAward.iconBg} ${selectedAward.accent}`}
                    >
                      <Icon size={28} />
                    </div>
                  );
                })()}

                <div
                  className={`mt-6 text-xs font-extrabold uppercase tracking-[2px] ${selectedAward.accent}`}
                >
                  {selectedAward.category}
                </div>

                <h2 className="mt-2 text-3xl font-black text-[#102944]">
                  {selectedAward.title}
                </h2>

                <p className="mt-2 text-base font-bold text-sky-600">
                  {selectedAward.subtitle}
                </p>

                <p className="mt-6 text-sm leading-7 text-slate-600">
                  {selectedAward.description}
                </p>

                <div className="mt-7 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Building2
                      size={17}
                      className="text-sky-600"
                    />

                    <span className="font-semibold text-slate-500">
                      Recognition Body
                    </span>

                    <span className="ml-auto font-bold text-[#102944]">
                      {selectedAward.organization}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <CalendarDays
                      size={17}
                      className="text-sky-600"
                    />

                    <span className="font-semibold text-slate-500">
                      Year
                    </span>

                    <span className="ml-auto font-bold text-[#102944]">
                      {selectedAward.year}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedAward(null)}
                  className="mt-8 w-fit rounded-xl bg-[#0B4DA2] px-6 py-3 text-sm font-extrabold text-white shadow-lg transition hover:-translate-y-1"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default AwardsRecognitionPage;