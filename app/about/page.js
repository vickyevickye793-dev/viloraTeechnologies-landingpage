import Footer from "../../src/section/footer/Footer";
import Header from "../../src/section/header/Header";
import About from "../../src/section/About/About"
export const metadata = {
    metadataBase: new URL("https://www.viloratechnologies.com"),

    title:
        "About Vilora Technologies | Leading IT & Software Development Company in India",

    description:
        "Learn about Vilora Technologies, a leading IT and software development company in India delivering Web Development, Mobile Apps, AI Solutions, Cloud Services, SaaS Platforms and Digital Transformation for startups and enterprises.",

    keywords: [
        "About Vilora Technologies",
        "IT company in India",
        "Software development company India",
        "Web development company India",
        "Mobile app development company",
        "AI development company India",
        "Cloud computing services India",
        "Software company in Pondicherry",
        "Top IT company India",
    ],

    authors: [{ name: "Vilora Technologies" }],
    creator: "Vilora Technologies",
    publisher: "Vilora Technologies",

    alternates: {
        canonical: "https://www.viloratechnologies.com/about",
    },

    openGraph: {
        title:
            "About Vilora Technologies - Top IT & Software Development Company in India",
        description:
            "Discover Vilora Technologies – Experts in Web, Mobile App, AI, SaaS and Cloud Development Solutions.",
        url: "https://www.viloratechnologies.com/about",
        siteName: "Vilora Technologies",
        type: "article",
        locale: "en_IN",
        images: [
            {
                url: "https://www.viloratechnologies.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Vilora Technologies - IT & Software Company India",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "About Vilora Technologies | IT & Software Experts",
        description:
            "Leading IT company delivering scalable web, mobile and AI-powered solutions.",
        images: ["https://www.viloratechnologies.com/og-image.jpg"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function Page() {
    return (
        <div className=" bg-WhiteBackground">
            <Header />
            <About />
            <Footer />


        </div>
    );
}