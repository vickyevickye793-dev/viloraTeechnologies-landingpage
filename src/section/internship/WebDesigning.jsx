"use client";
import InternshipInnerForm from "../../component/common/form/InternshipInnerForm";
import InternshipForm from "../../component/common/form/InternshipForm";
import { ArrowRight, BadgeCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function WebDesigning() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="px-4 lg:pb-16 mx-auto">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
          </li>

          <li className="select-none">/</li>

          <li>
            <Link
              href="https://viloratecheducation.com/internship-in-pondicherry"
              className="hover:text-primary"
            >
              Internship
            </Link>
          </li>

          <li className="select-none">/</li>

          <li className="font-semibold text-gray-800">
            Web Designing Internship In Pondicherry
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-extrabold font-outfit-extrabold text-primary">
        Web Designing Internship in Pondicherry
      </h1>

      <p className="mb-10 text-lg leading-relaxed text-gray-600 text-justify">
        Join the <strong>Web Designing Internship in Pondicherry</strong> at{" "}
        <span className="font-extrabold text-Secondary">Vilora</span> <span className="text-sky-400 font-extrabold">Tech</span> <span className="text-primary font-extrabold">Education</span>{" "}
        and learn how to design modern, user-friendly, and responsive websites.
        This internship is ideal for students, freshers, and beginners who want
        to start a career in web design with strong practical exposure.
      </p>

      {/* ABOUT */}
      <h2 className="mb-4 text-2xl font-bold">
        About the Web Designing Internship
      </h2>

      <p className="mb-6 text-gray-600 text-justify">
        Web design focuses on creating visually appealing and user-friendly
        websites. In this internship at{" "}
        <span className="font-extrabold text-Secondary">Vilora</span>{" "}
        <span className="text-sky-400 font-extrabold">Tech</span>{" "}
        <span className="text-primary font-extrabold">Education</span>, you will learn how
        to design layouts, choose color schemes, create responsive designs, and
        improve user experience. The program emphasizes hands-on learning, where
        you will design real websites from scratch.

      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          {/* SKILLS */}
          <h2 className="mb-4 text-2xl font-bold">
            <span className="bg-yellow-400 px-2">Skills</span> You’ll Learn in This Internship
          </h2>

          <div className="flex flex-wrap gap-3 mb-12">
            {[
              "HTML5 & CSS3 Fundamentals",
              "Responsive Web Design",
              "Flexbox & Grid Layouts",
              "UI Design Principles",
              "Color Theory & Typography",
              "Website Layout Planning",
              "Basic JavaScript for UI",
              "Browser Compatibility",
              "Design to Code Conversion",
              "Website Optimization Basics",
            ].map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm font-medium bg-blue-100 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* OUTCOMES */}
      <h2 className="mb-4 text-2xl font-bold">
        Internship Outcomes
      </h2>

      <ul className="space-y-4">
        {[
          "Ability to design modern and responsive websites",
          "Strong understanding of web design principles",
          "Hands-on experience with real design projects",
          "A professional web design portfolio",
          "Confidence to apply for junior web designer roles",
        ].map((outcome, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 mt-1 text-green-500" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>

        </div>
        <div className="hidden md:block lg:flex justify-center items-center lg:ml-10">
          <InternshipInnerForm />
        </div>

      </div>



      {/* PROJECTS */}
      <h2 className="mb-4 text-2xl font-bold">
        Practical Projects & Design Work
      </h2>

      <p className="mb-10 text-gray-600 text-justify">
        During the internship, you will design multiple websites including
        personal portfolios, business websites, landing pages, and responsive
        layouts. These projects will help you build a strong design portfolio
        that showcases your creativity and technical skills.
      </p>



      <div className="mt-16 text-center">
        <button
          onClick={() => setShowForm(true)}
          className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white transition-all duration-300 shadow-xl bg-primary rounded-xl group"
        >
          <BadgeCheck className="w-6 h-6" />
          Start Your Application
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
        <p className="mt-4 text-sm text-gray-500">
          Limited seats available • Apply before slots fill up
        </p>
      </div>
      {showForm && <InternshipForm closeForm={() => setShowForm(false)} />}
    </div>
  );
}
