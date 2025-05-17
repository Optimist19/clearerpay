import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manRope = Manrope({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Clearerpay",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png"
  },
  description:
    "We design solutions that streamline payments and pave the way for a future free of digital financial barriers"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manRope.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
