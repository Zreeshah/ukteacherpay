import TrustPage, { trustMetadata } from "@/components/TrustPage";

export const metadata = trustMetadata("contact");

export default function Contact() {
  return <TrustPage slug="contact" />;
}
