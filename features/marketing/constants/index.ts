export { footerColumns, footerSocialLinks } from "./footer";
export { foldingBoxFrames } from "./folding-box";
export {
  dimensionOptions,
  industries,
  industryHeightByDistance,
  materialOptions,
  packagingStyles,
  packagingStyleOptions,
  quantityOptions,
  steps,
} from "./home-sections";

export const MARKETING_LAUNCH_DATE_ISO = "2026-08-20T00:00:00+05:00";

export const MARKETING_PAGE_MODE =
  process.env.NEXT_PUBLIC_MARKETING_PAGE_MODE === "countdown"
    ? "countdown"
    : "home";
