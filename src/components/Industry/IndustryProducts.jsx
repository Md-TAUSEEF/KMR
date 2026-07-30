import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const IndustryProducts = ({ industry }) => {
  if (!industry) return null;

  return (
    <section className="relative overflow-hidden bg-white py-16">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-sky-100 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-100 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}

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
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="text-sm font-bold uppercase tracking-[3px]"
            style={{
              color: industry.accent,
            }}
          >
            Recommended Products
          </span>

         <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 md:text-4xl">
            Products Used In
            <span
              className="block"
              style={{
                color: industry.accent,
              }}
            >
              {industry.name}
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Explore premium construction chemical products specially recommended
            for {industry.name} applications.
          </p>
        </motion.div>

        {/* Product Grid */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {industry.products?.map((product, index) => (
            <motion.div
              key={product.id || index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -10,
              }}
              className="group h-full"
            >
              <div
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  shadow-lg
                  transition-all
                  duration-500
                  hover:shadow-2xl
                "
              >
                {/* Product Image */}

                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="
            h-full w-full object-cover
            transition duration-700
            group-hover:scale-110
            "
                  />

                  <div
                    className="absolute inset-x-0 bottom-0 h-24"
                    style={{
                      background: `linear-gradient(to top, ${industry.accent}18, transparent)`,
                    }}
                  />
                </div>

                {/* Content */}

                <div className="p-5">
                  <h3 className="text-lg font-bold leading-6 text-slate-900 line-clamp-2">
  {product.name}
</h3>

                      <p
  className="
    mt-3
    text-slate-600
    leading-7
    line-clamp-2
    min-h-[56px]
  "
>
  {product.description}
</p>
                  {/* Button */}

                  <Link
                    to="/products"
                    className="mt-6 inline-flex items-center gap-2 font-bold transition-all duration-300 hover:gap-4"
                    style={{
                      color: industry.accent,
                    }}
                  >
                    View Products
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
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
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-black text-slate-900">
            Need Help Choosing the Right Product?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Our experts will help you select the best construction chemical
            solution for your project requirements.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full px-8 py-4 font-bold text-white shadow-xl transition-all duration-300 hover:scale-105"
            style={{
              background: industry.accent,
            }}
          >
            Contact Our Expert
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>

      {/* Background Decoration */}

      <div
        className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full blur-[140px] opacity-20"
        style={{
          background: industry.accent,
        }}
      />

      <div
        className="absolute -top-24 -right-24 h-80 w-80 rounded-full blur-[140px] opacity-15"
        style={{
          background: industry.accent,
        }}
      />
    </section>
  );
};

export default IndustryProducts;
