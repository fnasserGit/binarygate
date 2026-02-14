import type { Metadata } from "next";
import { Source_Sans_3, Source_Code_Pro } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const brandSans = Source_Sans_3({
  variable: "--font-brand-sans",
  subsets: ["latin"],
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
        className={`${brandSans.variable} ${brandMono.variable} antialiased bg-white text-black dark:bg-black dark:text-white transition-colors`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
