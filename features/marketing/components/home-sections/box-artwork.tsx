import Image from "next/image";

import type { BoxArtworkProps } from "@/features/marketing/types";

export function BoxArtwork({ alt, className, sizes }: BoxArtworkProps) {
  return (
    <Image
      alt={alt}
      className={className}
      height={1470}
      sizes={sizes}
      src="/boxes/box-1-upper.webp"
      width={1568}
    />
  );
}
