import { PageContainer } from "@/components/layout/page-container";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { UploadSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import { dimensionOptions, materialOptions, packagingStyleOptions, quantityOptions } from "@/features/marketing/constants";
import Image from "next/image";

export function QuoteSection() {
  const inputClass =
    "h-15 rounded-xl border border-transparent bg-(--text-primary)/10 px-5 text-sm text-(--text-primary) outline-none placeholder:text-white/50 focus:border-(--brand-primary)";

  return (
    <section
      className="relative isolate overflow-hidden border-y border-(--border-subtle) bg-(--surface-raised) py-16 lg:h-[671px]"
      id="quote"
    >
      <Image
        alt=""
        aria-hidden
        className="-z-10 object-cover opacity-90"
        fill
        sizes="100vw"
        src="/bg/book-a-demo-bg.png"
      />
      <PageContainer className="relative z-1">
        <h2 className="font-heading text-2xl font-bold leading-tight text-(--text-primary) md:text-3xl lg:leading-12">
          Get a free Packaging Quote in{" "}
          <span className="text-(--brand-primary)">6 Minutes</span>
        </h2>

        <form className="mt-7 grid gap-x-6 gap-y-6 lg:grid-cols-[repeat(4,1fr)]">
          <Input
            aria-label="Full Name"
            className={inputClass}
            placeholder="Full Name"
            type="text"
          />
          <Input
            aria-label="Email"
            className={inputClass}
            placeholder="Email"
            type="email"
          />
          <Input
            aria-label="Phone Number"
            className={inputClass}
            placeholder="Phone Number"
            type="tel"
          />
          <div className="lg:row-span-5">
            <p className="text-lg leading-7 font-medium text-(--text-primary)">
              Upload Reference Image/Art work
            </p>
            <label className="mt-6 flex min-h-[345px] cursor-pointer flex-col items-center justify-center rounded-xl border border-transparent bg-(--text-primary)/10 p-6 text-center text-xs leading-[18px] text-(--text-primary) outline-none transition-colors hover:border-(--brand-primary)">
              <UploadSimpleIcon
                className="h-16 w-16 text-(--text-primary)"
                weight="regular"
              />
              <span className="mt-2">Png, Jpg Dimensions 40 x 40</span>
              <span>File size limit 30 MB</span>
              <input
                accept="image/png,image/jpeg"
                className="sr-only"
                type="file"
              />
            </label>
          </div>
          <Select
            aria-label="Packaging Style"
            options={packagingStyleOptions}
            placeholder="Packaging Style"
          />
          <Select
            aria-label="Material"
            options={materialOptions}
            placeholder="Material"
          />
          <Select
            aria-label="Quantity"
            options={quantityOptions}
            placeholder="Quantity"
          />
          <Select
            aria-label="Length"
            options={dimensionOptions}
            placeholder="Length"
          />
          <Textarea
            aria-label="Additional Information"
            className={`${inputClass} min-h-[228px] p-5 lg:col-span-2 lg:row-span-3`}
            placeholder="Additional Information"
          />
          <Select
            aria-label="Width"
            options={dimensionOptions}
            placeholder="Width"
          />
          <Select
            aria-label="Height"
            options={dimensionOptions}
            placeholder="Height"
          />
          <div className="pt-2 lg:col-span-4 lg:text-center">
            <button
              className="h-15 w-52 rounded-[8px] border border-(--border-strong) bg-(--surface-page) text-base font-semibold text-(--brand-primary) transition-colors hover:bg-(--surface-muted)"
              type="submit"
            >
              Get A Free Quote Now
            </button>
          </div>
        </form>
      </PageContainer>
    </section>
  );
}
