import type { Metadata, Viewport } from "next";
import "@/styles/index.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kiddocare.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "KiddoCare",
  title: {
    default: "KiddoCare | Connected Pediatric Care Platform",
    template: "%s | KiddoCare",
  },
  description:
    "KiddoCare is a Canadian pediatric healthcare SaaS platform connecting families, clinics, providers, and care teams across every child's health journey.",
  keywords: [
    "KiddoCare",
    "pediatric healthcare SaaS",
    "child health records",
    "family health app",
    "clinic workflow software",
    "connected pediatric care",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "KiddoCare",
    title: "KiddoCare | Connected Pediatric Care Platform",
    description:
      "A pediatric healthcare SaaS platform that connects families, clinics, providers, and care teams in one secure experience.",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "KiddoCare | Connected Pediatric Care Platform",
    description:
      "Connected pediatric care for families, clinics, providers, and care teams.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B283B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
