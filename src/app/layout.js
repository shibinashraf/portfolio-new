import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shibin - Portfolio",
  description: "Full Stack Developer and a Tech Enthusiast.",
  metadataBase: new URL("https://shibin.tech"),
  openGraph: {
    title: "Shibin - Portfolio",
    description: "Full Stack Developer and Tech Enthusiast.",
    url: "https://shibin.tech",
    siteName: "Shibin - Portfolio",
    images: [
      {
        url: "https://shibin.tech/og.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
