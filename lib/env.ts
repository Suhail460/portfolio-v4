export type Env = {
  NODE_ENV: "development" | "test" | "production";
  NEXT_PUBLIC_SITE_URL: string;
  NEXT_PUBLIC_SITE_NAME: string;
  NEXT_PUBLIC_SITE_DESCRIPTION: string;
  NEXT_PUBLIC_GITHUB_URL: string;
  NEXT_PUBLIC_LINKEDIN_URL: string;
  NEXT_PUBLIC_TWITTER_URL: string;
};

function required(name: string, value: string | undefined): string {
  if (!value || value.trim().length === 0) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value.trim();
}

function optional(value: string | undefined): string {
  if (!value) return "";
  return value;
}

const raw = {
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
  NEXT_PUBLIC_SITE_DESCRIPTION: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
  NEXT_PUBLIC_GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL,
  NEXT_PUBLIC_LINKEDIN_URL: process.env.NEXT_PUBLIC_LINKEDIN_URL,
  NEXT_PUBLIC_TWITTER_URL: process.env.NEXT_PUBLIC_TWITTER_URL,
};

export const env: Env = {
  NODE_ENV: (raw.NODE_ENV === "production"
    ? "production"
    : raw.NODE_ENV === "test"
      ? "test"
      : "development") as Env["NODE_ENV"],
  NEXT_PUBLIC_SITE_URL: required("NEXT_PUBLIC_SITE_URL", raw.NEXT_PUBLIC_SITE_URL).replace(/\/$/, ""),
  NEXT_PUBLIC_SITE_NAME: required("NEXT_PUBLIC_SITE_NAME", raw.NEXT_PUBLIC_SITE_NAME),
  NEXT_PUBLIC_SITE_DESCRIPTION: required(
    "NEXT_PUBLIC_SITE_DESCRIPTION",
    raw.NEXT_PUBLIC_SITE_DESCRIPTION,
  ),
  NEXT_PUBLIC_GITHUB_URL: optional(raw.NEXT_PUBLIC_GITHUB_URL),
  NEXT_PUBLIC_LINKEDIN_URL: optional(raw.NEXT_PUBLIC_LINKEDIN_URL),
  NEXT_PUBLIC_TWITTER_URL: optional(raw.NEXT_PUBLIC_TWITTER_URL),
};

export const isProduction = env.NODE_ENV === "production";
export const isDevelopment = env.NODE_ENV === "development";
