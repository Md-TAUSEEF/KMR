import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const IndustryWorks = ({ industry }) => {
  if (!industry || !industry.works?.length) return null;

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute -top-32 left-0 h-80 w-80 rounded-full bg-sky-100 blur-[130px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-100 blur-[150px]" />
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
              color: industry.accent,
            }}
          >
            Industry Applications
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
            Where Our Solutions Work
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Explore how our construction chemical solutions are used across
            different areas of the {industry.name} industry.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">
          {industry.works.map((work, index) => {
            const Icon = work.icon;

            return (
              <motion.div
                key={work.id}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -12,
                }}
                className="group"
              >
                <Link
                  to={`/applications/${industry.slug}/${work.slug}`}
                  className="block overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
                >
                  {/* Image */}

                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Icon */}

                    <div
                      className="absolute left-6 top-6 flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-2xl transition duration-500 group-hover:rotate-6 group-hover:scale-110"
                      style={{
                        background: work.color,
                      }}
                    >
                      <Icon size={30} />
                    </div>

                    {/* Title */}

                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white">
                        {work.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}

                  <div className="p-7">
                    <p className="leading-7 text-slate-600">
                      {work.description}
                    </p>

                    <div
                      className="mt-8 inline-flex items-center gap-2 font-semibold transition-all group-hover:gap-4"
                      style={{
                        color: work.color,
                      }}
                    >
                      View Details
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryWorks;
