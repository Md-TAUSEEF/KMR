import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { whyChooseData } from "./whyChooseData";

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-28">
      {/* Background Glow */}

      <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-cyan-100 blur-[140px]" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-100 blur-[150px]" />

      {/* Grid Pattern */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
          linear-gradient(#0f172a 1px, transparent 1px),
          linear-gradient(90deg,#0f172a 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-cyan-100 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-cyan-700">
            Why Choose KMR
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl xl:text-6xl">
            Building Trust Through
            <span className="block text-cyan-600">Quality & Innovation</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We combine advanced manufacturing, innovative formulations and
            uncompromising quality standards to deliver construction chemical
            solutions that perform in the most demanding environments.
          </p>
        </motion.div>

        {/* ===========================
             CARDS START IN PART 2
        =========================== */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
               className={`group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${item.bg}`}
              >
                {/* Top Glow */}

                
<div
  className={`absolute inset-x-0 top-0 h-1 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 ${
    item.id === 1
      ? "bg-gradient-to-r from-sky-500 to-cyan-500"
      : item.id === 2
      ? "bg-gradient-to-r from-orange-500 to-amber-500"
      : item.id === 3
      ? "bg-gradient-to-r from-violet-500 to-fuchsia-500"
      : item.id === 4
      ? "bg-gradient-to-r from-emerald-500 to-green-500"
      : item.id === 5
      ? "bg-gradient-to-r from-indigo-500 to-blue-500"
      : "bg-gradient-to-r from-rose-500 to-pink-500"
  }`}
/>
                {/* Background Glow */}

                <div
  className={`absolute -right-16 -top-16 h-36 w-36 rounded-full opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100 ${
    item.bg
  }`}
/>

                {/* Icon */}

                <div
                  className={`relative flex h-20 w-20 items-center justify-center rounded-3xl ${item.bg} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                >
                  <Icon
                    size={38}
                    className={`${item.color} transition-transform duration-500 group-hover:scale-110`}
                  />
                </div>

                {/* Title */}

                <h3 className={`mt-8 text-2xl font-bold text-slate-900 transition-all duration-300 ${item.color}`}>
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-5 leading-8 text-slate-600">
                  {item.description}
                </p>

                {/* Bottom Link */}

                <div className="mt-8 flex items-center justify-between">
                  <span className={`text-sm font-semibold uppercase tracking-[2px] ${item.color}`}>
                    Learn More
                  </span>

                  <div
  className={`flex h-11 w-11 items-center justify-center rounded-full ${item.bg} transition-all duration-300 group-hover:scale-110`}
>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-slate-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M13 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Hover Border */}

                <div className="absolute inset-0 rounded-[28px] border border-transparent transition-all duration-500 group-hover:border-slate-300" />
              </motion.div>
            );
          })}
        </div>

        {/* ======================================
          Bottom Trust Section
      ======================================= */}

        
      </div>
    </section>
  );
}
