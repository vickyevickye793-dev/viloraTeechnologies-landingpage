import FullStack from "../../src/section/internship/FullStack";
import Header from "../../src/section/header/Header";
import Footer from "../../src/section/footer/Footer";

export const metadata = {
  metadataBase: new URL("https://www.viloratechnologies.com"),

  title:
    "Full Stack Developer Internship in Pondicherry | Vilora Technologies",

  description:
    "Apply for Full Stack Developer Internship at Vilora Technologies, Pondicherry. Work on real-time MERN, MEAN, Python, and Java Full Stack projects with industry mentorship and hands-on experience.",

  keywords: [
    "Full Stack Developer Internship in Pondicherry",
    "MERN Stack Internship Pondicherry",
    "MEAN Stack Internship Pondicherry",
    "Python Full Stack Internship",
    "Java Full Stack Internship",
    "Web Development Internship Pondicherry",
    "Vilora Technologies Internship"
  ],

  authors: [{ name: "Vilora Technologies" }],
  creator: "Vilora Technologies",
  publisher: "Vilora Technologies",

  alternates: {
    canonical:
      "https://www.viloratechnologies.com/full-stack-internship",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Full Stack Developer Internship in Pondicherry | Vilora Technologies",
    description:
      "Join Vilora Technologies for a real-time Full Stack Internship in Pondicherry. Build live web applications using modern technologies.",
    url:
      "https://www.viloratechnologies.com/full-stack-internship",
    siteName: "Vilora Technologies",
    images: [
      {
        url: "https://www.viloratechnologies.com/assets/og-image.webp",
        width: 1200,
        height: 630,
        alt:
          "Full Stack Developer Internship in Pondicherry - Vilora Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Full Stack Developer Internship in Pondicherry | Vilora Technologies",
    description:
      "Real-time MERN, MEAN, Python & Java Full Stack Internship in Pondicherry.",
    images: [
      "https://www.viloratechnologies.com/assets/og-image.webp",
    ],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InternshipPosting",
    "title": "Full Stack Developer Internship",
    "description":
      "Vilora Technologies offers a Full Stack Developer Internship in Pondicherry covering MERN, MEAN, Python, and Java full stack development with real-time industry projects.",
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
    "occupationalCategory": "Full Stack Developer",
  };

  return (
    <main className="container mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <FullStack />
      <Footer />
    </main>
  );
}