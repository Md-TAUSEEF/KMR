import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";

const WorkHero = ({ industry, work }) => {
  if (!industry || !work) return null;

  const Icon = work.icon;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">

      {/* ================= Background ================= */}

      <div className="absolute inset-0">

        <div
          className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full blur-[140px] opacity-20"
          style={{
            background: work.color,
          }}
        />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right,#ffffff 1px,transparent 1px),
              linear-gradient(to bottom,#ffffff 1px,transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      {/* ================= Container ================= */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-20">

        {/* ================= Breadcrumb ================= */}

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          className="flex flex-wrap items-center gap-2 text-sm text-slate-300"
        >

          <Link to="/" className="hover:text-white">
            Home
          </Link>

          <ChevronRight size={16} />

          <Link
            to="/applications"
            className="hover:text-white"
          >
            Applications
          </Link>

          <ChevronRight size={16} />

          <Link
            to={`/applications/${industry.slug}`}
            className="hover:text-white"
          >
            {industry.name}
          </Link>

          <ChevronRight size={16} />

          <span
            className="font-semibold"
            style={{
              color: work.color,
            }}
          >
            {work.title}
          </span>

        </motion.div>

        {/* ================= Hero ================= */}

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-2">

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
              duration: .8,
            }}
            viewport={{
              once: true,
            }}
          >

            {/* Badge */}

            <div
              className="inline-flex items-center gap-3 rounded-full border px-5 py-2 backdrop-blur-xl"
              style={{
                borderColor: `${work.color}60`,
                background: `${work.color}15`,
              }}
            >

              <Icon
                size={18}
                style={{
                  color: work.color,
                }}
              />

              <span
                className="text-sm font-semibold uppercase tracking-[2px]"
                style={{
                  color: work.color,
                }}
              >
                {industry.name}
              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-4xl font-black leading-tight md:text-6xl">

              {work.title}

            </h1>

            {/* Line */}

            <div
              className="mt-7 h-1 w-24 rounded-full"
              style={{
                background: work.color,
              }}
            />

            {/* Description */}

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">

              {work.description}

            </p>

            {/* Highlights */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {[
                "Premium Quality Materials",
                "Industry Standard Performance",
                "Expert Technical Support",
                "Long Service Life",
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

                  <span className="text-slate-200">

                    {item}

                  </span>

                </div>

              ))}

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: .95,
                }}
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 font-semibold shadow-xl"
                style={{
                  background: work.color,
                }}
              >

                View Products

                <ArrowRight size={20} />

              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: .95,
                }}
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 backdrop-blur-xl"
              >

                <PhoneCall size={19} />

                Contact Expert

              </motion.button>

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
              duration: .8,
            }}
            viewport={{
              once: true,
            }}
            className="relative flex justify-center"
          >

            {/* Glow */}

            <div
              className="absolute h-[430px] w-[430px] rounded-full blur-[130px] opacity-30"
              style={{
                background: work.color,
              }}
            />

            {/* Image */}

            <img
              src={work.image}
              alt={work.title}
              className="relative z-10 w-full max-w-[620px] object-contain drop-shadow-[0_40px_70px_rgba(0,0,0,.5)]"
            />

            {/* ================= Floating Card - 1 ================= */}

<motion.div
  animate={{
    y: [0, -10, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
  }}
  className="absolute left-0 top-10 z-20 hidden rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl shadow-2xl lg:block"
>
  <div className="flex items-center gap-4">

    <div
      className="flex h-14 w-14 items-center justify-center rounded-2xl text-white"
      style={{
        background: work.color,
      }}
    >
      <Icon size={26} />
    </div>

    <div>

      <p className="text-sm text-slate-300">

        Industry

      </p>

      <h4 className="mt-1 text-lg font-bold">

        {industry.name}

      </h4>

    </div>

  </div>

</motion.div>

{/* ================= Floating Card - 2 ================= */}

<motion.div
  animate={{
    y: [0, 12, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
  }}
  className="absolute bottom-10 right-0 z-20 hidden rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl shadow-2xl lg:block"
>

  <p className="text-sm text-slate-300">

    Trusted Solution

  </p>

  <h3
    className="mt-2 text-2xl font-black"
    style={{
      color: work.color,
    }}
  >
    Premium Grade

  </h3>

  <p className="mt-2 text-sm text-slate-300">

    Long-lasting performance
    for critical infrastructure.

  </p>

         </motion.div>

          </motion.div>

        </div>
{/* ================= Bottom Statistics ================= */}

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
  className="mt-20"
>

  <div className="grid overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">

    <div className="border-b border-r border-white/10 p-8 lg:border-b-0">

      <h2
        className="text-4xl font-black"
        style={{
          color: work.color,
        }}
      >
        500+
      </h2>

      <p className="mt-3 text-slate-300">

        Projects Completed

      </p>

    </div>

    <div className="border-b border-r border-white/10 p-8 lg:border-b-0">

      <h2
        className="text-4xl font-black"
        style={{
          color: work.color,
        }}
      >
        100+
      </h2>

      <p className="mt-3 text-slate-300">

        Premium Products

      </p>

    </div>

    <div className="border-r border-white/10 p-8">

      <h2
        className="text-4xl font-black"
        style={{
          color: work.color,
        }}
      >
        20+
      </h2>

      <p className="mt-3 text-slate-300">

        Years Experience

      </p>

    </div>

    <div className="p-8">

      <h2
        className="text-4xl font-black"
        style={{
          color: work.color,
        }}
      >
        24×7
      </h2>

      <p className="mt-3 text-slate-300">

        Technical Support

      </p>

    </div>

  </div>

</motion.div>
      </div>

    </section>
  );
};

export default WorkHero;