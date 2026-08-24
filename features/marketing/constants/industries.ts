import type { Industry } from "@/features/marketing/types";

export const industryPageItems = [
  {
    name: "Food & Beverage",
    description:
      "Rigid structures, custom coffee cups, and gourmet food sleeves designed with food-grade barriers and unmatched structural integrity.",
    image: "/bg/industries/cofee-bg.png",
  },
  {
    name: "Cosmetics & Beauty",
    description:
      "Luxe embossed packaging for serums, lipsticks, and perfumes. Captivate attention on the shelf with soft-touch films and gold foil stamping.",
    image: "/bg/industries/cosmetics-bg.png",
  },
  {
    name: "Health & Wellness",
    description:
      "Clean, professional boxes for supplements, vitamins, and premium nutraceuticals. Designed for compliance, clarity, and trust.",
    image: "/bg/industries/bakery-bg.png",
  },
  {
    name: "Cannabis & CBD",
    description:
      "Child-resistant, secure, and fully customized boxes for cartridges, edibles, and flower. Premium finishes that match high-end topicals.",
    image: "/bg/industries/jewelry-bg.png",
  },
  {
    name: "E-Commerce",
    description:
      "Heavy-duty mailers designed to survive transit while delivering a memorable unboxing experience. Built for structural strength and bold brand impact.",
    image: "/bg/industries/shampo-bg.png",
  },
  {
    name: "Fashion & Apparel",
    description:
      "High-end rigid gift boxes, apparel drawers, and luxury tote shopping bags. Elevate your garments into a complete luxury presentation.",
    image: "/bg/industries/gifting-bg.png",
  },
  {
    name: "Electronics",
    description:
      "Tailored insert trays, rigid slide-out boxes, and heavy-duty corrugated board to keep high-value tech devices completely safe and perfectly staged.",
    image: "/bg/industries/food-bg.png",
  },
  {
    name: "Spirits & Wine",
    description:
      "Extravagant gift boxes and rigid sleeves designed to secure glass weight while showcasing intricate foil embossments and premium labels.",
    image: "/bg/industries/cosmetics-bg.png",
    objectPosition: "center 60%",
  },
] as const satisfies readonly Industry[];
