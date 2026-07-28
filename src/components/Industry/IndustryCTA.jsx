import { motion } from "framer-motion";
import {
  ArrowRight,
  PhoneCall,
  FileDown,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const IndustryCTA = ({ industry }) => {
  if (!industry) return null;

  return (
    <section className="relative overflow-hidden py-24">

      {/* ================= Background ================= */}

      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${industry.accent}, #0f172a)`,
        }}
      />

      {/* Glow */}

      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-[140px]" />

      <div className="absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[170px]" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
          linear-gradient(to right,#fff 1px,transparent 1px),
          linear-gradient(to bottom,#fff 1px,transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ================= Container ================= */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

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
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="overflow-hidden rounded-[40px] border border-white/15 bg-white/10 p-8 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,.35)] md:p-14"
        >

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* ================= Left ================= */}

            <div>

              <div className="inline-flex items-center rounded-full bg-white/15 px-5 py-2 text-sm font-semibold uppercase tracking-[2px] text-white">

                Let's Build Together

              </div>

              <h2 className="mt-7 text-4xl font-black leading-tight text-white md:text-6xl">

                Ready to Start Your
                <span className="block">

                  {industry.name}

                </span>

                Project?

              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">

                Our experts will help you select the right construction
                chemical solution for your project. Get technical guidance,
                product recommendations and complete project support from
                KMR Conchem.

              </p>

              <div className="mt-10 space-y-4">

                {[
                  "Free Technical Consultation",
                  "Project Specific Product Recommendation",
                  "Experienced Technical Team",
                  "Fast Customer Support",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2
                      size={20}
                      className="text-green-400"
                    />

                    <span className="text-white/90">

                      {item}

                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* ================= Right ================= */}

            <div className="space-y-6">

              {/* Contact Card */}

              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">

                <h3 className="text-2xl font-bold text-white">

                  Need Expert Advice?

                </h3>

                <p className="mt-3 leading-7 text-white/75">

                  Contact our technical team for product selection,
                  application guidance and project consultation.

                </p>

              </div>

              {/* Buttons */}

              <div className="grid gap-4">

                <Link
                  to="/contact"
                  className="flex items-center justify-between rounded-2xl bg-white px-6 py-5 font-bold shadow-xl transition duration-300 hover:scale-[1.02]"
                  style={{
                    color: industry.accent,
                  }}
                >

                  <span className="flex items-center gap-3">

                    <PhoneCall size={20} />

                    Get Free Consultation

                  </span>

                  <ArrowRight size={20} />

                </Link>

                <button
                  className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-6 py-5 font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white/20"
                >

                  <span className="flex items-center gap-3">

                    <FileDown size={20} />

                    Download Brochure

                  </span>

                  <ArrowRight size={20} />

                </button>

                <Link
                  to="/contact"
                  className="flex items-center justify-between rounded-2xl border border-green-400/30 bg-green-500/15 px-6 py-5 font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-green-500/25"
                >

                  <span className="flex items-center gap-3">

                    <MessageCircle size={20} />

                    Chat on WhatsApp

                  </span>

                  <ArrowRight size={20} />

                </Link>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default IndustryCTA;