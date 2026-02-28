import DigitalMarketing from "../../src/section/internship/DigitalMarketing";
import Header from "../../src/section/header/Header";
import Footer from "../../src/section/footer/Footer";

export const metadata = {
  metadataBase: new URL("https://www.viloratechnologies.com"),

  title:
    "Digital Marketing Internship in Pondicherry | Vilora Technologies",

  description:
    "Apply for Digital Marketing Internship at Vilora Technologies, Pondicherry. Gain real-time experience in SEO, Social Media Marketing, Google Ads, Meta Ads, GA4 Analytics, and performance marketing through live industry projects.",

  keywords: [
    "Digital Marketing Internship in Pondicherry",
    "SEO Internship Pondicherry",
    "Social Media Marketing Internship",
    "Google Ads Internship Pondicherry",
    "Performance Marketing Internship",
    "Vilora Technologies Internship",
    "Marketing Internship Pondicherry",
  ],

  authors: [{ name: "Vilora Technologies" }],
  creator: "Vilora Technologies",
  publisher: "Vilora Technologies",

  alternates: {
    canonical:
      "https://www.viloratechnologies.com/digital-marketing-internship",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Digital Marketing Internship in Pondicherry | Vilora Technologies",
    description:
      "Join Vilora Technologies for a real-time Digital Marketing Internship in Pondicherry. Work on live SEO, paid ads, and performance marketing campaigns.",
    url:
      "https://www.viloratechnologies.com/digital-marketing-internship",
    siteName: "Vilora Technologies",
    images: [
      {
        url: "https://www.viloratechnologies.com/assets/og-image.webp",
        width: 1200,
        height: 630,
        alt:
          "Digital Marketing Internship in Pondicherry - Vilora Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Digital Marketing Internship in Pondicherry | Vilora Technologies",
    description:
      "Real-time Digital Marketing Internship in Pondicherry with live SEO and ad campaigns.",
    images: [
      "https://www.viloratechnologies.com/assets/og-image.webp",
    ],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InternshipPosting",
    "title": "Digital Marketing Internship",
    "description":
      "Vilora Technologies offers a Digital Marketing Internship in Pondicherry covering SEO, Social Media Marketing, Google Ads, Meta Ads, GA4 Analytics, and performance marketing through real-time corporate projects.",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Vilora Technologies",
      "sameAs": "https://www.viloratechnologies.com",
      "logo":
        "https://www.viloratechnologies.com/assets/logo.webp",
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pondicherry",
        "addressRegion": "Puducherry",
        "addressCountry": "IN",
      },
    },
    "employmentType": "Internship",
  };

  return (
    <main className="container mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <DigitalMarketing />
      <Footer />
    </main>
  );
}