import Header from "../../src/section/home/Header"
import Footer from "../../src/section/home/Footer"
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