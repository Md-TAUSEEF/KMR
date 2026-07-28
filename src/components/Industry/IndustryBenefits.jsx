import { motion } from "framer-motion";
import {
  ShieldCheck,
  Droplets,
  Award,
  Hammer,
  Leaf,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const IndustryBenefits = ({ industry }) => {
  if (!industry) return null;

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Superior Protection",
      description:
        "Advanced construction chemical systems that protect structures from water, corrosion and harsh environments.",
      color: "#2563eb",
    },
    {
      icon: Droplets,
      title: "Waterproof Technology",
      description:
        "Reliable waterproofing solutions for basements, roofs, terraces and critical infrastructure.",
      color: "#06b6d4",
    },
    {
      icon: Hammer,
      title: "Structural Strength",
      description:
        "Improve bonding, repair damaged concrete and increase structural durability.",
      color: "#f97316",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "Manufactured with high-quality raw materials following international standards.",
      color: "#8b5cf6",
    },
    {
      icon: Leaf,
      title: "Eco Friendly",
      description:
        "Sustainable solutions designed for modern green construction projects.",
      color: "#16a34a",
    },
    {
      icon: Sparkles,
      title: "Long Service Life",
      description:
        "Engineered for exceptional performance with reduced maintenance costs.",
      color: "#ec4899",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-sky-100 blur-[130px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-100 blur-[150px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span
            className="text-sm font-semibold uppercase tracking-[3px]"
            style={{
              color: industry.accent,
            }}
          >
            Why Choose KMR Conchem
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">

            Trusted Solutions for
            <span
              className="block"
              style={{
                color: industry.accent,
              }}
            >
              {industry.name}
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

            We provide innovative construction chemical solutions
            that deliver outstanding performance, long-term durability
            and reliable protection for every project.

          </p>

        </motion.div>

        {/* Main Content */}

        <div className="mt-20 grid gap-14 lg:grid-cols-5">

          {/* Left Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="lg:col-span-2"
          >
            <div className="sticky top-28">

              <div
                className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold"
                style={{
                  background: `${industry.accent}15`,
                  color: industry.accent,
                }}
              >
                Industry Expertise
              </div>

              <h3 className="mt-8 text-3xl font-black leading-tight text-slate-900">

                High-Performance
                Construction Chemicals
                Built to Last

              </h3>

              <p className="mt-6 leading-8 text-slate-600">

                From waterproofing and concrete repair to industrial
                flooring and protective coatings, KMR Conchem delivers
                complete solutions for demanding infrastructure,
                commercial and industrial projects.

              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Certified Quality Products",
                  "Advanced Manufacturing",
                  "Expert Technical Support",
                  "Reliable Performance",
                  "Industry Approved Solutions",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2
                      size={20}
                      style={{
                        color: industry.accent,
                      }}
                    />

                    <span className="text-slate-700">

                      {item}

                    </span>

                  </div>

                ))}

              </div>

            </div>

          </motion.div>
                    {/* ================= Right Benefits ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="grid gap-6 sm:grid-cols-2 lg:col-span-3"
          >
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="group rounded-[30px] border border-slate-200 bg-white p-7 shadow-lg transition-all duration-300 hover:border-slate-300 hover:shadow-2xl"
                >
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg transition duration-300 group-hover:rotate-6 group-hover:scale-110"
                    style={{
                      background: item.color,
                    }}
                  >
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div
                    className="mt-6 h-1 w-16 rounded-full transition-all duration-300 group-hover:w-24"
                    style={{
                      background: item.color,
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>

        </div>

        {/* ================= Statistics ================= */}

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
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
          className="mt-24"
        >
          <div className="grid overflow-hidden rounded-[35px] border border-slate-200 bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-4">

            <div className="border-b border-r border-slate-200 p-8 lg:border-b-0">
              <h2
                className="text-4xl font-black"
                style={{
                  color: industry.accent,
                }}
              >
                500+
              </h2>

              <p className="mt-3 text-slate-600">
                Projects Delivered
              </p>
            </div>

            <div className="border-b border-r border-slate-200 p-8 lg:border-b-0">
              <h2
                className="text-4xl font-black"
                style={{
                  color: industry.accent,
                }}
              >
                100+
              </h2>

              <p className="mt-3 text-slate-600">
                Premium Products
              </p>
            </div>

            <div className="border-r border-slate-200 p-8">
              <h2
                className="text-4xl font-black"
                style={{
                  color: industry.accent,
                }}
              >
                20+
              </h2>

              <p className="mt-3 text-slate-600">
                Years Experience
              </p>
            </div>

            <div className="p-8">
              <h2
                className="text-4xl font-black"
                style={{
                  color: industry.accent,
                }}
              >
                24×7
              </h2>

              <p className="mt-3 text-slate-600">
                Technical Support
              </p>
            </div>

          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default IndustryBenefits;