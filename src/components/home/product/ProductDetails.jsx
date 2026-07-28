import React from "react";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Package,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

import { productData } from "./productData";

const ProductDetails = () => {
  const { categorySlug, productSlug } = useParams();

  // ============================================================
  // FIND CATEGORY
  // ============================================================

  const category = productData.find((item) => item.slug === categorySlug);

  // ============================================================
  // FIND PRODUCT
  // ============================================================

  const product = category?.products?.find((item) => item.slug === productSlug);

  // ============================================================
  // PRODUCT NOT FOUND
  // ============================================================

  if (!category || !product) {
    return (
      <section className="flex min-h-[75vh] items-center justify-center bg-[#f7fbff] px-4 py-20">
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50">
            <Package className="h-10 w-10 text-blue-500" />
          </div>

          <h1 className="mt-6 text-3xl font-extrabold text-[#102944]">
            Product Not Found
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-slate-600">
            The product you are looking for does not exist or may have been
            moved.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7fbff]">
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-100/60 blur-[120px]" />

        <div className="absolute -right-40 top-[25%] h-[500px] w-[500px] rounded-full bg-sky-100/60 blur-[130px]" />

        <div className="absolute bottom-0 left-1/2 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-[120px]" />
      </div>

      {/* ============================================================
          BREADCRUMB
      ============================================================ */}

      <section className="relative z-10 border-b border-blue-100 bg-white">
        <div className="mx-auto max-w-[1450px] px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Link
              to="/"
              className="font-semibold text-slate-500 transition-colors hover:text-blue-600"
            >
              Home
            </Link>

            <span className="text-slate-300">/</span>

            <Link
              to="/products"
              className="font-semibold text-slate-500 transition-colors hover:text-blue-600"
            >
              Products
            </Link>

            <span className="text-slate-300">/</span>

            <Link
              to={`/products/${category.slug}`}
              className="font-semibold text-slate-500 transition-colors hover:text-blue-600"
            >
              {category.category}
            </Link>

            <span className="text-slate-300">/</span>

            <span className="font-bold text-blue-600">{product.name}</span>
          </div>
        </div>
      </section>

      {/* ============================================================
          PRODUCT HERO
      ============================================================ */}

      <section className="relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[32px] border border-white bg-white shadow-[0_20px_70px_rgba(15,23,42,0.10)]"
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              {/* ======================================================
                  IMAGE
              ====================================================== */}

              <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50 p-8 sm:min-h-[500px] lg:min-h-[600px]">
                {/* Glow */}

                <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/70 blur-3xl" />

                <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/60" />

                <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200/60" />

                {/* Product Number */}

                <div className="absolute left-7 top-7 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-sky-500 text-sm font-black text-white shadow-[0_10px_30px_rgba(37,99,235,0.30)]">
                  {String(product.id).padStart(2, "0")}
                </div>

                {/* Product Image */}

                <motion.img
                  src={product.image}
                  alt={product.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10 max-h-[400px] w-[320px] object-contain drop-shadow-[0_25px_30px_rgba(15,23,42,0.18)] transition-transform duration-700 hover:scale-105 sm:w-[380px]"
                />

                {/* Category Badge */}

                <div className="absolute bottom-7 left-7 right-7 z-20 flex items-center justify-between rounded-2xl border border-white/80 bg-white/90 px-5 py-4 shadow-[0_12px_35px_rgba(15,23,42,0.10)] backdrop-blur-xl">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-slate-500">
                      Product Category
                    </p>

                    <p className="mt-1 text-sm font-extrabold text-[#102944]">
                      {category.category}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50">
                    <ShieldCheck className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
              </div>

              {/* ======================================================
                  CONTENT
              ====================================================== */}

              <div className="relative px-7 py-10 sm:px-10 lg:px-14 lg:py-14">
                {/* Badge */}

                <div className="inline-flex items-center gap-2 rounded-full border-2 border-blue-400 bg-white px-5 py-2 shadow-[0_5px_20px_rgba(37,99,235,0.08)]">
                  <Sparkles className="h-4 w-4 text-blue-500" />

                  <span className="text-xs font-extrabold uppercase tracking-[1.5px] text-blue-600 sm:text-sm">
                    Premium Product
                  </span>
                </div>

                {/* Title */}

                <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#102944] sm:text-5xl lg:text-6xl">
                  {product.name}
                </h1>

                {/* Divider */}

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-[2px] w-14 bg-blue-500" />

                  <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(37,99,235,0.45)]" />

                  <span className="h-[2px] w-10 bg-blue-200" />
                </div>

                {/* Description */}

                <p className="mt-7 text-base leading-8 text-slate-600 sm:text-lg">
                  {product.description}
                </p>

                {/* ======================================================
                    FEATURES
                ====================================================== */}

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "High Performance",
                    "Excellent Durability",
                    "Professional Quality",
                    "Long Service Life",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-sky-500 shadow-sm">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>

                      <span className="text-sm font-bold text-[#102944] sm:text-base">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* ======================================================
                    PRODUCT INFO
                ====================================================== */}

                <div className="mt-9 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                        <Package className="h-5 w-5 text-blue-500" />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Category
                        </p>

                        <p className="mt-1 text-sm font-extrabold text-[#102944]">
                          {category.category}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                        <ShieldCheck className="h-5 w-5 text-blue-500" />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Quality
                        </p>

                        <p className="mt-1 text-sm font-extrabold text-[#102944]">
                          Premium Grade
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ======================================================
                    BUTTONS
                ====================================================== */}

                <div className="mt-9 flex flex-wrap gap-4">
  {/* MORE PRODUCTS */}
  <Link
    to={`/products/${category.slug}`}
    className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-sky-500 px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(37,99,235,0.35)]"
  >
    More Products

    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
  </Link>

  {/* CONTACT US */}
  <Link
    to="/contact"
    className="group inline-flex items-center gap-3 rounded-full border-2 border-blue-400 bg-white px-7 py-3.5 text-sm font-bold text-blue-600 shadow-[0_8px_25px_rgba(37,99,235,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-[0_12px_30px_rgba(37,99,235,0.20)]"
  >
    Contact Us

    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
  </Link>

  {/* ALL CATEGORIES */}
  <Link
    to="/products"
    className="inline-flex items-center gap-3 rounded-full border-2 border-blue-200 bg-blue-50 px-7 py-3.5 text-sm font-bold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-100"
  >
    <ArrowLeft className="h-4 w-4" />
    All Categories
  </Link>
</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          RELATED PRODUCTS
      ============================================================ */}

      <section className="relative z-10 pb-20 sm:pb-24">
        <div className="mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-3">
              <span className="h-[2px] w-10 bg-blue-300" />

              <span className="h-2 w-2 rounded-full bg-blue-500" />

              <h2 className="text-3xl font-extrabold text-[#102944]">
                Related <span className="text-blue-500">Products</span>
              </h2>

              <span className="h-2 w-2 rounded-full bg-blue-500" />

              <span className="h-[2px] w-10 bg-blue-300" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {category.products
              .filter((item) => item.id !== product.id)
              .slice(0, 4)
              .map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)]"
                >
                  <div className="relative h-48 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-sky-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain p-5 transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl bg-white/95 text-xs font-black text-blue-600 shadow-md">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="line-clamp-2 text-lg font-extrabold text-[#102944] transition-colors group-hover:text-blue-600">
                      {item.name}
                    </h3>

                    <Link
                      to={`/products/${category.slug}/${item.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-blue-500"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
