import WebDesign from "../../src/section/internship/WebDesigning";
import Header from "../../src/section/header/Header";
import Footer from "../../src/section/footer/Footer";

export const metadata = {
  metadataBase: new URL("https://www.viloratechnologies.com"),

  title:
    "Web Design Internship in Pondicherry | Vilora Technologies",

  description:
    "Apply for Web Design Internship at Vilora Technologies, Pondicherry. Gain real-time experience in UI design, Figma prototyping, responsive layouts, and modern web interface development through live projects.",

  keywords: [
    "Web Design Internship in Pondicherry",
    "UI Design Internship Pondicherry",
    "Figma Internship Pondicherry",
    "Frontend Design Internship",
    "Creative Web Design Internship",
    "Vilora Technologies Internship"
  ],

  authors: [{ name: "Vilora Technologies" }],
  creator: "Vilora Technologies",
  publisher: "Vilora Technologies",

  alternates: {
    canonical:
      "https://www.viloratechnologies.com/web-design-internship",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Web Design Internship in Pondicherry | Vilora Technologies",
    description:
      "Join Vilora Technologies for a real-time Web Design Internship in Pondicherry. Work on live UI/UX and responsive web interface projects.",
    url:
      "https://www.viloratechnologies.com/web-design-internship",
    siteName: "Vilora Technologies",
    images: [
      {
        url: "https://www.viloratechnologies.com/assets/og-image.webp",
        width: 1200,
        height: 630,
        alt:
          "Web Design Internship in Pondicherry - Vilora Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Web Design Internship in Pondicherry | Vilora Technologies",
    description:
      "Real-time Web Design Internship in Pondicherry with hands-on UI projects.",
    images: [
      "https://www.viloratechnologies.com/assets/og-image.webp",
    ],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InternshipPosting",
    "title": "Web Design Internship",
    "description":
      "Vilora Technologies offers a Web Design Internship in Pondicherry covering UI design, Figma prototyping, responsive layout design, and real-time web interface projects.",
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
    "occupationalCategory": "Web Designer",
  };

  return (
    <main className="container mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <WebDesign />
      <Footer />
    </main>
  );
}