import { motion } from "framer-motion";
import {
  Trophy,
  Factory,
  FlaskConical,
  ShieldCheck,
  Users,
  TrendingUp,
  Target,
  Lightbulb,
  Award,
  CheckCircle2,
  Globe2,
  PackageCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

// ============================================================
// ACHIEVEMENT DATA
// ============================================================

const achievements = [
  {
    id: 1,
    number: "01",
    value: "Quality",
    title: "Quality-Driven Manufacturing",
    description:
      "Focused manufacturing processes designed to deliver reliable and consistent construction chemical solutions.",
    icon: ShieldCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    glow: "bg-emerald-100/60",
  },

  {
    id: 2,
    number: "02",
    value: "Innovation",
    title: "Product Innovation",
    description:
      "Continuous focus on developing practical construction chemical solutions for modern infrastructure requirements.",
    icon: FlaskConical,
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    glow: "bg-violet-100/60",
  },

  {
    id: 3,
    number: "03",
    value: "Manufacturing",
    title: "Advanced Manufacturing",
    description:
      "Structured production practices with attention to process control, consistency and product performance.",
    icon: Factory,
    color: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-100",
    glow: "bg-sky-100/60",
  },

  {
    id: 4,
    number: "04",
    value: "Customer First",
    title: "Customer-Focused Approach",
    description:
      "Building long-term value through quality-driven products and dependable services for our customers.",
    icon: Users,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
    glow: "bg-amber-100/60",
  },

  {
    id: 5,
    number: "05",
    value: "Standards",
    title: "Certified Systems",
    description:
      "Our management systems follow recognized quality and environmental standards supporting responsible operations.",
    icon: Award,
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
    glow: "bg-rose-100/60",
  },

  {
    id: 6,
    number: "06",
    value: "Growth",
    title: "Building for the Future",
    description:
      "Continuously strengthening our capabilities to serve evolving construction and infrastructure needs.",
    icon: TrendingUp,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    glow: "bg-blue-100/60",
  },
];

// ============================================================
// MILESTONES
// ============================================================

const milestones = [
  {
    year: "01",
    title: "Foundation",
    description:
      "Built with a clear vision to manufacture dependable construction chemical solutions.",
    icon: Target,
    color: "text-sky-600",
    bg: "bg-sky-50",
  },

  {
    year: "02",
    title: "Quality Systems",
    description:
      "Established structured quality-focused processes supporting consistent manufacturing.",
    icon: ShieldCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },

  {
    year: "03",
    title: "Product Development",
    description:
      "Expanded focus on innovative solutions designed around modern construction requirements.",
    icon: Lightbulb,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },

  {
    year: "04",
    title: "Growing Capabilities",
    description:
      "Continuing to strengthen manufacturing, quality and customer service capabilities.",
    icon: TrendingUp,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

// ============================================================
// STATS
// ============================================================

const achievementStats = [
  {
    value: "03+",
    title: "ISO Certifications",
    description: "Quality & environmental management standards",
    icon: Award,
    color: "text-sky-600",
    bg: "bg-sky-50",
  },

  {
    value: "100%",
    title: "Quality Focus",
    description: "Commitment to consistent product quality",
    icon: CheckCircle2,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },

  {
    value: "01",
    title: "Core Vision",
    description: "Building reliable construction solutions",
    icon: Target,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },

  {
    value: "∞",
    title: "Future Potential",
    description: "Continuous improvement and innovation",
    icon: Globe2,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

// ============================================================
// PAGE
// ============================================================

const AchievementsPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* ======================================================
          GLOBAL BACKGROUND
      ======================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-64 top-[550px] h-[500px] w-[500px] rounded-full bg-sky-100/50 blur-[150px]" />

        <div className="absolute -right-64 top-[1100px] h-[550px] w-[550px] rounded-full bg-blue-100/40 blur-[160px]" />

        <div className="absolute left-1/2 top-[1800px] h-[500px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-100/30 blur-[150px]" />
      </div>

      {/* ======================================================
          HERO
      ======================================================= */}

      <section className="relative overflow-hidden bg-[#061A35]">
        {/* Glow */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-sky-500/20 blur-[130px]" />

          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />

          <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

          {/* Grid */}

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

            <span className="text-white">Achievements</span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-4 py-2">
                <Trophy
                  size={17}
                  className="text-amber-300"
                />

                <span className="text-xs font-extrabold uppercase tracking-[2px] text-amber-300">
                  Achievements & Milestones
                </span>
              </div>

              {/* Heading */}

              <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[68px]">
                Progress Built on
                <span className="block">
                  <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                    Quality & Innovation
                  </span>
                </span>
              </h1>

              {/* Description */}

              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                At KMR Conchem, every milestone reflects our commitment to
                quality manufacturing, innovation, customer satisfaction and
                continuous improvement.
              </p>

              {/* Points */}

              <div className="mt-9 flex flex-wrap gap-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-400/30 bg-sky-400/10">
                    <ShieldCheck
                      size={18}
                      className="text-sky-300"
                    />
                  </div>

                  <span className="text-sm font-semibold text-slate-200">
                    Quality Focused
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10">
                    <Sparkles
                      size={18}
                      className="text-cyan-300"
                    />
                  </div>

                  <span className="text-sm font-semibold text-slate-200">
                    Innovation Driven
                  </span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT VISUAL */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative flex min-h-[350px] items-center justify-center"
            >
              {/* Glow */}

              <div className="absolute h-[320px] w-[420px] rounded-full bg-sky-400/15 blur-[90px]" />

              {/* Main trophy */}

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
                className="relative z-20 flex h-[220px] w-[220px] items-center justify-center rounded-[55px] border border-white/10 bg-white/[0.07] shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              >
                <div className="absolute inset-5 rounded-[42px] border border-white/10" />

                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-500 shadow-[0_20px_50px_rgba(245,158,11,0.3)]">
                  <Trophy
                    size={58}
                    strokeWidth={1.7}
                    className="text-white"
                  />
                </div>
              </motion.div>

              {/* Floating Cards */}

              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-[2%] top-12 z-30 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl"
              >
                <ShieldCheck
                  size={23}
                  className="text-emerald-300"
                />

                <p className="mt-2 text-xs font-bold text-white">
                  Quality
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[2%] top-24 z-30 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl"
              >
                <FlaskConical
                  size={23}
                  className="text-violet-300"
                />

                <p className="mt-2 text-xs font-bold text-white">
                  Innovation
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 rounded-full border border-white/10 bg-white/10 px-5 py-2.5 backdrop-blur-xl"
              >
                <span className="text-xs font-extrabold text-cyan-200">
                  Building a Better Future
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================
          STATS
      ======================================================= */}

      <section className="relative z-30 -mt-14 px-5 sm:px-7 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {achievementStats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                    <div className="text-3xl font-black text-[#123B79]">
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
          ACHIEVEMENT SECTION
      ======================================================= */}

      <section className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10">
          {/* HEADER */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-sky-300" />

              <span className="text-xs font-extrabold uppercase tracking-[2px] text-sky-600">
                Our Achievements
              </span>

              <span className="h-px w-12 bg-sky-300" />
            </div>

            <h2 className="text-4xl font-black tracking-tight text-[#102944] sm:text-5xl">
              Milestones That Define
              <span className="block bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                Our Progress
              </span>
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500">
              Our achievements are built through consistent quality,
              responsible manufacturing and a strong commitment to our
              customers.
            </p>
          </motion.div>

          {/* CARDS */}

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {achievements.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.id}
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
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className={`group relative overflow-hidden rounded-[26px] border ${item.border} bg-white p-7 shadow-[0_15px_50px_rgba(15,23,42,0.06)] transition-shadow duration-500 hover:shadow-[0_25px_65px_rgba(15,23,42,0.11)]`}
                >
                  {/* Glow */}

                  <div
                    className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full ${item.glow} blur-3xl transition-transform duration-500 group-hover:scale-125`}
                  />

                  {/* Number */}

                  <div className="absolute right-6 top-5 text-5xl font-black text-slate-100">
                    {item.number}
                  </div>

                  {/* Icon */}

                  <div
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg} ${item.color}`}
                  >
                    <Icon
                      size={27}
                      strokeWidth={1.9}
                    />
                  </div>

                  {/* Value */}

                  <div
                    className={`mt-7 text-xs font-extrabold uppercase tracking-[2px] ${item.color}`}
                  >
                    {item.value}
                  </div>

                  {/* Title */}

                  <h3 className="mt-2 text-xl font-black text-[#102944]">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>

                  {/* Bottom */}

                  <div className="mt-6 flex items-center gap-2 text-xs font-extrabold text-slate-400 transition-colors group-hover:text-sky-600">
                    KMR CONCHEM

                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>

                  {/* Bottom Line */}

                  <div
                    className={`absolute bottom-0 left-0 h-[3px] w-full ${item.bg} opacity-0 transition-opacity group-hover:opacity-100`}
                  />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          MILESTONE JOURNEY
      ======================================================= */}

      <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10">
          {/* HEADER */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-sky-300" />

              <span className="text-xs font-extrabold uppercase tracking-[2px] text-sky-600">
                Our Journey
              </span>

              <span className="h-px w-12 bg-sky-300" />
            </div>

            <h2 className="text-4xl font-black tracking-tight text-[#102944] sm:text-5xl">
              From Vision to
              <span className="block text-sky-600">
                Continuous Growth
              </span>
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500">
              Every stage of our journey represents another step toward
              stronger capabilities and better solutions.
            </p>
          </motion.div>

          {/* JOURNEY */}

          <div className="relative mt-16">
            {/* Desktop Line */}

            <div className="absolute left-[12.5%] right-[12.5%] top-[43px] hidden h-px bg-gradient-to-r from-sky-200 via-blue-300 to-sky-200 lg:block" />

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {milestones.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.year}
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
                      delay: index * 0.1,
                    }}
                    className="relative text-center"
                  >
                    {/* Icon */}

                    <div
                      className={`relative z-10 mx-auto flex h-[86px] w-[86px] items-center justify-center rounded-full border-8 border-slate-50 ${item.bg} ${item.color} shadow-[0_10px_35px_rgba(15,23,42,0.08)]`}
                    >
                      <Icon size={29} />
                    </div>

                    {/* Number */}

                    <div className="mt-6 text-xs font-black tracking-[2px] text-sky-600">
                      MILESTONE {item.year}
                    </div>

                    <h3 className="mt-2 text-lg font-black text-[#102944]">
                      {item.title}
                    </h3>

                    <p className="mx-auto mt-2 max-w-[260px] text-sm leading-6 text-slate-500">
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
          QUALITY STATEMENT
      ======================================================= */}

      <section className="relative bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-5 text-center sm:px-7">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative overflow-hidden rounded-[30px] bg-[#061A35] px-7 py-12 shadow-[0_30px_80px_rgba(6,26,53,0.18)] sm:px-12 sm:py-16"
          >
            {/* Glow */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/15 blur-[80px]" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px]" />

            <div className="relative">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10">
                <Trophy
                  size={29}
                  className="text-amber-300"
                />
              </div>

              <h2 className="mt-6 text-3xl font-black text-white sm:text-4xl">
                Building Achievements Through
                <span className="block text-sky-300">
                  Quality & Trust
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                KMR Conchem continues to strengthen its manufacturing
                capabilities while maintaining a customer-first approach and
                commitment to dependable construction chemical solutions.
              </p>

              <Link
                to="/certificate"
                className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                View Our Certifications

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AchievementsPage;