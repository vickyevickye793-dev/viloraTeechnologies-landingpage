import Footer from "@/src/section/footer/Footer";
import Header from "@/src/section/header/Header";
import Hero from "@/src/section/hero/Hero";
import ProcessMethodologies from "@/src/section/processMethodologies/ProcessMethodologies";
import ServicesSection from "@/src/section/Services/Services";
import OurProjects from "@/src/section/ourProjects/OurProjects";
import EsteemedClients from "@/src/section/esteemedClients/EsteemedClients";
import IndustriesServe from "@/src/section/industriesServe/IndustriesServe";

export default function Home() {
  return (
    <div className=" bg-[#e8eef6] overflow-hidden  ">
      <main>
        <Header />
        <Hero />
        <ServicesSection />
        <EsteemedClients />
        <ProcessMethodologies />
        <OurProjects />
        <IndustriesServe/>
        <Footer />
      </main>
    </div>
  );
}
