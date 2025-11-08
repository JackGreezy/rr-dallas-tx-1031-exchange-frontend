"use client";

import { useState, useMemo } from "react";
import { CurrencyDollarIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

export function ExchangeCostEstimator() {
  const [propertyValue, setPropertyValue] = useState<string>("");
  const [qiFeePercentage, setQiFeePercentage] = useState<string>("1.0");
  const [escrowFee, setEscrowFee] = useState<string>("1500");
  const [titleInsuranceRate, setTitleInsuranceRate] = useState<string>("0.5");
  const [recordingFees, setRecordingFees] = useState<string>("200");

  const calculations = useMemo(() => {
    const pv = parseFloat(propertyValue) || 0;
    const qiRate = parseFloat(qiFeePercentage) || 0;
    const escrow = parseFloat(escrowFee) || 0;
    const titleRate = parseFloat(titleInsuranceRate) || 0;
    const recording = parseFloat(recordingFees) || 0;

    const qiFee = pv * (qiRate / 100);
    const titleInsurance = pv * (titleRate / 100);
    const totalCosts = qiFee + escrow + titleInsurance + recording;

    const hasResults = pv > 0;

    return {
      qiFee,
      escrow,
      titleInsurance,
      recording,
      totalCosts,
      hasResults,
    };
  }, [propertyValue, qiFeePercentage, escrowFee, titleInsuranceRate, recordingFees]);

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-outline/15 bg-white p-6 shadow-lg md:p-8">
        <div className="mb-6 flex items-center gap-3">
          <CurrencyDollarIcon className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-semibold text-heading">Exchange Cost Estimator</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <label htmlFor="property-value" className="mb-2 block text-sm font-medium text-ink">
              Property Value ($)
            </label>
            <input
              type="number"
              id="property-value"
              value={propertyValue}
              onChange={(e) => setPropertyValue(e.target.value)}
              className="w-full rounded-lg border border-outline/30 px-4 py-2 text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="0"
            />
            <p className="mt-1 text-xs text-ink/60">Estimated property value</p>
          </div>

          <div>
            <label htmlFor="qi-fee" className="mb-2 block text-sm font-medium text-ink">
              QI Fee Percentage (%)
            </label>
            <input
              type="number"
              id="qi-fee"
              value={qiFeePercentage}
              onChange={(e) => setQiFeePercentage(e.target.value)}
              step="0.1"
              className="w-full rounded-lg border border-outline/30 px-4 py-2 text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="1.0"
            />
            <p className="mt-1 text-xs text-ink/60">Typical range: 0.5% to 1.5%</p>
          </div>

          <div>
            <label htmlFor="escrow-fee" className="mb-2 block text-sm font-medium text-ink">
              Escrow Fee ($)
            </label>
            <input
              type="number"
              id="escrow-fee"
              value={escrowFee}
              onChange={(e) => setEscrowFee(e.target.value)}
              className="w-full rounded-lg border border-outline/30 px-4 py-2 text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="1500"
            />
            <p className="mt-1 text-xs text-ink/60">Escrow and closing coordination</p>
          </div>

          <div>
            <label htmlFor="title-rate" className="mb-2 block text-sm font-medium text-ink">
              Title Insurance Rate (%)
            </label>
            <input
              type="number"
              id="title-rate"
              value={titleInsuranceRate}
              onChange={(e) => setTitleInsuranceRate(e.target.value)}
              step="0.1"
              className="w-full rounded-lg border border-outline/30 px-4 py-2 text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="0.5"
            />
            <p className="mt-1 text-xs text-ink/60">Title insurance premium rate</p>
          </div>

          <div>
            <label htmlFor="recording-fees" className="mb-2 block text-sm font-medium text-ink">
              Recording Fees ($)
            </label>
            <input
              type="number"
              id="recording-fees"
              value={recordingFees}
              onChange={(e) => setRecordingFees(e.target.value)}
              className="w-full rounded-lg border border-outline/30 px-4 py-2 text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="200"
            />
            <p className="mt-1 text-xs text-ink/60">Dallas County recording fees</p>
          </div>
        </div>
      </div>

      {calculations.hasResults && (
        <div className="rounded-2xl border border-outline/15 bg-gradient-to-br from-heading/5 to-primary/5 p-6 shadow-lg md:p-8">
          <h3 className="mb-6 text-lg font-semibold text-heading">Cost Breakdown</h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-white p-4">
              <div>
                <p className="text-sm text-ink/70">Qualified Intermediary Fee</p>
                <p className="text-xs text-ink/50">{qiFeePercentage}% of property value</p>
              </div>
              <p className="text-lg font-semibold text-heading">
                ${calculations.qiFee.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-white p-4">
              <div>
                <p className="text-sm text-ink/70">Escrow Fee</p>
                <p className="text-xs text-ink/50">Closing coordination</p>
              </div>
              <p className="text-lg font-semibold text-heading">
                ${calculations.escrow.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-white p-4">
              <div>
                <p className="text-sm text-ink/70">Title Insurance</p>
                <p className="text-xs text-ink/50">{titleInsuranceRate}% of property value</p>
              </div>
              <p className="text-lg font-semibold text-heading">
                ${calculations.titleInsurance.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-white p-4">
              <div>
                <p className="text-sm text-ink/70">Recording Fees</p>
                <p className="text-xs text-ink/50">Dallas County recording</p>
              </div>
              <p className="text-lg font-semibold text-heading">
                ${calculations.recording.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-primary/10 p-4 border-2 border-primary/20">
              <div>
                <p className="text-sm font-medium text-heading">Total Exchange Costs</p>
                <p className="text-xs text-ink/50">Estimated total closing costs</p>
              </div>
              <p className="text-xl font-bold text-heading">
                ${calculations.totalCosts.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="rounded-lg border border-outline/20 bg-panel p-4">
        <div className="mb-2 flex items-start gap-2">
          <InformationCircleIcon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="mb-2 text-sm font-semibold text-heading">Texas Exchange Costs</h4>
            <p className="text-xs text-ink/70 mb-2">
              Texas does not impose a state real estate transfer tax. Recording fees and title insurance premiums still apply. Actual costs may vary based on property specifics and service providers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

