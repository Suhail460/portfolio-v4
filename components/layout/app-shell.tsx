"use client";

import { Stack } from "@/components/ui/stack";
import { Header } from "./header";
import { MainContent } from "./main-content";
import { Footer } from "./footer";
import { SkipLink } from "./skip-link";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <Stack direction="column" className="min-h-screen">
      <SkipLink />
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </Stack>
  );
}