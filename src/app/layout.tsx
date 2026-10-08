import type { Metadata, Viewport } from "next";
import { Toaster } from "@/app/components/ui/sonner";
import "@/styles/index.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kiddocare.info";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "KiddoCare",
  title: {
    default: "KiddoCare | Canadian Pediatric Health SaaS Platform",
    template: "%s | KiddoCare",
  },
  description:
    "KiddoCare is the pediatric healthcare SaaS platform that connects families, clinics, and care teams, bringing every part of a child's health journey together.",
  keywords: [
    "KiddoCare",
    "pediatric healthcare SaaS platform",
    "child health records",
    "family health app",
    "clinic workflow software",
    "connected care",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "KiddoCare",
    title: "KiddoCare | Canadian Pediatric Health SaaS Platform",
    description:
      "KiddoCare is the pediatric healthcare SaaS platform that connects families, clinics, and care teams, bringing every part of a child's health journey together.",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "KiddoCare | Canadian Pediatric Health SaaS Platform",
    description:
      "KiddoCare is the pediatric healthcare SaaS platform that connects families, clinics, and care teams, bringing every part of a child's health journey together.",
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
      <body>
        {children}
        <Toaster
          position="top-right"
        />
      </body>
    </html>
  );
}
