"use client";
import InternshipInnerForm from "../../component/common/form/InternshipInnerForm";
import InternshipForm from "../../component/common/form/InternshipForm";
import { ArrowRight, BadgeCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DigitalMarketing() {
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
            Digital Marketing Internship In Pondicherry
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-extrabold font-outfit-extrabold text-primary">
        Digital Marketing Internship in Pondicherry
      </h1>

      <p className="mb-10 text-lg leading-relaxed text-gray-600 text-justify">
        Join the <strong>Digital Marketing Internship in Pondicherry</strong> at{" "}
        <span className="font-extrabold text-Secondary">Vilora</span> <span className="text-sky-400 font-extrabold">Tech</span> <span className="text-primary font-extrabold">Education</span>{" "}
        and gain practical experience in promoting brands, products, and
        services online. This internship is designed for students, freshers,
        and beginners who want to build a career in digital marketing through
        hands-on training and real-time campaigns.
      </p>

      {/* ABOUT */}
      <h2 className="mb-4 text-2xl font-bold">
        About the Digital Marketing Internship
      </h2>

      <p className="mb-6 text-gray-600 leading-relaxed text-justify">
        Digital marketing focuses on reaching the right audience through online
        channels such as search engines, social media platforms, and paid
        advertising. In this internship at{" "}
        <span className="font-extrabold text-Secondary">Vilora</span>{" "}
        <span className="text-sky-400 font-extrabold">Tech</span>{" "}
        <span className="text-primary font-extrabold">Education</span>, you will learn how
        digital campaigns are planned, executed, monitored, and optimized using
        industry-standard tools and strategies.

      </p>

      <p className="mb-10 text-gray-600 leading-relaxed text-justify">
        The program emphasizes practical learning, where you will work on live
        marketing tasks and understand how businesses grow their online
        presence and generate leads through digital channels.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          {/* SKILLS */}
          <h2 className="mb-4 text-2xl font-bold">
            <span className="bg-yellow-400 px-2">Skills</span> You Will Learn During the Internship
          </h2>

          <div className="flex flex-wrap gap-3 mb-12">
            {[
              "Search Engine Optimization (SEO)",
              "Keyword Research & On-Page SEO",
              "Social Media Marketing Strategies",
              "Content Planning & Content Marketing",
              "Google Ads & Paid Campaign Management",
              "Social Media Ads (Basics)",
              "Website & Campaign Analytics",
              "Conversion Tracking & Optimization",
              "Digital Marketing Tools & Dashboards",
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
              "Strong understanding of digital marketing concepts",
              "Hands-on experience with SEO, social media, and ads",
              "Ability to plan and execute digital marketing campaigns",
              "Experience analyzing and optimizing campaign performance",
              "Confidence to apply for entry-level digital marketing roles",
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
        Practical Campaigns & Marketing Projects
      </h2>

      <p className="mb-10 text-gray-600 leading-relaxed text-justify">
        During the internship, you will work on practical marketing projects
        such as SEO optimization for websites, social media content planning,
        paid ad campaign setup, and performance analysis. These projects help
        you understand real marketing challenges and build a strong portfolio.
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
