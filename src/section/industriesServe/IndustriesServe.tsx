"use client";

import Image from "next/image";
import {
  IndustriesServeDb,
  details,
} from "../../component/localDb/IndustriesServe";
import { useRef } from "react";
import gsap from "gsap";

const IndustriesServe = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card, {
      rotateX: -y / 25,
      rotateY: x / 25,
      scale: 1.03,
      duration: 0.35,
      ease: "power2.out",
      transformPerspective: 1000,
      overwrite: "auto",
    });

    const glow = card.querySelector(".card-glow") as HTMLElement;

    if (glow) {
      const px = ((e.clientX - rect.left) / rect.width) * 100;
      const py = ((e.clientY - rect.top) / rect.height) * 100;

      gsap.to(glow, {
        background: `radial-gradient(circle at ${px}% ${py}%, rgba(190,46,46,0.12), transparent 60%)`,
        duration: 0.25,
        overwrite: "auto",
      });
    }
  };

  const handleCardEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: -8,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    });

    const glow = card.querySelector(".card-glow") as HTMLElement;
    if (glow) {
      gsap.to(glow, {
        background: "transparent",
        duration: 0.3,
      });
    }
  };
  return (
    <>
      <section className="relative bg-white py-32 px-6 lg:px-24 overflow-hidden">
        <div className="relative z-10 text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-primary uppercase bg-primary/20 border border-primary/10 px-4 py-1.5 rounded-full mb-6">
            Industries We Serve
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-5 tracking-wide">
            Trusted Across <span className="text-primary">Every</span> Sector
          </h1>
          <p className="text-gray-400 max-w-7xl mx-auto text-base">
            {details.details}
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {IndustriesServeDb.map((item) => (
            <div
              key={item.id}
              style={{ transformStyle: "preserve-3d" }}
              onMouseMove={handleCardMouseMove}
              onMouseEnter={handleCardEnter}
              onMouseLeave={handleCardLeave}
              className="relative group bg-white rounded-2xl p-10 h-50
      border border-gray-200 overflow-hidden
      hover:shadow-xl"
            >
              <div
                className="absolute bottom-0 left-0 h-1 w-0 
      bg-primary group-hover:w-full transition-all duration-500"
              ></div>

              <div className=" flex justify-center mb-8">
                {item.img && (
                  <Image src={item.img} alt={item.title} fill className="" />
                )}
              </div>

              {/* <h2 className="text-gray-700 font-semibold tracking-wide text-lg text-center">
                {item.title}
              </h2> */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default IndustriesServe;
