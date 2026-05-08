import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nnstudio.com"),
  title: {
    default: "nnstudio — Senior Design Partner",
    template: "%s | nnstudio",
  },
  description:
    "Senior design partner for B2B marketing teams and agency partners across digital, content, and print. Reliable delivery. Brand fluency. Experienced judgment.",
  openGraph: {
    siteName: "nnstudio",
    type: "website",
    title: "nnstudio — Senior design partner for B2B marketing teams and agencies",
    description:
      "Senior design partner for B2B marketing teams and agency partners across digital, content, and print. Reliable delivery. Brand fluency. Experienced judgment.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "nnstudio — Senior design partner for B2B marketing teams and agencies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "nnstudio — Senior design partner for B2B marketing teams and agencies",
    description:
      "Senior design partner for B2B marketing teams and agency partners across digital, content, and print. Reliable delivery. Brand fluency. Experienced judgment.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
