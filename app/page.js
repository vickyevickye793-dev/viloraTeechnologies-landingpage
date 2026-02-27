import ExpertiseSection from "@/src/section/home/ExpertiseSection";
import Footer from "@/src/section/home/Footer";
import Header from "@/src/section/home/Header";
import Hero from "@/src/section/home/Hero";
import ServicesSlider from "@/src/section/home/ServicesSlider";

export default function Home() {
  return (
    <div className=" bg-[#e8eef6] overflow-hidden  ">
      <main>
        <Header />
        <Hero />
        <ServicesSlider />
        <ExpertiseSection />
        <Footer />
      </main>
    </div>
  );
}
