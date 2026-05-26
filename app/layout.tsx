import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://json-formatter-online.pages.dev"),
  title: "JSON Formatter Online | Format, Validate & Minify JSON",
  description:
    "Free online JSON formatter, validator, and minifier. Format JSON, validate syntax, fix errors, and minify JSON instantly in your browser.",
  keywords: [
    "json formatter",
    "json validator",
    "json beautifier",
    "json minifier",
    "format json online",
    "private json formatter",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JSON Formatter Online | Format, Validate & Minify JSON",
    description:
      "Free online JSON formatter, validator, and minifier. Format JSON, validate syntax, fix errors, and minify JSON instantly in your browser.",
    type: "website",
    url: "https://json-formatter-online.pages.dev/",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON Formatter Online | Format, Validate & Minify JSON",
    description:
      "Free online JSON formatter, validator, and minifier. Format JSON, validate syntax, fix errors, and minify JSON instantly in your browser.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "r79PY62ZMOSfpJOaPPb7ismHQA9KS2WupX3dwbYK8_o",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
