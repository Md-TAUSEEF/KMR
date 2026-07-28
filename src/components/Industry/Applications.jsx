import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

import IndustryCard from "../Industry/IndustryCard";
import { industryData } from "../Industry/industryData";

const Applications = () => {
  return (
    <main className="relative overflow-hidden bg-slate-50">
      {/* ================= Background ================= */}

      <div className="absolute inset-0">
        <div className="absolute -top-52 -left-40 h-[450px] w-[450px] rounded-full bg-sky-200/40 blur-[130px]" />

        <div className="absolute top-80 -right-40 h-[450px] w-[450px] rounded-full bg-cyan-200/40 blur-[140px]" />

        <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-[150px]" />
      </div>

      {/* ================= Hero ================= */}

      <section className="relative">
       <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-sky-200 bg-white px-5 py-2 shadow-lg">
              <Building2 className="text-sky-600" size={20} />

              <span className="text-sm font-semibold tracking-[2px] uppercase text-sky-700">
                Industries We Serve
              </span>
            </div>

            <h1 className="mt-8 text-4xl md:text-6xl font-black leading-tight text-slate-900">
              Construction Solutions
              <span className="block text-sky-600">Across Every Industry</span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              KMR Conchem provides innovative construction chemicals designed
              for buildings, infrastructure, industrial facilities and
              specialized engineering projects. Explore how our solutions
              deliver long-lasting performance across diverse industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= Cards ================= */}

      <section className="relative pb-28">
        <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industryData.map((industry, index) => (
              <IndustryCard
                key={industry.id}
                industry={industry}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="relative pb-24">
       <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[35px] bg-gradient-to-r from-sky-700 via-cyan-600 to-blue-700 px-8 py-16 text-center shadow-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white">
              Looking for the Right Solution?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-sky-100">
              Our experts help you select the perfect construction chemical
              system for your industry, ensuring durability, safety and
              long-term performance.
            </p>

            <button className="mt-10 rounded-full bg-white px-8 py-4 font-bold text-sky-700 shadow-xl transition duration-300 hover:scale-105">
              Contact Our Experts
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Applications;
