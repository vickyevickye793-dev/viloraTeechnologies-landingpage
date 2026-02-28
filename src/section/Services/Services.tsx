"use client";

import Image from "next/image";
import { servicesData, Service } from "../../component/localDb/servicesData";
import backgroundImage from "../../../public/assets/services/card-background.webp"
import { usePathname } from "next/navigation";
const Services = () => {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    return (
        <section className="bg-white py-20 px-6">
            <div className="text-center max-w-4xl mx-auto mb-14">
                <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                    Our Awesome Services
                </h2>
                {!isHomePage && (
                    <p className="text-gray-500 font-bold leading-relaxed">
                        We deliver innovative and scalable digital solutions tailored to your business goals.
                        Our services combine strategy, technology, and creativity to build powerful digital experiences.
                        We focus on performance, security, and long-term growth while ensuring cost-effective
                        and timely delivery. Our mission is to transform ideas into impactful technology solutions
                        that drive measurable success for our clients.
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
                        Let’s collaborate to turn your ideas into reality with innovative technology solutions.
                    </p>
                    <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-all duration-300">
                        Get Started
                    </button>
                </div>
            )}

        </section>
    );
};

export default Services;