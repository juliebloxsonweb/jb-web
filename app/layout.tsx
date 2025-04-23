import { Footer } from "@/components/Footer";
import { MenuProvider } from "@/components/Nav/MenuContext";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const carmen = localFont({
  src: [
    {
      path: "../public/fonts/Carmen Sans Heavy.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Carmen Sans ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Carmen Sans Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Carmen Sans Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Carmen Sans Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-carmen",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bloxon Research Group",
  description: "Welcome to the Core Lab on SFA campus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${carmen.variable} antialiased`}
    >
      <body
      className="font-caros min-h-screen overflow-x-hidden m-0 p-0 flex flex-col bg-white text-black"
        suppressHydrationWarning={true}
      >
        <MenuProvider>
          <Navbar />
          <main className="flex-grow-[1]">{children}</main>
          <Footer />
        </MenuProvider>
      </body>
    </html>
  );
}
