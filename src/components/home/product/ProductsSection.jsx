import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { productData } from "./productData";

const ProductsSection = () => {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* ============================================================
          BACKGROUND DECORATION
      ============================================================ */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-green-100/50 blur-3xl" />

        <div className="absolute -right-40 top-[35%] h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />

        <div className="absolute left-1/2 bottom-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-100/30 blur-3xl" />
      </div>

      {/* ============================================================
          MAIN CONTAINER
      ============================================================ */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ============================================================
            SECTION HEADER
        ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Small Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
            <Sparkles className="h-4 w-4" />
            <span>Our Product Range</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Construction Chemical
            <span className="block bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Explore our complete range of advanced construction chemical
            solutions engineered for strength, durability and long-lasting
            infrastructure.
          </p>
        </motion.div>

        {/* ============================================================
            ALL CATEGORIES
        ============================================================ */}
        <div className="space-y-20 lg:space-y-24">
          {productData.map((category, categoryIndex) => {
            const Icon = category.icon;

            // Home page par exactly 5 products
            const homeProducts = category.products.slice(0, 5);

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{
                  duration: 0.7,
                  delay: Math.min(categoryIndex * 0.05, 0.25),
                }}
                className="relative"
              >
                {/* ====================================================
                    CATEGORY HEADER
                ==================================================== */}
                <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

                  {/* Left */}
                  <div className="flex items-start gap-4">
                    {/* Category Icon */}
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} shadow-lg`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                        {category.category}
                      </h3>

                      <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* ==================================================
                      VIEW ALL
                  ================================================== */}
                  <Link
                    to={`/products/${category.slug}`}
                    className="group inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-green-200 bg-green-50 px-5 py-3 text-sm font-bold text-green-700 transition-all duration-300 hover:border-green-600 hover:bg-green-600 hover:text-white lg:self-end"
                  >
                    <span>View All Products</span>

                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>

                {/* ====================================================
                    PRODUCTS GRID
                ==================================================== */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  {homeProducts.map((product, productIndex) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{
                        duration: 0.5,
                        delay: productIndex * 0.06,
                      }}
                    >
                      {/* ==================================================
                          PRODUCT CARD
                      ================================================== */}
                      <Link
                        to={`/products/${category.slug}/${product.slug}`}
                        className="group block h-full"
                      >
                        <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-green-300 hover:shadow-2xl">

                          {/* Image */}
                          <div className="relative h-48 overflow-hidden bg-slate-100">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                              loading="lazy"
                            />

                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                            {/* Product Number */}
                            <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 text-xs font-extrabold text-slate-800 shadow-md backdrop-blur-sm">
                              {String(productIndex + 1).padStart(2, "0")}
                            </div>

                            {/* Category Badge */}
                            <div className="absolute bottom-3 left-3 right-3">
                              <span className="inline-flex max-w-full rounded-lg bg-white/90 px-3 py-1.5 text-[11px] font-bold text-slate-800 shadow-sm backdrop-blur-sm">
                                {category.category}
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex min-h-[190px] flex-col p-5">
                            <h4 className="line-clamp-2 text-lg font-extrabold leading-6 text-slate-900 transition-colors duration-300 group-hover:text-green-600">
                              {product.name}
                            </h4>

                            <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                              {product.description}
                            </p>

                            {/* Bottom */}
                            <div className="mt-auto pt-5">
                              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                  Explore
                                </span>

                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                                  <ArrowRight className="h-4 w-4" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* ====================================================
                    CATEGORY BOTTOM LINE
                ==================================================== */}
                <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;