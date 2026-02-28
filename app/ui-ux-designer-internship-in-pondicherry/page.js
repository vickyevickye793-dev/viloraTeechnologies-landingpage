import UiUxDesigner from "../../src/section/internship/UiUxDesigner";
import Header from "../../src/section/header/Header";
import Footer from "../../src/section/footer/Footer";

export const metadata = {
  metadataBase: new URL("https://www.viloratechnologies.com"),

  title:
    "UI UX Designer Internship in Pondicherry | Vilora Technologies",

  description:
    "Apply for UI UX Designer Internship at Vilora Technologies, Pondicherry. Gain real-time experience in user research, wireframing, Figma prototyping, usability testing, and modern product design workflows.",

  keywords: [
    "UI UX Designer Internship in Pondicherry",
    "UI UX Internship Pondicherry",
    "UX Design Internship Pondicherry",
    "UI Design Internship Pondicherry",
    "Figma Internship Pondicherry",
    "Vilora Technologies Internship"
  ],

  authors: [{ name: "Vilora Technologies" }],
  creator: "Vilora Technologies",
  publisher: "Vilora Technologies",

  alternates: {
    canonical:
      "https://www.viloratechnologies.com/ui-ux-internship",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "UI UX Designer Internship in Pondicherry | Vilora Technologies",
    description:
      "Join Vilora Technologies for a real-time UI/UX Internship in Pondicherry. Work on live product design projects using Figma and modern UX methodologies.",
    url:
      "https://www.viloratechnologies.com/ui-ux-internship",
    siteName: "Vilora Technologies",
    images: [
      {
        url: "https://www.viloratechnologies.com/assets/og-image.webp",
        width: 1200,
        height: 630,
        alt:
          "UI UX Designer Internship in Pondicherry - Vilora Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "UI UX Designer Internship in Pondicherry | Vilora Technologies",
    description:
      "Real-time UI/UX Internship in Pondicherry with live design projects.",
    images: [
      "https://www.viloratechnologies.com/assets/og-image.webp",
    ],
  },
};


export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InternshipPosting",
    "title": "UI UX Designer Internship",
    "description":
      "Vilora Technologies offers a UI UX Designer Internship in Pondicherry covering user research, wireframing, Figma prototyping, usability testing, and real-time product design projects.",
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
    "occupationalCategory": "UI UX Designer",
  };

  return (
    <main className="container mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <UiUxDesigner />
      <Footer />
    </main>
  );
}