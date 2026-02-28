import Header from "../../src/section/header/Header"
import Footer from "../../src/section/footer/Footer"
import Services from "../../src/section/Services/Services"
export const metadata = {
    metadataBase: new URL("https://www.viloratechnologies.com"),

    title:
        "Our Services | Web, Mobile App, AI & Cloud Development Company in India",

    description:
        "Explore Vilora Technologies services including Web Development, Mobile App Development, Artificial Intelligence, Cloud Computing, SaaS Development, UI/UX Design and Digital Transformation solutions for startups and enterprises.",

    keywords: [
        "Vilora Technologies Services",
        "Web development services India",
        "Mobile app development services",
        "AI development services India",
        "Cloud computing services",
        "SaaS application development",
        "Custom software development India",
        "UI UX design services",
        "Digital transformation company India",
        "IT services company in Pondicherry",
    ],

    authors: [{ name: "Vilora Technologies" }],
    creator: "Vilora Technologies",
    publisher: "Vilora Technologies",

    alternates: {
        canonical: "https://www.viloratechnologies.com/services",
    },

    openGraph: {
        title:
            "Vilora Technologies Services - Web, Mobile, AI & Cloud Solutions",
        description:
            "Professional Web Development, Mobile App Development, AI, SaaS and Cloud Solutions for modern businesses.",
        url: "https://www.viloratechnologies.com/services",
        siteName: "Vilora Technologies",
        type: "website",
        locale: "en_IN",
        images: [
            {
                url: "https://www.viloratechnologies.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Vilora Technologies IT Services",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Vilora Technologies Services | IT & Software Experts",
        description:
            "Scalable Web, Mobile App, AI and Cloud services for startups and enterprises.",
        images: ["https://www.viloratechnologies.com/og-image.jpg"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function Page() {
    return (
        <div className="bg-WhiteBackground">
            <Header />
            <Services />
            <Footer />
        </div>
    );
}