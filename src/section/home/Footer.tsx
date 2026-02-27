// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Twitter,
//   Send,
//   Shield,
// } from "lucide-react";
// import logo from "../../../public/assets/logo.webp";
// import Image from "next/image";
// // import button from "../assets/telegram.png";

// const Footer = () => {
//   const description =
//     "For several businesses and organizations in the sector, we are the trusted time resource! To equate their time directly with yours, anyone who follows the relation gets to choose their home place.";

//   const services = [
//     "Android Development",
//     "Web Development",
//     "SEO",
//     "Design",
//     "Digital Marketing",
//   ];

//   const quickLinks = ["About", "Services", "Our Works", "Contact"];

//   const follows = [
//     { href: "https://www.facebook.com/ViloraTechnologies/", Icon: Facebook },
//     { href: "https://www.instagram.com/viloratechnologies/", Icon: Instagram },
//     { href: "#", Icon: Twitter },
//     { href: "#", Icon: Linkedin },
//   ];

//   return (
//     <footer className="bg-[#0b1628] text-[#c8d6ec] font-sans">
//       <div className="text-white grid grid-cols-1 md:grid-cols-4 w-full gap-8 p-10">
//         <div className="flex flex-col gap-3">
//           <Image src={logo} width={150} height={40} alt="logo" />
//           <p className=" text-md text-gray-200 text-wrap">{description}</p>

//           <p className="font-bold mt-6">Follow Us:</p>
//           <div className="flex gap-3 mt-3">
//             {follows.map(({ Icon, href }, index) => (
//               <a
//                 key={index}
//                 href={href}
//                 className="bg-gray-400 duration-400 text-gray-700 hover:text-white hover:bg-blue-600 rounded-full p-2"
//               >
//                 <Icon size={18} />
//               </a>
//             ))}
//           </div>
//         </div>

//         <div className="">
//           <p className="font-bold text-lg lg:mt-4 lg:mb-5">Quick Links</p>
//           {quickLinks.map((item, index) => (
//             <p
//               key={index}
//               className="m-1 hover:ml-2 my-4 w-fit duration-500 hover:text-blue-500 cursor-pointer"
//             >
//               {item}
//             </p>
//           ))}
//         </div>

//         <div>
//           <p className="font-bold text-lg mt-4 lg:mb-5">Services</p>
//           {services.map((item, index) => (
//             <p
//               key={index}
//               className="m-1 my-4 hover:ml-2 w-fit duration-500 hover:text-blue-500 cursor-pointer"
//             >
//               {item}
//             </p>
//           ))}
//         </div>

//         <div className="flex flex-col  justify-center lg:mb-10">
//           <label className="text-xl font-bold mb-4">
//             Subscribe to our newsletter
//           </label>

//           <div className="relative">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="md:max-w-full w-full max-h-fit p-4 bg-[#1d293e] text-[#a9a591] outline-0"
//             />
//             <button className="absolute right-0 cursor-pointer top-0 h-full px-4 text-[#0075FF]">
//               <div className="border-l border-gray-500">
//                 <Send className="m-2  hover:rotate-45" />
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="bg-[#1d293e] border-t border-[#162236]">
//         <div className="max-w-7xl mx-auto px-8 text-md   py-5 flex flex-wrap items-center justify-between gap-4">
//           {/* Trust badge */}
//           <div className="flex items-center gap-2 text-[#4e6585]">
//             <Shield className="w-4 h-4 text-blue-600" />
//             Trusted partner in business excellence
//           </div>

//           {/* Copyright */}
//           <p className=" text-[#4e6585]">
//             © 2025{" "}
//             <strong className="text-[#8aa0c0] hover:text-blue-600">
//               Vilora Technologies
//             </strong>{" "}
//             All right reserved.
//           </p>

//           <div className="flex items-center gap-4">
//             <a
//               href="#"
//               className="text-[#4e6585] hover:text-[#c8d6ec] transition-colors duration-200"
//             >
//               Policy &amp; privacy
//             </a>
//             <span className="text-[#253650]">•</span>
//             <a
//               href="#"
//               className="text-[#4e6585] hover:text-[#c8d6ec] transition-colors duration-200"
//             >
//               Terms &amp; conditions
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
  Shield,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../../../public/assets/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);
  const col4Ref = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cols = [col1Ref.current, col2Ref.current, col3Ref.current, col4Ref.current];

      gsap.set(cols, { y: 50, opacity: 0 });
      gsap.set(bottomRef.current, { y: 20, opacity: 0 });

      ScrollTrigger.create({
        trigger: footerRef.current,
        start: "top 85%",
        onEnter: () => {
          gsap.to(cols, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          });
          gsap.to(bottomRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.5,
            ease: "power2.out",
          });
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const description =
    "For several businesses and organizations in the sector, we are the trusted technology resource. We help you establish your business growth with expert solutions.";

  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "SEO",
    "Digital Marketing"
  ];

  const quickLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Works", href: "/ourWorks" },
    { label: "Contact", href: "/contact" },
  ];

  const follows = [
    { href: "https://www.facebook.com/ViloraTechnologies/", Icon: Facebook },
    { href: "https://www.instagram.com/viloratechnologies/", Icon: Instagram },
    { href: "#", Icon: Twitter },
    { href: "#", Icon: Linkedin },
  ];

  const contactInfo = [
    { icon: Mail, label: "info@viloratechnologies.com", href: "mailto:info@viloratechnologies.com" },
    { icon: Phone, label: "+91 8610391458", href: "tel:8610391458" },
    { icon: MapPin, label: "1st Floor, 62, Vallalar Salai Rd, Venkata Nagar, Puducherry, 605011", href: "https://maps.app.goo.gl/bD5dBBDdvt1XbC4N7" },
  ];

  return (
    <footer ref={footerRef} className="bg-[#0d1b3e] text-[#c8d6ec] font-sans">
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#cf282e] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        <div ref={col1Ref} className="flex flex-col gap-4">
          <Image src={logo} width={150} height={40} alt="Vilora Logo" className="bg-white rounded-xl" />
          <p className="text-md text-white/60 leading-relaxed">{description}</p>




        </div>

        <div ref={col2Ref}>
          <p className="font-bold text-lg text-white mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-[#cf282e]">
            Quick Links
          </p>
          <ul className="flex flex-col gap-3 mt-4">
            {quickLinks.map(({ label, href }, i) => (
              <li key={i}>
                <Link
                  href={href}
                  className="flex items-center gap-2 text-md text-white/60 hover:text-white group transition-colors duration-200"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#cf282e] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div ref={col3Ref}>
          <p className="font-bold text-lg text-white mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-[#cf282e]">
            Services
          </p>
          <ul className="flex flex-col gap-3 mt-4">
            {services.map((item, i) => (
              <li key={i}>
                <span className="flex items-center gap-2 text-md text-white/60 hover:text-white cursor-pointer group transition-colors duration-200">
                  <ArrowRight className="w-3.5 h-3.5 text-[#cf282e] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>




        <div ref={col4Ref} className="flex flex-col gap-4">
          <p className="font-bold text-lg text-white mb-2 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-[#cf282e]">
            Follow Us
          </p>
          <div className="mt-2 flex flex-col gap-2.5">
            {contactInfo.map(({ icon: Icon, label, href }, i) => (
              <a
                key={i}
                href={href}
                className="flex items-center gap-2.5 text-md text-white/50 hover:text-[#cf282e] transition-colors duration-200 group"
              >
                <span className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-[#cf282e]/20 flex items-center justify-center transition-colors duration-200 shrink-0">
                  <Icon className="w-3.5 h-3.5" />
                </span>
                {label}
              </a>
            ))}
          </div>
          <div className="flex gap-3">
            {follows.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#cf282e] hover:text-white hover:border-[#cf282e] transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>



        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="border-t border-white/10" />
      </div>

      <div ref={bottomRef} className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-white/30">
          <Shield className="w-4 h-4 text-[#cf282e]/60" />
          Trusted partner in business excellence
        </div>

        <p className="text-xs text-white/30">
          © {new Date().getFullYear()}{" "}
          <strong className="text-white/60 hover:text-[#cf282e] transition-colors cursor-pointer">
            Vilora Technologies
          </strong>{" "}
          — All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-xs">
          <a href="#" className="text-white/30 hover:text-white transition-colors duration-200">
            Policy &amp; Privacy
          </a>
          <span className="text-white/20">•</span>
          <a href="#" className="text-white/30 hover:text-white transition-colors duration-200">
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;