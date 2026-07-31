import { motion } from "framer-motion";
import {
  Building2,
  Handshake,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { clientData } from "../home/Clients/clientData";

const ClientsPage = () => {
  const navigate = useNavigate();
  return (

    
    <main className="relative min-h-screen overflow-hidden bg-slate-50">

      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Top Left Glow */}
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-sky-200/40 blur-[140px]" />

        {/* Top Right Glow */}
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-200/30 blur-[150px]" />

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-[160px]" />

      </div>

      {/* ============================================================
          HERO / PAGE HEADER
      ============================================================ */}

      <section className="relative pt-28 sm:pt-32 lg:pt-36">

        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
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

            {/* Small Badge */}

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-sky-200 bg-white px-5 py-2.5 shadow-[0_8px_30px_rgba(14,165,233,0.08)]">

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100">
                <Handshake
                  size={17}
                  className="text-sky-600"
                />
              </span>

              <span className="text-xs font-black uppercase tracking-[2.5px] text-sky-700">
                Our Clients
              </span>

            </div>

            {/* Main Heading */}

            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">

              Trusted By

              <span className="block bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Leading Companies
              </span>

            </h1>

            {/* Description */}

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              KMR Conchem is proud to work with construction companies,
              infrastructure developers, builders, contractors and
              organizations across diverse projects and industries.
            </p>

          </motion.div>

        </div>

      </section>

      {/* ============================================================
          CLIENT COUNT / TRUST BAR
      ============================================================ */}

      <section className="relative mt-12">

        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
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
            className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
          >

            {/* Total Clients */}

            <div className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100">
                <Building2
                  size={21}
                  className="text-sky-600"
                />
              </div>

              <div>
                <p className="text-2xl font-black text-slate-900">
                  35+
                </p>

                <p className="text-xs font-semibold text-slate-500">
                  Trusted Clients
                </p>
              </div>

            </div>

            {/* Partnership */}

            <div className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100">
                <Handshake
                  size={21}
                  className="text-cyan-600"
                />
              </div>

              <div>
                <p className="text-2xl font-black text-slate-900">
                  Growing
                </p>

                <p className="text-xs font-semibold text-slate-500">
                  Business Partnerships
                </p>
              </div>

            </div>

            {/* Quality */}

            <div className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                <ShieldCheck
                  size={21}
                  className="text-blue-600"
                />
              </div>

              <div>
                <p className="text-2xl font-black text-slate-900">
                  Trusted
                </p>

                <p className="text-xs font-semibold text-slate-500">
                  Quality & Performance
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ============================================================
          CLIENT GRID
      ============================================================ */}

      <section className="relative py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">

          {/* Section Heading */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
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
            className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"
          >

            <div>

              <p className="mb-2 text-xs font-black uppercase tracking-[3px] text-sky-600">
                Our Network
              </p>

              <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
                Companies We Serve
              </h2>

            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-500 md:text-right">
              A growing network of trusted organizations that rely on
              KMR Conchem construction chemical solutions.
            </p>

          </motion.div>

          {/* ========================================================
              GRID
              DESKTOP = EXACTLY 5 CARDS PER ROW
          ======================================================== */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

            {clientData.map((client, index) => (

              <motion.article
                key={client.id}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.035, 0.3),
                }}
                viewport={{
                  once: true,
                  margin: "-50px",
                }}
                whileHover={{
                  y: -7,
                }}
                className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.055)] transition-all duration-300 hover:border-sky-300 hover:shadow-[0_20px_45px_rgba(14,165,233,0.13)]"
              >

                {/* ==================================================
                    CARD TOP GLOW
                ================================================== */}

                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-sky-100/70 blur-3xl transition-all duration-500 group-hover:bg-sky-200/80" />

                <div className="pointer-events-none absolute -bottom-20 -left-20 h-36 w-36 rounded-full bg-blue-100/50 blur-3xl" />

                {/* ==================================================
                    LOGO AREA
                ================================================== */}

                <div className="relative flex h-[175px] items-center justify-center border-b border-slate-100 bg-white px-5 py-6">

                  {/* Logo Background */}

                  <div className="absolute inset-x-6 top-4 h-1 rounded-full bg-gradient-to-r from-transparent via-sky-200 to-transparent opacity-60" />

                  {/* Actual Logo */}

                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      loading="lazy"
                      className="relative max-h-[105px] w-auto max-w-[190px] object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50">
                        <Building2
                          size={28}
                          className="text-sky-600"
                        />
                      </div>

                      <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Company Logo
                      </span>

                    </div>
                  )}

                </div>

                {/* ==================================================
                    COMPANY INFORMATION
                ================================================== */}

                <div className="relative px-5 pb-5 pt-5">

                  {/* Company Name */}

                  <h3 className="min-h-[48px] text-[15px] font-black leading-6 text-slate-900 transition-colors duration-300 group-hover:text-sky-700">
                    {client.name}
                  </h3>

                  {/* Small Description */}

                  <p className="mt-2 min-h-[48px] text-xs leading-5 text-slate-500">
                    {client.description}
                  </p>

                  {/* Bottom Accent */}

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">

                    <span className="text-[9px] font-black uppercase tracking-[2px] text-sky-600">
                      KMR Client
                    </span>

                    <ArrowRight
                      size={15}
                      className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-sky-600"
                    />

                  </div>

                </div>

              </motion.article>

            ))}

          </div>

        </div>

      </section>

      {/* ============================================================
          BOTTOM CTA
      ============================================================ */}

      <section className="relative pb-20 sm:pb-24">

        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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
            className="relative overflow-hidden rounded-[30px] bg-gradient-to-r from-sky-700 via-cyan-600 to-blue-700 px-7 py-12 text-center shadow-[0_25px_70px_rgba(14,165,233,0.18)] sm:px-12 sm:py-16"
          >

            {/* CTA Glow */}

            <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">

              <p className="text-xs font-bold uppercase tracking-[3px] text-sky-100">
                Become Our Partner
              </p>

              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl md:text-5xl">
                Build Better With KMR Conchem
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-sky-100 sm:text-base">
                Looking for reliable construction chemical solutions
                for your next project? Our team is ready to help you
                choose the right solution.
              </p>


<button
  type="button"
  onClick={() => navigate("/contact")}
  className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-black text-sky-700 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
>
  Contact Our Experts

  <ArrowRight size={17} />
</button>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
};

export default ClientsPage;

