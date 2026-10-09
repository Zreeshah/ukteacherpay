import TrustPage, { trustMetadata } from "@/components/TrustPage";

export const metadata = trustMetadata("terms");

export default function Terms() {
  return <TrustPage slug="terms" />;
}
