import Footer from "../../src/section/footer/Footer";
import Header from "../../src/section/header/Header";
import OurWorks from "../../src/section/ourWorks/OurWorks"
export default function Page() {
    return (
        <div className=" bg-WhiteBackground">
            <Header />
            <OurWorks/>
            <Footer />
        </div>
    );
}