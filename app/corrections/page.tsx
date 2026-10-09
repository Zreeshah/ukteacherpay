import TrustPage, { trustMetadata } from "@/components/TrustPage";

export const metadata = trustMetadata("corrections");

export default function Corrections() {
  return <TrustPage slug="corrections" />;
}
