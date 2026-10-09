import TrustPage, { trustMetadata } from "@/components/TrustPage";

export const metadata = trustMetadata("privacy");

export default function Privacy() {
  return <TrustPage slug="privacy" />;
}
