import type { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";
import "../styles/globals.css";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
