"use client";

import Image from "next/image";
import Link from "next/link";
import { servicesData, Service } from "../../component/localDb/servicesData";
import backgroundImage from "../../../public/assets/services/card-background.webp";

import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Services = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

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

  return (
    <div>
      <section className="bg-white py-20 px-6">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Our Services
          </h2>
          {!isHomePage && (
            <p className="text-gray-500 font-bold leading-relaxed">
              We deliver innovative and scalable digital solutions tailored to
              your business goals. Our services combine strategy, technology,
              and creativity to build powerful digital experiences. We focus on
              performance, security, and long-term growth while ensuring
              cost-effective and timely delivery. Our mission is to transform
              ideas into impactful technology solutions that drive measurable
              success for our clients.
            </p>
          )}
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
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
                                    translate-x-[-100%]
                                    group-hover:animate-[shine_0.6s_ease-out]
                                    pointer-events-none"
                  />
                </div>
              </div>
            );
          })}
        </div>
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

      {isHomePage && (
        <section
          ref={sectionRef}
          className="relative py-24 bg-gradient-to-b from-[#f8fafc] to-white overflow-hidden"
        >
          <div className="max-w-7xl mx-auto ">
            <div className="text-center mb-16">
              <h1
                ref={headlineRef}
                className=" text-primary uppercase tracking-[0.3em] text-sm font-semibold"
              >
                Transformative Solutions
              </h1>

              <h2
                ref={subtitleRef}
                className="text-4xl md:text-5xl font-extrabold text-[#0b1628] mt-4 leading-tight"
              >
                Get Our Comprehensive <br />
                <span className="text-primary">Service Offerings</span>
              </h2>

              <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
            </div>

            <div
              ref={divRef}
              className=" bg-white rounded-xl shadow-xl border border-gray-100 divide-y divide-gray-200 overflow-hidden "
            >
              {servicesData.slice(0, 4).map((items, i) => (
                <div
                  key={i}
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
                      <h3 className="text-2xl font-bold text-[#0b1628] group-hover:text-white transition-colors duration-700">
                        {items.title}
                      </h3>

                      <p className="max-w-md text-gray-500 group-hover:text-gray-200 transition-colors duration-500">
                        In today's dynamic business environment, the key to
                        success lies in strategic planning and operational
                        excellence.
                      </p>

                      <Link
                        href="/services"
                        className="flex items-center gap-2 hover:underline font-semibold text-primary group-hover:text-white transition-colors duration-500"
                      >
                        Learn more
                        <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center  justify-end ">
                    <span className="text-5xl md:block hidden font-bold text-primary/60 group-hover:text-white transition-colors duration-700">
                      {`0${i + 1}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-16">
              <Link
                href="/services"
                className="relative group inline-flex items-center gap-4 px-8 py-4 rounded-full bg-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>

                <span className="relative z-10 transition-colors duration-500 group-hover:text-primary">
                  More Services
                </span>

                <ArrowRight className="relative z-10 w-5 h-5 transition-all duration-500 group-hover:translate-x-2 group-hover:text-primary" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Services;
