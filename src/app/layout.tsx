import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GenoFit - Genetic Testing for Athletes | Saudi Arabia",
  description: "Elevate your athletic potential with GenoFit - the first Saudi company specializing in genetic testing for athletes. Discover your strength, enhance your performance, and achieve your goals.",
  keywords: ["genetic testing", "athletes", "fitness", "DNA analysis", "sports performance", "Saudi Arabia"],
  authors: [{ name: "GenoFit" }],
  creator: "GenoFit",
  publisher: "GenoFit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "GenoFit - Genetic Testing for Athletes",
    description: "Elevate your athletic potential with GenoFit - the first Saudi company specializing in genetic testing for athletes.",
    url: "https://genofit.com",
    siteName: "GenoFit",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GenoFit - Genetic Testing for Athletes",
    description: "Elevate your athletic potential with GenoFit - the first Saudi company specializing in genetic testing for athletes.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
