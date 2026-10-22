"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const AD_CLIENT = "ca-pub-9104218233845530";
const AD_SLOT = "7166695027";

/** Responsive AdSense placement shown before every page's main content. */
export default function ContentTopAd() {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    if (!adRef.current || adRef.current.dataset.adInitialized) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      adRef.current.dataset.adInitialized = "true";
    } catch {
      // Ad blockers and unavailable AdSense scripts should not affect page content.
    }
  }, []);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pt-4" aria-label="Advertisement">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={AD_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
