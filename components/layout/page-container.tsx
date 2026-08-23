import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type PageContainerProps = ComponentPropsWithoutRef<"div">;

export function PageContainer({ className, ...props }: PageContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-360 px-6 xl:px-15",
        className,
      )}
      {...props}
    />
  );
}
