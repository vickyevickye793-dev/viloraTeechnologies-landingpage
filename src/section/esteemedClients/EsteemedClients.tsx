"use client";

import Image from "next/image";
import { EsteemedClientsData } from "../../component/localDb/EsteemedClients";

type Client = {
    id: number;
    name: string;
    logo: string;
};

type ClientsData = {
    title: string;
    description: string;
    clients: Client[];
};

export default function EsteemedClients() {
    const { title, description, clients } =
        EsteemedClientsData as ClientsData;

    const duplicatedClients = [...clients, ...clients];

    return (
        <section className="bg-white py-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center">

                <h2 className="text-4xl md:text-5xl font-bold text-primary">
                    {title}
                </h2>

                <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    {description}
                </p>

                <div className="mt-14 marquee-primary bg-white py-6 ">
                    <div className="marquee-inner">

                        {duplicatedClients.map((client, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg border border-gray-200 p-6 flex items-center justify-center min-w-[200px] mx-6"
                            >
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    width={150}
                                    height={80}
                                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
}