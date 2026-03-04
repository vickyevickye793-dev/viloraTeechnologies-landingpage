"use client"

import { useEffect , useRef } from "react";
import { keyFeatureData } from "@/src/component/localDb/ketFeatureData";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

const KeyFeature = () => {

  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);



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
          y: 40,
          opacity: 0,
          duration: 0.9,
        })
  
          .from(
            subtitleRef.current,
            { y: 40, opacity: 0, duration: 0.7 },
            "-=0.4",
          )
  
          .from(divRef.current, { y: 40, opacity: 0, duration: 0.5 }, "-=0.4");
      }, sectionRef);
  
      return () => ctx.revert();
    }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-white overflow-hidden px-5"
    >
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-16">
          <h1
            ref={headlineRef}
            className=" text-primary uppercase tracking-[0.3em] text-sm font-semibold"
          >
            Our Key Features
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl md:text-lg text-[#0b1628] mt-4 "
          >
            With our base of operations in Pondicherry, we have an excellent
            team to plan & strategies your idea with the desired technology. We
            offers our wide range of services be it Mobile Apps Development or
            Website Application Development. We polish & streamline your idea
            before we start our designs & build your dream project.
          </p>

          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div
          ref={divRef}
          className=" bg-white rounded-xl shadow-xl border border-gray-100 divide-y divide-gray-200 overflow-hidden "
        >
          {keyFeatureData.map((items) => (
            <div
              key={items.id}
              className="group relative flex flex-col md:flex-row md:items-center justify-between gap-6 px-8 py-5 leading-relaxed hover:py-12 overflow-hidden transition-all duration-500 cursor-pointer"
            >
              <div
                className="absolute inset-0 opacity-0 transition-all duration-700 
                         group-hover:opacity-100"
              >
                {items.image && (
                  <Image
                    alt="Service background"
                    fill
                    src={items.image}
                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
              </div>

              <div className="relative z-10 flex w-full gap-5">
                <div className="space-y-4">
                  <h3 className="text-2xl text-primary font-bold text-[#0b1628] group-hover:text-white transition-colors duration-700">
                    {items.title}
                  </h3>

                  <p className="max-w-5xl text-gray-500 group-hover:text-gray-200 transition-colors duration-500">
                    {items.description}
                  </p>

                </div>
              </div>

              <div className="flex items-center  justify-end ">
                <span className="text-5xl md:block hidden font-bold text-primary/60 group-hover:text-white transition-colors duration-700">
                  {`0${items.id}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default KeyFeature;
