import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { baseMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { AppShell } from "@/components/layout/app-shell";
import "../styles/globals.css";

export const metadata: Metadata = {
  ...baseMetadata,
  metadataBase: new URL(site.url),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function () {
              try {
                var t = localStorage.getItem('portfolio-theme') || 'system';
                var d = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var resolved = t === 'system' ? (d ? 'dark' : 'light') : t;
                var root = document.documentElement;
                root.classList.remove('light', 'dark');
                if (t !== 'system') root.classList.add(t);
                root.style.colorScheme = resolved;
              } catch (e) {}
            })();
          `,
          }}
        />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}