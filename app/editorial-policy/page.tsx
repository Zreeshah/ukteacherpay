import TrustPage, { trustMetadata } from "@/components/TrustPage";

export const metadata = trustMetadata("editorial-policy");

export default function EditorialPolicy() {
  return <TrustPage slug="editorial-policy" />;
}
