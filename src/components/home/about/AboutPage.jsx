import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Beaker,
  Building2,
  CheckCircle2,
  ChevronRight,
  Factory,
  FlaskConical,
  Globe2,
  Layers3,
  ShieldCheck,
  Target,
  Users,
  Droplets,
  Workflow,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import ManufacturingFactory from "./ManufacturingFactory";
import WhyChoose from "../whyChoose/WhyChoose";
import Clients from "../Clients/Clients";

// ============================================================
// ABOUT PAGE
// ============================================================

const AboutPage = () => {
  const navigate = useNavigate();

  // ============================================================
  // COMPANY VALUES
  // ============================================================

  const values = [
    {
      icon: ShieldCheck,
      title: "Quality First",
      description:
        "We focus on consistent quality, reliable performance and solutions designed for demanding construction environments.",
    },
    {
      icon: Beaker,
      title: "Innovation",
      description:
        "We continuously focus on better construction chemical solutions through technology, formulation and practical application.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Understanding project requirements and delivering dependable solutions remains at the heart of our approach.",
    },
    {
      icon: Workflow,
      title: "Operational Excellence",
      description:
        "Our approach combines disciplined manufacturing processes, quality control and responsible execution.",
    },
  ];

  // ============================================================
  // SOLUTIONS
  // ============================================================

  const solutions = [
    {
      icon: Droplets,
      title: "Waterproofing Solutions",
      description:
        "Solutions designed to improve protection against water ingress and moisture-related deterioration.",
    },
    {
      icon: FlaskConical,
      title: "Construction Admixtures",
      description:
        "Performance-oriented chemical solutions developed to support concrete workability, strength and durability.",
    },
    {
      icon: Layers3,
      title: "Repair & Protection",
      description:
        "Construction chemical systems focused on repair, protection and long-term structural performance.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fbff]">

      {/* ======================================================
          HERO
      ======================================================= */}

      <section className="relative overflow-hidden bg-[#071a2c] pt-28 md:pt-32 lg:pt-36">
        {/* Background glow */}

        <div className="pointer-events-none absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-sky-500/10 blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[120px]" />

        {/* Hero content */}

        <div className="relative mx-auto max-w-[1450px] px-5 pb-20 sm:px-6 md:pb-24 lg:px-8 lg:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

            {/* LEFT */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              {/* Breadcrumb */}

              <div className="mb-7 flex items-center gap-2 text-xs font-semibold text-slate-400">
                <span
                  className="cursor-pointer transition-colors hover:text-sky-400"
                  onClick={() => navigate("/")}
                >
                  Home
                </span>

                <ChevronRight size={14} />

                <span className="text-sky-400">
                  About Us
                </span>
              </div>

              {/* Badge */}

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-5 py-2">
                <Building2
                  size={16}
                  className="text-sky-400"
                />

                <span className="text-[11px] font-extrabold uppercase tracking-[2.5px] text-sky-300">
                  About KMR Conchem
                </span>
              </div>

              {/* Heading */}

              <h1 className="max-w-4xl text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]">
                Building Stronger

                <span className="block bg-gradient-to-r from-sky-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  With Better Chemistry.
                </span>
              </h1>

              {/* Description */}

              <p className="mt-7 max-w-2xl text-[15px] leading-7 text-slate-300 sm:text-base md:text-lg md:leading-8">
                KMR Conchem Pvt. Ltd. is focused on delivering reliable,
                high-performance construction chemical solutions designed to
                support stronger, more durable and better-protected
                infrastructure.
              </p>

              {/* Buttons */}

              <div className="mt-9 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => navigate("/products")}
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_15px_35px_rgba(14,165,233,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(14,165,233,0.32)]"
                >
                  Explore Products

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-sky-400/10"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>

            {/* RIGHT VISUAL */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
              }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-2 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-[#0d2c43] via-[#0b2033] to-[#071a2c] p-8 sm:p-10">

                  {/* Decorative circle */}

                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-sky-400/10" />

                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-sky-400/10" />

                  {/* Icon */}

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10">
                    <Beaker
                      size={32}
                      className="text-sky-300"
                    />
                  </div>

                  <p className="relative mt-8 text-xs font-bold uppercase tracking-[3px] text-sky-400">
                    Construction Chemistry
                  </p>

                  <h2 className="relative mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                    Performance.
                    <br />
                    Protection.
                    <br />
                    Durability.
                  </h2>

                  <div className="relative mt-8 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <Factory
                        size={21}
                        className="text-sky-400"
                      />

                      <p className="mt-3 text-xs font-bold text-white">
                        Manufacturing
                      </p>

                      <p className="mt-1 text-[11px] leading-4 text-slate-400">
                        Process driven production
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <ShieldCheck
                        size={21}
                        className="text-sky-400"
                      />

                      <p className="mt-3 text-xs font-bold text-white">
                        Quality
                      </p>

                      <p className="mt-1 text-[11px] leading-4 text-slate-400">
                        Consistent performance
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}

              <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-white/10 bg-white px-5 py-4 shadow-[0_20px_45px_rgba(0,0,0,0.20)] sm:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50">
                  <Award
                    size={20}
                    className="text-sky-500"
                  />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-[#102944]">
                    Quality Driven
                  </p>

                  <p className="text-[11px] text-slate-500">
                    Built for performance
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}

        <div className="absolute bottom-0 left-0 h-12 w-full bg-[#f8fbff] [clip-path:ellipse(70%_100%_at_50%_100%)]" />
      </section>

      {/* ======================================================
          COMPANY OVERVIEW
      ======================================================= */}

      <section className="relative py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1250px] px-5 sm:px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            {/* LEFT */}

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
            >
              <div className="rounded-[30px] border border-sky-100 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.07)] sm:p-9">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50">
                  <Building2
                    size={27}
                    className="text-sky-500"
                  />
                </div>

                <p className="mt-6 text-xs font-extrabold uppercase tracking-[2.5px] text-sky-500">
                  Who We Are
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight text-[#102944] sm:text-4xl">
                  Chemistry That Supports
                  <span className="block text-sky-500">
                    Better Construction.
                  </span>
                </h2>

                <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-sky-400 to-blue-600" />
              </div>
            </motion.div>

            {/* RIGHT */}

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
                delay: 0.1,
              }}
            >
              <p className="text-[15px] leading-8 text-slate-600 md:text-lg">
                KMR Conchem Pvt. Ltd. is a construction chemical company
                focused on developing and supplying solutions that help
                improve the performance, durability and protection of
                modern construction projects.
              </p>

              <p className="mt-5 text-[15px] leading-8 text-slate-600 md:text-lg">
                Our product portfolio covers construction chemical
                applications including admixtures, waterproofing systems,
                curing compounds, repair solutions and other specialized
                products used across a range of construction requirements.
              </p>

              <p className="mt-5 text-[15px] leading-8 text-slate-600 md:text-lg">
                We believe that dependable construction begins with the
                right materials, the right technology and a commitment to
                consistent quality.
              </p>

              {/* Highlights */}

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "Performance focused products",
                  "Quality oriented manufacturing",
                  "Application driven solutions",
                  "Long-term customer relationships",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-sm"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-sky-500"
                    />

                    <span className="text-sm font-semibold text-[#102944]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================
          MISSION / VISION
      ======================================================= */}

      <section className="relative overflow-hidden bg-white py-20 md:py-24">
        <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-sky-100/50 blur-[120px]" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-100/50 blur-[120px]" />

        <div className="relative mx-auto max-w-[1250px] px-5 sm:px-6 lg:px-8">

          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-xs font-extrabold uppercase tracking-[3px] text-sky-500">
              Our Direction
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#102944] sm:text-4xl md:text-5xl">
              Driven By Purpose.
              <span className="block text-sky-500">
                Built For The Future.
              </span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {/* MISSION */}

            <motion.div
              initial={{
                opacity: 0,
                x: -35,
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
              className="group rounded-[28px] border border-sky-100 bg-[#f8fbff] p-7 shadow-[0_15px_45px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(14,165,233,0.10)] sm:p-9"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-lg shadow-sky-500/20">
                <Target size={26} />
              </div>

              <h3 className="mt-6 text-2xl font-black text-[#102944]">
                Our Mission
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                To provide dependable construction chemical solutions that
                help customers achieve stronger, more durable and better
                protected structures while maintaining a strong focus on
                quality, innovation and responsible business practices.
              </p>
            </motion.div>

            {/* VISION */}

            <motion.div
              initial={{
                opacity: 0,
                x: 35,
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
              className="group rounded-[28px] border border-blue-100 bg-[#f8fbff] p-7 shadow-[0_15px_45px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(14,165,233,0.10)] sm:p-9"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <Globe2 size={26} />
              </div>

              <h3 className="mt-6 text-2xl font-black text-[#102944]">
                Our Vision
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                To grow as a trusted name in construction chemicals by
                combining technology, quality and customer understanding to
                create solutions that contribute to better infrastructure
                and long-term value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================
          CORE VALUES
      ======================================================= */}

      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-[1250px] px-5 sm:px-6 lg:px-8">

          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-xs font-extrabold uppercase tracking-[3px] text-sky-500">
              What Drives Us
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#102944] sm:text-4xl md:text-5xl">
              Our Core Values
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-slate-600 md:text-base">
              The principles that guide our products, processes and
              relationships.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="group rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_20px_45px_rgba(14,165,233,0.10)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 transition-colors duration-300 group-hover:bg-sky-500">
                    <Icon
                      size={22}
                      className="text-sky-500 transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold text-[#102944]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          SOLUTIONS
      ======================================================= */}

      <section className="bg-[#071a2c] py-20 md:py-24">
        <div className="mx-auto max-w-[1250px] px-5 sm:px-6 lg:px-8">

          <div className="grid items-end gap-8 md:grid-cols-2">

            <div>
              <span className="text-xs font-extrabold uppercase tracking-[3px] text-sky-400">
                Our Expertise
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                Solutions Designed
                <span className="block text-sky-400">
                  For Real Projects.
                </span>
              </h2>
            </div>

            <p className="text-[15px] leading-7 text-slate-400 md:text-base">
              From concrete performance to waterproofing and protection,
              our solutions are developed around practical construction
              requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <motion.div
                  key={solution.title}
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
                    delay: index * 0.1,
                  }}
                  className="group rounded-[26px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-sky-400/[0.06]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/10">
                    <Icon
                      size={23}
                      className="text-sky-400"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold text-white">
                    {solution.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {solution.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          MANUFACTURING
      ======================================================= */}

      <ManufacturingFactory />

      {/* ======================================================
          WHY CHOOSE KMR
      ======================================================= */}

      <WhyChoose />

      {/* ======================================================
          CLIENTS
      ======================================================= */}

      <Clients />

      {/* ======================================================
          FINAL CTA
      ======================================================= */}

      <section className="relative overflow-hidden bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-6 lg:px-8">
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
              duration: 0.7,
            }}
            className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-sky-500 via-blue-600 to-[#102944] p-8 text-center shadow-[0_25px_70px_rgba(14,165,233,0.20)] sm:p-12 md:p-16"
          >
            {/* Glow */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-cyan-300/10 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <Beaker
                  size={27}
                  className="text-white"
                />
              </div>

              <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                Let's Build Better
                <span className="block text-cyan-200">
                  With KMR Conchem
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-blue-100 md:text-base">
                Explore our construction chemical solutions or speak with
                our team about your project requirements.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button
                  type="button"
                  onClick={() => navigate("/products")}
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-[#102944] shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Explore Products

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                >
                  Contact Our Team
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;