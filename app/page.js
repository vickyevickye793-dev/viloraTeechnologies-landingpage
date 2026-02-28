import Footer from "@/src/section/footer/Footer";
import Header from "@/src/section/header/Header";
import Hero from "@/src/section/hero/Hero";
import ProcessMethodologies from "@/src/section/processMethodologies/ProcessMethodologies";
import ServicesSection from "@/src/section/ServicesSection/ServicesSection";
import OurProjects from "@/src/section/ourProjects/OurProjects";

export default function Home() {
  return (
    <div className=" bg-[#e8eef6] overflow-hidden  ">
      <main>
        <Header />
        <Hero />
        <OurProjects />
        <ProcessMethodologies />
        <ServicesSection />
        <Footer />
      </main>
    </div>
  );
}
