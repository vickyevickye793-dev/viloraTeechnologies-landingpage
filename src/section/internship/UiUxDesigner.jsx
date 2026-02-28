"use client";
import InternshipInnerForm from "../../component/common/form/InternshipInnerForm";
import InternshipForm from "../../component/common/form/InternshipForm";
import { ArrowRight, BadgeCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function UiUxDesigner() {
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
            UI / UX Designer Internship In Pondicherry
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-extrabold font-outfit-extrabold text-primary">
        UI / UX Designer Internship in Pondicherry
      </h1>

      <p className="mb-10 text-lg leading-relaxed text-gray-600 text-justify">
        Join the <strong>UI / UX Designer Internship in Pondicherry</strong> at{" "}
        <span className="font-extrabold text-Secondary">Vilora</span> <span className="text-sky-400 font-extrabold">Tech</span> <span className="text-primary font-extrabold">Education</span>{" "}
        and learn how to design intuitive, user-friendly, and visually appealing
        digital products. This internship is designed for students, freshers,
        and creative learners who want to build a strong foundation in user
        interface and user experience design through practical learning.
      </p>

      {/* ABOUT */}
      <h2 className="mb-4 text-2xl font-bold">
        About the UI / UX Designer Internship
      </h2>

      <p className="mb-6 text-gray-600 leading-relaxed text-justify">
        UI / UX design focuses on how users interact with digital products such
        as websites and mobile applications. In this internship at{" "}
        <span className="font-extrabold text-Secondary">Vilora</span>{" "}
        <span className="text-sky-400 font-extrabold">Tech</span>{" "}
        <span className="text-primary font-extrabold">Education</span>, you will learn how
        to understand user needs, create intuitive layouts, and design interfaces
        that are both functional and visually appealing. The program follows a
        structured design process used in real-world product teams.

      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>

          {/* SKILLS */}
          <h2 className="mb-4 text-2xl font-bold">
            <span className="bg-yellow-400 px-2">Skills</span> You Will Learn During the Internship
          </h2>

          <div className="flex flex-wrap gap-3 mb-12">
            {[
              "User Research & Requirement Analysis",
              "Design Thinking Principles",
              "Wireframing & Low-Fidelity Design",
              "High-Fidelity UI Design",
              "Prototyping & User Flows",
              "Figma for UI/UX Design",
              "Usability Testing & Feedback Analysis",
              "Design Systems & UI Consistency",
              "Responsive Design Concepts",
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
            What You Will Achieve After This Internship
          </h2>

          <ul className="space-y-4">
            {[
              "Strong understanding of UI and UX design principles",
              "Hands-on experience with real design projects",
              "Ability to create user-centered interface designs",
              "Professional UI/UX design portfolio",
              "Confidence to apply for junior UI / UX designer roles",
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
        Practical Design Projects
      </h2>

      <p className="mb-10 text-gray-600 leading-relaxed text-justify">
        During the internship, you will work on practical design projects such
        as website UI designs, mobile app interfaces, dashboards, and landing
        pages. These projects help you build a strong design portfolio that
        demonstrates your creativity, design thinking, and problem-solving
        skills.
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
