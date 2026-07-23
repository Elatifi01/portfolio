import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const title = "Haitam El Atifi — Full-Stack Developer";
const description =
  "Portfolio of Haitam El Atifi, a full-stack developer building thoughtful, scalable digital products.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Haitam El Atifi",
  manifest: "/assets/favicon_io/site.webmanifest",
  appleWebApp: {
    capable: true,
    title,
    statusBarStyle: "default",
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: "Haitam El Atifi",
    images: [
      {
        url: "/assets/h.elatifi.png",
        width: 1200,
        height: 630,
        alt: "Haitam El Atifi, full-stack developer",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#f1f0ec",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
