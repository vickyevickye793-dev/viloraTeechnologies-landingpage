import Footer from "@/src/section/footer/Footer";
import Header from "@/src/section/header/Header";
import Hero from "@/src/section/hero/Hero";
import ProcessMethodologies from "@/src/section/processMethodologies/ProcessMethodologies";
import ServicesSection from "@/src/section/Services/Services";
import OurProjects from "@/src/section/ourProjects/OurProjects";
import EsteemedClients from "@/src/section/esteemedClients/EsteemedClients";
import IndustriesServe from "@/src/section/industriesServe/IndustriesServe";
import WhyChoseUs from "@/src/section/whyChoseUs/WhyChoseUs";
import KeyFeature from "@/src/section/keyFeature/KeyFeature";

export default function Home() {
  return (
    <div className=" bg-[#ffffff] overflow-hidden  ">
      <div>
        <Header />
      </div>

      <div className="pb-20 ">
        <Hero />
      </div>
      <main className="px-5">


        <div className="py-20">
          <ServicesSection />
        </div>

        <div className="py-20">
          <EsteemedClients />
        </div>

        <div className="">
          <ProcessMethodologies />
        </div>

        <div className="py-20">
          <OurProjects />
        </div>

        <div className="py-20 ">
          <WhyChoseUs />
        </div>

        {/* <div className="py-20">
          <IndustriesServe />
        </div> */}

        <div className="py-20">
          <KeyFeature />
        </div>

        <div className="">
          <Footer />
        </div>


      </main>
    </div>
  );
}
