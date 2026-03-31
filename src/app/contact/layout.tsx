import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Sweet Home Services",
  description:
    "Get in touch with Sweet Home Services. Free consultation, no contracts. Let us help your local business get found on Google.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
