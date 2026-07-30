import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  ChevronDown,
} from "lucide-react";

import IndustryCard from "../Industry/IndustryCard";
import { industryData } from "../Industry/industryData";

const Applications = () => {
  // ============================================================
  // SHOW / HIDE ALL INDUSTRIES
  // ============================================================

  const [showAll, setShowAll] = useState(false);

  // ============================================================
  // INITIAL CARDS
  // 4 CARDS PER ROW × 2 ROWS = 8 CARDS
  // ============================================================

  const visibleIndustries = showAll
    ? industryData
    : industryData.slice(0, 8);

  // ============================================================
  // CHECK IF MORE CARDS EXIST
  // ============================================================

  const hasMoreIndustries = industryData.length > 8;

  return (
    <main className="relative overflow-hidden bg-slate-50">

      {/* ========================================================
          BACKGROUND
      ======================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute -left-40 -top-52 h-[450px] w-[450px] rounded-full bg-sky-200/40 blur-[130px]" />

        <div className="absolute -right-40 top-80 h-[450px] w-[450px] rounded-full bg-cyan-200/40 blur-[140px]" />

        <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-[150px]" />

      </div>

      {/* ========================================================
          HERO
      ======================================================== */}

      <section className="relative">

       <div className="relative mx-auto max-w-[1450px] px-4 pb-12 pt-20 sm:px-6 lg:px-8">

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
            className="text-center"
          >

            {/* Badge */}

            <div className="inline-flex items-center gap-2.5 rounded-full border border-sky-200 bg-white px-4 py-1.5 shadow-md">

              <Building2
                className="text-sky-600"
                size={20}
              />

              <span className="text-sm font-semibold uppercase tracking-[2px] text-sky-700">
                Industries We Serve
              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-5 text-3xl font-black leading-tight text-slate-900 md:text-5xl">

              Construction Solutions

              <span className="block text-sky-600">
                Across Every Industry
              </span>

            </h1>

            {/* Description */}

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">

              KMR Conchem provides innovative construction chemicals designed
              for buildings, infrastructure, industrial facilities and
              specialized engineering projects. Explore how our solutions
              deliver long-lasting performance across diverse industries.

            </p>

          </motion.div>

        </div>

      </section>

      {/* ========================================================
          INDUSTRY CARDS
      ======================================================== */}

      <section className="relative pb-10">

        <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            <AnimatePresence mode="popLayout">

              {visibleIndustries.map((industry, index) => (

                <motion.div
                  key={industry.id}
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
                    delay: showAll && index >= 8
                      ? (index - 8) * 0.05
                      : 0,
                  }}
                >

                  <IndustryCard
                    industry={industry}
                    index={index}
                  />

                </motion.div>

              ))}

            </AnimatePresence>

          </div>

          {/* ======================================================
              VIEW ALL / SHOW LESS BUTTON
          ====================================================== */}

          {hasMoreIndustries && (

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
                className="group inline-flex items-center gap-3 rounded-full border border-sky-200 bg-white px-7 py-3.5 text-sm font-bold text-sky-700 shadow-lg shadow-sky-100/50 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-50 hover:shadow-xl"
              >

                <span>
                  {showAll
                    ? "Show Less"
                    : "View All Industries"}
                </span>

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    showAll
                      ? "rotate-180"
                      : "group-hover:translate-y-1"
                  }`}
                />

              </button>

            </motion.div>

          )}

        </div>

      </section>

      {/* ========================================================
          CTA
      ======================================================== */}

      <section className="relative pb-24 pt-16">

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
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="overflow-hidden rounded-[35px] bg-gradient-to-r from-sky-700 via-cyan-600 to-blue-700 px-8 py-16 text-center shadow-2xl"
          >

            <h2 className="text-3xl font-black text-white md:text-5xl">
              Looking for the Right Solution?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-sky-100">

              Our experts help you select the perfect construction chemical
              system for your industry, ensuring durability, safety and
              long-term performance.

            </p>

            <button
              type="button"
              className="mt-10 rounded-full bg-white px-8 py-4 font-bold text-sky-700 shadow-xl transition duration-300 hover:scale-105"
            >
              Contact Our Experts
            </button>

          </motion.div>

        </div>

      </section>

    </main>
  );
};

export default Applications;

