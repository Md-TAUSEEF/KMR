import {
  Droplets,
  Hammer,
  Building2,
  Grid3X3,
  ShieldCheck,
  PaintBucket,
  Zap,
  FlaskConical,
} from "lucide-react";

import waterproofing from "../../../assets/products/waterproofing.webp";
import adhesive from "../../../assets/products/adhesive.webp";
import coating from "../../../assets/products/coating.webp";
import flooring from "../../../assets/products/flooring.webp";
import grout from "../../../assets/products/grout.webp";
import repair from "../../../assets/products/repair.webp";


import admixture1 from "../../../assets/products/Admixtures/admixture1.webp";
import admixture2 from "../../../assets/products/Admixtures/admixture2.webp";
import admixture3 from "../../../assets/products/Admixtures/admixture3.webp";
import admixture4 from "../../../assets/products/Admixtures/admixture4.webp";


import Accelerators1 from "../../../assets/products/Accelerators/Accelerators1.webp"
import Accelerators2 from "../../../assets/products/Accelerators/Accelerators2.webp"
import Accelerators3 from "../../../assets/products/Accelerators/Accelerators3.webp"
import Accelerators4 from "../../../assets/products/Accelerators/Accelerators4.webp"
import Accelerators5 from "../../../assets/products/Accelerators/Accelerators5.webp"

import WaterProofing1 from "../../../assets/products/WaterProofing/WaterProofing1.webp"
import WaterProofing2 from "../../../assets/products/WaterProofing/WaterProofing2.webp"
import WaterProofing3 from "../../../assets/products/WaterProofing/WaterProofing3.webp"
import WaterProofing4 from "../../../assets/products/WaterProofing/WaterProofing4.webp"
import WaterProofing5 from "../../../assets/products/WaterProofing/WaterProofing5.webp"


import ShutterReleas1 from "../../../assets/products/ShutterRelease/ShutterReleas1.webp"
import ShutterReleas2 from "../../../assets/products/ShutterRelease/ShutterReleas2.webp"
import ShutterReleas3 from "../../../assets/products/ShutterRelease/ShutterReleas3.webp"
import ShutterReleas4 from "../../../assets/products/ShutterRelease/ShutterReleas4.webp"

import CuringCompounds1 from "../../../assets/products/CuringCompounds/CuringCompounds1.webp"
import CuringCompounds2 from "../../../assets/products/CuringCompounds/CuringCompounds2.webp"
import CuringCompounds3 from "../../../assets/products/CuringCompounds/CuringCompounds3.webp"
import CuringCompounds4 from "../../../assets/products/CuringCompounds/CuringCompounds5.webp"

import waterReducer1 from "../../../assets/products/waterreducer/waterReducer1.webp"
import waterReducer2 from "../../../assets/products/waterreducer/waterReducer2.webp"
import waterReducer3 from "../../../assets/products/waterreducer/waterReducer3.webp"
import waterReducer4 from "../../../assets/products/waterreducer/waterReducer4.webp"
import waterReducer5 from "../../../assets/products/waterreducer/waterReducer5.webp"


import pce1 from "../../../assets/products/pce/pce1.webp"
import pce2 from "../../../assets/products/pce/pce2.webp"
import pce3 from "../../../assets/products/pce/pce3.webp"
import pce4 from "../../../assets/products/pce/pce4.webp"
import pce5 from "../../../assets/products/pce/pce5.webp"


import knf1 from "../../../assets/products/knf/knf1.webp"
import knf2 from "../../../assets/products/knf/knf2.webp"
import knf3 from "../../../assets/products/knf/knf3.webp"
import knf4 from "../../../assets/products/knf/knf4.webp"
import knf5 from "../../../assets/products/knf/knf5.webp"


export const productData = [
  // ============================================================
  // 1. ADMIXTURES
  // ============================================================
  {
    id: 1,
    category: "Admixtures",
    slug: "admixtures",
    icon: FlaskConical,
    image: admixture1,
    description:
      "High-performance concrete admixtures designed to improve workability, strength, durability and overall concrete performance.",
    color: "from-cyan-500 to-blue-600",

    products: [
      {
        id: "adm-1",
        name: "KMR Concrete Admixture",
        slug: "kmr-concrete-admixture",
        category: "Admixtures",
        image: waterproofing,
        description:
          "High-performance admixture for improved concrete workability and strength.",
      },
      {
        id: "adm-2",
        name: "KMR Super Plasticizer",
        slug: "kmr-super-plasticizer",
        category: "Admixtures",
        image: repair,
        description:
          "Advanced admixture designed to improve flow and reduce water demand.",
      },
      {
        id: "adm-3",
        name: "KMR Concrete Enhancer",
        slug: "kmr-concrete-enhancer",
        category: "Admixtures",
        image: adhesive,
        description:
          "Specialized solution for improving concrete performance and durability.",
      },
      {
        id: "adm-4",
        name: "KMR High Performance Admixture",
        slug: "kmr-high-performance-admixture",
        category: "Admixtures",
        image: admixture4,
        description:
          "Premium admixture for demanding structural and infrastructure applications.",
      },
      {
        id: "adm-5",
        name: "KMR Multi Purpose Admixture",
        slug: "kmr-multi-purpose-admixture",
        category: "Admixtures",
        image: grout,
        description:
          "Versatile concrete admixture suitable for a wide range of construction applications.",
      },
    ],
  },

  // ============================================================
  // 2. ACCELERATORS & SHOTCRETE
  // ============================================================
  {
    id: 2,
    category: "Accelerators & Shotcrete",
    slug: "accelerators-shotcrete",
    icon: Zap,
    image: Accelerators1,
    description:
      "Specialized accelerator solutions for rapid setting and high-performance shotcrete applications.",
    color: "from-orange-500 to-red-500",

    products: [
      {
        id: "acc-1",
        name: "KMR Shotcrete Accelerator",
        slug: "kmr-shotcrete-accelerator",
        category: "Accelerators & Shotcrete",
        image: Accelerators1,
        description:
          "Accelerator designed for fast setting and efficient shotcrete applications.",
      },
      {
        id: "acc-2",
        name: "KMR Rapid Set Accelerator",
        slug: "kmr-rapid-set-accelerator",
        category: "Accelerators & Shotcrete",
        image: Accelerators2,
        description:
          "Fast-acting accelerator for projects requiring rapid concrete setting.",
      },
      {
        id: "acc-3",
        name: "KMR Shotcrete Performance Agent",
        slug: "kmr-shotcrete-performance-agent",
        category: "Accelerators & Shotcrete",
        image: Accelerators3,
        description:
          "Performance-enhancing solution for high-quality sprayed concrete.",
      },
      {
        id: "acc-4",
        name: "KMR Tunneling Accelerator",
        slug: "kmr-tunneling-accelerator",
        category: "Accelerators & Shotcrete",
        image: Accelerators4,
        description:
          "Specialized accelerator for underground and tunneling construction applications.",
      },
      {
        id: "acc-5",
        name: "KMR High Speed Accelerator",
        slug: "kmr-high-speed-accelerator",
        category: "Accelerators & Shotcrete",
        image: Accelerators5,
        description:
          "High-performance accelerator developed for fast construction cycles.",
      },
    ],
  },

  // ============================================================
  // 3. WATER PROOFING COMPOUNDS
  // ============================================================
  {
    id: 3,
    category: "Water Proofing Compounds",
    slug: "water-proofing-compounds",
    icon: Droplets,
    image: WaterProofing1,
    description:
      "Advanced waterproofing compounds for roofs, terraces, basements, foundations and concrete structures.",
    color: "from-sky-500 to-cyan-600",

    products: [
      {
        id: "wp-1",
        name: "KMR Waterproofing Compound",
        slug: "kmr-waterproofing-compound",
        category: "Water Proofing Compounds",
        image: WaterProofing1,
        description:
          "Reliable waterproofing solution for concrete and masonry structures.",
      },
      {
        id: "wp-2",
        name: "KMR Roof Waterproofing System",
        slug: "kmr-roof-waterproofing-system",
        category: "Water Proofing Compounds",
        image: WaterProofing2,
        description:
          "Waterproofing system designed for roofs and exposed concrete surfaces.",
      },
      {
        id: "wp-3",
        name: "KMR Basement Waterproofing",
        slug: "kmr-basement-waterproofing",
        category: "Water Proofing Compounds",
        image: WaterProofing3,
        description:
          "Protection system for basements, foundations and below-ground structures.",
      },
      {
        id: "wp-4",
        name: "KMR Integral Waterproofing",
        slug: "kmr-integral-waterproofing",
        category: "Water Proofing Compounds",
        image: WaterProofing4,
        description:
          "Integral waterproofing solution for enhanced concrete resistance against water penetration.",
      },
      {
        id: "wp-5",
        name: "KMR Terrace Waterproofing",
        slug: "kmr-terrace-waterproofing",
        category: "Water Proofing Compounds",
        image: WaterProofing5,
        description:
          "Durable waterproofing solution for terraces and exposed horizontal surfaces.",
      },
    ],
  },

  // ============================================================
  // 4. SHUTTER RELEASE AGENTS
  // ============================================================
  {
    id: 4,
    category: "Shutter Release Agents",
    slug: "shutter-release-agents",
    icon: Building2,
    image: ShutterReleas1,
    description:
      "High-quality release agents for clean concrete surfaces and efficient formwork removal.",
    color: "from-violet-500 to-fuchsia-600",

    products: [
      {
        id: "sh-1",
        name: "KMR Shutter Release Agent",
        slug: "kmr-shutter-release-agent",
        category: "Shutter Release Agents",
        image: ShutterReleas1,
        description:
          "Form release solution for smooth and efficient concrete demoulding.",
      },
      {
        id: "sh-2",
        name: "KMR Form Release Oil",
        slug: "kmr-form-release-oil",
        category: "Shutter Release Agents",
        image: ShutterReleas2,
        description:
          "Specialized release oil designed for construction formwork applications.",
      },
      {
        id: "sh-3",
        name: "KMR Premium Release Agent",
        slug: "kmr-premium-release-agent",
        category: "Shutter Release Agents",
        image: ShutterReleas3,
        description:
          "Premium release agent for high-quality concrete finishes.",
      },
      {
        id: "sh-4",
        name: "KMR Concrete Form Release",
        slug: "kmr-concrete-form-release",
        category: "Shutter Release Agents",
        image: ShutterReleas4,
        description:
          "Reliable form release solution for construction and precast applications.",
      },
      {
        id: "sh-5",
        name: "KMR Advanced Shuttering Agent",
        slug: "kmr-advanced-shuttering-agent",
        category: "Shutter Release Agents",
        image: ShutterReleas4,
        description:
          "Advanced shuttering solution for easy stripping and improved concrete finish.",
      },
    ],
  },

  // ============================================================
  // 5. CURING COMPOUNDS
  // ============================================================
  {
    id: 5,
    category: "Curing Compounds",
    slug: "curing-compounds",
    icon: Hammer,
    image: CuringCompounds1,
    description:
      "Concrete curing compounds designed to minimize moisture loss and support proper concrete strength development.",
    color: "from-emerald-500 to-green-600",

    products: [
      {
        id: "cur-1",
        name: "KMR Concrete Curing Compound",
        slug: "kmr-concrete-curing-compound",
        category: "Curing Compounds",
        image: CuringCompounds1,
        description:
          "Curing compound for maintaining moisture during concrete strength development.",
      },
      {
        id: "cur-2",
        name: "KMR Membrane Curing Compound",
        slug: "kmr-membrane-curing-compound",
        category: "Curing Compounds",
        image: CuringCompounds2,
        description:
          "Membrane-forming curing solution for concrete and cementitious surfaces.",
      },
      {
        id: "cur-3",
        name: "KMR Premium Curing Agent",
        slug: "kmr-premium-curing-agent",
        category: "Curing Compounds",
        image: CuringCompounds3,
        description:
          "Premium curing solution for demanding concrete construction applications.",
      },
      {
        id: "cur-4",
        name: "KMR Water Based Curing Compound",
        slug: "kmr-water-based-curing-compound",
        category: "Curing Compounds",
        image: CuringCompounds4,
        description:
          "Water-based curing compound for effective moisture retention.",
      },
      {
        id: "cur-5",
        name: "KMR Concrete Protection Cure",
        slug: "kmr-concrete-protection-cure",
        category: "Curing Compounds",
        image: CuringCompounds4,
        description:
          "Concrete curing and protection solution for improved surface performance.",
      },
    ],
  },

  // ============================================================
  // 6. WATER REDUCING ADMIXTURE / PLASTICISERS
  // ============================================================
  {
    id: 6,
    category: "Water Reducing Admixture (Plasticisers)",
    slug: "water-reducing-admixture-plasticisers",
    icon: FlaskConical,
    image: waterReducer1,
    description:
      "Water-reducing plasticiser solutions that improve concrete workability while helping reduce water requirements.",
    color: "from-blue-500 to-indigo-600",

    products: [
      {
        id: "wr-1",
        name: "KMR Water Reducing Plasticiser",
        slug: "kmr-water-reducing-plasticiser",
        category: "Water Reducing Admixture (Plasticisers)",
        image: waterReducer1,
        description:
          "Plasticising admixture for improved workability and efficient concrete production.",
      },
      {
        id: "wr-2",
        name: "KMR Concrete Plasticiser",
        slug: "kmr-concrete-plasticiser",
        category: "Water Reducing Admixture (Plasticisers)",
        image: waterReducer2,
        description:
          "Concrete plasticiser designed to improve flow and handling characteristics.",
      },
      {
        id: "wr-3",
        name: "KMR Standard Water Reducer",
        slug: "kmr-standard-water-reducer",
        category: "Water Reducing Admixture (Plasticisers)",
        image: waterReducer3,
        description:
          "Standard water-reducing admixture for general concrete applications.",
      },
      {
        id: "wr-4",
        name: "KMR High Efficiency Plasticiser",
        slug: "kmr-high-efficiency-plasticiser",
        category: "Water Reducing Admixture (Plasticisers)",
        image: waterReducer4,
        description:
          "High-efficiency plasticiser for improved concrete performance and workability.",
      },
      {
        id: "wr-5",
        name: "KMR Advanced Water Reducer",
        slug: "kmr-advanced-water-reducer",
        category: "Water Reducing Admixture (Plasticisers)",
        image: waterReducer5,
        description:
          "Advanced water-reducing solution for modern concrete construction.",
      },
    ],
  },

  // ============================================================
  // 7. HIGH RANGE WATER REDUCING ADMIXTURE - PCE BASED
  // ============================================================
  {
    id: 7,
    category: "High Range Water Reducing Admixture (PCE Based)",
    slug: "high-range-water-reducing-admixture-pce-based",
    icon: Droplets,
    image: pce1,
    description:
      "High-range PCE-based water reducing admixtures for superior workability, flow and high-performance concrete.",
    color: "from-cyan-500 to-teal-600",

    products: [
      {
        id: "pce-1",
        name: "KMR PCE Based Superplasticizer",
        slug: "kmr-pce-based-superplasticizer",
        category: "High Range Water Reducing Admixture (PCE Based)",
        image: pce1,
        description:
          "PCE-based superplasticizer for high-performance concrete applications.",
      },
      {
        id: "pce-2",
        name: "KMR PCE High Flow Admixture",
        slug: "kmr-pce-high-flow-admixture",
        category: "High Range Water Reducing Admixture (PCE Based)",
        image: pce2,
        description:
          "High-flow admixture designed for excellent concrete workability.",
      },
      {
        id: "pce-3",
        name: "KMR PCE Concrete Performance Agent",
        slug: "kmr-pce-concrete-performance-agent",
        category: "High Range Water Reducing Admixture (PCE Based)",
        image: pce3,
        description:
          "Performance-enhancing PCE solution for demanding structural applications.",
      },
      {
        id: "pce-4",
        name: "KMR PCE High Performance",
        slug: "kmr-pce-high-performance",
        category: "High Range Water Reducing Admixture (PCE Based)",
        image: pce4,
        description:
          "High-performance PCE-based admixture for advanced concrete mixes.",
      },
      {
        id: "pce-5",
        name: "KMR PCE Advanced Superplasticizer",
        slug: "kmr-pce-advanced-superplasticizer",
        category: "High Range Water Reducing Admixture (PCE Based)",
        image: pce5,
        description:
          "Advanced PCE superplasticizer for improved flow and concrete performance.",
      },
    ],
  },

  // ============================================================
  // 8. HIGH RANGE WATER REDUCING ADMIXTURES - SNF BASED
  // ============================================================
  {
    id: 8,
    category: "High Range Water Reducing Admixtures (SNF Based)",
    slug: "high-range-water-reducing-admixtures-snf-based",
    icon: FlaskConical,
    image: knf1,
    description:
      "SNF-based high-range water reducing admixtures for improved concrete flow, strength and workability.",
    color: "from-amber-500 to-orange-600",

    products: [
      {
        id: "snf-1",
        name: "KMR SNF Based Superplasticizer",
        slug: "kmr-snf-based-superplasticizer",
        category: "High Range Water Reducing Admixtures (SNF Based)",
        image: knf1,
        description:
          "SNF-based superplasticizer for efficient concrete water reduction.",
      },
      {
        id: "snf-2",
        name: "KMR SNF High Range Water Reducer",
        slug: "kmr-snf-high-range-water-reducer",
        category: "High Range Water Reducing Admixtures (SNF Based)",
        image: knf2,
        description:
          "High-range water reducer for improved concrete workability and strength.",
      },
      {
        id: "snf-3",
        name: "KMR SNF Concrete Plasticiser",
        slug: "kmr-snf-concrete-plasticiser",
        category: "High Range Water Reducing Admixtures (SNF Based)",
        image: knf3,
        description:
          "SNF-based plasticising solution for demanding concrete applications.",
      },
      {
        id: "snf-4",
        name: "KMR SNF Performance Admixture",
        slug: "kmr-snf-performance-admixture",
        category: "High Range Water Reducing Admixtures (SNF Based)",
        image: knf4,
        description:
          "Performance admixture designed to improve concrete flow and strength.",
      },
      {
        id: "snf-5",
        name: "KMR Advanced SNF Admixture",
        slug: "kmr-advanced-snf-admixture",
        category: "High Range Water Reducing Admixtures (SNF Based)",
        image: knf5,
        description:
          "Advanced SNF-based admixture for high-performance concrete applications.",
      },
    ],
  },
];
