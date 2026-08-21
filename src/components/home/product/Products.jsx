import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Package,
  Sparkles,
  ShieldCheck,
  Droplets,
  ChevronRight,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";

import { productData } from "./productData";

// ============================================================
// PRODUCTS
// ============================================================

const Products = () => {
  const { categorySlug, productSlug } = useParams();

  // ============================================================
  // ALL PRODUCTS PAGE
  // /products
  // ============================================================

  const isAllProductsPage = !categorySlug;

  // ============================================================
  // SELECTED CATEGORY
  // /products/:categorySlug
  // ============================================================

  const selectedCategory = categorySlug
    ? productData.find((category) => category.slug === categorySlug)
    : null;

  // ============================================================
  // INVALID CATEGORY
  // ============================================================

  if (categorySlug && !selectedCategory) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-[#f7fbff] px-4 py-20">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50">
            <Package className="h-10 w-10 text-blue-500" />
          </div>

          <h1 className="text-3xl font-extrabold text-[#102944]">
            Product Category Not Found
          </h1>

          <p className="mt-4 text-slate-600">
            The product category you are looking for does not exist or may have
            been moved.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 font-bold text-white shadow-[0_10px_30px_rgba(37,99,235,0.20)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(37,99,235,0.30)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Products
          </Link>
        </div>
      </section>
    );
  }

  // ============================================================
  // CATEGORY PAGE
  // ============================================================

  if (!isAllProductsPage && selectedCategory) {
    return <CategoryProducts selectedCategory={selectedCategory} />;
  }

  // ============================================================
  // ALL PRODUCTS PAGE
  // ============================================================

  return <AllProducts />;
};

export default Products;

// ==================================================================
// FEATURED PRODUCT HERO
// ==================================================================

const FeaturedProductHero = ({ product, categoryName, cardGradient }) => {
  if (!product) {
    return null;
  }

  return (
    <section className="relative z-10 bg-[#f7fbff] pb-10 pt-10 md:pb-12 md:pt-12 lg:pb-14">
      <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
        {/* ========================================================
            HERO HEADER
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-5xl text-center"
        >
          {/* ======================================================
              TOP BADGE
          ====================================================== */}

          <div className="relative mx-auto mb-5 inline-flex items-center">
            {/* LEFT LINE */}

            <span className="mr-2 hidden h-[2px] w-8 bg-blue-500 sm:block" />

            {/* LEFT DOT */}

            <span className="absolute -left-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(37,99,235,0.35)] sm:-left-2" />

            {/* BADGE */}

            <div className="rounded-full border-[1.5px] border-blue-500 bg-white px-6 py-1.5 shadow-[0_5px_20px_rgba(37,99,235,0.08)]">
              <span className="text-xs font-extrabold tracking-[2px] text-blue-600 sm:text-sm">
                OUR PRODUCT SOLUTIONS
              </span>
            </div>

            {/* RIGHT DOT */}

            <span className="absolute -right-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(37,99,235,0.35)] sm:-right-2" />

            {/* RIGHT LINE */}

            <span className="ml-2 hidden h-[2px] w-8 bg-blue-500 sm:block" />
          </div>

          {/* ======================================================
              MAIN HEADING
          ====================================================== */}

          <h1 className="text-4xl font-extrabold leading-[1.04] tracking-tight text-[#102944] sm:text-5xl md:text-6xl lg:text-[58px]">
            Premium Construction
            <span className="block bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              Chemical Solutions
            </span>
          </h1>

          {/* ======================================================
              DESCRIPTION
          ====================================================== */}

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-7 text-slate-600 sm:text-lg md:leading-8">
            Discover our complete range of high-performance construction
            chemical products engineered for strength, durability and
            long-lasting protection.
          </p>

          {/* ======================================================
              CENTER DIVIDER
          ====================================================== */}

          <div className="mx-auto mt-5 flex items-center justify-center">
            <span className="h-[2px] w-10 bg-blue-300" />

            <span className="mx-2 h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(37,99,235,0.45)]" />

            <span className="h-[2px] w-10 bg-blue-300" />
          </div>
        </motion.div>

        {/* ========================================================
            FEATURED PRODUCT CARD
        ========================================================= */}

        <div className="relative mt-10 md:mt-12 lg:mt-14">
          {/* ======================================================
              LEFT FLOATING QUALITY CARD
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="absolute -left-5 top-6 z-30 hidden w-[155px] rounded-[22px] border border-white/80 bg-white/95 p-4 text-center shadow-[0_15px_45px_rgba(15,23,42,0.10)] backdrop-blur-xl xl:block"
          >
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-sky-50">
              <ShieldCheck
                size={40}
                strokeWidth={1.5}
                className="text-sky-500"
              />
            </div>

            <p className="text-sm font-extrabold leading-5 text-[#102944]">
              Premium Quality
              <br />
              At Every Step
            </p>
          </motion.div>

          {/* ======================================================
              SECOND FLOATING CARD
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="absolute -left-5 top-[190px] z-30 hidden w-[155px] rounded-[22px] border border-white/80 bg-white/95 p-4 text-center shadow-[0_15px_45px_rgba(15,23,42,0.10)] backdrop-blur-xl xl:block"
          >
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-sky-50">
              <Droplets size={40} strokeWidth={1.5} className="text-sky-500" />
            </div>

            <p className="text-sm font-extrabold leading-5 text-[#102944]">
              Waterproof
              <br />
              Protection
            </p>
          </motion.div>

          {/* ======================================================
              MAIN FEATURED CARD
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
          >
            {/* ==================================================
                BACKGROUND GLOW
            ================================================== */}

            <div className="pointer-events-none absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-sky-100/70 blur-[100px]" />

            <div className="pointer-events-none absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-100/60 blur-[110px]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-100/40" />

            {/* ==================================================
                FEATURE GRID
            ================================================== */}

           <div className="grid items-center lg:grid-cols-[0.9fr_1.1fr] min-h-[580px]">
              {/* =================================================
                  LEFT — PRODUCT IMAGE
              ================================================= */}

              <div className="relative flex items-center justify-center overflow-hidden px-8 py-8">
                {/* LARGE BACKGROUND CIRCLE */}

                <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px]
-rounded-full
bg-gradient-to-br
from-blue-100
via-sky-50
to-white
-translate-x-1/2
-translate-y-1/2"/>

                {/* IMAGE GLOW */}

                <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200/40 blur-[60px]" />

                {/* WATER RINGS */}

                <div className="absolute bottom-12 left-1/2 h-20 w-[360px] -translate-x-1/2 rounded-[50%] border border-sky-300/40 bg-sky-100/30 blur-[1px]" />

                <div className="absolute bottom-16 left-1/2 h-12 w-[290px] -translate-x-1/2 rounded-[50%] border border-sky-300/30" />

                {/* PRODUCT NUMBER */}

                <div className="absolute left-6 top-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-sm font-black text-white shadow-[0_8px_25px_rgba(14,165,233,0.30)] md:left-8 md:top-8">
                  01
                </div>

                {/* PRODUCT IMAGE */}

                <motion.img
                  src={product.image}
                  alt={product.name || product.title || "Featured Product"}
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.25,
                  }}
                 className="
relative
z-20
w-[430px]
max-w-full
object-contain
drop-shadow-[0_35px_35px_rgba(0,0,0,.18)]
transition
duration-700
group-hover:scale-105
"
                />

                {/* =================================================
                    TRUSTED PROJECTS BADGE
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.55,
                  }}
                  className="absolute bottom-7 right-5 z-20 rounded-[22px] border border-white/90 bg-white/90 px-5 py-4 text-center shadow-[0_12px_35px_rgba(15,23,42,0.10)] backdrop-blur-xl md:right-10"
                >
                  <p className="text-[10px] font-bold tracking-[2px] text-slate-500">
                    TRUSTED BY
                  </p>

                  <div className="mt-1 flex items-center justify-center gap-2">
                    <span className="hidden text-sky-500 md:block">❮</span>

                    <p className="text-3xl font-black text-sky-500">300+</p>

                    <span className="hidden text-sky-500 md:block">❯</span>
                  </div>

                  <p className="text-xs font-bold text-[#102944]">PROJECTS</p>
                </motion.div>
              </div>

              {/* =================================================
                  RIGHT — FEATURE CONTENT
              ================================================= */}

              <div className="relative px-8 py-8 md:px-12 md:py-8 lg:px-14 lg:py-8">
                {/* FEATURED BADGE */}

                <div className="inline-flex items-center rounded-full border-2 border-sky-400 bg-white px-5 py-2 shadow-[0_5px_20px_rgba(14,165,233,0.08)]">
                  <span className="text-xs font-extrabold uppercase tracking-[1.5px] text-sky-500 md:text-sm">
                    Featured Product
                  </span>
                </div>

                {/* TITLE */}

                <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-[#102944] sm:text-4xl md:text-5xl">
                  {product.name || product.title}
                </h2>

                {/* DIVIDER */}

                <div className="mt-4 flex items-center gap-2">
                  <span className="h-[2px] w-12 bg-sky-400" />

                  <span className="h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.45)]" />

                  <span className="h-[2px] w-8 bg-sky-200" />
                </div>

                {/* DESCRIPTION */}

                <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                  {product.description}
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
                  Designed for roofs, terraces, basements, water tanks,
                  foundations and wet areas, our high-performance systems
                  provide superior protection against water ingress and
                  long-term structural damage.
                </p>

                {/* =================================================
                    FEATURES
                ================================================== */}

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "High Bond Strength",
                    "Excellent Durability",
                    "UV & Weather Resistant",
                    "Long Service Life",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-600">
                        <CheckCircle2
                          className="h-3.5 w-3.5 text-white"
                          strokeWidth={3}
                        />
                      </div>

                      <span className="text-sm font-semibold text-[#102944] md:text-base">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* =================================================
                    BUTTONS
                ================================================== */}

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/products"
                    className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(14,165,233,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(14,165,233,0.35)] md:px-8"
                  >
                    Explore Products
                    <ChevronRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <button
  type="button"
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/KMR - Brochure 26 (April).pdf"; 
    link.download = "KMR-Catalogue.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  className="group inline-flex items-center gap-3 rounded-full border-2 border-sky-400 bg-white px-7 py-3.5 text-sm font-bold text-sky-600 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-50 md:px-8"
>
  Download Catalogue

  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 3v12" strokeLinecap="round" />
    <path
      d="M7 10l5 5 5-5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M5 21h14" strokeLinecap="round" />
  </svg>
</button>
                </div>

                {/* CATEGORY LABEL */}

                <div className="mt-7 flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-[1.5px] text-slate-400">
                    Category
                  </span>

                  <span className="h-1 w-1 rounded-full bg-sky-400" />

                  <span className="text-xs font-bold text-sky-600">
                    {categoryName}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ==================================================================
// CATEGORY PRODUCTS PAGE
// ==================================================================

const CategoryProducts = ({ selectedCategory }) => {
  const Icon = selectedCategory.icon;

  // ============================================================
  // FEATURED PRODUCT
  // ============================================================

  const featuredProduct = selectedCategory.products?.[0];

  const categoryName = selectedCategory.title || selectedCategory.category;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7fbff]">
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-100/60 blur-3xl" />

        <div className="absolute -right-40 top-[20%] h-[500px] w-[500px] rounded-full bg-sky-100/50 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-100/30 blur-3xl" />
      </div>

      {/* ============================================================
          NEW PREMIUM HEADER
      ============================================================ */}

      <FeaturedProductHero
        product={featuredProduct}
        categoryName={categoryName}
        cardGradient={selectedCategory.color}
      />

      {/* ============================================================
          CATEGORY INFORMATION
          SAME AS BEFORE
      ============================================================ */}

      <section className="relative z-10 bg-[#f7fbff] pb-8">
        <div className="mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
            }}
            className="rounded-[30px] border border-white bg-white p-6 shadow-[0_15px_50px_rgba(15,23,42,0.07)] md:p-8"
          >
            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              {/* LEFT */}

              <div className="flex items-start gap-5">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${selectedCategory.color} shadow-lg`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-extrabold uppercase tracking-[1.5px] text-blue-600">
                    <Sparkles className="h-3.5 w-3.5" />
                    Product Category
                  </div>

                  <h1 className="text-3xl font-extrabold tracking-tight text-[#102944] sm:text-4xl">
                    {selectedCategory.title || selectedCategory.category}
                  </h1>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                    {selectedCategory.description}
                  </p>
                </div>
              </div>

              {/* RIGHT STATS */}

              <div className="flex shrink-0 flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-4 py-2.5 text-sm font-bold text-blue-700">
                  <Package className="h-4 w-4 text-blue-500" />
                  {selectedCategory.products?.length || 0} Products
                </div>

                <div className="inline-flex items-center gap-2 rounded-xl border border-sky-100 bg-sky-50 px-4 py-2.5 text-sm font-bold text-sky-700">
                  <CheckCircle2 className="h-4 w-4 text-sky-500" />
                  Professional Solutions
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          CATEGORY PRODUCTS
          NOT TOUCHED
      ============================================================ */}

      <section className="relative z-10 pb-20 pt-4 sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
          {/* SECTION TITLE */}

          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-blue-400" />

                <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-600">
                  Explore Products
                </span>

                <span className="h-[2px] w-8 bg-blue-400" />
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-[#102944] sm:text-4xl">
                {selectedCategory.title || selectedCategory.category}
              </h2>
            </div>

            {/* ALL CATEGORIES */}

            <Link
              to="/products"
              className="group inline-flex items-center gap-2 self-start rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-bold text-blue-600 shadow-sm transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white sm:self-auto"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              All Categories
            </Link>
          </div>

          {/* ========================================================
              PRODUCTS GRID
          ======================================================== */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {(selectedCategory.products || []).map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                category={selectedCategory.title || selectedCategory.category}
                categorySlug={selectedCategory.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

// ==================================================================
// ALL PRODUCTS PAGE
// ==================================================================

const AllProducts = () => {
  const totalProducts = productData.reduce(
    (total, category) => total + (category.products?.length || 0),
    0,
  );

  const [showAllCategories, setShowAllCategories] = useState(false);
  const visibleCategories = showAllCategories
  ? productData
  : productData.slice(0, 2);

  // ============================================================
  // FIRST PRODUCT FOR FEATURED HERO
  // ============================================================

  const featuredCategory = productData[0];

  const featuredProduct = featuredCategory?.products?.[0];

  const featuredCategoryName =
    featuredCategory?.title ||
    featuredCategory?.category ||
    "Construction Chemicals";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7fbff]">
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-100/60 blur-3xl" />

        <div className="absolute -right-40 top-[25%] h-[500px] w-[500px] rounded-full bg-sky-100/50 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-100/30 blur-3xl" />
      </div>

      {/* ============================================================
          NEW PREMIUM FEATURED HEADER
      ============================================================ */}

      <FeaturedProductHero
        product={featuredProduct}
        categoryName={featuredCategoryName}
        cardGradient={featuredCategory.color}
      />

      {/* ============================================================
          TOTAL PRODUCT
      ============================================================ */}

      <section className="relative z-10 bg-[#f7fbff] pb-8">
        <div className="mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-5 py-3 text-sm font-bold text-[#102944] shadow-[0_8px_25px_rgba(15,23,42,0.06)]">
              <Package className="h-5 w-5 text-blue-500" />
              {totalProducts} Products Available
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CATEGORY-WISE PRODUCTS
          SAME AS BEFORE
      ============================================================ */}

      <section className="relative z-10 pb-20 pt-6 sm:pb-24 lg:pb-28">
  <div className="mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">

    {/* Categories */}
   <div className="space-y-20 lg:space-y-28">
  {visibleCategories.map((category, categoryIndex) => (
    <section key={category.slug}>
      {/* Category Heading */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-[#102944]">
          {category.title || category.category}
        </h2>

        <Link
          to={`/products/${category.slug}`}
          className="text-blue-600 font-semibold hover:underline"
        >
          View All
        </Link>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {category.products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            category={category.title || category.category}
            categorySlug={category.slug}
          />
        ))}
      </div>
    </section>
  ))}
</div>

    {/* 👇 YAHAN ADD KARNA HAI */}
    <div className="mt-14 flex justify-center">
      <button
        onClick={() => setShowAllCategories(!showAllCategories)}
        className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        {showAllCategories
          ? "Show Less Categories"
          : "View All Categories"}

        <ArrowRight
          className={`h-5 w-5 transition-transform duration-300 ${
            showAllCategories
              ? "rotate-90"
              : "group-hover:translate-x-1"
          }`}
        />
      </button>
    </div>

  </div>
</section>
    </main>
  );
};

// ==================================================================
// PRODUCT CARD
// ==================================================================

const ProductCard = ({ product, index, category, categorySlug }) => {



  const cardColors = [
  "from-orange-500 to-red-500",
  "from-emerald-500 to-green-600",
  "from-sky-500 to-blue-600",
  "from-violet-500 to-purple-600",
  "from-amber-500 to-orange-500",
];

const cardGradient = cardColors[index % cardColors.length];

  
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.06, 0.3),
      }}
      className="h-full"
    >
      <div className="group relative h-full overflow-hidden rounded-[22px] border border-white bg-white shadow-[0_10px_35px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_45px_rgba(37,99,235,0.15)]">
        {/* ========================================================
            TOP BLUE LINE
        ======================================================== */}

        {/* <div
          className={`absolute inset-x-0 top-0 z-20 h-[3px] bg-gradient-to-r ${cardGradient} opacity-80 transition-all duration-300 group-hover:opacity-100`}
        /> */}

        {/* ========================================================
            IMAGE
        ======================================================== */}

        <div className="relative h-56 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/50">
          {/* BACKGROUND CIRCLE */}

          {/* IMAGE GLOW */}

          <div className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/20 blur-2xl transition-all duration-500 group-hover:bg-blue-300/30" />

          {/* PRODUCT NUMBER */}

          {/* <div
            className={`absolute left-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${cardGradient} text-sm font-extrabold text-white shadow-lg`}
          >
            {String(index + 1).padStart(2, "0")}
          </div> */}

          <img
            src={product.image}
            alt={product.name || product.title}
            className="
            h-full w-full object-cover
            transition duration-700
            group-hover:scale-110
            "
            loading="lazy"
          />

          {/* CATEGORY */}

          <div className="absolute bottom-4 left-4 right-4 z-20">
            <span className="inline-flex max-w-full rounded-lg border border-white/80 bg-white/90 px-3 py-1.5 text-xs font-bold text-[#102944] shadow-md backdrop-blur-sm">
              {category}
            </span>
          </div>
        </div>

        {/* ========================================================
            CONTENT
        ======================================================== */}

        <div className="flex min-h-[225px] flex-col p-5">
          {/* TITLE */}

          <h3 className="line-clamp-2 text-lg font-extrabold leading-7 text-[#102944] transition-colors duration-300 group-hover:text-blue-600">
            {product.name || product.title}
          </h3>

          {/* DESCRIPTION */}

          <p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-600">
            {product.description}
          </p>

          {/* BOTTOM */}

          <Link
            to={`/products/${categorySlug}/${product.slug}`}
            className="group/details flex items-center justify-between border-t border-blue-50 pt-4"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 transition-colors duration-300 group-hover/details:text-blue-600">
              Product Details
            </span>

           <div
  className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${cardGradient} text-white shadow-md transition-all duration-300 group-hover/details:scale-110`}
>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/details:translate-x-0.5" />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
