import { Compass, Icon, PiIcon } from "lucide-react";
import image from "../../../public/assets/hero-banne3.png";
import Image from "next/image";

import { Zap, Lightbulb, Target } from "lucide-react";

export const ChoseData = [
  {
    title: "Quick Solutions",
    describe:
      "We understand the urgency of your needs and provide fast reliable solutions designed to keep your business moving forward.",
    icon: Zap,
  },

  {
    title: "Expert Advice",
    describe:
      "We offer personalized recommendations backed by deep industry knowledge to support your long-term success.",
    icon: Lightbulb,
  },

  {
    title: "Strategic Planning",
    describe:
      "We craft customized roadmaps that guide your business toward sustainable expansion and competitive advantage.",
    icon: Target,
  },
];

const WhyChoseUs = () => {
  return (
    <>
      <section className="relative bg-white  overflow-hidden">

        <div className="flex flex-col items-center  text-center">
          <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold leading-[1.18] tracking-tight text-secondary">
            Excellence That Drives <span className="text-primary">Real Results</span>
          </h2>

          <div className="w-16 h-1 bg-primary rounded-full mt-3"></div>

          <p className="text-gray-500 font-bold leading-relaxed mt-5 max-w-2xl">
            We combine strategy, innovation, and execution to deliver measurable
            growth and long-term value for your business.
          </p>
        </div>

          <div className="grid md:grid-cols-3 gap-10 mt-20">
            {ChoseData.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="group relative bg-white p-5 rounded-3xl 
      border border-gray-100 
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
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">{item.describe}</p>
                </div>
              );
            })}
          </div>
      </section>
    </>
  );
};

export default WhyChoseUs;
