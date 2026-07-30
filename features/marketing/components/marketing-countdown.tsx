"use client";

import { useEffect, useState } from "react";

import { MARKETING_LAUNCH_DATE_ISO } from "@/features/marketing/constants";

const SECOND_IN_MS = 1000;
const MINUTE_IN_MS = 60 * SECOND_IN_MS;
const HOUR_IN_MS = 60 * MINUTE_IN_MS;
const DAY_IN_MS = 24 * HOUR_IN_MS;

type CountdownItem = {
  label: string;
  value: string;
};

const fallbackCountdownItems: CountdownItem[] = [
  { label: "Days", value: "--" },
  { label: "Hours", value: "--" },
  { label: "Mins", value: "--" },
  { label: "Sec", value: "--" },
];

function getCountdownItems(): CountdownItem[] {
  const remainingMs = Math.max(
    new Date(MARKETING_LAUNCH_DATE_ISO).getTime() - Date.now(),
    0,
  );

  const days = Math.floor(remainingMs / DAY_IN_MS);
  const hours = Math.floor((remainingMs % DAY_IN_MS) / HOUR_IN_MS);
  const minutes = Math.floor((remainingMs % HOUR_IN_MS) / MINUTE_IN_MS);
  const seconds = Math.floor((remainingMs % MINUTE_IN_MS) / SECOND_IN_MS);

  return [
    { label: "Days", value: String(days) },
    { label: "Hours", value: String(hours).padStart(2, "0") },
    { label: "Mins", value: String(minutes).padStart(2, "0") },
    { label: "Sec", value: String(seconds).padStart(2, "0") },
  ];
}

export function MarketingCountdown() {
  const [countdownItems, setCountdownItems] = useState(fallbackCountdownItems);

  useEffect(() => {
    const updateCountdown = () => {
      setCountdownItems(getCountdownItems());
    };

    updateCountdown();

    const timerId = window.setInterval(updateCountdown, SECOND_IN_MS);

    return () => window.clearInterval(timerId);
  }, []);

  return (
    <dl className="mt-7 grid grid-cols-4 gap-2 min-[480px]:gap-4 min-[640px]:flex min-[640px]:gap-6">
      {countdownItems.map((item) => (
        <div
          className="flex aspect-square w-full flex-col items-center justify-center gap-1 rounded-[10px] border border-(--primary) text-(--primary) min-[640px]:size-25 min-[640px]:gap-1.5"
          key={item.label}
        >
          <dt className="order-2 text-xs min-[480px]:text-sm">
            {item.label}
          </dt>
          <dd className="order-1 text-2xl font-semibold leading-none tracking-tight min-[480px]:text-[32px] min-[480px]:leading-10">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
