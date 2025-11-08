'use client';

import { useMemo, useState } from "react";

type FieldConfig = {
  name: keyof LetterForm;
  label: string;
  placeholder: string;
};

type LetterForm = {
  taxpayer: string;
  qualifiedIntermediary: string;
  relinquishedProperty: string;
  identificationDate: string;
  replacementProperties: string;
};

const fields: FieldConfig[] = [
  { name: "taxpayer", label: "Taxpayer Entity", placeholder: "Example Capital LLC" },
  { name: "qualifiedIntermediary", label: "Qualified Intermediary", placeholder: "Trusted Exchange Services, Inc." },
  { name: "relinquishedProperty", label: "Relinquished Property", placeholder: "123 Commerce Way, Dallas, TX 75201" },
  { name: "identificationDate", label: "Identification Date", placeholder: "March 10, 2026" },
  { name: "replacementProperties", label: "Replacement Properties (one per line)", placeholder: "1. 456 Market Street, Plano, TX 75024" },
];

const initialState: LetterForm = {
  taxpayer: "",
  qualifiedIntermediary: "",
  relinquishedProperty: "",
  identificationDate: "",
  replacementProperties: "",
};

export function IdentificationLetterHelper() {
  const [form, setForm] = useState<LetterForm>(initialState);
  const [copied, setCopied] = useState(false);

  const letter = useMemo(() => {
    const replacements =
      form.replacementProperties
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => `- ${line}`)
        .join("\n") || "- [Describe replacement property]";

    return [
      `${form.identificationDate || "[Identification Date]"}`,
      "",
      form.qualifiedIntermediary || "[Qualified Intermediary Name]",
      "Attn: Exchange Officer",
      "",
      "Re: 45 Day Identification Notice",
      "",
      `Taxpayer: ${form.taxpayer || "[Taxpayer Entity]"}`,
      `Relinquished Property: ${form.relinquishedProperty || "[Relinquished Property Address]"}`,
      "",
      "In accordance with Treasury Regulation §1.1031(k)-1(c), we hereby identify the following potential replacement property or properties:",
      "",
      replacements,
      "",
      "We acknowledge that the acquisition of any identified property must be completed within 180 days of the relinquished property transfer or the due date of the federal income tax return, whichever is earlier.",
      "",
      "Sincerely,",
      form.taxpayer || "[Taxpayer Entity]",
    ].join("\n");
  }, [form]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(letter);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="space-y-4 rounded-3xl border border-outline/15 bg-white p-6 shadow-[0_20px_56px_rgba(21,50,67,0.08)]">
      <div className="space-y-1">
        <p className="text-sm uppercase tracking-[0.22em] text-primary">
          Identification Letter
        </p>
        <h3 className="text-xl font-semibold text-heading">
          Draft a 45 Day Identification Notice
        </h3>
        <p className="text-sm text-ink/80">
          Fill in the fields below to generate a compliant identification letter
          with placeholders ready for signature and delivery to your Qualified
          Intermediary.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="flex flex-col gap-2 text-sm font-medium text-heading">
            {field.label}
            {field.name === "replacementProperties" ? (
              <textarea
                rows={4}
                value={form[field.name]}
                placeholder={field.placeholder}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, [field.name]: event.target.value }))
                }
                className="w-full rounded-2xl border border-outline/30 bg-white px-3 py-2 text-base text-ink shadow-[inset_0_1px_1px_rgba(21,50,67,0.1)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            ) : (
              <input
                type="text"
                value={form[field.name]}
                placeholder={field.placeholder}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, [field.name]: event.target.value }))
                }
                className="w-full rounded-2xl border border-outline/30 bg-white px-3 py-2 text-base text-ink shadow-[inset_0_1px_1px_rgba(21,50,67,0.1)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            )}
          </label>
        ))}
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-heading">Preview</p>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center rounded-full border border-outline/30 px-4 py-2 text-sm font-medium text-ink transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {copied ? "Copied" : "Copy Letter"}
          </button>
        </div>
        <pre className="min-h-[240px] whitespace-pre-wrap rounded-2xl border border-outline/20 bg-panel p-4 text-sm text-ink/85">
          {letter}
        </pre>
      </div>
    </section>
  );
}

