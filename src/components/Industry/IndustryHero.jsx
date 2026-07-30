import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, PhoneCall } from "lucide-react";

const IndustryHero = ({ industry }) => {
  if (!industry) return null;

  return (
    <section className="relative h-[820px] overflow-hidden text-white">
      {/* ================= Background Image ================= */}

      <img
        src={industry.heroImage}
        alt={industry.name}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-900/20" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#ffffff 1px,transparent 1px),
            linear-gradient(to bottom,#ffffff 1px,transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ================= Container ================= */}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-start px-6 pt-28 lg:px-10 lg:pt-32">
        <div className="max-w-2xl">
          {/* ================= Breadcrumb ================= */}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-200"
          >
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>

            <ChevronRight size={16} />

            <Link to="/applications" className="transition hover:text-white">
              Applications
            </Link>

            <ChevronRight size={16} />

            <span
              className="font-semibold"
              style={{
                color: industry.accent,
              }}
            >
              {industry.name}
            </span>
          </motion.div>
          {/* ================= Badge ================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >
            <div
              className="inline-flex items-center rounded-full border px-5 py-2 backdrop-blur-md"
              style={{
                borderColor: `${industry.accent}70`,
                background: `${industry.accent}15`,
              }}
            >
              <span
                className="mr-2 h-2.5 w-2.5 rounded-full"
                style={{
                  background: industry.accent,
                }}
              />

              <span
                className="text-sm font-semibold uppercase tracking-[2px]"
                style={{
                  color: industry.accent,
                }}
              >
                Industry Solutions
              </span>
            </div>
          </motion.div>

          {/* ================= Heading ================= */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="mt-5 text-3xl font-black leading-[1.15] md:text-5xl xl:text-6xl"
          >
            {industry.heroTitle}
          </motion.h1>

          {/* Accent Line */}

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: 110,
            }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="mt-5 h-1 rounded-full"
            style={{
              background: industry.accent,
            }}
          />

          {/* ================= Description ================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="mt-5 max-w-xl text-base leading-7 text-slate-200"
          >
            {industry.heroDescription}
          </motion.p>
          {/* ================= CTA Buttons ================= */}

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
              duration: 0.8,
              delay: 0.55,
            }}
            className="mt-7 flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="inline-flex items-center gap-3 rounded-full px-6 py-3.5 font-semibold text-white shadow-[0_20px_40px_rgba(0,0,0,.35)] transition-all"
              style={{
                background: industry.accent,
              }}
            >
              Explore Solutions
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all hover:bg-white/20"
            >
              <PhoneCall size={20} />
              Contact Us
            </motion.button>
          </motion.div>

          {/* ================= Bottom Info ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <div>
              <h2
                className="text-3xl font-black"
                style={{
                  color: industry.accent,
                }}
              >
                500+
              </h2>

              <p className="mt-2 text-sm text-slate-300">Successful Projects</p>
            </div>

            <div className="h-12 w-px bg-white/20" />

            <div>
              <h2
                className="text-4xl font-black"
                style={{
                  color: industry.accent,
                }}
              >
                20+
              </h2>

              <p className="mt-2 text-sm text-slate-300">Years Experience</p>
            </div>

            <div className="h-12 w-px bg-white/20" />

            <div>
              <h2
                className="text-4xl font-black"
                style={{
                  color: industry.accent,
                }}
              >
                100+
              </h2>

              <p className="mt-2 text-sm text-slate-300">Premium Products</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= Bottom Fade ================= */}

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/40 to-transparent" />

      {/* ================= Decorative Glow ================= */}

      <div
        className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full blur-[130px] opacity-25"
        style={{
          background: industry.accent,
        }}
      />

      <div
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-[120px] opacity-20"
        style={{
          background: industry.accent,
        }}
      />
    </section>
  );
};

export default IndustryHero;
