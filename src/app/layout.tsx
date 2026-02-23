import type { Metadata } from "next";
import { Inter, Source_Code_Pro } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const brandSans = Inter({
  variable: "--font-brand-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const brandMono = Source_Code_Pro({
  variable: "--font-brand-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BinaryGate",
  description: "Beyond Code. Beyond Infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${brandSans.variable} ${brandMono.variable} antialiased bg-[#f5f5f2] text-neutral-900 overflow-x-hidden`}
      >
        <ThemeProvider attribute="class" forcedTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
