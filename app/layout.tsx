import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { baseMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "../styles/globals.css";

export const metadata: Metadata = {
  ...baseMetadata,
  metadataBase: new URL(site.url),
};

const themeScript = `
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
`;

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
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
