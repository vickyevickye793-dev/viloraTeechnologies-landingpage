// "use client";

// import Image from "next/image";
// import { servicesData, Service } from "../../component/localDb/servicesData";

// const ServicesSection = () => {
//     return (
//         <section className="bg-white pb-20 px-6">

//             <div className="text-center max-w-4xl mx-auto mb-14">
//                 <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
//                     Our Awesome Services
//                 </h2>
//                 <p className="text-gray-500 font-bold leading-relaxed">
//                     We aim to provide with our services with the right solutions.
//                     We give our customers fast and cost-effective services.
//                     Our aims are to build information technologies and delivering
//                     honesty tools to our clients.
//                 </p>
//             </div>

//             <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
//                 {servicesData.map((service: Service) => (
//                     <div
//                         key={service.id}
//                         className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-500 group"
//                     >
//                         <div className="mb-6">
//                             <Image
//                                 src={service.icon}
//                                 alt={service.title}
//                                 width={60}
//                                 height={60}
//                                 className=""
//                             />
//                         </div>

//                         <h3 className="text-xl font-bold text-red-600 mb-4">
//                             {service.title}
//                         </h3>

//                         <p className="text-gray-600 leading-relaxed text-sm">
//                             {service.description}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default ServicesSection;




"use client";

import Image from "next/image";
import { servicesData, Service } from "../../component/localDb/servicesData";
import backgroundImage from "../../../public/assets/hero-banne3.png"
const ServicesSection = () => {
    return (
        <section className="bg-white pb-20 px-6">
            <div className="text-center max-w-4xl mx-auto mb-14">
                <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                    Our Awesome Services
                </h2>
                <p className="text-gray-500 font-bold leading-relaxed">
                    We aim to provide with our services with the right solutions.
                    We give our customers fast and cost-effective services.
                    Our aims are to build information technologies and delivering
                    honesty tools to our clients.
                </p>
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
                            {/* Icon */}
                            <div className="mb-6 relative z-10">
                                <Icon
                                    size={50}
                                    className="text-primary transition-all duration-500 ease-in-out 
      group-hover:text-white group-hover:scale-110"
                                />
                            </div>

                            {/* Title */}
                            <h3
                                className="text-xl font-bold text-primary mb-4 relative z-10
    transition-colors duration-500 ease-in-out group-hover:text-white"
                            >
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p
                                className="text-gray-600 leading-relaxed text-sm relative z-10
    transition-colors duration-500 ease-in-out group-hover:text-white"
                            >
                                {service.description}
                            </p>

                            {/* Background Hover Layer */}
                            <div
                                className="absolute inset-0 opacity-0 scale-105 
    transition-all duration-700 ease-in-out 
    group-hover:opacity-100 group-hover:scale-100"
                            >
                                <Image
                                    alt=""
                                    fill
                                    src={backgroundImage}
                                    className="object-cover"
                                />
                                <div className="bg-secondary/70 absolute inset-0 transition-opacity duration-700"></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ServicesSection;