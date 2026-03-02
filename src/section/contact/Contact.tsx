"use client";

import { Mail, Phone, LocationEdit } from "lucide-react";
import ContactForm from "@/src/component/common/form/ContactForm";
import { contactData } from "@/src/component/localDb/contactData ";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Mail,
  Phone,
  LocationEdit,
};

const Contact = () => {
  return (
    <>

      <section className="bg-white py-20 px-6 text-center">
        <h1 className="text-black text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Get In <span className="text-red-600">Touch</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          We build powerful digital experiences. Reach out to us for
          innovative web, mobile, and software solutions tailored to
          your business.
        </p>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="text-center mb-16">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm">
            Contact Information
          </p>
          <h2 className="text-4xl font-bold text-black mt-4">
            Let’s Start a Conversation
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {contactData.map((item) => {
            const IconComponent = iconMap[item.icon];

            return (
              <div
                key={item.id}
                className="group bg-white border border-gray-200 p-10 rounded-2xl 
                hover:border-red-600 hover:shadow-xl 
                transition-all duration-300 text-center"
              >
                <a
                  href={item.link}
                  target={item.type === "location" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div
                    className="w-20 h-20 mx-auto rounded-full 
                    bg-red-50 flex items-center justify-center 
                    group-hover:bg-red-600 transition-all duration-300"
                  >
                    <IconComponent
                      size={32}
                      className="text-red-600 group-hover:text-white transition-all duration-300"
                    />
                  </div>
                </a>

                <h3 className="text-xl font-semibold mt-8 text-black">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= FORM + MAP ================= */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* Contact Form */}
          <div className="border border-gray-200 p-10 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-black mb-6">
              Send Us a <span className="text-red-600">Message</span>
            </h3>
            <ContactForm />
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition">
            <iframe
              title="Vilora Technologies Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.878239676996!2d79.8194659!3d11.940395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53610aafffffff%3A0xdb17030ffba9d036!2sVILORA%20Technologies!5e0!3m2!1sen!2sin!4v1700000000000"
              className="w-full h-[450px]"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;