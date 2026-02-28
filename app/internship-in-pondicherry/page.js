import Internship from "../../src/section/internship/Internship"
import Header from "../../src/section/header/Header"
import Footer from "../../src/section/footer/Footer"
export const metadata = {
    metadataBase: new URL("https://www.viloratechnologies.com"),

    title:
        "Internship in Pondicherry | Vilora Technologies – IT & Software Internship Programs",

    description:
        "Apply for internship at Vilora Technologies, Pondicherry. Gain real-time industry experience in Web Development, Full Stack, AI, Data Science and Software Engineering with live projects and corporate mentorship.",

    keywords: [
        "Internship in Pondicherry",
        "IT internship Pondicherry",
        "Software internship Pondicherry",
        "Full Stack internship Pondicherry",
        "Web development internship Pondicherry",
        "AI internship Pondicherry",
        "Data Science internship Pondicherry",
        "Vilora Technologies internship",
        "Corporate internship Pondicherry",
        "Final year internship Pondicherry"
    ],

    authors: [{ name: "Vilora Technologies" }],

    alternates: {
        canonical: "https://www.viloratechnologies.com/internship"
    },

    openGraph: {
        title:
            "Internship in Pondicherry | Vilora Technologies",
        description:
            "Join Vilora Technologies for real-time IT & software internship programs in Pondicherry. Work on live projects with expert mentorship.",
        url: "https://www.viloratechnologies.com/internship",
        siteName: "Vilora Technologies",
        images: [
            {
                url: "https://www.viloratechnologies.com/assets/logo.webp",
                width: 1200,
                height: 630,
                alt: "Vilora Technologies Internship Program"
            }
        ],
        type: "website",
        locale: "en_IN"
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Internship in Pondicherry | Vilora Technologies",
        description:
            "Real-time IT & Software Internship at Vilora Technologies, Pondicherry.",
        images: ["https://www.viloratechnologies.com/assets/logo.webp"]
    },

    robots: {
        index: true,
        follow: true,
        googleBot: "index, follow"
    }
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "LocalBusiness",
                "name": "Vilora Tech Education",
                "image": "https://viloratecheducation.com/LOGO.webp",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Venkata Nagar & IG Square",
                    "addressLocality": "Pondicherry",
                    "postalCode": "605011",
                    "addressCountry": "IN"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    latitude: 11.9413258,
                    longitude: 79.8217365
                },
                "telephone": "+919952148197"
            },
            {
                "@type": "FAQPage",
                "mainEntity": [{
                    "@type": "Question",
                    "name": "Is this a paid internship in Pondicherry?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Vilora Tech offers both training-based and project-based internships. Based on the student's performance and skill level, stipend opportunities are discussed."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you provide an internship certificate?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, every student receives an authorized IT Internship Certificate upon successful completion of their real-time project."
                    }
                }]
            }
        ]
    };

    return (
        <div className="container mx-auto bg-WhiteBackground">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <Internship />
            <Footer />
        </div>
    );
}
