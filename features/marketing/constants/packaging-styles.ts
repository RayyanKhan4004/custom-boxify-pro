import displayBoxes from "@/components/images/packaging-styles/display-boxes.png";
import drawerBoxes from "@/components/images/packaging-styles/drawer-boxes.png";
import foldingCartons from "@/components/images/packaging-styles/folding-cartons.png";
import magneticClosureBoxes from "@/components/images/packaging-styles/magnetic-coluser-boxes.png";
import mailerBox from "@/components/images/packaging-styles/mailer-box.png";
import pillowBoxes from "@/components/images/packaging-styles/pillow-boxes.png";
import rigidBoxes from "@/components/images/packaging-styles/rigid-boxes.png";
import sleeveBoxes from "@/components/images/packaging-styles/sleeves-boxes.png";
import type { PackagingStyle } from "@/features/marketing/types";

export const packagingStylePageItems = [
  {
    name: "Rigid Boxes",
    description:
      "Non-collapsible boxes crafted with extra-thick greyboard wraps. Engineered for supreme structural protection and elite retail shelf presence.",
    bestFor: "Luxury cosmetics, high-end consumer electronics, jewelry, and collector sets.",
    specifications: [
      "100% recycled premium high-density chipboard (800g - 1600g).",
      "Specialty paper finishes, including linen texture, soft-touch, and matte.",
      "Vibrant foil stamping, spot UV gloss, and deep debossing options.",
    ],
    image: rigidBoxes,
  },
  {
    name: "Folding Cartons",
    description:
      "Sleek, lightweight, and highly versatile boxes that ship flat to minimize storage costs. Excellent for intricate color reproduction and clean shelf layouts.",
    bestFor: "Beauty serums, pharmaceuticals, artisan gourmet food, and soaps.",
    specifications: [
      "High-fidelity Solid Bleached Sulfate (SBS) paperboard (14pt - 24pt).",
      "Fully customizable window cutouts with clear biodegradable film.",
      "Auto-lock bottom or tuck-end flaps for rapid packaging assembly.",
    ],
    image: foldingCartons,
  },
  {
    name: "Mailer Boxes",
    description:
      "Strong corrugated cardboard mailers designed to survive rigorous postage and courier handling while delivering a stunning internal unboxing reveal.",
    bestFor: "D2C e-commerce subscription boxes, apparel delivery, and curated gift kits.",
    specifications: [
      "Fluted micro-corrugated board (E-flute or B-flute) for superior crush resistance.",
      "Dual self-adhesive tear strips and return-ready sealing tapes.",
      "Full double-sided edge-to-edge printing with non-toxic water-based inks.",
    ],
    image: mailerBox,
  },
  {
    name: "Sleeve Boxes",
    description:
      "A two-piece slide design combining a rigid or folding tray with a snug custom-fit outer wrap. It creates an elegant, cinematic reveal on unboxing.",
    bestFor: "Premium stationery, chocolate assortments, boutique soap bars, and luxury apparel accessories.",
    specifications: [
      "Variable tray depths with thumb notches or ribbon pull attachments.",
      "Outer sleeves cut from high-grain Kraft, SBS, or textured paper.",
      "Internal compartments crafted with customized inserts or cradles.",
    ],
    image: sleeveBoxes,
  },
  {
    name: "Display Boxes",
    description:
      "Retail-ready display boxes with perforated tear-away lids. Keeps products perfectly structured on checkout counters and point-of-sale stands.",
    bestFor: "Single-serve nutrition bars, cosmetics, display checkout counter retail items.",
    specifications: [
      "Sturdy corrugated cardstock backing with reinforced standing walls.",
      "Tear-away perforated header card converting easily from shipper to display.",
      "Optimized custom slots and counter-placed rowsters for product visibility.",
    ],
    image: displayBoxes,
  },
  {
    name: "Drawer Boxes",
    description:
      "Gliding drawers fitted with elegant custom-dyed pulls. High friction felt ensures smooth movement and excellent luxury containment.",
    bestFor: "High-end accessories, premium cosmetic palettes, fine writing instruments, and premium gift cards.",
    specifications: [
      "Integrated custom pull-tab made of satin ribbon, leather, or linen cords.",
      "Laser-cut ultra-dense foam or soft velvet trays matching product contours.",
      "Thick rigid outer sleeves preventing any deformation under heavy stacking.",
    ],
    image: drawerBoxes,
  },
  {
    name: "Magnetic Closure Boxes",
    description:
      "Elite presentation boxes that snap shut with a highly satisfying magnetic click. Features heavy rigid frames integrated with powerful hidden magnets.",
    bestFor: "Influencer PR kits, welcome kits, luxury corporate gifts, and watch presentation.",
    specifications: [
      "Integrated high-strength rare earth magnets embedded invisibly into structural flaps.",
      "Book-style folding configuration with reusable protective magnetic seals.",
      "Custom molded internal structures lined with premium silk, velvet, or microsuede.",
    ],
    image: magneticClosureBoxes,
  },
  {
    name: "Pillow Boxes",
    description:
      "A playful, organic curved pouch shape designed with convenient snap-shut side arcs. Minimal footprint that pops open instantly.",
    bestFor: "Lingerie, socks and scarves, organic cosmetic bars, event favors, and jewelry packages.",
    specifications: [
      "Highly flexible high-grade premium cardstock or earthy Recycled Kraft.",
      "Ergonomic side-finger tabs for effortless product access.",
      "Ideal for branding with decorative ribbons, hemp strings, or wax-stamps.",
    ],
    image: pillowBoxes,
  },
] as const satisfies readonly PackagingStyle[];
