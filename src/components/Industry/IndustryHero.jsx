import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, PhoneCall } from "lucide-react";

const IndustryHero = ({ industry }) => {
  if (!industry) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* ================= Background Effects ================= */}

      <div className="absolute inset-0">
        <div
          className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full blur-[140px] opacity-20"
          style={{ background: industry.accent }}
        />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[170px]" />

        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[130px]" />
      </div>

      {/* Grid Pattern */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#ffffff 1px,transparent 1px),
            linear-gradient(to bottom,#ffffff 1px,transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ================= Container ================= */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20">
        {/* ================= Breadcrumb ================= */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-2 text-sm text-slate-300"
        >
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>

          <ChevronRight size={16} />

          <Link to="/applications" className="hover:text-white transition">
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

        {/* ================= Hero Content ================= */}

        <div className="mt-14 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Badge */}

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

            {/* Heading */}

            <h1 className="mt-8 text-4xl md:text-6xl xl:text-7xl font-black leading-[1.1]">
              {industry.heroTitle}
            </h1>

            {/* Accent Line */}

            <div
              className="mt-8 h-1 w-28 rounded-full"
              style={{
                background: industry.accent,
              }}
            />

            {/* Description */}

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              {industry.heroDescription}
            </p>

            {/* CTA */}

            <div className="mt-10 flex flex-wrap gap-5">
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 font-semibold shadow-2xl"
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
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur-lg hover:bg-white/20"
              >
                <PhoneCall size={19} />
                Contact Us
              </motion.button>
            </div>
          </motion.div>

          {/* ================= Feature Cards ================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {industry.features?.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.25 }}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-white/20 hover:bg-white/10"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-xl transition duration-300 group-hover:scale-110"
                      style={{
                        background: feature.color,
                      }}
                    >
                      <Icon size={26} className="text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ================= Statistics ================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="border-b border-r border-white/10 p-6 md:border-b-0">
                <h2 className="text-3xl font-black text-white">500+</h2>

                <p className="mt-2 text-sm text-slate-300">
                  Successful Projects
                </p>
              </div>

              <div className="border-b border-r border-white/10 p-6 md:border-b-0">
                <h2 className="text-3xl font-black text-white">20+</h2>

                <p className="mt-2 text-sm text-slate-300">Years Experience</p>
              </div>

              <div className="border-r border-white/10 p-6">
                <h2 className="text-3xl font-black text-white">100+</h2>

                <p className="mt-2 text-sm text-slate-300">Premium Products</p>
              </div>

              <div className="p-6">
                <h2 className="text-3xl font-black text-white">24×7</h2>

                <p className="mt-2 text-sm text-slate-300">Technical Support</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Glow */}

            <div
              className="absolute h-[420px] w-[420px] rounded-full blur-[120px] opacity-30"
              style={{
                background: industry.accent,
              }}
            />

            {/* Hero Image */}

            <img
              src={industry.heroImage}
              alt={industry.name}
              className="relative z-10 w-full max-w-[620px] object-contain drop-shadow-[0_40px_70px_rgba(0,0,0,.5)]"
            />

            {/* Floating Badge */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute top-12 -left-6 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-xl shadow-2xl"
            >
              <p className="text-sm text-slate-300">Trusted By</p>

              <h4 className="mt-1 text-xl font-bold">500+ Clients</h4>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute bottom-10 -right-4 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-xl shadow-2xl"
            >
              <p className="text-sm text-slate-300">Industry Grade</p>

              <h4
                className="mt-1 text-xl font-bold"
                style={{
                  color: industry.accent,
                }}
              >
                Premium Quality
              </h4>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndustryHero;
