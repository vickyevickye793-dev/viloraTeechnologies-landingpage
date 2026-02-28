"use client";
import InternshipInnerForm from "../../component/common/form/InternshipInnerForm";
import InternshipForm from "../../component/common/form/InternshipForm";
import { ArrowRight, BadgeCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FullStack() {
  const fullStackJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Full Stack Developer Internship in Pondicherry",
  "description": "Comprehensive internship covering MERN, MEAN, Java, and Python Full Stack tracks with live projects in Pondicherry.",
  "provider": {
    "@type": "Organization",
    "name": "Vilora Tech Education",
    "sameAs": "https://viloratecheducation.com"
  },
  "coursePrerequisites": "Basic understanding of programming",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "In-Person",
    "location": "Pondicherry - Venkata Nagar & IG Square"
  }
};
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="px-4 lg:pb-16 mx-auto">
      {/* BREADCRUMB */}
      <nav
        aria-label="Breadcrumb"
        className="mb-6 text-sm text-gray-500"
      >
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
            Full Stack Internship In Pondicherry
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-extrabold font-outfit-extrabold text-primary">
        Full Stack Developer Internship in Pondicherry
      </h1>

      <p className="mb-10 text-lg leading-relaxed text-gray-600 text-justify">
        Enroll in the <strong>Full Stack Developer Internship in Pondicherry</strong>{" "}
        at <span className="font-extrabold text-Secondary">Vilora</span> <span className="text-sky-400 font-extrabold">Tech</span> <span className="text-primary font-extrabold">Education</span>{" "}
        and gain hands-on experience in developing complete web applications.
        This internship is carefully structured for students, freshers, and
        aspiring developers who want to learn frontend and backend development
        through real-time projects and practical training.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          {/* FULL STACK TRACKS */}
          <h2 className="mb-4 text-2xl font-bold">
            Full Stack Technology Tracks
          </h2>

          <p className="mb-6 text-gray-600 text-justify">
            At <span className="font-extrabold text-Secondary">Vilora</span> <span className="text-sky-400 font-extrabold">Tech</span> <span className="text-primary font-extrabold">Education</span>{" "}, the Full Stack Developer Internship is offered in
            multiple technology tracks. Interns will choose one stack based on their
            interest and career goals. Each track follows the same internship structure,
            live project approach, and mentor guidance.
          </p>

          {/* JAVASCRIPT / MERN STACK */}
          <p className="mb-3 font-semibold text-primary">
            MERN Stack
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "HTML5 & CSS3",
              "JavaScript",
              "React.js",
              "Node.js",
              "Express.js",
              "MySQL / MongoDB",
            ].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm font-medium bg-blue-100 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* MEAN STACK */}
          <p className="mb-3 font-semibold text-primary">
            MEAN Stack
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "HTML5 & CSS3",
              "JavaScript",
              "Angular",
              "Node.js",
              "Express.js",
              "MySQL / MongoDB",
            ].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm font-medium bg-blue-100 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* PYTHON FULL STACK */}
          <p className="mb-3 font-semibold text-primary">
            Python Full Stack
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "HTML5 & CSS3",
              "JavaScript",
              "Python",
              "Django / Flask",
              "REST API Development",
              "MySQL / MongoDB",
            ].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm font-medium bg-blue-100 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* JAVA FULL STACK */}
          <p className="mb-3 font-semibold text-primary">
            Java Full Stack
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "HTML5 & CSS3",
              "JavaScript",
              "Java",
              "Spring Boot",
              "REST API Development",
              "MySQL / MongoDB",
            ].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm font-medium bg-blue-100 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>




          <p className="text-sm text-gray-500 mb-10">
            Note: Interns will choose one technology stack. Each full stack track is
            trained separately with dedicated projects and mentors.
          </p>
        </div>

        <div className="hidden md:block lg:flex justify-center items-center lg:ml-10">
          <InternshipInnerForm />
        </div>
      </div>

{/* Add this Section after the Technology Tracks */}
<section className="py-12 border-t border-gray-100">
  <h2 className="mb-8 text-2xl md:text-3xl font-bold text-center">
    Your <span className="text-primary">Internship Journey</span> at Vilora Tech
  </h2>
  <div className="grid gap-6 md:grid-cols-3">
    {[
      { step: "01", title: "Frontend Mastery", desc: "Build responsive UIs using HTML5, CSS3, and modern frameworks like React or Angular." },
      { step: "02", title: "Backend & Logic", desc: "Develop server-side logic, handle APIs, and manage secure user authentication." },
      { step: "03", title: "Database & Deployment", desc: "Master MySQL/MongoDB and learn to deploy your live project on cloud platforms." }
    ].map((item, i) => (
      <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 relative">
        <span className="text-4xl font-black text-blue-100 absolute top-4 right-4">{item.step}</span>
        <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
      </div>
    ))}
  </div>
</section>
{/* Add this inside the "Live Projects" section
<div className="grid gap-4 md:grid-cols-2 mt-6">
  <div className="p-4 border border-emerald-100 bg-emerald-50 rounded-lg">
    <h4 className="font-bold text-emerald-700">🛒 E-Commerce Platform</h4>
    <p className="text-sm text-gray-600">Build a full-scale store with product filtering, cart logic, and payment gateway integration.</p>
  </div>
  <div className="p-4 border border-blue-100 bg-blue-50 rounded-lg">
    <h4 className="font-bold text-blue-700">🔐 User Auth System</h4>
    <p className="text-sm text-gray-600">Implement secure JWT-based login, signup, and password recovery systems.</p>
  </div>
</div> */}

      {/* PROGRAM OVERVIEW */}
      <h2 className="mb-4 text-2xl font-bold">
        About the Full Stack Developer Internship
      </h2>

      <p className="mb-6 text-gray-600 text-justify">
        A full stack developer works on both the user interface and the server
        side of web applications. In this internship program at{" "}
        <span className="font-extrabold text-Secondary">Vilora</span>{" "}
        <span className="text-sky-400 font-extrabold">Tech</span>{" "}
        <span className="text-primary font-extrabold">Education</span>, you will learn how
        modern web applications are built from scratch, starting from planning
        the user interface to developing backend logic and managing databases.
        The training focuses on real industry workflows rather than just theory.

      </p>




      {/* PROJECTS */}
      <h2 className="mb-4 text-2xl font-bold">
        Live Projects and Practical Experience
      </h2>

      <p className="mb-10 text-gray-600 text-justify">
        Throughout the internship, you will work on live projects such as
        dynamic websites, admin panels, authentication systems, and complete
        full stack applications. These projects help you understand real
        development challenges and enable you to build a professional project
        portfolio.
      </p>

      {/* OUTCOMES */}
      {/* <div className="flex flex-col justify-center items-center">
        <h2 className="mb-4 text-2xl font-bold">
          What You Will Achieve After This Internship
        </h2>

        <ul className="space-y-4">
          {[
            "Ability to design and develop complete full stack applications",
            "Hands-on experience with modern web development tools",
            "Clear understanding of frontend, backend, and databases",
            "A professional project portfolio to showcase your skills",
            "Confidence to apply for entry-level full stack developer roles",
          ].map((outcome, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 mt-1 text-green-500" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </div> */}

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
