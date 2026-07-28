import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

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
    href: "#about",
  },
  {
    name: "Products",
    href: "/products",
    dropdown: true,
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Clients",
    href: "#clients",
  },
  {
    name: "Certificates",
    href: "#certificates",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

// ============================================================
// PRODUCT LINKS
// EXACT SLUGS FROM productData.js
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
  const [active, setActive] = useState("Home");
  const [productsOpen, setProductsOpen] = useState(false);

  // ============================================================
  // SCROLL EFFECT
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
  // CLOSE MOBILE MENU ON ESC
  // ============================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setProductsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // ============================================================
  // BODY SCROLL LOCK WHEN MOBILE MENU OPEN
  // ============================================================

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ============================================================
  // NAV CLICK
  // ============================================================

  const handleNavClick = (name) => {
    setActive(name);
    setProductsOpen(false);
    setIsOpen(false);
  };

  // ============================================================
  // PRODUCT CLICK
  // ============================================================

  const handleProductClick = () => {
    setActive("Products");
    setProductsOpen(false);
    setIsOpen(false);
  };

  return (
    <>
      {/* ============================================================
          MAIN NAVBAR
      ============================================================ */}

      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-cyan-400/10 bg-[#061522]/95 shadow-[0_15px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            : "border-b border-white/10 bg-[#071725]/90 backdrop-blur-xl"
        }`}
      >
        {/* ========================================================
            DECORATIVE GLOW
        ======================================================== */}

        <div className="pointer-events-none absolute left-0 top-0 h-32 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="pointer-events-none absolute right-0 top-0 h-32 w-48 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1500px] px-5 sm:px-6 lg:px-10">
          <div className="flex h-[82px] items-center justify-between lg:h-[88px]">

            {/* ======================================================
                LOGO
            ====================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="shrink-0"
            >
              <Link
                to="/"
                onClick={() => handleNavClick("Home")}
                className="group flex items-center"
              >
                <img
                  src="/kmr-logo.png"
                  alt="KMR Conchem"
                  className="h-[58px] w-auto object-contain transition-transform duration-500 group-hover:scale-105 sm:h-[64px]"
                />
              </Link>
            </motion.div>

            {/* ======================================================
                DESKTOP NAVIGATION
            ====================================================== */}

            <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
              {navLinks.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.dropdown) {
                      setProductsOpen(true);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.dropdown) {
                      setProductsOpen(false);
                    }
                  }}
                >
                  {/* ==================================================
                      PRODUCTS NAV ITEM
                  ================================================== */}

                  {item.dropdown ? (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.06,
                        duration: 0.45,
                      }}
                      className={`group relative flex items-center gap-1.5 py-3 text-[15px] font-bold transition-all duration-300 ${
                        active === item.name
                          ? "text-cyan-300"
                          : "text-slate-200 hover:text-cyan-300"
                      }`}
                    >
                      {/* Products Main Link */}

                      <Link
                        to="/products"
                        onClick={() => handleNavClick("Products")}
                        className="flex items-center gap-1.5"
                      >
                        Products

                        <ChevronDown
                          size={15}
                          className={`transition-transform duration-300 ${
                            productsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>

                      {/* Active Line */}

                      <span
                        className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                          active === item.name
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      />

                      {/* ==================================================
                          PRODUCTS DROPDOWN
                      ================================================== */}

                      <AnimatePresence>
                        {productsOpen && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 10,
                              scale: 0.97,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              scale: 1,
                            }}
                            exit={{
                              opacity: 0,
                              y: 10,
                              scale: 0.97,
                            }}
                            transition={{
                              duration: 0.2,
                            }}
                            className="absolute left-1/2 top-full z-[70] w-[410px] -translate-x-1/2 pt-4"
                          >
                            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#081927]/98 p-3 shadow-[0_25px_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl">

                              {/* Dropdown Header */}

                              <div className="mb-2 border-b border-white/10 px-4 pb-3">
                                <p className="text-[10px] font-bold uppercase tracking-[3px] text-cyan-400">
                                  Our Products
                                </p>

                                <p className="mt-1 text-sm font-semibold text-white">
                                  Construction Chemical Solutions
                                </p>
                              </div>

                              {/* Product List */}

                              <div className="grid max-h-[480px] gap-1 overflow-y-auto pr-1">
                                {productLinks.map(
                                  (product, productIndex) => (
                                    <Link
                                      key={product.slug}
                                      to={`/products/${product.slug}`}
                                      onClick={handleProductClick}
                                      className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-cyan-400/10 hover:text-cyan-300"
                                    >
                                      <span className="flex min-w-0 items-center gap-3">
                                        {/* Number */}

                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[10px] font-bold text-cyan-400 transition-all group-hover:bg-cyan-400/15">
                                          {String(
                                            productIndex + 1
                                          ).padStart(2, "0")}
                                        </span>

                                        {/* Product Name */}

                                        <span className="leading-5">
                                          {product.name}
                                        </span>
                                      </span>

                                      {/* Arrow */}

                                      <ArrowRight
                                        size={14}
                                        className="ml-2 shrink-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                                      />
                                    </Link>
                                  )
                                )}
                              </div>

                              {/* View All */}

                              <div className="mt-2 border-t border-white/10 pt-2">
                                <Link
                                  to="/products"
                                  onClick={() =>
                                    handleNavClick("Products")
                                  }
                                  className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-cyan-400 transition-all duration-200 hover:bg-cyan-400/10 hover:text-cyan-300"
                                >
                                  <span>View All Products</span>

                                  <ArrowRight
                                    size={16}
                                    className="transition-transform duration-200 group-hover:translate-x-1"
                                  />
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ) : (
                    /* ==================================================
                       NORMAL NAV ITEM
                    ================================================== */

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.06,
                        duration: 0.45,
                      }}
                    >
                      <a
                        href={item.href}
                        onClick={() => handleNavClick(item.name)}
                        className={`group relative flex items-center gap-1.5 py-3 text-[15px] font-bold transition-all duration-300 ${
                          active === item.name
                            ? "text-cyan-300"
                            : "text-slate-200 hover:text-cyan-300"
                        }`}
                      >
                        {item.name}

                        {/* Active Line */}

                        <span
                          className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                            active === item.name
                              ? "w-full"
                              : "w-0 group-hover:w-full"
                          }`}
                        />
                      </a>
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* ======================================================
                RIGHT SIDE
            ====================================================== */}

            <div className="flex items-center gap-3">

              {/* ====================================================
                  DESKTOP GET QUOTE
              ==================================================== */}

              <motion.button
                initial={{
                  opacity: 0,
                  x: 25,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.5,
                }}
                whileHover={{
                  scale: 1.04,
                  y: -1,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="hidden items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-[0_10px_30px_rgba(249,115,22,0.25)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(249,115,22,0.4)] lg:flex"
              >
                Get Quote

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300"
                />
              </motion.button>

              {/* ====================================================
                  MOBILE MENU BUTTON
              ==================================================== */}

              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300 lg:hidden"
                aria-label="Open menu"
              >
                <Menu size={25} />
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
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[100] lg:hidden"
          >
            {/* ======================================================
                OVERLAY
            ====================================================== */}

            <div
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* ======================================================
                DRAWER
            ====================================================== */}

            <motion.div
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="absolute right-0 top-0 flex h-full w-[330px] flex-col overflow-hidden border-l border-white/10 bg-[#061522] shadow-2xl"
            >
              {/* Drawer Glow */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

              {/* ====================================================
                  DRAWER HEADER
              ==================================================== */}

              <div className="relative flex items-center justify-between border-b border-white/10 p-5">
                <Link
                  to="/"
                  onClick={() => handleNavClick("Home")}
                >
                  <img
                    src="/logo.png"
                    alt="KMR Conchem"
                    className="h-14 w-auto object-contain"
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10 hover:text-cyan-300"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* ====================================================
                  MOBILE LINKS
              ==================================================== */}

              <div className="relative flex-1 overflow-y-auto px-5 py-6">

                {navLinks.map((item, index) => (
                  <div key={item.name}>

                    {/* ==================================================
                        PRODUCTS MOBILE
                    ================================================== */}

                    {item.dropdown ? (
                      <>
                        {/* Products Main Link */}

                        <Link
                          to="/products"
                          onClick={() => handleNavClick("Products")}
                          className={`flex items-center justify-between border-b border-white/5 py-4 text-[16px] font-bold transition-all ${
                            active === item.name
                              ? "text-cyan-300"
                              : "text-slate-200 hover:pl-2 hover:text-cyan-300"
                          }`}
                        >
                          <span>Products</span>

                          <ChevronDown
                            size={17}
                            className="text-cyan-400"
                          />
                        </Link>

                        {/* Mobile Product Items */}

                        <div className="ml-3 border-l border-cyan-400/20 pl-4">
                          {productLinks.map(
                            (product, productIndex) => (
                              <motion.div
                                key={product.slug}
                                initial={{
                                  opacity: 0,
                                  x: 20,
                                }}
                                animate={{
                                  opacity: 1,
                                  x: 0,
                                }}
                                transition={{
                                  delay: index * 0.04 +
                                    productIndex * 0.025,
                                }}
                              >
                                <Link
                                  to={`/products/${product.slug}`}
                                  onClick={handleProductClick}
                                  className="flex items-center justify-between border-b border-white/5 py-3 text-sm text-slate-400 transition-colors hover:text-cyan-300"
                                >
                                  <span className="pr-3">
                                    {product.name}
                                  </span>

                                  <ArrowRight
                                    size={14}
                                    className="shrink-0 opacity-40"
                                  />
                                </Link>
                              </motion.div>
                            )
                          )}
                        </div>
                      </>
                    ) : (
                      /* ==================================================
                         NORMAL MOBILE LINK
                      ================================================== */

                      <motion.a
                        href={item.href}
                        onClick={() => handleNavClick(item.name)}
                        initial={{
                          opacity: 0,
                          x: 30,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.06,
                        }}
                        className={`flex items-center justify-between border-b border-white/5 py-4 text-[16px] font-bold transition-all ${
                          active === item.name
                            ? "text-cyan-300"
                            : "text-slate-200 hover:pl-2 hover:text-cyan-300"
                        }`}
                      >
                        <span>{item.name}</span>

                        <ArrowRight
                          size={16}
                          className="opacity-40"
                        />
                      </motion.a>
                    )}
                  </div>
                ))}

                {/* ====================================================
                    MOBILE GET QUOTE
                ==================================================== */}

                <button
                  type="button"
                  className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 py-4 font-extrabold text-slate-950 shadow-[0_10px_30px_rgba(249,115,22,0.25)]"
                >
                  Get Quote

                  <ArrowRight size={18} />
                </button>

                {/* ====================================================
                    MOBILE CONTACT
                ==================================================== */}

                <button
                  type="button"
                  className="mt-3 flex w-full items-center justify-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 py-4 font-bold text-cyan-300 transition-all hover:bg-cyan-400/15"
                >
                  <Phone size={17} />
                  Contact Us
                </button>
              </div>

              {/* ====================================================
                  DRAWER BOTTOM
              ==================================================== */}

              <div className="relative border-t border-white/10 bg-[#071B2B] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[3px] text-cyan-400">
                  KMR Conchem Pvt. Ltd.
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-400">
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