"use client";

import { useState, useMemo } from "react";
import { CalculatorIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

export function DepreciationRecaptureEstimator() {
  const [originalCost, setOriginalCost] = useState<string>("");
  const [accumulatedDepreciation, setAccumulatedDepreciation] = useState<string>("");
  const [salePrice, setSalePrice] = useState<string>("");
  const [adjustedBasis, setAdjustedBasis] = useState<string>("");

  const calculations = useMemo(() => {
    const origCost = parseFloat(originalCost) || 0;
    const accDep = parseFloat(accumulatedDepreciation) || 0;
    const sale = parseFloat(salePrice) || 0;
    const adjBasis = parseFloat(adjustedBasis) || 0;

    // Calculate adjusted basis if not provided
    const calculatedAdjustedBasis = adjBasis > 0 ? adjBasis : origCost - accDep;
    
    // Gain on sale
    const gain = Math.max(0, sale - calculatedAdjustedBasis);
    
    // Depreciation recapture is the lesser of accumulated depreciation or gain
    const depreciationRecapture = Math.min(accDep, gain);
    
    // Remaining gain (capital gain)
    const capitalGain = Math.max(0, gain - depreciationRecapture);
    
    // Estimated tax on recapture (typically 25% for unrecaptured Section 1250 gain)
    const estimatedRecaptureTax = depreciationRecapture * 0.25;
    
    // Estimated tax on capital gain (typically 15-20% depending on bracket)
    const estimatedCapitalGainTax = capitalGain * 0.20;
    
    const totalEstimatedTax = estimatedRecaptureTax + estimatedCapitalGainTax;

    const hasResults = origCost > 0 || accDep > 0 || sale > 0 || adjBasis > 0;

    return {
      calculatedAdjustedBasis,
      gain,
      depreciationRecapture,
      capitalGain,
      estimatedRecaptureTax,
      estimatedCapitalGainTax,
      totalEstimatedTax,
      hasResults,
      isValid: (origCost > 0 && accDep > 0) || adjBasis > 0,
    };
  }, [originalCost, accumulatedDepreciation, salePrice, adjustedBasis]);

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-outline/15 bg-white p-6 shadow-lg md:p-8">
        <div className="mb-6 flex items-center gap-3">
          <CalculatorIcon className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-semibold text-heading">Depreciation Recapture Estimator</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="original-cost" className="mb-2 block text-sm font-medium text-ink">
              Original Cost Basis ($)
            </label>
            <input
              type="number"
              id="original-cost"
              value={originalCost}
              onChange={(e) => setOriginalCost(e.target.value)}
              className="w-full rounded-lg border border-outline/30 px-4 py-2 text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="0"
            />
            <p className="mt-1 text-xs text-ink/60">Original purchase price plus improvements</p>
          </div>

          <div>
            <label htmlFor="accumulated-depreciation" className="mb-2 block text-sm font-medium text-ink">
              Accumulated Depreciation ($)
            </label>
            <input
              type="number"
              id="accumulated-depreciation"
              value={accumulatedDepreciation}
              onChange={(e) => setAccumulatedDepreciation(e.target.value)}
              className="w-full rounded-lg border border-outline/30 px-4 py-2 text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="0"
            />
            <p className="mt-1 text-xs text-ink/60">Total depreciation taken over ownership period</p>
          </div>

          <div>
            <label htmlFor="sale-price" className="mb-2 block text-sm font-medium text-ink">
              Sale Price ($)
            </label>
            <input
              type="number"
              id="sale-price"
              value={salePrice}
              onChange={(e) => setSalePrice(e.target.value)}
              className="w-full rounded-lg border border-outline/30 px-4 py-2 text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="0"
            />
            <p className="mt-1 text-xs text-ink/60">Sale price of relinquished property</p>
          </div>

          <div>
            <label htmlFor="adjusted-basis" className="mb-2 block text-sm font-medium text-ink">
              Adjusted Basis ($) <span className="text-xs text-ink/50">(Optional)</span>
            </label>
            <input
              type="number"
              id="adjusted-basis"
              value={adjustedBasis}
              onChange={(e) => setAdjustedBasis(e.target.value)}
              className="w-full rounded-lg border border-outline/30 px-4 py-2 text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="0"
            />
            <p className="mt-1 text-xs text-ink/60">If known, otherwise calculated automatically</p>
          </div>
        </div>
      </div>

      {calculations.hasResults && calculations.isValid && (
        <div className="rounded-2xl border border-outline/15 bg-gradient-to-br from-heading/5 to-primary/5 p-6 shadow-lg md:p-8">
          <h3 className="mb-6 text-lg font-semibold text-heading">Recapture Calculation Results</h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-white p-4">
              <div>
                <p className="text-sm text-ink/70">Adjusted Basis</p>
                <p className="text-xs text-ink/50">Original cost minus accumulated depreciation</p>
              </div>
              <p className="text-lg font-semibold text-heading">
                ${calculations.calculatedAdjustedBasis.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-white p-4">
              <div>
                <p className="text-sm text-ink/70">Total Gain on Sale</p>
                <p className="text-xs text-ink/50">Sale price minus adjusted basis</p>
              </div>
              <p className="text-lg font-semibold text-heading">
                ${calculations.gain.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-primary/10 p-4 border-2 border-primary/20">
              <div>
                <p className="text-sm font-medium text-heading">Depreciation Recapture</p>
                <p className="text-xs text-ink/50">Taxable as ordinary income (up to 25% rate)</p>
              </div>
              <p className="text-xl font-bold text-heading">
                ${calculations.depreciationRecapture.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-white p-4">
              <div>
                <p className="text-sm text-ink/70">Capital Gain</p>
                <p className="text-xs text-ink/50">Gain in excess of depreciation recapture</p>
              </div>
              <p className="text-lg font-semibold text-heading">
                ${calculations.capitalGain.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="rounded-lg border border-outline/20 bg-white p-4">
              <div className="mb-2 flex items-start gap-2">
                <InformationCircleIcon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-heading mb-1">Estimated Tax on Recapture</p>
                  <p className="text-xs text-ink/50 mb-2">
                    Illustrative estimate at 25% rate. Actual rate depends on your tax situation.
                  </p>
                  <p className="text-lg font-semibold text-heading">
                    ${calculations.estimatedRecaptureTax.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-outline/20 bg-white p-4">
              <div className="mb-2 flex items-start gap-2">
                <InformationCircleIcon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-heading mb-1">Estimated Tax on Capital Gain</p>
                  <p className="text-xs text-ink/50 mb-2">
                    Illustrative estimate at 20% rate. Actual rate depends on your tax bracket.
                  </p>
                  <p className="text-lg font-semibold text-heading">
                    ${calculations.estimatedCapitalGainTax.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-primary/10 p-4 border-2 border-primary/20">
              <div>
                <p className="text-sm font-medium text-heading">Total Estimated Tax</p>
                <p className="text-xs text-ink/50">Recapture tax plus capital gains tax</p>
              </div>
              <p className="text-xl font-bold text-heading">
                ${calculations.totalEstimatedTax.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="rounded-lg border border-outline/20 bg-panel p-4">
        <h4 className="mb-2 text-sm font-semibold text-heading">Understanding Depreciation Recapture</h4>
        <ul className="space-y-1 text-xs text-ink/70">
          <li>• <strong>Depreciation Recapture:</strong> Portion of gain taxed as ordinary income (up to 25% rate) rather than capital gains</li>
          <li>• <strong>Capital Gain:</strong> Gain in excess of depreciation recapture, typically taxed at capital gains rates (15-20%)</li>
          <li>• <strong>1031 Exchange:</strong> Allows deferral of both depreciation recapture and capital gains when exchanging into like-kind property</li>
        </ul>
      </div>
    </div>
  );
}

