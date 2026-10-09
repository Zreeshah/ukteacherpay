import TrustPage, { trustMetadata } from "@/components/TrustPage";

export const metadata = trustMetadata("disclaimer");

export default function Disclaimer() {
  return <TrustPage slug="disclaimer" />;
}
