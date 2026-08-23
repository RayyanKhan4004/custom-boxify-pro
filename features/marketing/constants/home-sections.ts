import { FileTextIcon, PackageIcon, PaintBrushIcon } from "@phosphor-icons/react/dist/ssr";
import type { SelectOption } from "@/components/ui/select";

export const packagingStyles = [
  "Double Wall Coffee Cups",
  "Cigarette Boxes",
  "Cosmetic Boxes",
  "Eco Friendly Boxes",
  "Solid Gift Boxes",
  "Candle Shipping Box",
  "Double Wall Cups",
  "Tuck Boxes",
] as const;

export const industries = [
  {
    name: "Shampoo",
    image: "/bg/industries/shampo-bg.png",
    description: "Custom shampoo and personal care packaging",
    objectPosition: "48% center",
  },
  {
    name: "Food",
    image: "/bg/industries/food-bg.png",
    description: "Food packaging made to protect every bite",
    objectPosition: "52% center",
  },
  {
    name: "Gift",
    image: "/bg/industries/gifting-bg.png",
    description: "Memorable gift packaging for every occasion",
    objectPosition: "50% center",
  },
  {
    name: "Cafe",
    image: "/bg/industries/cofee-bg.png",
    description: "All types of custom coffee and tea cups",
    objectPosition: "52% center",
  },
  {
    name: "Bakery",
    image: "/bg/industries/bakery-bg.png",
    description: "Fresh bakery packaging made to stand out",
    objectPosition: "50% center",
  },
  {
    name: "Cosmetics",
    image: "/bg/industries/cosmetics-bg.png",
    description: "Premium cosmetic packaging for your brand",
    objectPosition: "48% center",
  },
  {
    name: "Jewelry",
    image: "/bg/industries/jewelry-bg.png",
    description: "Elegant packaging for fine jewelry",
    objectPosition: "52% center",
  },
] as const;

export const steps = [
  {
    icon: FileTextIcon,
    title: "Request a Quote",
    description:
      "Tell us your packaging requirements, dimensions, quantity, and design preferences to receive a free custom quote.",
  },
  {
    icon: PaintBrushIcon,
    title: "Approve Your Design",
    description:
      "Our experts create a custom box design for your approval before production begins.",
  },
  {
    icon: PackageIcon,
    title: "We Print & Deliver",
    description:
      "Once approved, we print your custom packaging boxes and deliver them safely to your doorstep.",
  },
] as const;

export const packagingStyleOptions: SelectOption[] = [
  { value: "mailer-box", label: "Mailer Box" },
  { value: "tuck-box", label: "Tuck Box" },
  { value: "rigid-box", label: "Rigid Box" },
  { value: "display-box", label: "Display Box" },
];

export const materialOptions: SelectOption[] = [
  { value: "kraft", label: "Kraft Paper" },
  { value: "cardstock", label: "Cardstock" },
  { value: "corrugated", label: "Corrugated Board" },
  { value: "rigid-board", label: "Rigid Board" },
];

export const quantityOptions: SelectOption[] = [
  { value: "100", label: "100" },
  { value: "250", label: "250" },
  { value: "500", label: "500" },
  { value: "1000", label: "1,000" },
];

export const dimensionOptions: SelectOption[] = [
  { value: "2", label: "2 in" },
  { value: "4", label: "4 in" },
  { value: "6", label: "6 in" },
  { value: "8", label: "8 in" },
];

export const industryHeightByDistance = {
  0: "h-full", 
  1: "h-[90%]",
  2: "h-[80%]",
  3: "h-[70%]",
} as const;
