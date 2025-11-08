"use client";

import { useState, useMemo } from "react";
import { CalculatorIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

export function BootCalculator() {
  const [relinquishedValue, setRelinquishedValue] = useState<string>("");
  const [replacementValue, setReplacementValue] = useState<string>("");
  const [cashReceived, setCashReceived] = useState<string>("");
  const [oldMortgage, setOldMortgage] = useState<string>("");
  const [newMortgage, setNewMortgage] = useState<string>("");

  const calculations = useMemo(() => {
    const rv = parseFloat(relinquishedValue) || 0;
    const rpv = parseFloat(replacementValue) || 0;
    const cash = parseFloat(cashReceived) || 0;
    const oldMort = parseFloat(oldMortgage) || 0;
    const newMort = parseFloat(newMortgage) || 0;

    const mortgageBoot = Math.max(0, oldMort - newMort);
    const totalBoot = cash + mortgageBoot;
    const estimatedTax = totalBoot * 0.20;

    const hasResults = rv > 0 || rpv > 0 || cash > 0 || oldMort > 0 || newMort > 0;

    return {
      mortgageBoot,
      totalBoot,
      estimatedTax,
      hasResults,
      isValid: rv > 0 && rpv > 0,
    };
  }, [relinquishedValue, replacementValue, cashReceived, oldMortgage, newMortgage]);

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-outline/15 bg-white p-6 shadow-lg md:p-8">
        <div className="mb-6 flex items-center gap-3">
          <CalculatorIcon className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-semibold text-heading">Boot Calculator</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="relinquished-value" className="mb-2 block text-sm font-medium text-ink">
              Relinquished Property Value ($)
            </label>
            <input
              type="number"
              id="relinquished-value"
              value={relinquishedValue}
              onChange={(e) => setRelinquishedValue(e.target.value)}
              className="w-full rounded-lg border border-outline/30 px-4 py-2 text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="0"
            />
            <p className="mt-1 text-xs text-ink/60">Sale price of property being sold</p>
          </div>

          <div>
            <label htmlFor="replacement-value" className="mb-2 block text-sm font-medium text-ink">
              Replacement Property Value ($)
            </label>
            <input
              type="number"
              id="replacement-value"
              value={replacementValue}
              onChange={(e) => setReplacementValue(e.target.value)}
              className="w-full rounded-lg border border-outline/30 px-4 py-2 text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="0"
            />
            <p className="mt-1 text-xs text-ink/60">Purchase price of replacement property</p>
          </div>

          <div>
            <label htmlFor="cash-received" className="mb-2 block text-sm font-medium text-ink">
              Cash Received ($)
            </label>
            <input
              type="number"
              id="cash-received"
              value={cashReceived}
              onChange={(e) => setCashReceived(e.target.value)}
              className="w-full rounded-lg border border-outline/30 px-4 py-2 text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="0"
            />
            <p className="mt-1 text-xs text-ink/60">Cash received at closing</p>
          </div>

          <div>
            <label htmlFor="old-mortgage" className="mb-2 block text-sm font-medium text-ink">
              Old Mortgage Balance ($)
            </label>
            <input
              type="number"
              id="old-mortgage"
              value={oldMortgage}
              onChange={(e) => setOldMortgage(e.target.value)}
              className="w-full rounded-lg border border-outline/30 px-4 py-2 text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="0"
            />
            <p className="mt-1 text-xs text-ink/60">Mortgage balance on relinquished property</p>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="new-mortgage" className="mb-2 block text-sm font-medium text-ink">
              New Mortgage Balance ($)
            </label>
            <input
              type="number"
              id="new-mortgage"
              value={newMortgage}
              onChange={(e) => setNewMortgage(e.target.value)}
              className="w-full rounded-lg border border-outline/30 px-4 py-2 text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="0"
            />
            <p className="mt-1 text-xs text-ink/60">Mortgage balance on replacement property</p>
          </div>
        </div>
      </div>

      {calculations.hasResults && (
        <div className="rounded-2xl border border-outline/15 bg-gradient-to-br from-heading/5 to-primary/5 p-6 shadow-lg md:p-8">
          <h3 className="mb-6 text-lg font-semibold text-heading">Calculation Results</h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-white p-4">
              <div>
                <p className="text-sm text-ink/70">Mortgage Boot</p>
                <p className="text-xs text-ink/50">Old mortgage minus new mortgage</p>
              </div>
              <p className="text-lg font-semibold text-heading">
                ${calculations.mortgageBoot.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-white p-4">
              <div>
                <p className="text-sm text-ink/70">Cash Boot</p>
                <p className="text-xs text-ink/50">Cash received at closing</p>
              </div>
              <p className="text-lg font-semibold text-heading">
                ${parseFloat(cashReceived || "0").toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-primary/10 p-4 border-2 border-primary/20">
              <div>
                <p className="text-sm font-medium text-heading">Total Boot</p>
                <p className="text-xs text-ink/50">Cash boot plus mortgage boot</p>
              </div>
              <p className="text-xl font-bold text-heading">
                ${calculations.totalBoot.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="rounded-lg border border-outline/20 bg-white p-4">
              <div className="mb-2 flex items-start gap-2">
                <InformationCircleIcon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-heading">Estimated Tax on Boot</p>
                  <p className="text-xs text-ink/50 mb-2">
                    Illustrative estimate at 20% rate. Actual tax depends on your tax bracket and other factors.
                  </p>
                  <p className="text-lg font-semibold text-heading">
                    ${calculations.estimatedTax.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="rounded-lg border border-outline/20 bg-panel p-4">
        <h4 className="mb-2 text-sm font-semibold text-heading">Understanding Boot</h4>
        <ul className="space-y-1 text-xs text-ink/70">
          <li>• <strong>Cash Boot:</strong> Cash received at closing is taxable</li>
          <li>• <strong>Mortgage Boot:</strong> Debt relief when new mortgage is less than old mortgage</li>
          <li>• <strong>Total Boot:</strong> Sum of cash and mortgage boot, subject to capital gains tax</li>
        </ul>
      </div>
    </div>
  );
}

