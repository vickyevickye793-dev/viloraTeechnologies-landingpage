// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { servicesData, Service } from "../../component/localDb/servicesData";
// import backgroundImage from "../../../public/assets/services/card-background.webp";

// import { usePathname } from "next/navigation";
// import { ArrowRight } from "lucide-react";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { keyFeatureData } from "@/src/component/localDb/ketFeatureData";

// const Services = () => {
//   const pathname = usePathname();
//   const isHomePage = pathname === "/";



//   return (
//     <div>
//       <section className="bg-white py-20 px-6">
//         <div className="text-center max-w-4xl mx-auto mb-14">
//           <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
//             Our Services
//           </h2>
//           {!isHomePage && (
//             <p className="text-gray-500 font-bold leading-relaxed">
//               We deliver innovative and scalable digital solutions tailored to
//               your business goals. Our services combine strategy, technology,
//               and creativity to build powerful digital experiences. We focus on
//               performance, security, and long-term growth while ensuring
//               cost-effective and timely delivery. Our mission is to transform
//               ideas into impactful technology solutions that drive measurable
//               success for our clients.
//             </p>
//           )}
//         </div>

//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
//           {servicesData.map((service: Service) => {
//             const Icon = service.icon;

//             return (
//               <div
//                 key={service.id}
//                 className="relative overflow-hidden bg-white rounded-2xl p-8 shadow-md 
//                             transition-all duration-500 ease-in-out hover:shadow-xl group"
//               >
//                 <div className="mb-6 relative z-10">
//                   <Icon
//                     size={50}
//                     className="text-primary transition-all duration-500 ease-in-out 
//                                      group-hover:text-white group-hover:scale-110"
//                   />
//                 </div>

//                 <h3
//                   className="text-xl font-bold text-primary mb-4 relative z-10
//                              transition-colors duration-500 ease-in-out group-hover:text-white"
//                 >
//                   {service.title}
//                 </h3>

//                 <p
//                   className="text-gray-600 leading-relaxed text-sm relative z-10
//              transition-colors duration-500 ease-in-out group-hover:text-white"
//                 >
//                   {service.description}
//                 </p>

//                 <div
//                   className="absolute inset-0 opacity-0 scale-105 overflow-hidden 
//                                 transition-all duration-700 ease-in-out 
//                                 group-hover:opacity-100 group-hover:scale-100"
//                 >
//                   <Image
//                     alt=""
//                     fill
//                     src={backgroundImage}
//                     className="object-cover"
//                   />
//                   <div className="bg-secondary/40 absolute inset-0 transition-opacity duration-700"></div>
//                   /
//                   <span
//                     className="absolute inset-0 
//                                     bg-[linear-gradient(110deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_40%,rgba(255,255,255,0.45)_50%,rgba(255,255,255,0)_60%,rgba(255,255,255,0)_100%)]
//                                     translate-x-[-100%]
//                                     group-hover:animate-[shine_0.6s_ease-out]
//                                     pointer-events-none"
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         {!isHomePage && (
//           <div className="text-center mt-16">
//             <p className="text-gray-600 mb-6">
//               Let’s collaborate to turn your ideas into reality with innovative
//               technology solutions.
//             </p>
//             <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-all duration-300">
//               Get Started
//             </button>
//           </div>
//         )}
//       </section>


//     </div>
//   );
// };

// export default Services;




"use client";

import Image from "next/image";
import { servicesData, Service } from "../../component/localDb/servicesData";
import backgroundImage from "../../../public/assets/services/card-background.webp";
import { Zap, ShieldCheck, Lightbulb, Rocket } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
const Services = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const bgTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(headlineRef.current, {
        x: -60,
        opacity: 0,
        duration: 0.9,
      })

        .from(
          subtitleRef.current,
          { x: 40, opacity: 0, duration: 0.7 },
          "-=0.4",
        )

        .from(divRef.current, { y: 40, opacity: 0, duration: 0.5 }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(bgTextRef.current, {
        y: 100,
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="">

      <section className="  ">
        {!isHomePage && (
          <header className="relative pt-10  md:pt-28 lg:py-28 overflow-hidden  text-center">

            <h1
              ref={bgTextRef}
              aria-hidden="true"
              className="absolute  inset-0 flex  justify-center  tracking-[0.2em] md:pl-10 
            text-[80px] mt-8 md:mt-20 md:text-[150px] lg:mt-0 lg:text-[240px] 
            font-black text-secondary/5 select-none pointer-events-none"
            >
              VILORA
            </h1>

            <div className="relative max-w-4xl mx-auto flex flex-col items-center gap-5">

              <span className="uppercase tracking-[0.4em] text-primary text-sm font-semibold">
                What We Offer
              </span>

              <h2
                ref={headlineRef}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px]
              font-bold text-[#0b1628] leading-tight"
              >
                Our <span className="text-primary">Services</span>
              </h2>

              <div className="w-16 h-1 bg-primary rounded-full"></div>



              {!isHomePage && (
                <p
                  ref={subtitleRef}
                  className="text-[#364052] text-lg md:text-xl leading-relaxed max-w-2xl"
                >
                  We provide innovative web development, modern digital solutions, and scalable technology services designed to help businesses grow, improve efficiency, and create powerful digital experiences.
                </p>
              )}

              {!isHomePage && (
                <div className="flex flex-wrap justify-center gap-6 pb-20 text-sm text-gray-600 font-semibold">

                  <div className="flex items-center gap-2">
                    <Zap size={18} className="text-primary animate-pulse" />
                    <span>Fast Delivery</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <ShieldCheck size={18} className="text-primary animate-pulse" />
                    <span>Secure Solutions</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Lightbulb size={18} className="text-primary animate-pulse" />
                    <span>Modern Technology</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Rocket size={18} className="text-primary animate-pulse" />
                    <span>Scalable Development</span>
                  </div>

                </div>
              )}

            </div>
          </header>
        )}


        {isHomePage && (
          <div className=" max-w-4xl mx-auto flex flex-col items-center  pb-10">
            <span className="uppercase tracking-[0.4em] text-primary text-sm font-semibold">
              What We Offer
            </span>

            <h2
              ref={headlineRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px]
              font-bold text-[#0b1628] leading-tight"
            >
              Our <span className="text-primary">Services</span>
            </h2>

            <div className="w-16 h-1 bg-primary rounded-full"></div>

            <p className="text-gray-500 font-bold leading-relaxed mt-5">Innovative Digital Solutions Designed to Grow Your Business and Accelerate Success</p>
          </div>
        )}


        <div className=" grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-5 lg:px-0">


          {servicesData.map((service: Service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="relative overflow-hidden bg-white rounded-2xl p-8 shadow-md 
                            transition-all duration-500 ease-in-out hover:shadow-xl group"
              >
                <div className="mb-6 relative z-10">
                  <Icon
                    size={50}
                    className="text-primary transition-all duration-500 ease-in-out 
                                     group-hover:text-white group-hover:scale-110"
                  />
                </div>

                <h3
                  className="text-xl font-bold text-primary mb-4 relative z-10
                             transition-colors duration-500 ease-in-out group-hover:text-white"
                >
                  {service.title}
                </h3>

                <p
                  className="text-gray-600 leading-relaxed text-sm relative z-10
             transition-colors duration-500 ease-in-out group-hover:text-white"
                >
                  {service.description}
                </p>

                <div
                  className="absolute inset-0 opacity-0 scale-105 overflow-hidden 
                  transition-all duration-700 ease-in-out 
                  group-hover:opacity-100 group-hover:scale-100"
                >
                  <Image
                    alt=""
                    fill
                    src={backgroundImage}
                    className="object-cover"
                  />
                  <div className="bg-secondary/40 absolute inset-0 transition-opacity duration-700"></div>
                  /
                  <span
                    className="absolute inset-0 
                    bg-[linear-gradient(110deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_40%,rgba(255,255,255,0.45)_50%,rgba(255,255,255,0)_60%,rgba(255,255,255,0)_100%)]
                    translate-x-full
                    group-hover:animate-[shine_0.6s_ease-out]
                    pointer-events-none"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {!isHomePage && (
          <div className="max-w-4xl mx-auto text-center mt-20">
            <h3 className="text-3xl font-bold text-secondary mb-8">
              Why Choose Our Services
            </h3>

            <ul className="grid md:grid-cols-2 gap-6 text-gray-600 font-medium">
              <li>✔ Experienced Development Team</li>
              <li>✔ Scalable & Secure Architecture</li>
              <li>✔ Modern UI/UX Design</li>
              <li>✔ End-to-End Project Support</li>
            </ul>
          </div>
        )}

        {!isHomePage && (
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Let’s collaborate to turn your ideas into reality with innovative
              technology solutions.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-all duration-300">
              Get Started
            </button>
          </div>
        )}
      </section>


    </div>
  );
};

export default Services;