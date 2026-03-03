interface FooterType {
  description: string;
  services: string[];
  quickLinks: { label: string; href: string }[];
  follows: { name: string; href: string }[];
  contactInfo: { type: string; label: string; href: string }[];
}

export const FooterData: FooterType = {
  description:
    "For several businesses and organizations in the sector, we are the trusted technology resource. We help you establish your business growth with expert solutions.",

  services: [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "SEO",
    "Digital Marketing",
  ],

  quickLinks: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Works", href: "/our-projects" },
    { label: "Our Products", href: "/our-products"},
    { label: "Contact", href: "/contact" },
  ],

  follows: [
    {
      name: "facebook",
      href: "https://www.facebook.com/ViloraTechnologies/",
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/viloratechnologies?igsh=b3YwejFtYjRtbW8y",
    },
    {
      name: "linkedin",
      href: "#",
    },
  ],

  contactInfo: [
    {
      type: "mail",
      label: "info@viloratechnologies.com",
      href: "mailto:info@viloratechnologies.com",
    },
    {
      type: "phone",
      label: "+91 8610391458",
      href: "tel:8610391458",
    },
    {
      type: "location",
      label:
        "1st Floor, 62, Vallalar Salai Rd, Venkata Nagar, Puducherry, 605011",
      href: "https://maps.app.goo.gl/RZWDAnrVS584vrcS9",
    },
  ],
};