"use client";

import { useEffect, useRef } from "react";

const AD_CLIENT = "ca-pub-9104218233845530";
const AD_SLOT = "9491736892";

/** Responsive AdSense placement after the primary content and before the footer. */
export default function ContentBottomAd() {
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
    <div className="mx-auto w-full max-w-6xl px-4 pb-8 pt-12" aria-label="Advertisement">
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
