'use client';

import { useMemo, useState } from "react";
import { DEFAULT_TIMEZONE } from "@/lib/constants";

const formatter = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: DEFAULT_TIMEZONE,
});

const formatTime = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  timeZone: DEFAULT_TIMEZONE,
});

const addDays = (value: Date, days: number) => {
  const result = new Date(value);
  result.setDate(result.getDate() + days);
  return result;
};

export function DeadlineCalculator() {
  const today = useMemo(() => new Date(), []);

  const [saleDate, setSaleDate] = useState<string>(() => {
    const iso = new Date().toISOString();
    return iso.slice(0, 10);
  });

  const parsedSaleDate = saleDate ? new Date(`${saleDate}T00:00:00`) : null;

  const identificationDate =
    parsedSaleDate && !Number.isNaN(parsedSaleDate.valueOf())
      ? addDays(parsedSaleDate, 45)
      : null;

  const closingDate =
    parsedSaleDate && !Number.isNaN(parsedSaleDate.valueOf())
      ? addDays(parsedSaleDate, 180)
      : null;

  const expired = parsedSaleDate ? parsedSaleDate < today : false;

  return (
    <section className="space-y-4 rounded-3xl border border-outline/15 bg-white p-6 shadow-[0_24px_64px_rgba(21,50,67,0.1)]">
      <div className="space-y-1">
        <p className="text-sm uppercase tracking-[0.22em] text-primary">
          1031 Timeline
        </p>
        <h3 className="text-xl font-semibold text-heading">
          45 Day and 180 Day Deadline Calculator
        </h3>
        <p className="text-sm text-ink/80">
          Select your relinquished property closing date to see identification
          and final funding deadlines in Central Time ({DEFAULT_TIMEZONE}).
        </p>
      </div>
      <label className="flex flex-col gap-2 text-sm font-medium text-heading">
        Relinquished closing date
        <input
          type="date"
          value={saleDate}
          max="9999-12-31"
          onChange={(event) => setSaleDate(event.target.value)}
          className="w-full rounded-2xl border border-outline/30 bg-white px-3 py-2 text-base text-ink shadow-[inset_0_1px_1px_rgba(21,50,67,0.1)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </label>
      {identificationDate && closingDate ? (
        <ul className="space-y-3 text-sm text-ink/85">
          <li className="rounded-2xl border border-outline/20 bg-panel p-4">
            <p className="font-semibold text-heading">45 Day Identification</p>
            <p>{formatter.format(identificationDate)}</p>
            <p className="text-xs text-ink/70">
              Midnight local time ({formatTime.format(identificationDate)}) in {DEFAULT_TIMEZONE}.
            </p>
          </li>
          <li className="rounded-2xl border border-outline/20 bg-panel p-4">
            <p className="font-semibold text-heading">180 Day Closing</p>
            <p>{formatter.format(closingDate)}</p>
            <p className="text-xs text-ink/70">
              The due date of the tax return or 180 days, whichever is earlier.
            </p>
          </li>
        </ul>
      ) : (
        <p className="rounded-2xl border border-outline/20 bg-panel p-4 text-sm text-ink/80">
          Enter a valid sale date to view milestone deadlines.
        </p>
      )}
      {expired && (
        <p className="rounded-2xl border border-[#942600]/30 bg-[#942600]/10 p-4 text-sm text-[#5E1B00]">
          This closing date is in the past. Adjust the date to calculate current
          exchange deadlines.
        </p>
      )}
    </section>
  );
}

