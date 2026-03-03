import Footer from "../../src/section/footer/Footer";
import Header from "../../src/section/header/Header";
import OurProducts from "../../src/section/ourProducts/OurProducts"
export default function Page() {
    return (
        <div className=" bg-WhiteBackground">
            <Header />
            <OurProducts/>
            <Footer />
        </div>
    );
}