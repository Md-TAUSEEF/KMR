import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BriefcaseBusiness,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";


import { useNavigate } from "react-router-dom";
import IndustryCard from "../Industry/IndustryCard";
import { industryData } from "../Industry/industryData";

const Services = () => {
  const navigate=useNavigate();

  const [showAll, setShowAll] = useState(false);



  const visibleServices = showAll ? industryData : industryData.slice(0, 12);



  const hasMoreServices = industryData.length > 12;

  return (
<main className="relative top-[88px] overflow-hidden bg-slate-50">
      {/* ========================================================
          BACKGROUND
      ======================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Left Sky Glow */}

        <div className="absolute -left-40 -top-52 h-[450px] w-[450px] rounded-full bg-sky-200/40 blur-[130px]" />

        {/* Right Cyan Glow */}

        <div className="absolute -right-40 top-80 h-[450px] w-[450px] rounded-full bg-cyan-200/40 blur-[140px]" />

        {/* Bottom Blue Glow */}

        <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-[150px]" />
      </div>

      {/* ========================================================
          HERO
      ======================================================== */}

     <section className="relative">
       <div className="relative mx-auto max-w-[1450px] px-4 pb-12 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pt-14">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mx-auto max-w-4xl text-center"
          >
            {/* ==================================================
                BADGE
            ================================================== */}

            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-sky-200 bg-white px-5 py-2 shadow-[0_8px_25px_rgba(14,165,233,0.08)]">
              <BriefcaseBusiness
                size={19}
                strokeWidth={2}
                className="text-sky-600"
              />

              <span className="text-xs font-extrabold uppercase tracking-[2px] text-sky-700 sm:text-sm">
                Our Services
              </span>
            </div>

            {/* ==================================================
                HEADING
            ================================================== */}

            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-[#102944] sm:text-5xl md:text-6xl">
              Complete Construction
              <span className="block bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Chemical Solutions
              </span>
            </h1>

            {/* ==================================================
                DESCRIPTION
            ================================================== */}

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Explore our construction chemical solutions designed to support
              residential, commercial, industrial and infrastructure projects
              with dependable performance and long-lasting protection.
            </p>

            {/* ==================================================
                DIVIDER
            ================================================== */}

            <div className="mx-auto mt-6 flex items-center justify-center gap-2">
              <span className="h-[2px] w-12 bg-sky-300 sm:w-16" />

              <span className="h-2.5 w-2.5 rounded-full bg-sky-500 shadow-[0_0_14px_rgba(14,165,233,0.40)]" />

              <span className="h-[2px] w-12 bg-blue-300 sm:w-16" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          SERVICES GRID
      ======================================================== */}

      <section className="relative pb-12">
        <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
          {/* Small Section Label */}

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
              duration: 0.5,
            }}
            className="mb-8 flex items-center justify-between"
          >
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[2px] text-sky-600">
                KMR Conchem
              </p>

              <h2 className="mt-1 text-2xl font-black text-[#102944] sm:text-3xl">
                Our Solutions
              </h2>
            </div>

            <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm sm:flex">
              <CheckCircle2 size={17} className="text-sky-500" />

              <span className="text-xs font-bold text-slate-500">
                {industryData.length} Solutions Available
              </span>
            </div>
          </motion.div>

          {/* ====================================================
              SERVICE CARDS
          ==================================================== */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {visibleServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{
                    opacity: 0,
                    y: 35,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: showAll && index >= 12 ? (index - 12) * 0.05 : 0,
                  }}
                >
                  <IndustryCard industry={service} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* ====================================================
              VIEW ALL SERVICES
          ==================================================== */}

          {hasMoreServices && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
              className="mt-12 flex justify-center"
            >
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="group inline-flex items-center gap-3 rounded-full border border-sky-200 bg-white px-8 py-3.5 text-sm font-bold text-sky-700 shadow-[0_10px_30px_rgba(14,165,233,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-50 hover:shadow-[0_15px_35px_rgba(14,165,233,0.14)]"
              >
                <span>{showAll ? "Show Less" : "View All Services"}</span>

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    showAll ? "rotate-180" : "group-hover:translate-y-1"
                  }`}
                />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ========================================================
          SUPPORT CTA
      ======================================================== */}

      <section className="relative pb-24 pt-14">
        <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-sky-700 via-cyan-600 to-blue-700 px-7 py-14 text-center shadow-[0_25px_70px_rgba(14,165,233,0.18)] sm:px-10 sm:py-16"
          >
            {/* CTA Glow */}

            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-[70px]" />

            <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-blue-300/20 blur-[70px]" />

            {/* Icon */}

            <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-md">
              <BriefcaseBusiness size={27} />
            </div>

            {/* Heading */}

            <h2 className="relative mt-6 text-3xl font-black text-white sm:text-4xl md:text-5xl">
              Looking for the Right Solution?
            </h2>

            {/* Description */}

            <p className="relative mx-auto mt-5 max-w-2xl text-base leading-7 text-sky-100 sm:text-lg sm:leading-8">
              Explore our complete range of construction chemical solutions and
              find the right option for your project requirements.
            </p>

            {/* Button */}

            <button type="button"
  onClick={() => navigate("/contact")}
              
              className="group relative mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-sky-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Explore Solutions
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;
