import DataAnalysis from "../../src/section/internship/DataAnalysis";
import Header from "../../src/section/header/Header";
import Footer from "../../src/section/footer/Footer";

export const metadata = {
    metadataBase: new URL("https://www.viloratechnologies.com"),

    title:
        "Data Analysis Internship in Pondicherry | Vilora Technologies",

    description:
        "Apply for Data Analysis Internship at Vilora Technologies, Pondicherry. Gain real-time industry experience in Excel, SQL, Python, Power BI, and business analytics through live corporate projects.",

    keywords: [
        "Data Analysis Internship in Pondicherry",
        "Data Analyst Internship Pondicherry",
        "Excel Internship Pondicherry",
        "SQL Internship Pondicherry",
        "Power BI Internship Pondicherry",
        "Python Data Analysis Internship",
        "Vilora Technologies Internship",
        "IT Internship Pondicherry",
    ],

    authors: [{ name: "Vilora Technologies" }],
    creator: "Vilora Technologies",
    publisher: "Vilora Technologies",

    alternates: {
        canonical:
            "https://www.viloratechnologies.com/data-analysis-internship",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },

    openGraph: {
        title:
            "Data Analysis Internship in Pondicherry | Vilora Technologies",
        description:
            "Join Vilora Technologies for real-time Data Analysis Internship in Pondicherry. Work on live datasets using Excel, SQL, Python, and Power BI.",
        url:
            "https://www.viloratechnologies.com/data-analysis-internship",
        siteName: "Vilora Technologies",
        images: [
            {
                url: "https://www.viloratechnologies.com/assets/og-image.webp",
                width: 1200,
                height: 630,
                alt:
                    "Data Analysis Internship in Pondicherry - Vilora Technologies",
            },
        ],
        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Data Analysis Internship in Pondicherry | Vilora Technologies",
        description:
            "Real-time Data Analyst Internship in Pondicherry with corporate project exposure.",
        images: [
            "https://www.viloratechnologies.com/assets/og-image.webp",
        ],
    },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "InternshipPosting",
        "title": "Data Analysis Internship",
        "description":
            "Vilora Technologies offers a Data Analysis Internship in Pondicherry covering Excel, SQL, Python, Power BI, data visualization, and real-time corporate datasets.",
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
            <DataAnalysis />
            <Footer />
        </main>
    );
}