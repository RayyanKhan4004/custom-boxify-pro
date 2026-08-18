"use client";

import { CaretDownIcon } from "@phosphor-icons/react";
import { useState, useSyncExternalStore } from "react";
import ReactSelect, {
  type Props as ReactSelectProps,
  type StylesConfig,
} from "react-select";

export type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = Omit<
  ReactSelectProps<SelectOption, false>,
  "isMulti" | "onChange" | "value"
> & {
  onChange?: (value: string) => void;
  value?: string;
};

const selectStyles: StylesConfig<SelectOption, false> = {
  control: (base, state) => ({
    ...base,
    minHeight: "3.75rem",
    height: "3.75rem",
    borderColor: "transparent",
    borderRadius: "0.75rem",
    boxShadow: state.isFocused ? "0 0 0 1px var(--brand-primary)" : "none",
    backgroundColor: "color-mix(in srgb, var(--text-primary) 10%, transparent)",
    cursor: "pointer",
    "&:hover": {
      borderColor: "var(--brand-primary)",
    },
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0 1.25rem",
  }),
  placeholder: (base) => ({
    ...base,
    color: "color-mix(in srgb, var(--text-primary) 50%, transparent)",
    fontSize: "0.875rem",
  }),
  singleValue: (base) => ({
    ...base,
    color: "var(--text-primary)",
    fontSize: "0.875rem",
  }),
  input: (base) => ({
    ...base,
    color: "var(--text-primary)",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: (base, state) => ({
    ...base,
    padding: "0 1rem 0 0",
    color: "var(--text-primary)",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "none",
    transition: "transform 150ms ease",
  }),
  menu: (base) => ({
    ...base,
    marginTop: "0.25rem",
    border: "1px solid color-mix(in srgb, var(--text-primary) 14%, transparent)",
    borderRadius: "0.75rem",
    overflow: "hidden",
    backgroundColor: "transparent",
    backdropFilter: "blur(8px)",
    boxShadow: "0 1rem 2.5rem color-mix(in srgb, var(--surface-page) 10%, transparent)",
  }),
  menuList: (base) => ({
    ...base,
    backgroundColor: "transparent",
    padding: "0.25rem 0",
  }),
  option: (base, state) => ({
    ...base,
    padding: "0.625rem 1rem",
    fontSize: "0.875rem",
    color: "var(--text-primary)",
    backgroundColor: state.isFocused
      ? "color-mix(in srgb, var(--text-primary) 10%, transparent)"
      : "transparent",
    cursor: "pointer",
    ":active": {
      backgroundColor: "transparent",
    },
  }),
};

const subscribeToMount = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function Select({ onChange, options, value, ...props }: SelectProps) {
  const isMounted = useSyncExternalStore(
    subscribeToMount,
    getClientSnapshot,
    getServerSnapshot,
  );
  const [selectedValue, setSelectedValue] = useState(value ?? "");
  const currentValue = value ?? selectedValue;
  const selectedOption =
    options?.find(
      (option): option is SelectOption =>
        "value" in option && option.value === currentValue,
    ) ?? null;

  if (!isMounted) {
    return (
      <div
        aria-hidden
        className="h-15 rounded-xl bg-(--text-primary)/10"
      />
    );
  }

  return (
    <ReactSelect
      {...props}
      components={{
        DropdownIndicator: () => (
          <CaretDownIcon
            aria-hidden
            className="mr-4 text-(--text-primary)"
            size={24}
          />
        ),
      }}
      isSearchable={false}
      options={options}
      styles={selectStyles}
      value={selectedOption}
      onChange={(option) => {
        const nextValue = option && "value" in option ? option.value : "";

        setSelectedValue(nextValue);
        onChange?.(nextValue);
      }}
    />
  );
}
