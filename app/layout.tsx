import type { Metadata } from "next";
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
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: "Haitam El Atifi",
    // Add app/opengraph-image.jpg when the final social image is ready.
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
