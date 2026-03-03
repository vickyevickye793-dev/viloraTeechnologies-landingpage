"use client";

import Image from "next/image";
import { IndustriesServeDb, details, features, featuresDetails } from "../../component/localDb/IndustriesServe";
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
            <section className="relative bg-white py-24 px-6 lg:px-20 overflow-hidden">
                <div className="text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#be2e2e] via-red-400 to-[#be2e2e] bg-clip-text text-transparent mb-6 tracking-wide">
                        {details.title}
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-16">
                        {details.details}
                    </p>
                </div>
                <div ref={cardsRef} className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {IndustriesServeDb.map((item) => (
                        <div key={item.id}
                            style={{ transformStyle: "preserve-3d" }}
                                    onMouseMove={handleCardMouseMove}
                                    onMouseEnter={handleCardEnter}
                                    onMouseLeave={handleCardLeave}
                            className="relative group bg-white border border-gray-200 rounded-2xl p-8 text-center cursor-pointer overflow-hidden transition-all duration-500 hover:border-[#be2e2e] hover:shadow-[0_15px_40px_rgba(190,46,46,0.15)]"
                        >
                            <div className="flex justify-center mb-6 relative z-10">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={70}
                                    height={70}
                                    className="object-contain transition-transform duration-500 group-hover:scale-150"
                                />
                            </div>
                            <h2 className="font-semibold text-gray-400 tracking-wide relative z-10 group-hover:text-[#be2e2e] transition duration-300">
                                {item.title}
                            </h2>
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-[#0857cf] grid grid-cols-2 relative">
                <div className="p-10">
                    <div className="">
                        <h1 className="text-white my-5 text-5xl">{featuresDetails.title}</h1>
                        <p className="text-gray-200 mb-15">{featuresDetails.details}</p>
                    </div>
                    <div className=" grid md:grid-cols-2 gap-5">
                        {
                            features.map((item) => (
                                <div key={item.id} className="flex cursor-pointer p-5 rounded-md border-gray-100 w-70 flex-col items-center border"
                                    style={{ transformStyle: "preserve-3d" }}
                                    onMouseMove={handleCardMouseMove}
                                    onMouseEnter={handleCardEnter}
                                    onMouseLeave={handleCardLeave}>
                                    <Image className="w-20" alt={item.title} src={item.img} />
                                    <h1 className="text-white text-lg">{item.title}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className=" absolute right-0 bottom-1/3">
                    <Image className="w-[600px]" src={featuresDetails.img} alt="" />
                </div>
            </section>
        </>
    );
};

export default IndustriesServe;