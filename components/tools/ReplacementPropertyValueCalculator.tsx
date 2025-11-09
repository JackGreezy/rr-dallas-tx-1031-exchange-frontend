"use client";

import { useState, useMemo } from "react";
import { CalculatorIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

export function ReplacementPropertyValueCalculator() {
  const [relinquishedValue, setRelinquishedValue] = useState<string>("");
  const [relinquishedMortgage, setRelinquishedMortgage] = useState<string>("");
  const [cashReceived, setCashReceived] = useState<string>("");
  const [exchangeCosts, setExchangeCosts] = useState<string>("");
  const [desiredCashBoot, setDesiredCashBoot] = useState<string>("0");

  const calculations = useMemo(() => {
    const rv = parseFloat(relinquishedValue) || 0;
    const rm = parseFloat(relinquishedMortgage) || 0;
    const cash = parseFloat(cashReceived) || 0;
    const costs = parseFloat(exchangeCosts) || 0;
    const desiredBoot = parseFloat(desiredCashBoot) || 0;

    // Net equity = Sale price - mortgage - cash received - exchange costs
    const netEquity = rv - rm - cash - costs;
    
    // To defer all gain, replacement property value must be at least:
    // Net equity + new mortgage (if any) + desired boot
    // Minimum replacement value = Net equity + desired boot
    // But we need to account for the fact that if we want to defer all gain,
    // we need to reinvest all net equity plus any boot we want to receive
    const minimumReplacementValue = netEquity + desiredBoot;
    
    // If there's a new mortgage, we can reduce the required purchase price
    // But for minimum calculation, we assume no new mortgage
    const minimumWithNewMortgage = minimumReplacementValue; // Can be reduced if new mortgage is taken
    
    // Recommended replacement value (add buffer for costs)
    const recommendedReplacementValue = minimumReplacementValue * 1.05; // 5% buffer
    
    // Maximum gain deferral (if replacement value equals net equity)
    const maximumDeferral = netEquity;

    const hasResults = rv > 0;

    return {
      netEquity,
      minimumReplacementValue,
      recommendedReplacementValue,
      maximumDeferral,
      hasResults,
      isValid: rv > 0,
    };
  }, [relinquishedValue, relinquishedMortgage, cashReceived, exchangeCosts, desiredCashBoot]);

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-outline/15 bg-white p-6 shadow-lg md:p-8">
        <div className="mb-6 flex items-center gap-3">
          <CalculatorIcon className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-semibold text-heading">Replacement Property Value Calculator</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="relinquished-value" className="mb-2 block text-sm font-medium text-ink">
              Relinquished Property Sale Price ($)
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
            <label htmlFor="relinquished-mortgage" className="mb-2 block text-sm font-medium text-ink">
              Relinquished Property Mortgage ($)
            </label>
            <input
              type="number"
              id="relinquished-mortgage"
              value={relinquishedMortgage}
              onChange={(e) => setRelinquishedMortgage(e.target.value)}
              className="w-full rounded-lg border border-outline/30 px-4 py-2 text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="0"
            />
            <p className="mt-1 text-xs text-ink/60">Mortgage balance being paid off</p>
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
            <p className="mt-1 text-xs text-ink/60">Cash received at closing (if any)</p>
          </div>

          <div>
            <label htmlFor="exchange-costs" className="mb-2 block text-sm font-medium text-ink">
              Exchange Costs ($)
            </label>
            <input
              type="number"
              id="exchange-costs"
              value={exchangeCosts}
              onChange={(e) => setExchangeCosts(e.target.value)}
              className="w-full rounded-lg border border-outline/30 px-4 py-2 text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="0"
            />
            <p className="mt-1 text-xs text-ink/60">QI fees, escrow, title, recording fees</p>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="desired-boot" className="mb-2 block text-sm font-medium text-ink">
              Desired Cash Boot ($) <span className="text-xs text-ink/50">(Optional)</span>
            </label>
            <input
              type="number"
              id="desired-boot"
              value={desiredCashBoot}
              onChange={(e) => setDesiredCashBoot(e.target.value)}
              className="w-full rounded-lg border border-outline/30 px-4 py-2 text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="0"
            />
            <p className="mt-1 text-xs text-ink/60">If you want to receive cash boot, enter amount here</p>
          </div>
        </div>
      </div>

      {calculations.hasResults && calculations.isValid && (
        <div className="rounded-2xl border border-outline/15 bg-gradient-to-br from-heading/5 to-primary/5 p-6 shadow-lg md:p-8">
          <h3 className="mb-6 text-lg font-semibold text-heading">Minimum Replacement Property Value</h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-white p-4">
              <div>
                <p className="text-sm text-ink/70">Net Equity Available</p>
                <p className="text-xs text-ink/50">Sale price minus mortgage, cash, and costs</p>
              </div>
              <p className="text-lg font-semibold text-heading">
                ${calculations.netEquity.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-primary/10 p-4 border-2 border-primary/20">
              <div>
                <p className="text-sm font-medium text-heading">Minimum Replacement Value</p>
                <p className="text-xs text-ink/50">To defer all gain, purchase price must be at least this amount</p>
              </div>
              <p className="text-xl font-bold text-heading">
                ${calculations.minimumReplacementValue.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="rounded-lg border border-outline/20 bg-white p-4">
              <div className="mb-2 flex items-start gap-2">
                <InformationCircleIcon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-heading mb-1">Recommended Replacement Value</p>
                  <p className="text-xs text-ink/50 mb-2">
                    Includes 5% buffer for unexpected costs and ensures full deferral
                  </p>
                  <p className="text-lg font-semibold text-heading">
                    ${calculations.recommendedReplacementValue.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-outline/20 bg-panel p-4">
              <div className="mb-2 flex items-start gap-2">
                <InformationCircleIcon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="mb-2 text-sm font-semibold text-heading">Important Notes</h4>
                  <ul className="space-y-1 text-xs text-ink/70">
                    <li>• Purchase price must equal or exceed net equity to defer all gain</li>
                    <li>• New mortgage on replacement property can reduce required purchase price</li>
                    <li>• If replacement value is less than net equity, the difference is taxable boot</li>
                    <li>• All net equity must be reinvested to achieve full tax deferral</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="rounded-lg border border-outline/20 bg-panel p-4">
        <h4 className="mb-2 text-sm font-semibold text-heading">Understanding Replacement Property Value Requirements</h4>
        <ul className="space-y-1 text-xs text-ink/70">
          <li>• <strong>Full Deferral:</strong> Replacement property value must equal or exceed net equity from relinquished property</li>
          <li>• <strong>Partial Deferral:</strong> If replacement value is less, the difference is taxable boot</li>
          <li>• <strong>New Mortgage:</strong> Taking a new mortgage can reduce the required purchase price while still deferring all gain</li>
          <li>• <strong>Net Equity:</strong> Sale proceeds minus mortgage payoff, cash received, and exchange costs</li>
        </ul>
      </div>
    </div>
  );
}

