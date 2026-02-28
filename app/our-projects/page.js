import Footer from "../../src/section/footer/Footer";
import Header from "../../src/section/header/Header";
import OurProjects from "../../src/section/ourProjects/OurProjects"
export default function Page() {
    return (
        <div className=" bg-WhiteBackground">
            <Header />
            <OurProjects />
            <Footer />
        </div>
    );
}