import { Compass, PiIcon } from "lucide-react";
import image from "../../../public/assets/hero-banne3.png";
import Image from "next/image";

const ChoseData = [
  {
    title: "Quick Solutions",
    describe:
      " We understand the urgency of your needs and provide fastreliable solutions designed to keep your business moving forward.",
  },

  {
    title: "Expert Advice",
    describe:
      " We offer personalized recommendations backed by deep industry knowledge to support your long-term success.",
  },
  {
    title: " Strategic Planning",
    describe:
      "We craft customized roadmaps that guide your business toward sustainable expansion and competitive advantage.",
  },
];

const WhyChoseUs = () => {
  return (
    <>
      <section className="relative bg-white py-28 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold mt-6 leading-tight">
            Excellence That Drives{" "}
            <span className="text-primary">Real Results</span>
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            We combine strategy, innovation, and execution to deliver measurable
            growth and long-term value for your business.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-20">
            {ChoseData.map((item, i) => (
              <div
                key={i}
                className="group relative bg-white p-10 rounded-3xl 
                     border border-gray-100 
                     shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                     hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]
                     hover:-translate-y-4 
                     transition-all duration-500 overflow-hidden"
              >
                <div
                  className="w-16 h-16 bg-primary
                          rounded-2xl flex items-center justify-center 
                          mb-8 shadow-lg
                          group-hover:rotate-6 group-hover:scale-110
                          transition duration-500"
                >
                  <Compass className="text-white text-2xl" />
                </div>

                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{item.describe}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoseUs;
