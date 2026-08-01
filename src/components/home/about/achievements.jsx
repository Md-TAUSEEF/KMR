import React from "react";
import { motion } from "framer-motion";

import {
  Award,
  BadgeCheck,
  ShieldCheck,
  Trophy,
  CheckCircle2,
  ArrowRight,
  Star,
} from "lucide-react";

// ============================================================
// ACHIEVEMENT / CERTIFICATE IMAGES
// ============================================================

import achievement1 from "../../../assets/achievements/achievement1.webp";
import achievement2 from "../../../assets/achievements/achievement2.webp";
// import achievement3 from "../../../assets/achievements/achievement3.webp";
// import achievement4 from "../../../assets/achievements/achievement4.webp";

// ============================================================
// ACHIEVEMENT DATA
// ============================================================

const achievements = [
  {
    image: achievement1,
    title: "Quality Excellence",
    description:
      "Recognition of our commitment to maintaining consistent quality and reliable construction chemical solutions.",
    icon: Award,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
    border: "border-amber-200",
    glow: "bg-amber-100/50",
  },
  {
    image: achievement2,
    title: "Industry Recognition",
    description:
      "Our performance and dedication to construction chemical innovation continue to earn industry recognition.",
    icon: Trophy,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
    border: "border-blue-200",
    glow: "bg-blue-100/50",
  },
  //   {
  //     image: achievement3,
  //     title: "Certified Standards",
  //     description:
  //       "Our quality-focused approach supports dependable products manufactured with controlled processes.",
  //     icon: ShieldCheck,
  //     iconColor: "text-emerald-500",
  //     iconBg: "bg-emerald-50",
  //     border: "border-emerald-200",
  //     glow: "bg-emerald-100/50",
  //   },
  //   {
  //     image: achievement4,
  //     title: "Trusted Performance",
  //     description:
  //       "Built around reliability, technical expertise and a long-term commitment to customer satisfaction.",
  //     icon: BadgeCheck,
  //     iconColor: "text-violet-500",
  //     iconBg: "bg-violet-50",
  //     border: "border-violet-200",
  //     glow: "bg-violet-100/50",
  //   },
];

// ============================================================
// MAIN COMPONENT
// ============================================================

const AchievementsCertifications = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-20 sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-28">
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue Glow */}

        <div className="absolute -left-40 top-20 h-[430px] w-[430px] rounded-full bg-blue-100/60 blur-[130px]" />

        {/* Sky Glow */}

        <div className="absolute -right-40 top-[300px] h-[500px] w-[500px] rounded-full bg-sky-100/60 blur-[140px]" />

        {/* Bottom Glow */}

        <div className="absolute bottom-0 left-1/2 h-[320px] w-[850px] -translate-x-1/2 rounded-full bg-blue-50/70 blur-[130px]" />

        {/* Soft Center Glow */}

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-50/60 blur-[120px]" />
      </div>

      {/* ======================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
        {/* ====================================================
            HEADER
        ==================================================== */}

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
          className="mx-auto mb-9 -translate-y-4 max-w-4xl text-center lg:mb-11"
        >
          {/* Badge */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2">
            <Trophy size={17} strokeWidth={2} className="text-blue-600" />

            <span className="text-xs font-extrabold uppercase tracking-[2px] text-blue-700 sm:text-sm">
              Achievements & Certifications
            </span>
          </div>

          {/* Heading */}

         <h2 className="text-2xl font-black leading-tight tracking-tight text-[#102944] sm:text-3xl md:text-4xl lg:text-[46px]">
            Recognized for Quality.
            <span className="block bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
              Trusted for Performance.
            </span>
          </h2>

          {/* Divider */}

          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-[2px] w-12 bg-blue-300 sm:w-16" />

            <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(37,99,235,0.45)]" />

            <span className="h-[2px] w-12 bg-sky-300 sm:w-16" />
          </div>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-7 text-slate-600 sm:text-base md:text-lg md:leading-8">
            Our achievements and certifications reflect our commitment to
            quality, technical excellence and dependable construction chemical
            solutions trusted by customers and project partners.
          </p>
        </motion.div>

        {/* ====================================================
            TOP TRUST STRIP
        ==================================================== */}

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
            duration: 0.6,
          }}
          className="mx-auto mb-12 grid max-w-5xl gap-4 sm:grid-cols-3"
        >
          {/* ITEM 1 */}

          <div className="group flex items-center gap-4 rounded-2xl border border-blue-100 bg-white/90 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_15px_40px_rgba(37,99,235,0.10)]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100">
              <Award size={24} className="text-blue-600" />
            </div>

            <div>
              <p className="text-sm font-black text-[#102944]">
                Quality Focused
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Consistent standards
              </p>
            </div>
          </div>

          {/* ITEM 2 */}

          <div className="group flex items-center gap-4 rounded-2xl border border-emerald-100 bg-white/90 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_15px_40px_rgba(16,185,129,0.10)]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 transition-colors duration-300 group-hover:bg-emerald-100">
              <ShieldCheck size={24} className="text-emerald-600" />
            </div>

            <div>
              <p className="text-sm font-black text-[#102944]">
                Certified Approach
              </p>

              <p className="mt-1 text-xs text-slate-500">Reliable processes</p>
            </div>
          </div>

          {/* ITEM 3 */}

          <div className="group flex items-center gap-4 rounded-2xl border border-amber-100 bg-white/90 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-[0_15px_40px_rgba(245,158,11,0.10)]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 transition-colors duration-300 group-hover:bg-amber-100">
              <Star size={24} className="text-amber-500" />
            </div>

            <div>
              <p className="text-sm font-black text-[#102944]">
                Trusted Performance
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Built for reliability
              </p>
            </div>
          </div>
        </motion.div>

        {/* ====================================================
            ACHIEVEMENT GRID
        ==================================================== */}

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 45,
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
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className={`group relative overflow-hidden rounded-[28px] border ${item.border} bg-white p-3 shadow-[0_15px_45px_rgba(15,23,42,0.07)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]`}
              >
                {/* ==================================================
                    CARD GLOW
                ================================================== */}

                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full ${item.glow} opacity-0 blur-[55px] transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* ==================================================
                    IMAGE
                ================================================== */}

                <div className="relative overflow-hidden rounded-[22px] bg-slate-50">
                  {/* Image Glow */}

                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/50 blur-[55px]" />

                  <img
                    src={item.image}
                    alt={item.title}
                    className="relative z-10 h-[270px] w-full object-contain p-4 transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  {/* Top Icon */}

                  <div
                    className={`absolute left-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-xl ${item.iconBg} shadow-sm`}
                  >
                    <Icon size={22} className={item.iconColor} />
                  </div>

                  {/* Verified Badge */}

                  <div className="absolute right-4 top-4 z-20 flex items-center gap-1.5 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur-md">
                    <CheckCircle2 size={14} className="text-blue-500" />

                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                      Verified
                    </span>
                  </div>

                  {/* Image Bottom Gradient */}

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-white/80 to-transparent" />
                </div>

                {/* ==================================================
                    CARD CONTENT
                ================================================== */}

                <div className="relative z-20 px-3 pb-4 pt-5">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-[10px] font-black text-blue-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-[1px] flex-1 bg-slate-100" />
                  </div>

                  <h3 className="text-lg font-black text-[#102944]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs font-bold text-blue-600 transition-all duration-300 group-hover:gap-3">
                    <span>View Recognition</span>

                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ====================================================
            BOTTOM TRUST MESSAGE
        ==================================================== */}

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
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mt-14 max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white px-5 py-3 shadow-[0_8px_25px_rgba(15,23,42,0.05)]">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50">
              <CheckCircle2 size={17} className="text-blue-600" />
            </div>

            <span className="text-sm font-bold text-[#102944]">
              Quality, reliability and continuous improvement
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsCertifications;
