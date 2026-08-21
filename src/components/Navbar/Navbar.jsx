import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Building2,
  Users,
  Trophy,
  Award,
  Target,
  ArrowUpRight,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// ============================================================
// MAIN NAV LINKS
// ============================================================

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
    dropdown: true,
  },
  {
    name: "Products",
    href: "/products",
    dropdown: true,
  },
  {
    name: "Services",
    href: "/service",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Clients",
    href: "/clients",
  },
  {
    name: "Certificates",
    href: "/certificate",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

// ============================================================
// ABOUT DROPDOWN
// ============================================================

const aboutLinks = [
  {
    name: "About Us",
    description: "Know more about KMR Conchem",
    href: "/about",
    icon: Building2,
  },
  {
    name: "Our Team",
    description: "Meet the people behind KMR",
    href: "/team",
    icon: Users,
  },
  {
    name: "Achievements",
    description: "Our journey and milestones",
    href: "/achievements",
    icon: Trophy,
  },
  {
    name: "Awards & Recognition",
    description: "Our awards and recognitions",
    href: "/aword",
    icon: Award,
  },
  {
    name: "Vision & Mission",
    description: "Our purpose and direction",
    href: "/vision",
    icon: Target,
  },
];

// ============================================================
// PRODUCT LINKS
// ============================================================

const productLinks = [
  {
    name: "Admixtures",
    slug: "admixtures",
  },
  {
    name: "Water Proofing Compounds",
    slug: "water-proofing-compounds",
  },
  {
    name: "Curing Compounds",
    slug: "curing-compounds",
  },
  {
    name: "Accelerators & Shotcrete",
    slug: "accelerators-shotcrete",
  },
  {
    name: "Shutter Release Agents",
    slug: "shutter-release-agents",
  },
  {
    name: "Water Reducing Admixture",
    slug: "water-reducing-admixture-plasticisers",
  },
  {
    name: "High Range Water Reducing Admixture (PCE)",
    slug: "high-range-water-reducing-admixture-pce-based",
  },
  {
    name: "High Range Water Reducing Admixtures (SNF)",
    slug: "high-range-water-reducing-admixtures-snf-based",
  },
];

// ============================================================
// NAVBAR
// ============================================================

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [aboutOpen, setAboutOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;

  // ============================================================
  // ACTIVE ROUTE
  // ============================================================

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // ============================================================
  // SCROLL
  // ============================================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ============================================================
  // ESC
  // ============================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setAboutOpen(false);
        setProductsOpen(false);
        setMobileAboutOpen(false);
        setMobileProductsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // ============================================================
  // BODY LOCK
  // ============================================================

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ============================================================
  // CLOSE ALL
  // ============================================================

  const closeAll = () => {
    setAboutOpen(false);
    setProductsOpen(false);
    setMobileAboutOpen(false);
    setMobileProductsOpen(false);
    setIsOpen(false);
  };

  // ============================================================
  // ABOUT MOBILE
  // ============================================================

  const toggleMobileAbout = () => {
    setMobileAboutOpen((prev) => !prev);
    setMobileProductsOpen(false);
  };

  // ============================================================
  // PRODUCTS MOBILE
  // ============================================================

  const toggleMobileProducts = () => {
    setMobileProductsOpen((prev) => !prev);
    setMobileAboutOpen(false);
  };

  return (
    <>
      {/* ============================================================
          NAVBAR
      ============================================================ */}

      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-emerald-400/15 bg-[#07130F]/95 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            : "border-b border-white/10 bg-[#08140F]/90 backdrop-blur-xl"
        }`}
      >
        {/* Glow */}

        <div className="pointer-events-none absolute left-0 top-0 h-24 w-40 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="pointer-events-none absolute right-0 top-0 h-24 w-40 rounded-full bg-green-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1500px] px-5 sm:px-6 lg:px-10">
          <div className="flex h-[72px] items-center justify-between lg:h-[76px]">
            {/* ======================================================
                LOGO
            ====================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="shrink-0"
            >
              <Link
                to="/"
                onClick={closeAll}
                className="group flex items-center"
              >
                <img
                  src="/kmr-logo.webp"
                  alt="KMR Conchem"
                  className="h-[50px] w-auto object-contain transition-transform duration-500 group-hover:scale-105 sm:h-[54px]"
                />
              </Link>
            </motion.div>

            {/* ======================================================
                DESKTOP NAV
            ====================================================== */}

            <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
              {navLinks.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.name === "About") {
                      setAboutOpen(true);
                      setProductsOpen(false);
                    }

                    if (item.name === "Products") {
                      setProductsOpen(true);
                      setAboutOpen(false);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.name === "About") {
                      setAboutOpen(false);
                    }

                    if (item.name === "Products") {
                      setProductsOpen(false);
                    }
                  }}
                >
                  {/* ==================================================
                      ABOUT
                  ================================================== */}

                  {item.name === "About" ? (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.35,
                      }}
                      className="relative"
                    >
                      <Link
                        to="/about"
                        onClick={closeAll}
                        className={`group flex items-center gap-1.5 py-2.5 text-[14px] font-bold transition-colors ${
                          isActive("/about")
                            ? "text-emerald-400"
                            : "text-slate-200 hover:text-emerald-400"
                        }`}
                      >
                        About

                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${
                            aboutOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>

                      {/* ==================================================
                          ABOUT DROPDOWN
                      ================================================== */}

                      <AnimatePresence>
                        {aboutOpen && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 7,
                              scale: 0.98,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              scale: 1,
                            }}
                            exit={{
                              opacity: 0,
                              y: 7,
                              scale: 0.98,
                            }}
                            transition={{
                              duration: 0.16,
                            }}
                            className="absolute left-1/2 top-full z-[70] w-[330px] -translate-x-1/2 pt-3"
                          >
                            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                              {/* Header */}

                              <div className="mb-1 border-b border-slate-100 px-3 pb-2.5">
                                <p className="text-[9px] font-bold uppercase tracking-[2.5px] text-emerald-600">
                                  Discover KMR
                                </p>

                                <p className="mt-0.5 text-xs font-bold text-slate-900">
                                  About KMR Conchem
                                </p>
                              </div>

                              {/* Links */}

                              <div>
                                {aboutLinks.map((item) => {
                                  const Icon = item.icon;

                                  return (
                                    <Link
                                      key={item.name}
                                      to={item.href}
                                      onClick={closeAll}
                                      className="group flex items-center gap-2.5 rounded-lg px-2.5 py-2 transition-all duration-200 hover:bg-emerald-50"
                                    >
                                      {/* Small Icon */}

                                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100">
                                        <Icon size={14} />
                                      </span>

                                      {/* Text */}

                                      <span className="min-w-0 flex-1">
                                        <span className="block text-[12px] font-bold leading-4 text-slate-900 group-hover:text-emerald-700">
                                          {item.name}
                                        </span>

                                        <span className="block text-[9px] leading-3.5 text-slate-500">
                                          {item.description}
                                        </span>
                                      </span>

                                      <ArrowUpRight
                                        size={12}
                                        className="shrink-0 text-slate-300 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-600 group-hover:opacity-100"
                                      />
                                    </Link>
                                  );
                                })}
                              </div>

                              {/* Bottom */}

                              <div className="mt-1 border-t border-slate-100 pt-1">
                                <Link
                                  to="/about"
                                  onClick={closeAll}
                                  className="flex items-center justify-between rounded-lg px-3 py-2 text-[11px] font-bold text-emerald-600 hover:bg-emerald-50"
                                >
                                  <span>Explore About KMR</span>

                                  <ArrowUpRight size={13} />
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ) : item.name === "Products" ? (
                    /* ==================================================
                       PRODUCTS
                    ================================================== */

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.35,
                      }}
                      className="relative"
                    >
                      <Link
                        to="/products"
                        onClick={closeAll}
                        className={`flex items-center gap-1.5 py-2.5 text-[14px] font-bold transition-colors ${
                          isActive("/products")
                            ? "text-emerald-400"
                            : "text-slate-200 hover:text-emerald-400"
                        }`}
                      >
                        Products

                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${
                            productsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>

                      {/* ==================================================
                          PRODUCTS DROPDOWN
                      ================================================== */}

                      <AnimatePresence>
                        {productsOpen && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 7,
                              scale: 0.98,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              scale: 1,
                            }}
                            exit={{
                              opacity: 0,
                              y: 7,
                              scale: 0.98,
                            }}
                            transition={{
                              duration: 0.16,
                            }}
                            className="absolute left-1/2 top-full z-[70] w-[360px] -translate-x-1/2 pt-3"
                          >
                            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                              {/* Header */}

                              <div className="mb-1 border-b border-slate-100 px-3 pb-2.5">
                                <p className="text-[9px] font-bold uppercase tracking-[2.5px] text-emerald-600">
                                  Our Products
                                </p>

                                <p className="mt-0.5 text-xs font-bold text-slate-900">
                                  Construction Chemical Solutions
                                </p>
                              </div>

                              {/* Product List */}

                              <div className="grid max-h-[400px] gap-0.5 overflow-y-auto pr-0.5">
                                {productLinks.map(
                                  (product, productIndex) => (
                                    <Link
                                      key={product.slug}
                                      to={`/products/${product.slug}`}
                                      onClick={closeAll}
                                      className="group flex items-center justify-between rounded-lg px-2.5 py-2 text-[11px] font-semibold text-slate-700 transition-all hover:bg-emerald-50 hover:text-emerald-700"
                                    >
                                      <span className="flex min-w-0 items-center gap-2.5">
                                        {/* Number */}

                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-100 text-[8px] font-bold text-emerald-600 group-hover:bg-emerald-100">
                                          {String(
                                            productIndex + 1,
                                          ).padStart(2, "0")}
                                        </span>

                                        <span className="leading-4">
                                          {product.name}
                                        </span>
                                      </span>

                                      <ArrowUpRight
                                        size={12}
                                        className="ml-2 shrink-0 text-slate-300 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-600 group-hover:opacity-100"
                                      />
                                    </Link>
                                  ),
                                )}
                              </div>

                              {/* View All */}

                              <div className="mt-1 border-t border-slate-100 pt-1">
                                <Link
                                  to="/products"
                                  onClick={closeAll}
                                  className="flex items-center justify-between rounded-lg px-3 py-2 text-[11px] font-bold text-emerald-600 hover:bg-emerald-50"
                                >
                                  <span>View All Products</span>

                                  <ArrowUpRight size={13} />
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ) : (
                    /* ==================================================
                       NORMAL LINKS
                    ================================================== */

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.35,
                      }}
                    >
                      <Link
                        to={item.href}
                        onClick={closeAll}
                        className={`block py-2.5 text-[14px] font-bold transition-colors ${
                          isActive(item.href)
                            ? "text-emerald-400"
                            : "text-slate-200 hover:text-emerald-400"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* ======================================================
                RIGHT SIDE
            ====================================================== */}

            <div className="flex items-center gap-3">
              {/* Get Quote */}

              <motion.button
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.4,
                }}
                whileHover={{
                  scale: 1.03,
                  y: -1,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="hidden rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 px-5 py-2.5 text-xs font-extrabold text-slate-950 shadow-[0_8px_25px_rgba(249,115,22,0.22)] transition-all hover:shadow-[0_12px_30px_rgba(249,115,22,0.35)] lg:block"
              >
                Get Quote
              </motion.button>

              {/* Mobile */}

              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/5 text-white transition-all hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-300 lg:hidden"
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================================
          MOBILE DRAWER
      ============================================================ */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] lg:hidden"
          >
            {/* Overlay */}

            <div
              onClick={closeAll}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Drawer */}

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="absolute right-0 top-0 flex h-full w-[320px] max-w-[88vw] flex-col overflow-hidden border-l border-emerald-400/10 bg-[#07130F] shadow-2xl"
            >
              {/* Header */}

              <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-4">
                <Link
                  to="/"
                  onClick={closeAll}
                >
                  <img
                    src="/kmr-logo.webp"
                    alt="KMR Conchem"
                    className="h-12 w-auto object-contain"
                  />
                </Link>

                <button
                  type="button"
                  onClick={closeAll}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white hover:bg-emerald-400/10 hover:text-emerald-300"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Links */}

              <div className="flex-1 overflow-y-auto px-5 py-5">
                {navLinks.map((item, index) => (
                  <div key={item.name}>
                    {/* ABOUT */}

                    {item.name === "About" ? (
                      <div>
                        <button
                          type="button"
                          onClick={toggleMobileAbout}
                          className={`flex w-full items-center justify-between border-b border-white/5 py-3.5 text-left text-[15px] font-bold ${
                            isActive("/about")
                              ? "text-emerald-400"
                              : "text-slate-200"
                          }`}
                        >
                          <span>About</span>

                          <ChevronDown
                            size={17}
                            className={`text-emerald-400 transition-transform ${
                              mobileAboutOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {mobileAboutOpen && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              className="overflow-hidden"
                            >
                              <div className="my-2 ml-2 overflow-hidden rounded-lg border border-slate-200 bg-white">
                                {aboutLinks.map((aboutItem) => {
                                  const Icon = aboutItem.icon;

                                  return (
                                    <Link
                                      key={aboutItem.name}
                                      to={aboutItem.href}
                                      onClick={closeAll}
                                      className="flex items-center gap-2.5 border-b border-slate-100 px-3 py-2.5 last:border-b-0 hover:bg-emerald-50"
                                    >
                                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                                        <Icon size={13} />
                                      </span>

                                      <span className="min-w-0 flex-1">
                                        <span className="block text-[11px] font-bold text-slate-900">
                                          {aboutItem.name}
                                        </span>

                                        <span className="block text-[9px] text-slate-500">
                                          {aboutItem.description}
                                        </span>
                                      </span>

                                      <ArrowUpRight
                                        size={12}
                                        className="text-slate-400"
                                      />
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : item.name === "Products" ? (
                      /* PRODUCTS */

                      <div>
                        <button
                          type="button"
                          onClick={toggleMobileProducts}
                          className={`flex w-full items-center justify-between border-b border-white/5 py-3.5 text-left text-[15px] font-bold ${
                            isActive("/products")
                              ? "text-emerald-400"
                              : "text-slate-200"
                          }`}
                        >
                          <span>Products</span>

                          <ChevronDown
                            size={17}
                            className={`text-emerald-400 transition-transform ${
                              mobileProductsOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {mobileProductsOpen && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              className="overflow-hidden"
                            >
                              <div className="my-2 ml-2 overflow-hidden rounded-lg border border-slate-200 bg-white">
                                <Link
                                  to="/products"
                                  onClick={closeAll}
                                  className="flex items-center justify-between border-b border-slate-100 px-3 py-3 text-[11px] font-bold text-emerald-600 hover:bg-emerald-50"
                                >
                                  <span>View All Products</span>

                                  <ArrowUpRight size={13} />
                                </Link>

                                {productLinks.map(
                                  (product, productIndex) => (
                                    <Link
                                      key={product.slug}
                                      to={`/products/${product.slug}`}
                                      onClick={closeAll}
                                      className="flex items-center gap-2.5 border-b border-slate-100 px-3 py-2.5 text-[11px] font-semibold text-slate-700 last:border-b-0 hover:bg-emerald-50 hover:text-emerald-700"
                                    >
                                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-100 text-[8px] font-bold text-emerald-600">
                                        {String(
                                          productIndex + 1,
                                        ).padStart(2, "0")}
                                      </span>

                                      <span>{product.name}</span>
                                    </Link>
                                  ),
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      /* NORMAL */

                      <motion.div
                        initial={{
                          opacity: 0,
                          x: 20,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.04,
                        }}
                      >
                        <Link
                          to={item.href}
                          onClick={closeAll}
                          className={`block border-b border-white/5 py-3.5 text-[15px] font-bold ${
                            isActive(item.href)
                              ? "text-emerald-400"
                              : "text-slate-200 hover:text-emerald-300"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    )}
                  </div>
                ))}

                {/* Get Quote */}

                <button
                  type="button"
                  className="mt-6 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-600 py-3.5 text-sm font-extrabold text-slate-950"
                >
                  Get Quote
                </button>

                {/* Contact */}

                <Link
                  to="/contact"
                  onClick={closeAll}
                  className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 py-3.5 text-sm font-bold text-emerald-300"
                >
                  <Phone size={16} />
                  Contact Us
                </Link>
              </div>

              {/* Bottom */}

              <div className="border-t border-white/10 bg-[#0A1B13] p-4">
                <p className="text-[9px] font-bold uppercase tracking-[2.5px] text-emerald-400">
                  KMR Conchem Pvt. Ltd.
                </p>

                <p className="mt-1.5 text-[10px] leading-4 text-slate-400">
                  Premium construction chemical solutions engineered for
                  durability, performance and trusted results.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}