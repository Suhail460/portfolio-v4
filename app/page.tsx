import type { Metadata } from "next";
import Link from "next/link";
import { Github } from "lucide-react";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Portfolio V4",
  description: "Personal portfolio — engineering foundation in progress.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">Portfolio V4</h1>
      <p className="max-w-md text-sm opacity-70">
        Engineering foundation is running. Design and content land in a later milestone.
      </p>
      <Link
        href="https://github.com"
        className="inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline"
      >
        <Github size={16} aria-hidden="true" />
        Source
      </Link>
    </main>
  );
}
