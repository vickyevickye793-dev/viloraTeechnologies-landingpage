

"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
  Shield,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../../../public/assets/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FooterData } from "../../component/localDb/footerData";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);
  const col4Ref = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { description, services, quickLinks, follows, contactInfo } = FooterData;


  const socialIconMap: Record<string, React.ComponentType<{ size?: number }>> = {
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
    linkedin: Linkedin,
  };

  const contactIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    mail: Mail,
    phone: Phone,
    location: MapPin,
  };
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cols = [col1Ref.current, col2Ref.current, col3Ref.current, col4Ref.current];

      gsap.set(cols, { y: 50, opacity: 0 });
      gsap.set(bottomRef.current, { y: 20, opacity: 0 });

      ScrollTrigger.create({
        trigger: footerRef.current,
        start: "top 85%",
        onEnter: () => {
          gsap.to(cols, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          });
          gsap.to(bottomRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.5,
            ease: "power2.out",
          });
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);




  return (
    <footer ref={footerRef} className="bg-[#0d1b3e] text-[#c8d6ec] font-sans">
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#cf282e] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        <div ref={col1Ref} className="flex flex-col gap-4">
          <Image src={logo} width={150} height={40} alt="Vilora Logo" className="bg-white rounded-xl" />
          <p className="text-md text-white/60 leading-relaxed">{description}</p>




        </div>

        <div ref={col2Ref}>
          <p className="font-bold text-lg text-white mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-[#cf282e]">
            Quick Links
          </p>
          <ul className="flex flex-col gap-3 mt-4">
            {quickLinks.map(({ label, href }, i) => (
              <li key={i}>
                <Link
                  href={href}
                  className="flex items-center gap-2 text-md text-white/60 hover:text-white group transition-colors duration-200"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#cf282e] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div ref={col3Ref}>
          <p className="font-bold text-lg text-white mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-[#cf282e]">
            Services
          </p>
          <ul className="flex flex-col gap-3 mt-4">
            {services.map((item, i) => (
              <li key={i}>
                <span className="flex items-center gap-2 text-md text-white/60 hover:text-white cursor-pointer group transition-colors duration-200">
                  <ArrowRight className="w-3.5 h-3.5 text-[#cf282e] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>




        <div ref={col4Ref} className="flex flex-col gap-4">
          <p className="font-bold text-lg text-white mb-2 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-[#cf282e]">
            Follow Us
          </p>
          <div className="mt-2 flex flex-col gap-2.5">
            {contactInfo.map(({ type, label, href }, i) => {
              const Icon = contactIconMap[type];
              return (
                <a
                  key={i}
                  href={href}
                  className="flex items-center gap-2.5 text-md text-white/50 hover:text-[#cf282e] transition-colors duration-200 group"
                >
                  <span className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-[#cf282e]/20 flex items-center justify-center transition-colors duration-200 shrink-0">
                    {Icon && <Icon className="w-3.5 h-3.5" />}
                  </span>
                  {label}
                </a>
              );
            })}
          </div>
          <div className="flex gap-3">
            {follows.map(({ name, href }, i) => {
              const Icon = socialIconMap[name];
              return (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${name} page`}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#cf282e] hover:text-white hover:border-[#cf282e] transition-all duration-200"
                >
                  {Icon && <Icon size={16} />}
                </a>
              );
            })}
          </div>



        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="border-t border-white/10" />
      </div>

      <div ref={bottomRef} className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-white/30">
          <Shield className="w-4 h-4 text-[#cf282e]/60" />
          Trusted partner in business excellence
        </div>

        <p className="text-xs text-white/30">
          © {new Date().getFullYear()}{" "}
          <strong className="text-white/60 hover:text-[#cf282e] transition-colors cursor-pointer">
            Vilora Technologies
          </strong>{" "}
          — All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-xs">
          <a href="#" aria-label="Privacy Policy" className="text-white/30 hover:text-white transition-colors duration-200">
            Policy &amp; Privacy
          </a>
          <span className="text-white/20">•</span>
          <a href="#" aria-label="Terms and Conditions" className="text-white/30 hover:text-white transition-colors duration-200">
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;