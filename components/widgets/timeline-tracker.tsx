import { PRIMARY_CITY, PRIMARY_STATE_ABBR } from "@/lib/constants";

const milestones = [
  {
    label: "Day 0",
    title: "Close Relinquished Property",
    description:
      "Confirm net proceeds wired to the Qualified Intermediary. Collect final settlement statement for Form 8824 records.",
  },
  {
    label: "Day 1 - 15",
    title: "Launch Replacement Search",
    description:
      `Engage brokers, advisors, and lenders to source compliant assets across ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}. Request due diligence documents immediately.`,
  },
  {
    label: "Day 16 - 30",
    title: "Underwrite and Tour Candidates",
    description:
      "Complete physical tours, rent roll audits, and financing conversations. Narrow the list to high certainty targets.",
  },
  {
    label: "Day 31 - 45",
    title: "Submit Identification",
    description:
      "Deliver Three Property or 200 Percent identification letter to the Qualified Intermediary before midnight local time.",
  },
  {
    label: "Day 46 - 90",
    title: "Finalize Diligence and Financing",
    description:
      "Order third party reports, negotiate purchase agreements, and secure credit committee approvals to protect closing timelines.",
  },
  {
    label: "Day 91 - 180",
    title: "Close Replacement Property",
    description:
      "Coordinate final walkthroughs, funding, and statement of adjustments. Ensure the Qualified Intermediary wires funds directly to the closing table.",
  },
];

export function TimelineTracker() {
  return (
    <section className="space-y-4 rounded-3xl border border-outline/15 bg-white p-6 shadow-[0_20px_56px_rgba(21,50,67,0.08)]">
      <div className="space-y-1">
        <p className="text-sm uppercase tracking-[0.22em] text-primary">
          Milestone Tracker
        </p>
        <h3 className="text-xl font-semibold text-heading">
          Sale to Close Timeline Overview
        </h3>
        <p className="text-sm text-ink/80">
          Keep every stakeholder aligned from Day 0 through Day 180 with
          milestone reminders that reflect Dallas market pacing.
        </p>
      </div>
      <ol className="space-y-4 text-sm text-ink/85">
        {milestones.map((milestone) => (
          <li
            key={milestone.label}
            className="flex gap-4 rounded-2xl border border-outline/20 bg-panel p-4"
          >
            <span className="min-w-[72px] rounded-xl bg-primary/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {milestone.label}
            </span>
            <div>
              <p className="font-semibold text-heading">{milestone.title}</p>
              <p>{milestone.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

