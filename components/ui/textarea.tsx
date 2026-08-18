import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-30 w-full resize-none rounded-xl border border-transparent bg-(--text-primary)/10 px-5 py-5 text-sm text-(--text-primary) outline-none placeholder:text-white/50 transition-colors focus:border-(--brand-primary) disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
