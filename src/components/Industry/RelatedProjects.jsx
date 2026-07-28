import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const RelatedProjects = ({ industry, work }) => {
  if (!industry || !work) return null;

  const relatedWorks = industry.works.filter(
    (item) => item.slug !== work.slug
  );

  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-32 left-0 h-80 w-80 rounded-full bg-sky-100 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-100 blur-[150px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >

          <span
            className="text-sm font-semibold uppercase tracking-[3px]"
            style={{
              color: work.color,
            }}
          >
            Related Applications
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">

            Explore More Solutions

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

            Discover other application areas within the{" "}
            <strong>{industry.name}</strong> industry.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {relatedWorks.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: .6,
                  delay: index * .15,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group"
              >

                <Link
                  to={`/applications/${industry.slug}/${item.slug}`}
                  className="block overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-xl transition duration-500 hover:shadow-2xl"
                >

                  {/* Image */}

                  <div className="relative h-72 overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Icon */}

                    <div
                      className="absolute left-6 top-6 flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-xl transition duration-300 group-hover:rotate-6 group-hover:scale-110"
                      style={{
                        background: item.color,
                      }}
                    >
                      <Icon size={28} />
                    </div>

                    {/* Title */}

                    <div className="absolute bottom-6 left-6 right-6">

                      <h3 className="text-2xl font-bold text-white">

                        {item.title}

                      </h3>

                    </div>

                  </div>

                  {/* Content */}

                  <div className="p-7">

                    <p className="leading-7 text-slate-600 line-clamp-3">

                      {item.description}

                    </p>

                    <div
                      className="mt-8 inline-flex items-center gap-2 font-semibold transition-all duration-300 group-hover:gap-4"
                      style={{
                        color: item.color,
                      }}
                    >

                      Explore Application

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
                {/* ================= Premium CTA ================= */}

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
          className="mt-20 overflow-hidden rounded-[35px] shadow-2xl"
        >
          <div
            className="relative px-8 py-14 md:px-14 md:py-16"
            style={{
              background: `linear-gradient(135deg, ${work.color}, ${industry.accent})`,
            }}
          >
            {/* Decorative Blur */}

            <div className="absolute -left-24 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-10 lg:flex-row">

              {/* Left */}

              <div className="max-w-3xl">

                <span className="inline-flex rounded-full bg-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-[2px] text-white">

                  Explore More Solutions

                </span>

                <h2 className="mt-6 text-3xl font-black text-white md:text-5xl">

                  Discover More Applications
                  for {industry.name}

                </h2>

                <p className="mt-6 text-lg leading-8 text-white/90">

                  From waterproofing and structural repair to industrial
                  flooring and protective coatings, explore our complete
                  range of construction chemical solutions for every
                  application within the <strong>{industry.name}</strong> industry.

                </p>

              </div>

              {/* Right */}

              <div className="flex flex-wrap justify-center gap-5">

                <Link
                  to={`/applications/${industry.slug}`}
                  className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold shadow-xl transition duration-300 hover:scale-105"
                  style={{
                    color: work.color,
                  }}
                >
                  View All Applications

                  <ArrowRight size={20} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white/20"
                >
                  Talk to Our Expert
                </Link>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default RelatedProjects;