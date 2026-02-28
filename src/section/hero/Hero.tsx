// import { ArrowDown } from "lucide-react";
// import heroBanner from "../../../public/assets/hero-banner4.png"
// import Image from "next/image";
// import Shape from "../../../public/assets/shapes.webp";
// const Hero = () => {
//   return (
//     <div className=" relative">
//       <div className="absolute -right-100 -top-100 w-200 h-200 bg-[#cf282e] rounded-full blur-[180px] "></div>

//       <div className="absolute -top-40 right-0 w-[350px] h-[350px] opacity-80">
//         <Image
//           src={Shape}
//           alt="shape"
//           fill
//           className="object-contain"
//           priority
//         />
//       </div>
//       <section className=" min-h-[90vh] ">

//         <div className=" h-120 flex flex-col justify-center pl-42  ">
//           <h1 className=" cursor-default text-5xl  lg:text-6xl xl:text-7xl font-extrabold text-black leading-[1.1] tracking-tight mb-4">
//             Web, Mobile Apps <br /> Development &amp; <br />
//             <span className="text-primary">Digital Marketing</span>
//           </h1>

//           <div className="">
//             <p className="text-sm text-[#4a5568] leading-relaxed  ">
//               <span className="text-primary text-lg font-bold mt-0.5">*</span>
//               Establish your business growth with our expert technology solutions.
//             </p>
//           </div>
//         </div>



//         <div className=" relative w-full  ">
//           <div className="h-100  overflow-hidden  object-contain object-bottom">
//             <Image className="" src={heroBanner} alt="bg" />
//           </div>
//           <div className=" hidden md:block absolute z-50 -top-20 right-80 w-42 h-42 pointer-events-none rounded-full bg-[#e8eef6] border-white border-8">
//             <div className="relative w-full h-full bg-primary rounded-full">
//               <svg
//                 className="absolute inset-0 animate-spin-slow w-full h-full"
//                 viewBox="0 0 100 100"
//                 style={{ animation: "spin 12s linear infinite" }}
//               >
//                 <defs>
//                   <path
//                     id="circle"
//                     d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
//                   />
//                 </defs>
//                 <text
//                   fontSize="10.5"
//                   fontWeight="600"
//                   fill="#ffffff"
//                   letterSpacing="1.5"
//                 >
//                   <textPath href="#circle"> . VILORA TECHNOLOGIES . Pvt Ltd</textPath>
//                 </text>
//               </svg>

//               <div className="absolute inset-0 m-auto w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
//                 <ArrowDown className="w-5 h-5 text-black" />
//               </div>

//               <div className="absolute inset-0 rounded-full bg-[#0d1b3e] -z-10" />
//             </div>
//           </div>
//         </div>


//       </section>
//     </div>
//   );
// };

// export default Hero;





"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Shape from "../../../public/assets/shapes.webp";
import { gsap } from "gsap";
import MarqueeSection from "@/src/component/common/MarqueeSection";


const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Initial states
      gsap.set(glowRef.current, { scale: 0.3, opacity: 0 });
      gsap.set(shapeRef.current, { x: 60, opacity: 0 });
      gsap.set(headlineRef.current, { y: 60, opacity: 0 });
      gsap.set(subtitleRef.current, { y: 30, opacity: 0 });
      gsap.set(bannerRef.current, { y: 50, opacity: 0 });
      gsap.set(badgeRef.current, { scale: 0.5, opacity: 0, rotation: -30 });

      tl
        // Glow blob
        .to(glowRef.current, { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" }, 0)
        // Shape
        .to(shapeRef.current, { x: 0, opacity: 0.85, duration: 0.9 }, 0.1)
        // Headline — word by word
        .to(headlineRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.25)
        // Subtitle
        .to(subtitleRef.current, { y: 0, opacity: 1, duration: 0.6 }, 0.5)
        // Banner image
        .to(bannerRef.current, { y: 0, opacity: 1, duration: 0.9 }, 0.4)
        // Spinning badge
        .to(
          badgeRef.current,
          { scale: 1, opacity: 1, rotation: 0, duration: 0.7, ease: "back.out(1.6)" },
          0.75
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div
        ref={glowRef}
        className="absolute -right-60 -top-80 w-125 h-125 md:w-175 md:h-175 bg-[#cf282e] rounded-full blur-[180px] opacity-20 pointer-events-none"
      />

      <div
        ref={shapeRef}
        className="absolute -top-30 right-0 w-50 h-50 lg:w-70 lg:h-70 md:w-87.5 md:h-87.5 opacity-80 pointer-events-none z-0"
      >
        <Image src={Shape} alt="shape" fill className="object-contain" priority />
      </div>

      <section className="">
        <div className="relative z-10 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:pl-42 pt-16 md:pt-24 pb-8">
          <h1
            ref={headlineRef}
            className="cursor-default text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-[1.1] tracking-tight mb-5"
          >
            Web, Mobile Apps <br className="hidden sm:block" /> Development &amp;{" "}
            <br className="hidden sm:block" />
            <span className="text-[#cf282e]">Digital Marketing</span>
          </h1>

          <div ref={subtitleRef}>
            <p className="text-sm sm:text-base text-[#4a5568] font-bold leading-relaxed max-w-lg text-nowrap">
              <span className="text-[#cf282e] text-lg font-bold mr-1">*</span>
              Establish your business growth with our expert technology solutions.
            </p>
          </div>
        </div>

        <div className="relative w-full bg-primary" style={{ maxHeight: "420px" }}>
          {/* <div
            ref={bannerRef}
            className="w-full overflow-hidden"
            style={{ maxHeight: "420px" }}
          >
            <Image
              src={heroBanner}
              alt="Hero banner"
              className="w-full object-cover object-bottom"
              priority
            />
          </div> */}

          {/* <div
            ref={badgeRef}
            className="hidden md:block absolute z-50 -top-20 right-20 lg:right-80 w-40 h-40 lg:w-44 lg:h-44 pointer-events-none rounded-full bg-[#e8eef6] border-white border-8"
          >
            <div className="relative w-full h-full bg-[#cf282e] rounded-full">
              <svg
                className="absolute inset-0 w-full h-full spin-animation"
                viewBox="0 0 100 100"
                style={{ animation: "spin 12s linear infinite" }}
              >
                <defs>
                  <path
                    id="circle"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text fontSize="10.5" fontWeight="600" fill="#ffffff" letterSpacing="1.5">
                  <textPath href="#circle"> . VILORA TECHNOLOGIES . Pvt Ltd</textPath>
                </text>
              </svg>

              <div className="absolute inset-0 m-auto w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <ArrowDown className="w-5 h-5 text-black" />
              </div>

              <div className="absolute inset-0 rounded-full bg-[#0d1b3e] -z-10" />
            </div>
          </div> */}

          <div className="mt-10">
            <MarqueeSection />
          </div>

        </div>
      </section>


    </div>
  );
};

export default Hero;