import Link from "next/link";

export function IdentificationRulesExplainer() {
  return (
    <section className="space-y-4 rounded-3xl border border-outline/15 bg-white p-6 shadow-[0_20px_56px_rgba(21,50,67,0.08)]">
      <div className="space-y-1">
        <p className="text-sm uppercase tracking-[0.22em] text-primary">
          Identification Paths
        </p>
        <h3 className="text-xl font-semibold text-heading">
          Plain-English 45 Day Identification Rules
        </h3>
        <p className="text-sm text-ink/80">
          Stay inside IRS guidance by choosing the strategy that matches your
          replacement property mix.
        </p>
      </div>
      <dl className="space-y-4 text-sm text-ink/85">
        <div className="rounded-2xl border border-outline/20 bg-panel p-4">
          <dt className="font-semibold text-heading">Three Property Rule</dt>
          <dd>
            Identify up to three properties of any value. This rule fits precise,
            high-certainty acquisitions. You can close on one, two, or all three
            as long as you finish within 180 days.
          </dd>
        </div>
        <div className="rounded-2xl border border-outline/20 bg-panel p-4">
          <dt className="font-semibold text-heading">200 Percent Rule</dt>
          <dd>
            Identify more than three properties as long as the combined fair
            market value stays within 200 percent of what you sold. This strategy
            suits portfolio trades and backup planning.
          </dd>
        </div>
        <div className="rounded-2xl border border-outline/20 bg-panel p-4">
          <dt className="font-semibold text-heading">95 Percent Rule</dt>
          <dd>
            Identify any number of properties of any value, but you must acquire
            at least 95 percent of the total value identified. Use this when you
            have a larger list and expect to close almost everything.
          </dd>
        </div>
      </dl>
      <p className="text-xs text-ink/70">
        Always coordinate with your tax advisor and Qualified Intermediary when
        selecting a rule.{" "}
        <Link
          href="https://www.irs.gov/forms-pubs/about-form-8824"
          className="text-primary underline underline-offset-4 hover:text-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          IRS Form 8824 instructions
        </Link>{" "}
        explain the filing requirements.
      </p>
    </section>
  );
}

