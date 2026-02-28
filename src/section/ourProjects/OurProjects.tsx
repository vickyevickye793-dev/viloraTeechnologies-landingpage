// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { OurWorks } from "../../component/localDb/OurWorks";

// export default function ServicesSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const data = OurWorks;

//   console.log(data)

//   // Auto Slide
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) =>
//         prev + 3 >= data.length ? 0 : prev + 1
//       );
//     }, 4000); // 4 seconds

//     return () => clearInterval(timer);
//   }, [data.length]);

//   return (
//     <section className="bg-white py-20 px-4 min-h-screen flex flex-col items-center">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl md:text-5xl font-bold text-[#0a1d37] leading-tight">
//           Our Works
//         </h2>
//       </div>

//       <div className="max-w-7xl w-full overflow-hidden relative">
//         <div
//           className="flex transition-transform duration-700 ease-in-out gap-6"
//           style={{
//             transform: `translateX(-${currentIndex * (100 / 3.1)}%)`,
//           }}
//         >
//           {data.map((project) => (
//             <div
//               key={project.id}
//               className="min-w-full md:min-w-[calc(33.333%-1rem)]
//               relative group h-[480px] rounded-sm overflow-hidden"
//             >
//               <Image
//                 src={project.img}
//                 alt={project.name}
//                 fill
//                 className="absolute inset-0 w-full h-full object-cover 
//                 grayscale transition-all duration-500 
//                 group-hover:grayscale-0 group-hover:scale-105"
//               />

//               <div className="relative z-10 p-10 flex justify-center">
//                 <h3 className="text-white text-2xl text-center font-bold leading-tight max-w-[200px]">
//                   {project.name}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex gap-2 mt-10">
//         {Array.from({ length: data.length - 2 }).map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrentIndex(idx)}
//             className={`h-1.5 transition-all duration-500 rounded-full ${
//               currentIndex === idx
//                 ? "w-10 bg-primary"
//                 : "w-2 bg-primary/30"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { OurWorks } from "../../component/localDb/ourWorks";
import { usePathname } from "next/navigation";

export default function OurProjects() {

    const [activeCategory, setActiveCategory] = useState("All");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const sliderRef = useRef(null);
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const data = OurWorks || [];


    useEffect(() => {
        if (!data.length) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, 3000);

        return () => clearInterval(timer);
    }, [data.length]);

    useEffect(() => {
        if (currentIndex === data.length) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, 700);
        }
    }, [currentIndex, data.length]);

    useEffect(() => {
        if (!isTransitioning) {
            setTimeout(() => {
                setIsTransitioning(true);
            }, 50);
        }
    }, [isTransitioning]);

    if (!data.length) return null;

    const categories = [
        "All", ...[...new Set(data.map(item => item.category))].sort((a, b) => {
            if (a === "OtherSites") return 1;
            if (b === "OtherSites") return -1;
            return a.localeCompare(b);
        })
    ];

    const filteredData =
        activeCategory === "All"
            ? data
            : data.filter(item => item.category === activeCategory);

    return (
        <section className="bg-white py-20 px-4 min-h-screen flex flex-col items-center">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-secondary">
                    Our Works
                </h2>
            </div>

            {!isHomePage && (
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full transition-all duration-300 ${activeCategory === cat
                                ? "bg-primary text-white"
                                : "bg-gray-200 text-gray-700"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            )}

            {isHomePage ? (
                <div className="max-w-7xl w-full overflow-hidden relative">
                    <div
                        ref={sliderRef}
                        className={`flex gap-6 ${isTransitioning
                            ? "transition-transform duration-700 ease-in-out"
                            : ""
                            }`}
                        style={{
                            transform: `translateX(-${currentIndex * 20}%)`,
                        }}
                    >
                        {data.map((project, index) => (
                            <div
                                key={index}
                                className="min-w-full h-[300px] md:min-w-[33.33%] relative group md:h-[480px] rounded-sm overflow-hidden"
                            >
                                <Image
                                    src={isHomePage ? project.homeImg : project.pageImg}
                                    alt={project.name}
                                    fill
                                    className="object-cover grayscale-90 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 flex top-5 justify-center ">
                                    <h3 className="text-white text-2xl font-bold text-center px-4">
                                        {project.name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-2 mt-10">
                        {Array.from({ length: data.length - 2 }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-1.5 transition-all duration-500 rounded-full ${currentIndex === idx
                                    ? "w-10 bg-primary"
                                    : "w-2 bg-primary/30"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="w-full grid md:grid-cols-4 gap-8">
                    {filteredData.map((project) => (
                        <a
                            key={project.id}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <div className="w-[230px]">

                                <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
                                    <Image
                                        src={isHomePage ? project.homeImg : project.pageImg}
                                        alt={project.name}
                                        fill
                                        className="object-cover transition-all duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <h3 className="text-secondary text-lg font-semibold text-center mt-3">
                                    {project.name}
                                </h3>

                            </div>
                        </a>
                    ))}
                </div>
            )}

        </section>
    );
}