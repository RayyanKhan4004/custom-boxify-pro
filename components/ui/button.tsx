import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-[6px] bg-clip-padding text-sm font-medium whitespace-nowrap transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-out outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 enabled:hover:-translate-y-0.5 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-(--brand-primary) text-(--brand-on-primary) hover:bg-(--brand-primary)/80 hover:shadow-(--shadow-button)",
        outline:
          "border border-(--border-strong) bg-transparent hover:border-(--brand-primary) hover:bg-(--surface-muted) hover:text-(--text-primary) hover:shadow-(--shadow-button) aria-expanded:bg-(--surface-muted) aria-expanded:text-(--text-primary) dark:border-(--border-strong) dark:bg-(--border-strong)/30 dark:hover:bg-(--border-strong)/50 text-[16px] font-semibold text-(--brand-primary) px-[21px] py-[10px]",
        secondary:
          "bg-(--surface-raised) text-(--text-primary) hover:bg-[color-mix(in_oklch,var(--surface-raised),var(--text-primary)_5%)] hover:shadow-(--shadow-button) aria-expanded:bg-(--surface-raised) aria-expanded:text-(--text-primary)",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-(--brand-primary) underline-offset-4 hover:underline",
        marketingPrimary:
          "bg-(--brand-primary) text-(--brand-on-primary) hover:bg-(--brand-primary)/85 hover:shadow-(--shadow-button)",
        marketingOutline:
          "border border-(--brand-primary) bg-transparent text-(--brand-primary) hover:bg-(--brand-primary) hover:text-(--brand-on-primary) hover:shadow-(--shadow-button)",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        cta: "h-13 gap-2 rounded-[8px] px-8 text-base font-semibold",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
