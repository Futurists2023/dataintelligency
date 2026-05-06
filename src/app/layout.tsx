import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dataintelligency.com"),
  title: {
    default: "DataIntelligency | Cross-Market Intelligence Workspace",
    template: "%s | DataIntelligency",
  },
  description:
    "DataIntelligency helps commercial, research, and strategy teams monitor market movement, review source-backed signals, and prepare briefings across the USA, UK, and South Africa.",
  applicationName: "DataIntelligency",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
  },
  openGraph: {
    title: "DataIntelligency | Cross-Market Intelligence Workspace",
    description:
      "Monitor market movement, review source-backed signals, and prepare decision-ready briefings across the USA, UK, and South Africa.",
    url: "/",
    siteName: "DataIntelligency",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DataIntelligency | Cross-Market Intelligence Workspace",
    description:
      "A SaaS intelligence workspace for source-backed market monitoring and executive-ready briefings.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
