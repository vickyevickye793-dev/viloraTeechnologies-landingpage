import Image from "next/image";
import Link from "next/link";
import imagge from "../../../public/assets/hero-banner2.png"
import { LocationEdit, Mail, Map, Phone } from "lucide-react";
import ContactForm from "@/src/component/common/form/ContactForm";
const Contact = () => {
  return (
    <>
      <div className="relative z-10 w-full h-180 overflow-hidden">
        
        <Image src={imagge} alt="" className="grayscale-70 hidden md:block"/>

        <div className="absolute  top-1/3 mx-16  text-white max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg font-semibold leading-relaxed">
            At Vilora Technology, we specialize in delivering innovative web and
            mobile solutions that help businesses grow in the digital world.
            Whether you need custom software development, UI/UX design, or
            digital transformation services, our team is ready to turn your
            ideas into powerful, scalable solutions. Let’s connect and build
            something exceptional together.
          </p>
        </div>



        <div
          className="absolute right-1/12 -top-10  z-10 flex items-center justify-center 
                  px-4 sm:px-6 lg:px-8
                  py-16 sm:py-20 lg:py-28
                  min-h-[800px] sm:min-h-[650px] lg:min-h-[800px]"
        >
          <ContactForm />
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full h-[120px] sm:h-[150px] lg:h-[200px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,186.7C840,203,960,181,1080,160C1200,139,1320,117,1380,106.7L1440,96V320H0Z"
          />
        </svg>
      </div>

  
      <div className=" flex  items-center gap-2 justify-center mt-24">
        <div className="h-1 w-1 rounded-full bg-blue"></div>
        <span className="text-blue text-sm font-semibold uppercase">
          contact us
        </span>
        <div className="h-1 w-1 rounded-full bg-blue"></div>
      </div>

      <h1 className="text-5xl text-black font-semibold text-center mt-5">
        Our contact information
      </h1>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group border border-blue-200 p-8 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
              <Mail
                size={36}
                className="text-blue-600 group-hover:text-white transition-all duration-300 "
              />
            </div>
            <h2 className="text-xl text-black font-semibold mt-6">Email Us</h2>
            <p className="text-gray-500 mt-4 text-sm">
              viloratechnologies@gmail.com
            </p>
            <p className="text-gray-500 text-sm">
              viloratecheducation@gmail.com
            </p>
          </div>

          <div className="group border border-blue-200  p-8 flex flex-col items-center text-center ">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
              <Phone
                size={36}
                className="text-blue-600 group-hover:text-white transition-all duration-300"
              />
            </div>
            <h2 className="text-xl text-black font-semibold mt-6">Call Us</h2>
            <p className="text-gray-500 mt-4 text-sm">+91 XXXXX XXXXX</p>
            <p className="text-gray-500 text-sm">+91 XXXXX XXXXX</p>
          </div>

          <div className="group border border-blue-200  p-8 flex flex-col items-center text-center  ">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
              <LocationEdit
                size={36}
                className="text-blue-600 group-hover:text-white transition-all duration-300"
              />
            </div>
            <h2 className="text-x text-black font-semibold mt-6">
              Our Location
            </h2>
            <p className="text-gray-500 mt-4 text-sm max-w-xs">
              83 & 84, 1st Floor, J Plaza, Ellaipillaichavady, Sithananda Nagar,
              Thanthai Periyar Nagar
            </p>
            <p className="text-gray-500 text-sm">Puducherry – 605005</p>
          </div>

          <div className="group border border-blue-200  p-8 flex flex-col items-center text-center ">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
              <Mail
                size={36}
                className="text-blue-600 group-hover:text-white transition-all duration-300"
              />
            </div>
            <h2 className="text-xl text-black font-semibold mt-6">Live Chat</h2>
            <p className="text-gray-500 mt-4 text-sm">
              livechat@viloratechnologies.com
            </p>
            <Link
              href="#"
              className="text-blue-600 underline mt-3 text-sm hover:text-blue-800"
            >
              Need help?
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>

          <div className="w-full lg:w-1/2  ">
            <div className="w-full h-[350px] sm:h-[450px]  lg:h-full  overflow-hidden ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.878239676996!2d79.8194659!3d11.940395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53610aafffffff%3A0xdb17030ffba9d036!2sVILORA%20Technologies!5e0!3m2!1sen!2sin!4v1700000000000"
                className="h-[670px] w-[800px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-blue-600 overflow-hidden px-6 py-12 md:px-10 md:py-16 flex flex-col md:flex-row  items-center justify-between gap-8">
        <div className="absolute -top-32 -left-32  w-72 h-72 md:w-96 md:h-96  bg-blue-500 rounded-full opacity-40"></div>

        <div className="absolute -bottom-32 -right-32 w-72 h-72 md:w-96 md:h-96  bg-blue-500 rounded-full opacity-40"></div>

        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold text-white  text-center md:text-left">
          GET CONSULTANT NOW!
        </h1>

        <Link
          href="#"
          className="relative group overflow-hidden  flex items-center gap-3  bg-white  px-5 py-3 md:px-6 md:py-3 rounded-full font-semibold"
        >
          <span className="absolute inset-0 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full rounded-full"></span>

          <span className="relative z-10  bg-blue-800 text-white w-8 h-8 flex items-center justify-center rounded-full transition-all duration-500  group-hover:bg-white  group-hover:text-blue-600">
            →
          </span>

          <span className="relative z-10 text-black  transition-colors duration-500 group-hover:text-white">
            Lets talk now
          </span>
        </Link>
      </div>
    </>
  );
};
export default Contact;
