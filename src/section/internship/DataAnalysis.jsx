"use client";
import InternshipInnerForm from "../../component/common/form/InternshipInnerForm";
import InternshipForm from "../../component/common/form/InternshipForm";
import { ArrowRight, BadgeCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DataAnalysis() {
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
            Data Analysis Internship In Pondicherry
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-extrabold font-outfit-extrabold text-primary">
        Data Analysis Internship in Pondicherry
      </h1>

      <p className="mb-10 text-lg leading-relaxed text-gray-600 text-justify">
        Join the <strong>Data Analysis Internship in Pondicherry</strong> at{" "}
        <span className="font-extrabold text-Secondary">Vilora</span>{" "}
        <span className="text-sky-400 font-extrabold">Tech</span>{" "}
        <span className="text-primary font-extrabold">Education</span>{" "}
        and gain practical experience in working with real-world data. This internship is designed for students, freshers, and beginners who want to build a career in data analytics through hands-on projects and real-time datasets.
      </p>

      {/* ABOUT */}
      <h2 className="mb-4 text-2xl font-bold">
        About the Data Analysis Internship
      </h2>

      <p className="mb-6 text-gray-600 leading-relaxed text-justify">
        Data analysis focuses on collecting, cleaning, organizing, and interpreting data to help businesses make informed decisions. In this internship at{" "}
        <span className="font-extrabold text-Secondary">Vilora</span>{" "}
        <span className="text-sky-400 font-extrabold">Tech</span>{" "}
        <span className="text-primary font-extrabold">Education</span>, you will learn how data-driven insights are generated using industry-standard tools and techniques.
      </p>

      <p className="mb-10 text-gray-600 leading-relaxed text-justify">
        The program emphasizes practical learning, where you will work on real datasets, create dashboards, generate reports, and understand how organizations use data for strategic planning and growth.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          {/* SKILLS */}
          <h2 className="mb-4 text-2xl font-bold">
            <span className="bg-yellow-400 px-2">Skills</span> You Will Learn During the Internship
          </h2>

          <div className="flex flex-wrap gap-3 mb-12">
            {[
              "Microsoft Excel for Data Analysis",
              "Advanced Excel Functions & Pivot Tables",
              "SQL for Database Queries",
              "Power BI / Tableau (Basics)",
              "Python for Data Analysis (Pandas, NumPy)",
              "Data Cleaning & Preprocessing",
              "Data Visualization Techniques",
              "Statistical Analysis Fundamentals",
              "Dashboard & Report Creation",
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
              "Strong understanding of data analysis concepts",
              "Hands-on experience with Excel, SQL, and Python",
              "Ability to analyze and interpret real-world datasets",
              "Experience creating dashboards and reports",
              "Confidence to apply for entry-level data analyst roles",
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
        Practical Data Analysis Projects
      </h2>

      <p className="mb-10 text-gray-600 leading-relaxed text-justify">
        During the internship, you will work on real-time datasets such as sales data analysis, customer behavior insights, performance dashboards, and business reporting. These projects help you understand practical data challenges and build a strong analytics portfolio.
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