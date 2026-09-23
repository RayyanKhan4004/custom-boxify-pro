"use client";

import { InfoIcon, UploadSimpleIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useRef, useState, type FormEvent, type ReactNode } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  dimensionOptions,
  materialOptions,
  packagingStyleOptions,
  quantityOptions,
} from "@/features/marketing/constants";
import {
  submitQuoteRequest,
} from "@/features/marketing/services/requests/requests";

interface QuoteState {
  name: string;
  email: string;
  phone: string;
  company: string;
  packagingStyle: string;
  material: string;
  quantity: string;
  length: string;
  width: string;
  height: string;
  notes: string;
  consent: boolean;
  website: string;
}

const emptyState: QuoteState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  packagingStyle: "",
  material: "",
  quantity: "",
  length: "",
  width: "",
  height: "",
  notes: "",
  consent: false,
  website: "",
};

const MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024;
const ALLOWED_ATTACHMENT_TYPES = new Set(["image/jpeg", "image/png"]);

export function QuoteSection() {
  const [state, setState] = useState<QuoteState>(emptyState);
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [submitError, setSubmitError] = useState("");
  const idempotencyKey = useRef(crypto.randomUUID());
  const inputClass =
    "h-15 rounded-xl border border-transparent bg-(--text-primary)/10 px-5 pr-12 text-sm text-(--text-primary) outline-none placeholder:text-white/50 focus:border-(--brand-primary)";

  const set = <K extends keyof QuoteState>(key: K, value: QuoteState[K]) => {
    setState((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[key];
      return next;
    });
  };

  const validate = (): Record<string, string> => {
    const next: Record<string, string> = {};
    if (state.name.trim().length < 2)
      next.name = "Enter at least 2 characters.";
    if (state.name.trim().length > 120)
      next.name = "Name cannot exceed 120 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email.trim()))
      next.email = "Enter a valid email address.";
    if (state.email.length > 254)
      next.email = "Email cannot exceed 254 characters.";
    if (state.phone.length > 32)
      next.phone = "Phone cannot exceed 32 characters.";
    if (state.company.length > 120)
      next.company = "Company cannot exceed 120 characters.";
    if (state.notes.length > 5000)
      next.notes = "Additional information cannot exceed 5,000 characters.";
    if (!state.consent) next.consent = "Consent is required before submission.";
    if (file && !ALLOWED_ATTACHMENT_TYPES.has(file.type))
      next.file = "Upload a PNG or JPEG image.";
    if (file && file.size > MAX_ATTACHMENT_BYTES)
      next.file = "Artwork must be 10 MB or smaller.";
    return next;
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setStatus("submitting");
    setSubmitError("");
    try {
      await submitQuoteRequest({
        requestType: "custom-quote",
        contact: {
          name: state.name.trim(),
          email: state.email.trim(),
          ...(state.phone.trim() ? { phone: state.phone.trim() } : {}),
          ...(state.company.trim() ? { company: state.company.trim() } : {}),
        },
        ...(state.packagingStyle
          ? {
              productName:
                packagingStyleOptions.find(
                  (option) => option.value === state.packagingStyle,
                )?.label ?? state.packagingStyle,
            }
          : {}),
        ...(state.quantity ? { quantity: Number(state.quantity) } : {}),
        specs: {
          ...(state.packagingStyle
            ? { packagingStyle: state.packagingStyle }
            : {}),
          ...(state.material ? { material: state.material } : {}),
          dimensions: {
            ...(state.length ? { length: Number(state.length) } : {}),
            ...(state.width ? { width: Number(state.width) } : {}),
            ...(state.height ? { height: Number(state.height) } : {}),
            unit: "in",
          },
        },
        ...(state.notes.trim() ? { notes: state.notes.trim() } : {}),
        attachments: [],
        consent: true,
        idempotencyKey: idempotencyKey.current,
        ...(state.website ? { website: state.website } : {}),
      }, file ?? undefined);
      setState(emptyState);
      setFile(null);
      idempotencyKey.current = crypto.randomUUID();
      setStatus("success");
    } catch (error) {
      setStatus("idle");
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Your quote request could not be submitted.",
      );
    }
  };

  return (
    <section
      className="relative isolate overflow-hidden border-y border-(--border-subtle) bg-(--surface-raised) py-16 lg:min-h-[671px]"
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

        <form
          noValidate
          onSubmit={submit}
          className="mt-7 grid gap-x-6 gap-y-6 lg:grid-cols-[repeat(4,1fr)]"
        >
          <QuoteField
            label="Full name"
            error={errors.name}
          >
            <Input
              aria-label="Full Name"
              autoComplete="name"
              className={inputClass}
              maxLength={120}
              placeholder="Full Name"
              required
              value={state.name}
              onChange={(event) => set("name", event.target.value)}
            />
          </QuoteField>
          <QuoteField
            label="Email"
            error={errors.email}
          >
            <Input
              aria-label="Email"
              autoComplete="email"
              className={inputClass}
              maxLength={254}
              placeholder="Email"
              required
              type="email"
              value={state.email}
              onChange={(event) => set("email", event.target.value)}
            />
          </QuoteField>
          <QuoteField
            label="Phone number"
            error={errors.phone}
          >
            <Input
              aria-label="Phone Number"
              autoComplete="tel"
              className={inputClass}
              maxLength={32}
              placeholder="Phone Number"
              type="tel"
              value={state.phone}
              onChange={(event) => set("phone", event.target.value)}
            />
          </QuoteField>
          <QuoteField
            label="Company"
            error={errors.company}
          >
            <Input
              aria-label="Company"
              autoComplete="organization"
              className={inputClass}
              maxLength={120}
              placeholder="Company"
              value={state.company}
              onChange={(event) => set("company", event.target.value)}
            />
          </QuoteField>

          <div className="lg:row-span-5">
            <div className="flex items-center gap-2 text-lg leading-7 font-medium text-(--text-primary)">
              Upload Reference Image/Art work
              <InfoTip
                label="Artwork upload"
                text="Optional PNG or JPEG reference. Backend validation limits the file to 10 MB."
              />
            </div>
            <label className="mt-6 flex min-h-[345px] cursor-pointer flex-col items-center justify-center rounded-xl border border-transparent bg-(--text-primary)/10 p-6 text-center text-xs leading-[18px] text-(--text-primary) outline-none transition-colors hover:border-(--brand-primary) focus-within:border-(--brand-primary)">
              <UploadSimpleIcon
                aria-hidden
                className="h-16 w-16 text-(--text-primary)"
                weight="regular"
              />
              <span className="mt-2">
                {file ? file.name : "PNG or JPEG artwork"}
              </span>
              <span>File size limit 10 MB</span>
              <input
                aria-label="Reference artwork"
                accept="image/png,image/jpeg"
                className="sr-only"
                type="file"
                onChange={(event) => {
                  const next = event.target.files?.[0] ?? null;
                  setFile(next);
                  setErrors((current) => {
                    const copy = { ...current };
                    delete copy.file;
                    return copy;
                  });
                }}
              />
            </label>
            {errors.file && (
              <p className="mt-1 text-xs text-red-300" role="alert">
                {errors.file}
              </p>
            )}
          </div>

          <QuoteField
            label="Packaging style"
          >
            <Select
              aria-label="Packaging Style"
              options={packagingStyleOptions}
              placeholder="Packaging Style"
              value={state.packagingStyle}
              onChange={(value) => set("packagingStyle", value)}
            />
          </QuoteField>
          <QuoteField
            label="Material"
          >
            <Select
              aria-label="Material"
              options={materialOptions}
              placeholder="Material"
              value={state.material}
              onChange={(value) => set("material", value)}
            />
          </QuoteField>
          <QuoteField
            label="Quantity"
          >
            <Select
              aria-label="Quantity"
              options={quantityOptions}
              placeholder="Quantity"
              value={state.quantity}
              onChange={(value) => set("quantity", value)}
            />
          </QuoteField>
          <QuoteField
            label="Length"
          >
            <Select
              aria-label="Length"
              options={dimensionOptions}
              placeholder="Length"
              value={state.length}
              onChange={(value) => set("length", value)}
            />
          </QuoteField>
          <QuoteField
            label="Additional information"
            error={errors.notes}
            className="lg:col-span-2 lg:row-span-3"
          >
            <Textarea
              aria-label="Additional Information"
              className={`${inputClass} min-h-[228px] p-5`}
              maxLength={5000}
              placeholder="Additional Information"
              value={state.notes}
              onChange={(event) => set("notes", event.target.value)}
            />
          </QuoteField>
          <QuoteField
            label="Width"
          >
            <Select
              aria-label="Width"
              options={dimensionOptions}
              placeholder="Width"
              value={state.width}
              onChange={(value) => set("width", value)}
            />
          </QuoteField>
          <QuoteField
            label="Height"
          >
            <Select
              aria-label="Height"
              options={dimensionOptions}
              placeholder="Height"
              value={state.height}
              onChange={(value) => set("height", value)}
            />
          </QuoteField>

          <div className="flex items-start gap-2 lg:col-span-4 lg:justify-center">
            <input
              id="quote-consent"
              checked={state.consent}
              className="mt-1 h-4 w-4 accent-(--brand-primary)"
              type="checkbox"
              onChange={(event) => set("consent", event.target.checked)}
            />
            <label
              htmlFor="quote-consent"
              className="text-sm text-(--text-primary)"
            >
              I consent to being contacted about this quote.
            </label>
          </div>
          {errors.consent && (
            <p
              className="text-center text-xs text-red-300 lg:col-span-4"
              role="alert"
            >
              {errors.consent}
            </p>
          )}
          <input
            aria-hidden
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            name="website"
            value={state.website}
            onChange={(event) => set("website", event.target.value)}
          />

          <div className="pt-2 lg:col-span-4 lg:text-center">
            <button
              disabled={status === "submitting"}
              className="h-15 w-52 rounded-[8px] border border-(--border-strong) bg-(--surface-page) text-base font-semibold text-(--brand-primary) transition-colors hover:bg-(--surface-muted) disabled:cursor-wait disabled:opacity-60"
              type="submit"
            >
              {status === "submitting" ? "Submitting…" : "Get A Free Quote Now"}
            </button>
            {status === "success" && (
              <p className="mt-3 text-sm text-(--brand-primary)" role="status">
                Your quote request was submitted successfully.
              </p>
            )}
            {submitError && (
              <p className="mt-3 text-sm text-red-300" role="alert">
                {submitError}
              </p>
            )}
          </div>
        </form>
      </PageContainer>
    </section>
  );
}

function QuoteField({
  label,
  error,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`relative ${className}`}>
      <span className="sr-only">{label}</span>
      {children}
      {error && (
        <p className="mt-1 text-xs text-red-300" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function InfoTip({ label, text }: { label: string; text: string }) {
  return (
    <span className="group relative inline-flex">
      <button
        type="button"
        aria-label={`About ${label}`}
        className="rounded-full text-(--text-primary)/70 outline-none hover:text-(--brand-primary) focus-visible:ring-2 focus-visible:ring-(--brand-primary)"
      >
        <InfoIcon aria-hidden size={17} />
      </button>
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full right-0 z-50 mb-2 hidden w-64 rounded-lg border border-(--border-subtle) bg-(--surface-page) px-3 py-2 text-left text-xs font-normal leading-5 text-(--text-primary) shadow-lg group-hover:block group-focus-within:block"
      >
        {text}
      </span>
    </span>
  );
}
