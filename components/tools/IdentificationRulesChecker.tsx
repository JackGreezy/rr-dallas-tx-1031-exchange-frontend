"use client";

import { useState, useMemo } from "react";
import { CheckCircleIcon, XCircleIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

export function IdentificationRulesChecker() {
  const [numProperties, setNumProperties] = useState<string>("");
  const [totalIdentifiedValue, setTotalIdentifiedValue] = useState<string>("");
  const [relinquishedValue, setRelinquishedValue] = useState<string>("");

  const rules = useMemo(() => {
    const numProps = parseInt(numProperties) || 0;
    const totalValue = parseFloat(totalIdentifiedValue) || 0;
    const relValue = parseFloat(relinquishedValue) || 0;

    const threePropertyRule = numProps <= 3;
    const twoHundredPercentRule = totalValue <= relValue * 2;
    const ninetyFivePercentRule = relValue > 0 && totalValue >= relValue * 0.95;

    const hasResults = numProps > 0 || totalValue > 0 || relValue > 0;

    return {
      threePropertyRule,
      twoHundredPercentRule,
      ninetyFivePercentRule,
      hasResults,
      isValid: relValue > 0 && (numProps > 0 || totalValue > 0),
    };
  }, [numProperties, totalIdentifiedValue, relinquishedValue]);

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-outline/15 bg-white p-6 shadow-lg md:p-8">
        <div className="mb-6 flex items-center gap-3">
          <CheckCircleIcon className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-semibold text-heading">Identification Rules Checker</h2>
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
            <label htmlFor="num-properties" className="mb-2 block text-sm font-medium text-ink">
              Number of Properties Identified
            </label>
            <input
              type="number"
              id="num-properties"
              value={numProperties}
              onChange={(e) => setNumProperties(e.target.value)}
              min="0"
              className="w-full rounded-lg border border-outline/30 px-4 py-2 text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="0"
            />
            <p className="mt-1 text-xs text-ink/60">Total properties on identification list</p>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="total-value" className="mb-2 block text-sm font-medium text-ink">
              Total Value of Identified Properties ($)
            </label>
            <input
              type="number"
              id="total-value"
              value={totalIdentifiedValue}
              onChange={(e) => setTotalIdentifiedValue(e.target.value)}
              className="w-full rounded-lg border border-outline/30 px-4 py-2 text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="0"
            />
            <p className="mt-1 text-xs text-ink/60">Sum of all identified property values</p>
          </div>
        </div>
      </div>

      {rules.hasResults && rules.isValid && (
        <div className="space-y-4">
          <div className="rounded-2xl border border-outline/15 bg-gradient-to-br from-heading/5 to-primary/5 p-6 shadow-lg md:p-8">
            <h3 className="mb-6 text-lg font-semibold text-heading">Rule Validation Results</h3>

            <div className="space-y-4">
              <div className={`rounded-lg p-4 ${
                rules.threePropertyRule
                  ? "bg-green-50 border-2 border-green-200"
                  : "bg-red-50 border-2 border-red-200"
              }`}>
                <div className="flex items-start gap-3">
                  {rules.threePropertyRule ? (
                    <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircleIcon className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <h4 className="font-semibold text-heading mb-1">Three Property Rule</h4>
                    <p className="text-sm text-ink/70 mb-2">
                      You may identify up to three replacement properties regardless of value.
                    </p>
                    <p className={`text-sm font-medium ${
                      rules.threePropertyRule ? "text-green-700" : "text-red-700"
                    }`}>
                      {rules.threePropertyRule
                        ? `✓ Satisfied: ${numProperties} properties identified`
                        : `✗ Not satisfied: ${numProperties} properties exceeds limit of 3`}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`rounded-lg p-4 ${
                rules.twoHundredPercentRule
                  ? "bg-green-50 border-2 border-green-200"
                  : "bg-red-50 border-2 border-red-200"
              }`}>
                <div className="flex items-start gap-3">
                  {rules.twoHundredPercentRule ? (
                    <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircleIcon className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <h4 className="font-semibold text-heading mb-1">200 Percent Rule</h4>
                    <p className="text-sm text-ink/70 mb-2">
                      Total value of identified properties cannot exceed 200% of relinquished property value.
                    </p>
                    <p className={`text-sm font-medium ${
                      rules.twoHundredPercentRule ? "text-green-700" : "text-red-700"
                    }`}>
                      {rules.twoHundredPercentRule
                        ? `✓ Satisfied: $${parseFloat(totalIdentifiedValue || "0").toLocaleString()} ≤ $${(parseFloat(relinquishedValue || "0") * 2).toLocaleString()}`
                        : `✗ Not satisfied: $${parseFloat(totalIdentifiedValue || "0").toLocaleString()} exceeds $${(parseFloat(relinquishedValue || "0") * 2).toLocaleString()}`}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`rounded-lg p-4 ${
                rules.ninetyFivePercentRule
                  ? "bg-green-50 border-2 border-green-200"
                  : "bg-yellow-50 border-2 border-yellow-200"
              }`}>
                <div className="flex items-start gap-3">
                  {rules.ninetyFivePercentRule ? (
                    <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <InformationCircleIcon className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <h4 className="font-semibold text-heading mb-1">95 Percent Rule</h4>
                    <p className="text-sm text-ink/70 mb-2">
                      If using 200% rule, you must acquire at least 95% of the total identified value.
                    </p>
                    <p className={`text-sm font-medium ${
                      rules.ninetyFivePercentRule ? "text-green-700" : "text-yellow-700"
                    }`}>
                      {rules.ninetyFivePercentRule
                        ? `✓ Satisfied: $${parseFloat(totalIdentifiedValue || "0").toLocaleString()} ≥ $${(parseFloat(relinquishedValue || "0") * 0.95).toLocaleString()}`
                        : `⚠ Check required: Must acquire at least $${(parseFloat(relinquishedValue || "0") * 0.95).toLocaleString()}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-outline/20 bg-panel p-4">
            <div className="mb-2 flex items-start gap-2">
              <InformationCircleIcon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="mb-2 text-sm font-semibold text-heading">Identification Rules Summary</h4>
                <ul className="space-y-1 text-xs text-ink/70">
                  <li>• <strong>Three Property Rule:</strong> Identify up to 3 properties regardless of value</li>
                  <li>• <strong>200% Rule:</strong> Identify unlimited properties if total value ≤ 200% of relinquished value</li>
                  <li>• <strong>95% Rule:</strong> Must acquire at least 95% of identified value when using 200% rule</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

