'use client'
import Image from "next/image";
import Link from "next/link";
import imagge from "../../../public/assets/hero-banne3.webp"
import { LocationEdit, Mail, Map, Phone, X } from "lucide-react";
import ContactForm from "@/src/component/common/form/ContactForm";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import gsap from "gsap";
const Contact = () => {
  const [useCopy, setUseCopy] = useState(false)
  const emailAddress = "viloratechnologies@gmail.com";
  const subject = "Project Inquiry";
  const body = "Hello Vilora Technologies Team,";
  const number = "88072 97316"
  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const handleCopy = async () => {
    await navigator.clipboard.writeText(number);
    toast.success("Copied!")
  }
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const heroParaRef = useRef<HTMLParagraphElement>(null);
    const heroRef = useRef<HTMLElement>(null);
    const heroTitleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Initial states
      gsap.set(glowRef.current, { scale: 0.3, opacity: 0 });
      gsap.set(shapeRef.current, { x: 60, opacity: 0 });
      gsap.set(headlineRef.current, { y: 60, opacity: 0 });
      gsap.set(subtitleRef.current, { y: 30, opacity: 0 });
      gsap.set(bannerRef.current, { y: 50, opacity: 0 });
      gsap.set(badgeRef.current, { scale: 0.5, opacity: 0, rotation: -30 });
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .fromTo(heroTitleRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.3"
        )
        .fromTo(heroTitleRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.3"
        )

      tl
        // Glow blob
        .to(glowRef.current, { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" }, 0)
        // Shape
        .to(shapeRef.current, { x: 0, opacity: 0.85, duration: 0.9 }, 0.1)
        // Headline — word by word
        .to(headlineRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.25)
        // Subtitle
        .to(subtitleRef.current, { y: 0, opacity: 1, duration: 0.6 }, 0.5)
        // Banner image
        .to(bannerRef.current, { y: 0, opacity: 1, duration: 0.9 }, 0.4)
        // Spinning badge
        .to(
          badgeRef.current,
          { scale: 1, opacity: 1, rotation: 0, duration: 0.7, ease: "back.out(1.6)" },
          0.75
        );
    }, containerRef);

    return () => ctx.revert();
  }, [heroRef]);

  return (
    <>
      <div className="relative z-10 text-center py-10 w-full grid justify-center items-center overflow-hidden">
        <h1 ref={heroTitleRef} className="text-primary relative inline-block text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">Contact Us</h1>
        <p ref={heroParaRef} className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-10">At Vilora Technology, we specialize in delivering innovative web and
          mobile solutions that help businesses grow in the digital world.
          Whether you need custom software development, UI/UX design, or
          digital transformation services, our team is ready to turn your
          ideas into powerful, scalable solutions. Let’s connect and build
          something exceptional together.</p>
      </div>
      <div className=" relative">
        <div className={`${useCopy ? " w-fit px-20 h-12 flex items-center absolute text-xl text-white font-bold border-b-4 border-green-950 rounded-lg right-2 top-15 bg-green-500/80" : " hidden"}`}>{useCopy ? "Copied!" : ""} <div className=" absolute right-2 top-1" onClick={() => setUseCopy(false)}><X /></div></div>
        <div className=" flex  items-center gap-2 justify-center mt-24">
          <div className="h-1 w-1 rounded-full bg-primary"></div>
          <span className="text-primary text-sm font-semibold uppercase">
            contact us
          </span>
          <div className="h-1 w-1 rounded-full bg-primary"></div>
        </div>

        <h1 className="text-5xl text-black font-semibold text-center mt-5">
          Our contact information
        </h1>

        <div className="max-w-7xl cursor-pointer mx-auto px-6 py-16">
          <div className="grid gap-10 justify-center sm:grid-cols-2 mx-20 lg:grid-cols-3">
            <div className="group border border-red-200 p-8 flex flex-col items-center text-center">
              <a
                href={mailtoUrl}
                aria-label="Send email to Vilora Technologies"
              >
                <div className="w-20 h-20 cursor-pointer rounded-full bg-red-100 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                  <Mail
                    size={36}
                    className="text-primary group-hover:text-white transition-all duration-300"
                  />
                </div>
              </a>
              <h2 className="text-xl text-black font-semibold mt-6">Email Us</h2>
              <p className="text-gray-500 mt-4 text-sm">
                viloratechnologies@gmail.com
              </p>
              {/* <p className="text-gray-500 text-sm">
              viloratecheducation@gmail.com
            </p> */}
            </div>

            <div className="group relative border border-red-200  p-8 flex flex-col items-center text-center ">
              <a href="tel:+91 8610391458" className="w-20 h-20 cursor-pointer rounded-full bg-red-100 flex items-center justify-center group-hover:bg-primary transition-all duration-300" onClick={handleCopy}>
                <Phone
                  size={36}
                  className="text-primary group-hover:text-white transition-all duration-300"
                />
              </a>
              <h2 className="text-xl text-black font-semibold mt-6">Call Us</h2>
              <p className="text-gray-500 mt-4 text-sm">+91 8610391458</p>

              {/* <p className="text-gray-500 text-sm">+91 XXXXX XXXXX</p> */}
            </div>

            <div className="group border border-red-200  p-8 flex flex-col items-center text-center  ">
              <a href="https://maps.app.goo.gl/RZWDAnrVS584vrcS9" target="_blank" className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                <LocationEdit size={36} className="text-primary group-hover:text-white transition-all duration-300" />
              </a>
              <h2 className="text-x text-black font-semibold mt-6">
                Our Location
              </h2>
              <p className="text-gray-500 mt-4 text-sm max-w-xs">
                62 ,1st Floor ,Vallalar Salai Rd , <br /> Venkata Nagar,
              </p>
              <p className="text-gray-500 text-sm">Puducherry–605011.</p>
            </div>

            {/* <div className="group border border-blue-200  p-8 flex flex-col items-center text-center ">
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
          </div> */}
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
                title="Vilora Technologies Location on Google Maps"
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

      {/* <div className="relative bg-blue-600 overflow-hidden px-6 py-12 md:px-10 md:py-16 flex flex-col md:flex-row  items-center justify-between gap-8">
        <div className="absolute -top-32 -left-32  w-72 h-72 md:w-96 md:h-96  bg-blue-500 rounded-full opacity-40"></div>

        <div className="absolute -bottom-32 -right-32 w-72 h-72 md:w-96 md:h-96  bg-blue-500 rounded-full opacity-40"></div>

        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold text-white  text-center md:text-left">
          GET CONSULTANT NOW!
        </h1>

        <Link
          href="/contact"
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
      </div> */}
    </>
  );
};
export default Contact;
