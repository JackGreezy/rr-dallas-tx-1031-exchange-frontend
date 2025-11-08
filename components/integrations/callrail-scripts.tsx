"use client";

import Script from "next/script";

const CALLRAIL_ID = process.env.NEXT_PUBLIC_CALLRAIL_ACCOUNT_ID;

export function CallRailScripts() {
  if (!CALLRAIL_ID) {
    return null;
  }

  const src = `https://cdn.callrail.com/companies/${CALLRAIL_ID}/tracking.js`;

  return (
    <Script
      id="callrail-tracking"
      src={src}
      strategy="afterInteractive"
    />
  );
}

