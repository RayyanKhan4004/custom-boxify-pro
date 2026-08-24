import type { StaticImageData } from "next/image";

export type PackagingStyle = {
  bestFor: string;
  description: string;
  image: StaticImageData;
  name: string;
  specifications: readonly string[];
};
