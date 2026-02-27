import type { Metadata } from "next";
import { Libre_Franklin, Poppins } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/src/component/common/CustomCursor";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-libre",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.viloratechnologies.com"),

  title: {
    default:
      "Vilora Technologies | Best IT Company in India for Web, Mobile Apps, AI & Digital Solutions",
    template: "%s | Vilora Technologies - Top Software Company India",
  },

  description:
    "Vilora Technologies is a leading IT solutions company in India delivering Web Development, Mobile Apps, AI, SaaS, Cloud & Digital Marketing services for startups and enterprises.",

  applicationName: "Vilora Technologies",
  category: "Technology & IT Services",

  keywords: [
    "Best IT Company in India",
    "Top Software Development Company",
    "Web Development Company India",
    "Mobile App Development Company",
    "AI Development Company India",
    "Cloud Solutions Company",
    "SaaS Development Company",
    "ERP CRM Development India",
    "Software Company in Pondicherry",
  ],

  authors: [{ name: "Vilora Technologies" }],
  creator: "Vilora Technologies",
  publisher: "Vilora Technologies",

  openGraph: {
    title:
      "Vilora Technologies - Top IT & Software Development Company in India",
    description:
      "Build scalable Web, Mobile, AI & SaaS products with Vilora Technologies.",
    url: "https://www.viloratechnologies.com",
    siteName: "Vilora Technologies",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vilora Technologies - IT & Software Company India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Vilora Technologies - Web, Mobile & AI Experts",
    description:
      "Top IT Company in India providing scalable software & digital solutions.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://www.viloratechnologies.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${libreFranklin.variable} ${poppins.variable} bg-white text-black`}
      >

        <CustomCursor />
        <div className="container mx-auto">
          {children}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Vilora Technologies",
              image: "https://www.viloratechnologies.com/logo.webp",
              url: "https://www.viloratechnologies.com",
              telephone: "+91-XXXXXXXXXX",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pondicherry",
                addressRegion: "PY",
                addressCountry: "IN",
              },
              areaServed: "India",
              sameAs: [
                "https://www.linkedin.com/company/viloratechnologies",
                "https://www.instagram.com/viloratechnologies",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}