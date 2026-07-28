import { motion } from "framer-motion";
import { ArrowRight, PackageOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { productData } from "../home/product/productData";

const WorkProducts = ({ industry, work }) => {
  if (!industry || !work) return null;

  // Dynamic Filter
  const products = productData.filter(
    (item) =>
      item.industry?.includes(industry.slug) &&
      item.application?.includes(work.slug)
  );

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-sky-100 blur-[140px]" />

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

          <div className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-2 shadow-md">

            <PackageOpen
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
              Recommended Products
            </span>

          </div>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">

            Products for {work.title}

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

            Carefully selected construction chemical solutions specially
            recommended for this application.

          </p>

        </motion.div>

        {/* Products */}

        {products.length === 0 ? (

          <div className="rounded-3xl bg-white p-16 text-center shadow-lg">

            <PackageOpen
              size={70}
              className="mx-auto text-slate-400"
            />

            <h3 className="mt-6 text-2xl font-bold text-slate-900">

              Products Coming Soon

            </h3>

            <p className="mt-4 text-slate-600">

              We are updating this application with suitable products.

            </p>

          </div>

        ) : (

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {products.slice(0, 6).map((product, index) => (

              <motion.div
                key={product.id}
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
                  delay: index * .12,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group overflow-hidden rounded-[30px] bg-white shadow-xl transition duration-500 hover:shadow-2xl"
              >

                {/* Image */}

                <div className="relative h-72 overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <span
                    className="absolute left-5 top-5 rounded-full px-4 py-2 text-xs font-bold text-white"
                    style={{
                      background: work.color,
                    }}
                  >
                    {product.category}
                  </span>

                </div>

                {/* Content */}

                <div className="p-7">

                  <h3 className="text-2xl font-bold text-slate-900">

                    {product.name}

                  </h3>

                  <p className="mt-4 line-clamp-3 leading-7 text-slate-600">

                    {product.shortDescription}

                  </p>

                  <div className="mt-8 flex items-center justify-between">

                    <Link
                      to={`/products/${product.slug}`}
                      className="inline-flex items-center gap-2 font-semibold transition-all hover:gap-4"
                      style={{
                        color: work.color,
                      }}
                    >

                      View Product

                      <ArrowRight size={18} />

                    </Link>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        )}
                {/* ================= Bottom CTA ================= */}

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
            className="relative px-8 py-12 md:px-14 md:py-16"
            style={{
              background: `linear-gradient(135deg, ${work.color}, ${industry.accent})`,
            }}
          >
            {/* Background Blur */}

            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-black/10 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">

              {/* Left */}

              <div className="max-w-3xl">

                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold uppercase tracking-[2px] text-white">

                  Premium Construction Chemicals

                </span>

                <h2 className="mt-6 text-3xl font-black text-white md:text-5xl">

                  Looking for Complete Product Solutions?

                </h2>

                <p className="mt-5 text-lg leading-8 text-white/90">

                  Discover our complete range of high-performance construction
                  chemicals designed for the <strong>{work.title}</strong> application.
                  Our products provide outstanding durability, superior bonding,
                  waterproofing and long-term protection.

                </p>

              </div>

              {/* Right */}

              <div className="flex flex-wrap justify-center gap-5">

                <Link
                  to="/products"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold shadow-xl transition duration-300 hover:scale-105"
                  style={{
                    color: work.color,
                  }}
                >
                  View All Products

                  <ArrowRight size={20} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white/20"
                >
                  Request Technical Support
                </Link>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default WorkProducts;