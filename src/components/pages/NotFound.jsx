import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Home,
  PackageSearch,
  RefreshCw,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7fbff] px-4 py-20">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-sky-100/60 blur-[120px]" />

        <div className="absolute -right-40 top-[20%] h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-[130px]" />

        <div className="absolute bottom-0 left-1/2 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-50/70 blur-[120px]" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}

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
        className="relative z-10 mx-auto w-full max-w-2xl text-center"
      >
        {/* =======================================================
            ICON
        ======================================================== */}

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
            delay: 0.15,
            duration: 0.5,
          }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-[28px] border border-sky-100 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
        >
          <PackageSearch
            className="h-11 w-11 text-sky-500"
            strokeWidth={1.7}
          />
        </motion.div>

        {/* =======================================================
            404
        ======================================================== */}

        <div className="mt-8">
          <p className="text-sm font-extrabold uppercase tracking-[3px] text-sky-600">
            Page Not Found
          </p>

          <h1 className="mt-3 text-7xl font-black tracking-tight text-[#102944] sm:text-8xl">
            404
          </h1>

          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-[2px] w-12 bg-sky-300" />

            <span className="h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_12px_rgba(14,165,233,0.45)]" />

            <span className="h-[2px] w-12 bg-blue-300" />
          </div>
        </div>

        {/* =======================================================
            DESCRIPTION
        ======================================================== */}

        <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-[#102944] sm:text-3xl">
          This page doesn't exist
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
          The page you are looking for may have been moved, removed, or the
          address may be incorrect.
        </p>

        {/* =======================================================
            ACTIONS
        ======================================================== */}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {/* HOME */}

          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_12px_30px_rgba(14,165,233,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(14,165,233,0.30)]"
          >
            <Home className="h-4 w-4" />

            Back to Home

            <ArrowLeft className="h-4 w-4 rotate-180 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* PRODUCTS */}

          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-6 py-3.5 text-sm font-extrabold text-[#102944] shadow-[0_8px_25px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-50"
          >
            <PackageSearch className="h-4 w-4 text-sky-500" />

            Explore Products
          </Link>

          {/* GO BACK */}

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-50"
          >
            <RefreshCw className="h-4 w-4" />

            Go Back
          </button>
        </div>

        {/* =======================================================
            BRAND
        ======================================================== */}

        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[2px] text-slate-400">
            KMR Conchem
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Construction Chemical Solutions
          </p>
        </div>
      </motion.div>
    </main>
  );
};

export default NotFound;