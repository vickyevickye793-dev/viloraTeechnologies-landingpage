"use client";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Icon, PlayCircle, Star } from "lucide-react";
import core from "../../../public/assets/about/core.png";
import PersonalApproach from "../../../public/assets/about/perapp.png";
import customer from "../../../public/assets/about/customer.png";
import team from "../../../public/assets/about/team.png";
import evolute from "../../../public/assets/about/evolute.webp";
import client from "../../../public/assets/clientFeedback/clinet.jpg";
import client1 from "../../../public/assets/clientFeedback/client2.jpg";
import ProcessMethodologies from "../processMethodologies/ProcessMethodologies";
import { useEffect, useState } from "react";

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
      clientName: "Burdee Nicolas",
      role: "Business Owner",
      img: client,
      feedback:
        "Partnering with Solvior has been a transformative experience for our organization. Their expert guidance through our digital transformation strategy was invaluable. The team delivered scalable solutions that significantly improved our operational efficiency and customer engagement.",
    },
    {
      clientName: "Natalie Harry",
      role: "Senior IT Executive",
      img: client1,
      feedback:
        "The professionalism and technical expertise demonstrated by the Solvior team exceeded our expectations. From architecture planning to deployment, every phase was handled with precision and clarity. Our systems are now faster, more secure, and future-ready.",
    },
    {
      clientName: "Daniel Morgan",
      role: "CTO",
      img: client,
      feedback:
        "Solvior helped us modernize our legacy infrastructure with a seamless cloud migration strategy. Their deep understanding of DevOps and automation drastically reduced our deployment time while improving system reliability across all platforms.",
    },
    {
      clientName: "Sophia Reynolds",
      role: "Product Manager",
      img: client,
      feedback:
        "Working with Solvior was a strategic decision that paid off quickly. Their UI/UX design and frontend development expertise helped us launch a product that not only looks exceptional but also performs flawlessly across devices.",
    },
    {
      clientName: "Arjun Mehta",
      role: "Head of Engineering",
      img: client,
      feedback:
        "The cybersecurity framework implemented by Solvior strengthened our data protection standards significantly. Their proactive approach, continuous monitoring, and transparent communication gave us complete confidence in our system security.",
    },
  ];
  const [active, setActive] = useState(0);
  const current = feedback[active];

  const prev = () => setActive((i) => (i - 1 + feedback.length) % feedback.length);
  const next = () => setActive((i) => (i + 1) % feedback.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % feedback.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [feedback.length]);
  return (
    <>
      <div className="">
        <section className="relative py-32 px-6 overflow-hidden bg-white text-center">
          <h1
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center 
                 text-[120px] md:text-[200px] lg:text-[260px] 
                 font-black text-[#0b1628]/5 select-none pointer-events-none"
          >
            VILORA
          </h1>

          <div className="relative max-w-4xl mx-auto flex flex-col items-center gap-8">
            <span className="uppercase tracking-[0.4em] text-primary text-sm font-semibold">
              Who We Are
            </span>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px]
                   font-extrabold text-[#0b1628] leading-tight"
            >
              Crafting the <br />
              <span className=" text-primary">Future Together</span>
            </h2>

            <div className="w-16 h-1 bg-primary rounded-full"></div>

            <p className="text-[#364052] text-lg md:text-xl leading-relaxed max-w-2xl">
              We are a team of passionate technology experts dedicated to
              building scalable, secure, and innovative digital solutions that
              empower businesses to thrive in the modern world.
            </p>
          </div>
        </section>

        <ProcessMethodologies />

        <section className="">
          <h2 className="text-center text-4xl font-semibold">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:w-7xl mx-auto gap-10  mt-14 p-1">
            {setApart.map(({ Icon, title, detail }, i) => (
              <div
                key={i}
                className="group relative bg-white  p-6 flex flex-col gap-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-20 h-40 border-t-2 border-l-2 border-primary origin-top scale-y-0 
      transition-transform duration-500  group-hover:bottom-0  group-hover:scale-y-100"
                ></div>
                <div className="absolute bottom-0 right-0 w-20 h-40  border-b-2 border-r-2 border-primary origin-bottom scale-y-0 transition-transform duration-500 group-hover:scale-y-100"></div>

                <div className="icon-wrap w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <Image
                    src={Icon}
                    alt="setApart"
                    width={40}
                    height={40}
                    className="p-2 invert brightness-0"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-[#0b1628] font-bold text-lg leading-snug">
                    {title}
                  </h2>
                  <p className="text-[#364052] text-sm leading-relaxed">
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="relative overflow-hidden py-24 px-6 md:px-20 font-sans">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5 rounded-md overflow-hidden shadow-2xl shadow-primary/40 max-w-6xl mx-auto">
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
                    <span className="text-4xl md:text-5xl font-extrabold text-[#0b1628] tracking-tight leading-none group-hover:text-primary transition-colors duration-300">
                      {item.number}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#7a8599] font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative bg-[#0b1628] min-h-105 flex items-center justify-center overflow-hidden">
              <div className="relative h-full w-full">
                <Image
                  src={evolute}
                  alt="Our company evolution"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                />
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
              </span>
              <h2 className="text-[#0b1628] text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                What our clients say
              </h2>
            </div>

            <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 items-center">
              <div className="relative hidden md:flex items-center justify-center">
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-[#0075ff]/10 to-transparent" />
                {client ? (
                  <Image
                    src={current.img}
                    alt={`${current.clientName} profile photo`}
                    width={500}
                    height={600}
                    className="rounded-3xl w-full object-cover"
                  />
                ) : (
                  <div className="relative z-10 w-full aspect-4/5 rounded-3xl bg-linear-to-br from-[#0b1628] to-[#0d2a5e] flex flex-col items-center justify-center gap-4 shadow-2xl shadow-blue-900/30">
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
                  <p className="text-gray-500 text-xs mt-0.5">
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

                <div className="w-full h-px bg-primary/40" />

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
                      aria-label="Previous testimonial"
                      className="cursor-pointer w-11 h-11 rounded-full border border-white flex items-center justify-center text-[#0b1628] hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-lg"
                    >
                      <ArrowLeft size={18} />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Next testimonial"
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
