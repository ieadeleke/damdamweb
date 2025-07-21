import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedText from '@/components/ScrollReveal';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Damdam Global Limited",
//   description: "DamDam Global is a forward-thinking technology consulting and software development company committed to driving business and government transformation through digital innovation.",
// };

export const metadata: Metadata = {
  title: "DamDam Global – Technology Consulting & Digital Transformation",
  description:
    "DamDam Global is a technology consulting and software development company focused on transforming businesses and governments through innovative, scalable digital solutions.",
  keywords: [
    "DamDam Global",
    "Technology Consulting",
    "Digital Transformation",
    "Government Solutions",
    "Enterprise Software",
    "Smart Solutions",
    "Revenue Automation",
    "Software Development",
    "IT Strategy",
  ],
  authors: [{ name: "DamDam Global" }],
  openGraph: {
    title: "DamDam Global – Technology Consulting & Digital Transformation",
    description:
      "We design and implement smart, scalable digital solutions to improve service delivery, revenue generation, and accountability.",
    url: "https://damdamglobal.com",
    siteName: "DamDam Global",
    images: [
      {
        url: "https://damdamglobal.com/globe.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DamDam Global – Technology Consulting & Digital Transformation",
    description:
      "Smart and scalable digital solutions for businesses and governments.",
    images: ["https://damdamglobal.com/globe.png"],
  },
  metadataBase: new URL("https://damdamglobal.com"),
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        {/* Optional: tags not covered by the metadata API */}
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#31A5DE" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />

        {/* Optional JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Company",
              name: "Damdam Global Limited",
              url: "https://damdamglobal.com",
              jobTitle: "Damdam Global Limited",
              sameAs: [
                "https://ng.linkedin.com/company/damdam-global",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimatedText />
        {children}
      </body>
    </html>
  );
}
