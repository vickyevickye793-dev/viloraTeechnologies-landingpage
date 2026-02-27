import Header from "../../src/section/home/Header"
import Footer from "../../src/section/home/Footer"
import Contact from "../../src/section/home/Contact"

export const metadata = {
    metadataBase: new URL("https://www.viloratechnologies.com"),

    title:
        "Contact Vilora Technologies | Get in Touch with Our IT Experts",

    description:
        "Contact Vilora Technologies for Web Development, Mobile App Development, AI Solutions, Cloud Services and Digital Transformation. Let's build your next big idea together.",

    keywords: [
        "Contact Vilora Technologies",
        "IT company contact India",
        "Software company contact Pondicherry",
        "Web development company contact",
        "Mobile app development contact",
        "AI development company India",
        "Cloud services company contact",
        "Hire software developers India",
    ],

    authors: [{ name: "Vilora Technologies" }],
    creator: "Vilora Technologies",
    publisher: "Vilora Technologies",

    alternates: {
        canonical: "https://www.viloratechnologies.com/contact",
    },

    openGraph: {
        title:
            "Contact Vilora Technologies - IT & Software Development Company India",
        description:
            "Reach out to Vilora Technologies for professional Web, Mobile App, AI and Cloud solutions.",
        url: "https://www.viloratechnologies.com/contact",
        siteName: "Vilora Technologies",
        type: "website",
        locale: "en_IN",
        images: [
            {
                url: "https://www.viloratechnologies.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Contact Vilora Technologies - IT Company India",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Contact Vilora Technologies | IT Experts",
        description:
            "Get in touch with Vilora Technologies for scalable software and digital solutions.",
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
            <Contact />
            <Footer />
        </div>
    );
}