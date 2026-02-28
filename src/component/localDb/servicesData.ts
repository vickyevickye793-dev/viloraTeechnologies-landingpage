import { Code2, Smartphone, Megaphone, Search, Globe2, Palette, ShoppingCart, AppWindow } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}



export const servicesData: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We implement reliable open source technologies which allow us to deliver you a high quality and cost effective solution.",
    icon: Code2,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Mobilize your business with our mobile app development services and solutions to get high performing and customer-centric app.",
    icon: Smartphone,
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "Your complete solution for online marketing strategies to increase online sales and drive highly targeted traffic to your website/apps.",
    icon: Megaphone,
  },
  {
    id: 4,
    title: "Local SEO",
    description:
      "We help business owners to generate more local leads, get more customers and grow their business with Local SEO service.",
    icon: Search,
  },
  {
    id: 5,
    title: "Global SEO",
    description:
      "We offer result driven SEO services to rank your website on the first page of Google to generate more traffic and leads.",
    icon: Globe2,
  },
  {
    id: 6,
    title: "Logo Design",
    description:
      "A logo is the foundation of your company’s brand identity. Get a unique logo, brochure, flyer and package designs that speaks about you.",
    icon: Palette,
  },
  {
    id: 7,
    title: "E-Commerce Solutions",
    description:
      "We build your dream online store with integrating seamless WooCommerce plug-in and themes at an affordable rate.",
    icon: ShoppingCart,
  },
  {
    id: 8,
    title: "On Demand App Products",
    description:
      "Launch your own Ecommerce Mobile App. We specialize in building food ordering, grocery, gifts and delivery apps.",
    icon: AppWindow,
  },
];