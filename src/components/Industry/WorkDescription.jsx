import { motion } from "framer-motion";
import {
  ShieldCheck,
  Droplets,
  Hammer,
  Award,
  CheckCircle2,
} from "lucide-react";

const WorkDescription = ({ industry, work }) => {
  if (!industry || !work) return null;

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Superior Protection",
      color: "#2563eb",
      text: "Protects structures from environmental damage and extends service life.",
    },
    {
      icon: Droplets,
      title: "Waterproof Performance",
      color: "#0ea5e9",
      text: "Advanced waterproofing system for long-term moisture protection.",
    },
    {
      icon: Hammer,
      title: "Structural Strength",
      color: "#f97316",
      text: "Improves durability and provides excellent bonding performance.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      color: "#8b5cf6",
      text: "Designed according to international construction standards.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-sky-100 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-100 blur-[140px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >

          <span
            className="text-sm font-semibold uppercase tracking-[3px]"
            style={{
              color: work.color,
            }}
          >
            Why Choose Our Solution
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">

            Reliable Performance for
            <span
              className="block"
              style={{
                color: work.color,
              }}
            >
              {work.title}
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

            Our advanced construction chemical systems are engineered
            to deliver exceptional durability, protection and long-term
            performance across every stage of the {industry.name} industry.

          </p>

        </motion.div>

        {/* Content */}

        <div className="grid gap-14 lg:grid-cols-5">

          {/* LEFT */}

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
              duration: .7,
            }}
            viewport={{
              once: true,
            }}
            className="lg:col-span-3"
          >

            <h3 className="text-3xl font-black text-slate-900">

              Built for Long-Term Performance

            </h3>

            <p className="mt-6 leading-8 text-slate-600">

              {work.description} Our innovative construction chemical
              solutions improve structural durability, reduce maintenance
              costs and deliver outstanding performance even under the
              toughest environmental conditions.

            </p>

            <p className="mt-6 leading-8 text-slate-600">

              Every solution is carefully designed to meet the highest
              quality standards while ensuring maximum protection,
              excellent bonding and reliable performance for industrial,
              commercial and infrastructure projects.

            </p>

            {/* Checklist */}

            <div className="mt-10 space-y-4">

              {[
                "Long-lasting structural protection",
                "Fast & reliable installation",
                "Superior adhesion and bonding",
                "Reduced maintenance cost",
                "Environment friendly solutions",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    size={20}
                    style={{
                      color: work.color,
                    }}
                  />

                  <span className="text-slate-700">

                    {item}

                  </span>

                </div>

              ))}

            </div>

          </motion.div>
                    {/* RIGHT */}

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
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="space-y-6 lg:col-span-2"
          >
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="flex items-start gap-5">

                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-xl transition duration-300 group-hover:scale-110"
                      style={{
                        background: item.color,
                      }}
                    >
                      <Icon size={28} />
                    </div>

                    <div className="flex-1">

                      <h3 className="text-xl font-bold text-slate-900">

                        {item.title}

                      </h3>

                      <p className="mt-3 leading-7 text-slate-600">

                        {item.text}

                      </p>

                    </div>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

        {/* Bottom CTA */}

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
          className="mt-20 overflow-hidden rounded-[35px] p-10 text-center shadow-2xl"
          style={{
            background: `linear-gradient(135deg, ${work.color}, ${industry.accent})`,
          }}
        >
          <h2 className="text-3xl font-black text-white md:text-4xl">

            Engineered for Maximum Performance

          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/90">

            Every solution is developed to provide superior protection,
            long-lasting durability and reliable performance across
            demanding construction environments.

          </p>

          <button className="mt-8 rounded-full bg-white px-8 py-4 font-bold shadow-xl transition duration-300 hover:scale-105"
            style={{
              color: work.color,
            }}
          >
            Explore Related Products
          </button>

        </motion.div>

      </div>
    </section>
  );
};

export default WorkDescription;