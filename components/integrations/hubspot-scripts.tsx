"use client";

import Script from "next/script";

const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;

export function HubSpotScripts() {
  if (!HUBSPOT_PORTAL_ID) {
    return null;
  }

  return (
    <Script
      id="hubspot-tracking"
      src={`https://js.hs-scripts.com/${HUBSPOT_PORTAL_ID}.js`}
      strategy="afterInteractive"
    />
  );
}

