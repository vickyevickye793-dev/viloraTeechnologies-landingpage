"use client";

import Image, { StaticImageData } from "next/image";
import { EsteemedClientsData } from "../../component/localDb/EsteemedClients";

type Client = {
  id: number;
  name: string;
  logo: StaticImageData;
};

export interface ClientsData {
  title: string;
  description: string;
  clients: Client[];
};

const EsteemedClients = () => {
  const { clients } = EsteemedClientsData;

  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="bg-white  overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">

        <div className="  flex flex-col items-center  pb-10">
          <h2
            className="text-5xl font-extrabold leading-[1.18] tracking-tight text-secondary"
          >
            Our Esteemed<span className="text-primary"> Clients</span>
          </h2>

          <div className="w-16 h-1 bg-primary rounded-full"></div>

          <p className="text-gray-500 font-bold leading-relaxed mt-5">Serving businesses across India and expanding into global markets.</p>
        </div>


        <div className=" marquee-primary bg-white  ">
          <div className="marquee-inner">
            {duplicatedClients.map((client, index) => (
              <div
                key={index}

                className="bg-white rounded-lg border border-primary/10 p-6 flex items-center justify-center min-w-50 mx-6"
              >
                {client.logo && (
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default EsteemedClients
