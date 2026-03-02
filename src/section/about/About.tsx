"use client";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Icon, PlayCircle, Star } from "lucide-react";
import core from "../../../public/assets/about/core.png";
import PersonalApproach from "../../../public/assets/about/perapp.png";
import customer from "../../../public/assets/about/customer.png";
import team from "../../../public/assets/about/team.png";
import evolute from "../../../public/assets/about/evolute.webp";
import client from "../../../public/assets/about/h2-test-1.webp";
import double from "../../../public/assets/about/DoubleQurtes.png";
import divide from "../../../public/assets/about/divider.webp";
import ProcessMethodologies from "../processMethodologies/ProcessMethodologies";
import { useState } from "react";

// type SetApartItem = {
//   title: string;
//   detail: string;
//   Icon: StaticImageData;
// };
const About = () => {
  const setApart = [
    {
      title: "Core Values",
      detail:
        "We engage every project with focus and purpose. We're not all right with just okay; we know the better work comes from pushing the 'nice enough' wall constantly. And any time we're working on that, we do it. And of the members of our team is attentive and committed to what can be done.",
      Icon: core,
    },
    {
      title: "Personal Approach",
      detail:
        "Each project is distinctive, because we take time to consider the 'why' behind each project we take on. We brainstorm, and we come up with a solution together that is practical and addresses the issue at hand. We're designing, weighing, prototyping, evaluating and evaluating again.",
      Icon: PersonalApproach,
    },
    {
      title: "Self Organized Teams",
      detail:
        "We're not doing pile-on. Our capacity to self-organize and react to any situation lies in our key to success. We like working in small teams that know the topic at hand and own it. No extra layer, no hoops, clear data flow, tight feedback loops-all we need to execute quickly.",
      Icon: team,
    },
    {
      title: "Strong Relationships with Customers",
      detail:
        "We've met many great thinkers since our creation 5 years ago, talented people who collaborated with us. With a storey, a vision they want their product to represent, they came to us. For us, consumers are not only entities whom we support; they are the vital team members of Classic Informatics.",
      Icon: customer,
    },
  ];
  const About = {
    title: "About our company",
    subTitle: "Vilora Technologies",
    details:
      "We are a team of developers and agile professionals collaborating for one mission in order to address real-life challenges using technology.",
    discripition: "",
  };
  const evolution = {
    title: "Our evolution",
    details:
      "'Founded in 2002 by Burdee Ncolase en. our firm started with our great vision to bring innovative solutions of businesses facing unprecedented challenges. That began as a small consultings firm quickly evolved into a trusted partner for companies around the globe . Our journey into began with a simple idea thats offer unparalleled consulting services empower Our core values of integrity, innovation, and excellence guide everything we do leading the wave in consulting's.'",
  };
  const calculation = [
    { text: "Complete project", number: "93%" },
    { text: "Reach worldwide", number: "20M" },
    { text: "Faster growth", number: "8.5x" },
  ];
  const feedback = [
    {
      double: double,
      clientName: "Burdee Nicolas",
      role: "Business Owner",
      img: client,
      feedback:
        "Partnering with solvior has been a transformative experience for our organization. Their expert guidance through our market expansion strategy was invaluable. They helped us navigate complex regulatory environments and develop a clear, actionable plan that has led to successful",
    },
    {
      double: double,
      clientName: "Natalie Harry",
      role: "Sr.Executive",
      img: client,
      feedback:
        "Partnering with solvior has been a transformative experience for our organization. Their expert guidance through our market expansion strategy was invaluable. They helped us navigate complex regulatory environments and develop a clear, actionable plan that has led to successfu",
    },
  ];

  const [active, setActive] = useState(0);
  const current = feedback[active];

  const prev = () =>
    setActive((i) => (i - 1 + feedback.length) % feedback.length);
  const next = () => setActive((i) => (i + 1) % feedback.length);
  return (
    <>
      <div className="">
        <section className="relative w-full ">
          {/* <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-primary via-secondary/15 to-transparent rounded-full fade-up delay-1"></div> */}

          <div className="md:flex  md:justify-around md:items-center w-full   py-12 p-6">
            <div className="flex flex-col justify-center gap-4 md:gap-5 lg:gap-6">
              <span className="fade-up delay-1 inline-flex items-center gap-2 text-xs md:text-sm lg:text-base font-medium tracking-widest uppercase text-primary w-fit">
                <span className="w-6 h-px bg-primary inline-block"></span>
                Who We Are
              </span>

              <h1 className="fade-up delay-2 display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0b1628] leading-tight md:leading-snug">
                Crafting the
                <br />
                <span className="italic text-primary">Future</span> Together
              </h1>

              <div className="fade-up delay-3 w-10 md:w-12 h-1 bg-primary rounded-full"></div>

              <p className="fade-up delay-4 text-sm md:text-base lg:text-lg text-[#364052] leading-relaxed md:max-w-lg lg:max-w-xl">
                We're a team of passionate builders who believe great design and
                technology can change how people experience the world. Every
                project is a story waiting to be told.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-8">
              <p className=" text-[#364052] leading-relaxed md:border-l-2 md:max-w-xl border-secondary/30 mt-5 md:pl-5 ">
                VILORA Technologies is a Pondicherry software company led by
                experienced IT professionals, offering services in software
                development, mobile app development, web application
                development, quality assurance, and implementation. With strong
                expertise in single and multi-operating system environments,
                VILORA refines and streamlines ideas before designing and
                building innovative solutions. The company combines technical
                excellence with deep functional knowledge to deliver effective
                business solutions, maintaining close client relationships to
                understand objectives and maximize results.
              </p>

              <div className="fade-up delay-4 grid grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8e4dc] text-center">
                  <span className="block text-2xl font-bold text-[#0b1628]">
                    12+
                  </span>
                  <span className="text-xs text-[#364052] uppercase tracking-wide">
                    Years
                  </span>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8e4dc] text-center">
                  <span className="block text-2xl font-bold text-[#0b1628]">
                    340
                  </span>
                  <span className="text-xs text-[#364052] uppercase tracking-wide">
                    Projects
                  </span>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8e4dc] text-center">
                  <span className="block text-2xl font-bold text-[#0b1628]">
                    98%
                  </span>
                  <span className="text-xs text-[#364052] uppercase tracking-wide">
                    Happy
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mt-4 ml-8 h-px bg-gradient-to-r from-primary/40 via-secondary/10 to-transparent fade-up delay-5"></div> */}
        </section>

        <ProcessMethodologies />
        <div className="">
          <h1 className="text-center text-4xl font-semibold">
            What Sets Us Apart
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 w-full mt-10">
            {setApart.map(({ Icon, title, detail }, i) => (
              <div
                key={i}
                className="card relative bg-white rounded-2xl p-6 flex flex-col gap-5 border border-[#e8e4dc] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="icon-wrap w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <Image src={Icon} alt="" className="p-2 invert brightness-0" />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-[#0b1628] font-bold text-lg leading-snug">
                    {title}
                  </h1>
                  <p className="text-[#364052] text-sm leading-relaxed">
                    {detail}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#0075FF] rounded-full group-hover:w-full transition-all duration-500 hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
        <section className="relative overflow-hidden py-24 px-6 md:px-20 font-sans">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl shadow-blue-200/60 max-w-6xl mx-auto">
            <div className="bg-white px-10 py-14 flex flex-col justify-between gap-10 z-10">
              <div className="inline-flex items-center gap-2 w-fit bg-primary text-white text-sm font-semibold tracking-widest uppercase px-5 py-2 rounded-full shadow-md shadow-blue-400/30">
                <span className="text-lg leading-none">✦</span>
                <span>{evolution.title}</span>
              </div>

              <p className="text-[#4a5568] text-lg leading-relaxed tracking-wide max-w-md">
                {evolution.details}
              </p>

              <div className="grid grid-cols-3 gap-6">
                {calculation.map((item, i) => (
                  <div
                    key={i}
                    className="group flex flex-col gap-1 border-l-2 border-[#0075FF]/20 pl-4 hover:border-primary transition-colors duration-300"
                  >
                    <span className="text-4xl md:text-5xl font-extrabold text-[#0b1628] tracking-tight leading-none group-hover:text-[#0075FF] transition-colors duration-300">
                      {item.number}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#7a8599] font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative bg-[#0b1628] min-h-[420px] flex items-center justify-center overflow-hidden">
              <div className="relative h-full w-full">
                <Image
                  src={evolute}
                  alt=""
                  className="h-full w-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-primary/40 grayscale-25 "></div> */}
              </div>

              <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm border border-white/10 text-white/70 text-xs px-4 py-2 rounded-full font-medium tracking-wide">
                Since 2012
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24 px-6 md:px-20">

          <div className="relative max-w-6xl mx-auto grid gap-16">
            <div className="text-center grid gap-3">
              <span className="inline-flex items-center justify-center gap-2 text-primary text-sm font-semibold tracking-[0.2em] uppercase">
                <span className="w-8 h-px bg-/40 inline-block" />
                Clients Feedback
                <span className="w-8 h-px bg-[#0075ff]/40 inline-block" />
              </span>
              <h2 className="text-[#0b1628] text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                What our clients say
              </h2>
            </div>

            <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 items-center">
              <div className="relative hidden md:flex items-center justify-center">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0075ff]/10 to-transparent" />
                {client ? (
                  <Image
                    src={client}
                    alt="Happy client"
                    className="relative z-10 rounded-3xl w-full object-cover shadow-2xl shadow-blue-200/50"
                  />
                ) : (
                  <div className="relative z-10 w-full aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#0b1628] to-[#0d2a5e] flex flex-col items-center justify-center gap-4 shadow-2xl shadow-blue-900/30">
                    <div className="grid grid-cols-2 gap-3 opacity-20">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="w-20 h-20 rounded-2xl bg-white/30"
                        />
                      ))}
                    </div>
                    <span className="text-white/30 text-xs tracking-widest uppercase font-medium mt-4">
                      Client image
                    </span>
                  </div>
                )}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-5 py-3 shadow-xl shadow-blue-100/60 flex items-center gap-2 z-20">
                  <p className="text-[#0b1628] font-bold text-sm leading-none">
                    500+ clients
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    trust us worldwide
                  </p>
                </div>
              </div>

              <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-blue-100/50 border border-blue-50 flex flex-col gap-8 overflow-hidden">
                <span className="absolute top-6 right-8 text-[120px] leading-none text-[#0075ff]/8 font-serif select-none pointer-events-none">
                  "
                </span>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <blockquote className="text-[#1a2b47] text-xl md:text-2xl leading-relaxed font-medium relative z-10">
                  "{current.feedback}"
                </blockquote>

                <div className="w-full h-px bg-gradient-to-r from-[#0075ff]/20 via-[#0075ff]/40 to-transparent" />

                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="text-[#0b1628] text-lg font-bold leading-tight">
                        {current.clientName}
                      </h3>
                      <p className="text-gray-400 text-sm mt-0.5">
                        {current.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={prev}
                      aria-label="Previous"
                      className="cursor-pointer w-11 h-11 rounded-full border border-white flex items-center justify-center text-[#0b1628] hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-lg"
                    >
                      <ArrowLeft size={18} />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Next"
                      className="cursor-pointer w-11 h-11 rounded-full border border-white flex items-center justify-center text-[#0b1628] hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {feedback.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`rounded-full transition-all duration-300 cursor-pointer ${
                        i === active
                          ? "w-8 h-2 bg-primary"
                          : "w-2 h-2 bg-gray-200 hover:bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default About;
