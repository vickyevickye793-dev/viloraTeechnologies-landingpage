// import Link from "next/link";
// import Image from "next/image";
// import { LayoutGrid, ChevronDown, ArrowRight } from "lucide-react";
// import logo from "../../../public/assets/logo.webp";

// const navItems = [
//   { label: "Home", href: "/", hasDropdown: false, active: true },
//   { label: "About", href: "/about", hasDropdown: false },
//   { label: "Services", href: "/services", hasDropdown: false },
//   { label: "Our Works", href: "/portfolios", hasDropdown: true },
//   { label: "Contact", href: "/contact", hasDropdown: false },
// ];

// const Header = () => {
//   return (
//     <header className=" px-6 py-4 z-50 relative" >
//       <div className="flex items-center justify-between bg-white rounded-full px-6 lg:px-10 h-20 shadow-sm">

//         <Link href="/" className="shrink-0">
//           <Image src={logo} alt="Vilora Logo" width={140} height={40} />
//         </Link>

//         <nav className="hidden lg:flex flex-1 justify-center">
//           <ul className="flex items-center gap-1">
//             {navItems.map((item, i) => (
//               <li key={i}>
//                 <Link
//                   href={item.href}
//                   className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200
//                     ${item.active
//                       ? "text-[#cf282e]"
//                       : "text-[#0d1b3e] hover:text-[#cf282e]"
//                     }`}
//                 >
//                   {item.label}
//                   {item.hasDropdown && (
//                     <ChevronDown className="w-3.5 h-3.5 opacity-70" />
//                   )}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         <div className="flex items-center gap-4">
//           <button className="flex items-center gap-1.5 text-sm font-semibold  hover:text-primary transition-colors duration-200">
//             <span className="hidden md:inline">Menu</span>

//             <LayoutGrid className="w-6 h-6 md:w-4 md:h-4" />
//           </button>

//           <Link
//             href="/contact"
//             className="hidden md:flex items-center gap-2 bg-black hover:bg-primary text-white text-sm font-bold px-5 py-3 rounded-full transition-colors duration-200 whitespace-nowrap"
//           >
//             <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0">
//               <ArrowRight className="w-3.5 h-3.5" />
//             </span>
//             Get a Quote
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



"use client";

import Link from "next/link";
import Image from "next/image";
import { LayoutGrid, ChevronDown, ArrowRight, X } from "lucide-react";
import logo from "../../../public/assets/logo.webp";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Project1 from "../../../public/assets/Projects/project1.webp"
import Project2 from "../../../public/assets/Projects/project2.webp"
import Project3 from "../../../public/assets/Projects/project3.webp"
import Project4 from "../../../public/assets/Projects/project4.webp"
import Project5 from "../../../public/assets/Projects/project5.webp"
import Project6 from "../../../public/assets/Projects/project6.webp"
import Project7 from "../../../public/assets/Projects/project7.webp"
import Project8 from "../../../public/assets/Projects/project8.webp"
import Project9 from "../../../public/assets/Projects/project9.webp"
import Project10 from "../../../public/assets/Projects/project10.webp"
import Project11 from "../../../public/assets/Projects/project11.webp"
import Project12 from "../../../public/assets/Projects/project12.webp"
import Project13 from "../../../public/assets/Projects/project13.webp"
import Project14 from "../../../public/assets/Projects/project14.webp"
import Project15 from "../../../public/assets/Projects/project15.webp"
import Project16 from "../../../public/assets/Projects/project16.webp"
import Project17 from "../../../public/assets/Projects/project17.webp"
import Project18 from "../../../public/assets/Projects/project18.webp"

const navItems = [
  { label: "Home", href: "/", hasDropdown: false, active: true },
  { label: "About", href: "/about", hasDropdown: false },
  { label: "Services", href: "/services", hasDropdown: false },
  { label: "Our Projects", href: "/our-projects", hasDropdown: false },
  { label: "Contact", href: "/contact", hasDropdown: false },
  { label: "Internship", href: "/internship-in-pondicherry", hasDropdown: false },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [works, setWorks] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLLIElement[]>([]);
  const menuBottomRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const panel = menuPanelRef.current;
    const items = menuItemsRef.current;
    const bottom = menuBottomRef.current;

    // Set initial states
    gsap.set(overlay, { autoAlpha: 0 });
    gsap.set(panel, { xPercent: 100 });
    gsap.set(items, { x: 40, autoAlpha: 0 });
    gsap.set(bottom, { y: 20, autoAlpha: 0 });

    tl.current = gsap
      .timeline({ paused: true })
      .to(overlay, { autoAlpha: 1, duration: 0.3, ease: "power2.out" })
      .to(panel, { xPercent: 0, duration: 0.45, ease: "power3.out" }, "<0.05")
      .to(
        items,
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.4,
          stagger: 0.07,
          ease: "power3.out",
        },
        "-=0.2"
      )
      .to(bottom, { y: 0, autoAlpha: 1, duration: 0.3, ease: "power2.out" }, "-=0.1");
  }, []);

  useEffect(() => {
    if (!tl.current) return;
    if (menuOpen) {
      tl.current.play();
      document.body.style.overflow = "hidden";
    } else {
      tl.current.reverse();
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const projects = [
    {
      id: 1,
      name: "Singatour",
      img: Project1,
      url: "https://singatour.com/"
    },
    {
      id: 2,
      name: "BEN Forum",
      img: Project2,
      url: "http://benforum.com/index.html"
    },
    {
      id: 3,
      name: "Mirthi Studios",
      img: Project3,
      url: "http://mirthistudios.com/"
    },
    {
      id: 4,
      name: "Shiny Pearls Dental Care",
      img: Project4,
      url: "http://shinypearlsdentalcare.com/"
    },
    {
      id: 5,
      name: "Amman Organic ",
      img: Project5,
      url: "http://103.186.185.245:8087/index.html"
    },
    {
      id: 6,
      name: "Plan Mydream Event",
      img: Project6,
      url: "#"
    },
    {
      id: 7,
      name: "Vilora Shopping",
      img: Project7,
      url: "#"
    },
    {
      id: 8,
      name: "Infinite Studio",
      img: Project8,
      url: "#"
    },
    {
      id: 9,
      name: "Niva Foods",
      img: Project9,
      url: "https://www.nivafoods.com.sg/"
    },
    {
      id: 10,
      name: "Happy Moment",
      img: Project10,
      url: "#"
    },
    {
      id: 11,
      name: "Pondy Bajar",
      img: Project11,
      url: "#"
    },
    {
      id: 12,
      name: "Cervo Care",
      img: Project12,
      url: "https://cervocare.com/"
    },
    {
      id: 13,
      name: "Aeroseptix",
      img: Project13,
      url: "http://aeroseptix.in/"
    },
    {
      id: 14,
      name: "Bharrathividyashram",
      img: Project14,
      url: "#"
    },
    {
      id: 15,
      name: "Nadi Astro Bhava",
      img: Project15,
      url: "https://nadiastrobhava.com/"
    },
    {
      id: 16,
      name: "Job Portal",
      img: Project16,
      url: "#"
    },
    {
      id: 17,
      name: "Cervo Care App",
      img: Project17,
      url: "https://play.google.com/store/search?q=cervo+care&c=apps&hl=en-IN"
    },
    {
      id: 18,
      name: "Vilora Shopping App",
      img: Project18,
      url: "#"
    },

  ]
  return (
    <>
      <header className="px-6 py-4 z-50 relative">
        <div className="flex items-center justify-between bg-white rounded-full px-6 lg:px-10 h-20 shadow-sm">
          <Link href="/" className="shrink-0">
            <Image src={logo} alt="Vilora Logo" width={140} height={40} />
          </Link>

          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-1">
              {navItems.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-2 text-[18px] font-extrabold rounded-full transition-colors duration-200
                      ${item.active
                        ? "text-[#cf282e]"
                        : "text-[#0d1b3e] hover:text-[#cf282e]"
                      }`}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-1.5 text-sm font-semibold hover:text-[#cf282e] transition-colors duration-200 lg:hidden"
              aria-label="Open menu"
            >
              <LayoutGrid className="w-6 h-6" />
            </button>


            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-2 bg-black hover:bg-primary text-white text-sm font-bold px-5 py-3 rounded-full transition-colors duration-200 whitespace-nowrap group"
            >
              <span className="w-6 h-6 bg-[#cf282e] group-hover:bg-white rounded-full flex items-center justify-center shrink-0 transition-colors duration-200">
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:text-black transition-colors duration-200" />
              </span>
              Get a Quote
            </Link>


          </div>
        </div>
      </header>

      <div
        ref={overlayRef}
        onClick={closeMenu}
        className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
        style={{ visibility: "hidden" }}
      />

      <div
        ref={menuPanelRef}
        className="fixed top-0 right-0 h-full w-[80vw] max-w-sm bg-white z-[70] flex flex-col lg:hidden shadow-2xl"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Image src={logo} alt="Vilora Logo" width={110} height={32} />
          <button
            onClick={closeMenu}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#cf282e] hover:text-white flex items-center justify-center transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-6 pt-8 overflow-y-auto">
          <ul className="flex flex-col gap-1">
            {navItems.map((item, i) => (
              <li
                key={i}
                ref={(el) => {
                  if (el) menuItemsRef.current[i] = el;
                }}
              >
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-semibold transition-colors duration-200
                    ${item.active
                      ? "bg-[#cf282e]/10 text-[#cf282e]"
                      : "text-[#0d1b3e] hover:bg-gray-100 hover:text-[#cf282e]"
                    }`}
                >
                  {item.label}
                  {item.hasDropdown ? (
                    <ChevronDown className="w-4 h-4 opacity-60" />
                  ) : (
                    <ArrowRight className="w-4 h-4 opacity-30" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          ref={menuBottomRef}
          className="px-6 py-6 border-t border-gray-100"
        >
          <Link
            href="/contact"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 w-full bg-black hover:bg-[#cf282e] text-white text-sm font-bold px-5 py-4 rounded-full transition-colors duration-200"
          >
            <span className="w-6 h-6 bg-[#cf282e] rounded-full flex items-center justify-center shrink-0">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
            Get a Quote
          </Link>

          <p className="text-center text-xs text-gray-400 mt-4">
            © {new Date().getFullYear()} VILORA TECHNOLOGIES. All rights reserved.
          </p>
        </div>
      </div>
      {works && (
        <div className="absolute grid grid-cols-3 gap-5 bg-black/30 z-50 p-10 w-full h-fit backdrop-blur-3xl">
          {
            projects.map(({ name, img, url, id }) => (
              <Link href={url} key={id} className="h-fit w-fit border relative border-gray-400">
                <div className=" absolute opacity-0 hover:opacity-100 duration-500 bg-black/40 w-full h-full inset-0 flex items-center justify-center">
                  <div className="bg-white text-black p-1 rounded-4xl flex items-center"><span className="bg-[#0075FF] p-3 rounded-full"><ArrowRight /></span><span className="mx-4">View Website</span></div>
                </div>
                <Image width={400} height={400} src={img} alt="Projext" />
                <p className="text-center text-black font-bold p-3">{name}</p>
              </Link>
            ))
          }
        </div>
      )}
    </>
  );
};

export default Header;