"use client";
import InternshipInnerForm from "../../component/common/form/InternshipInnerForm";
import InternshipForm from "../../component/common/form/InternshipForm";
import { ArrowRight, BadgeCheck, CheckCircle2, Code2 } from "lucide-react";
import { useInternshipStore } from "../../store/internshipStore";

export default function DigitalMarketing() {
  const { isOpen, openForm } = useInternshipStore();

  return (
    <div className="relative px-4 pb-20 mx-auto max-w-7xl overflow-x-hidden">

      {/* HERO SECTION - SAME AS FULLSTACK */}
      <section className="relative py-20 text-center">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fca5a518 1px, transparent 1px), linear-gradient(to bottom, #fca5a518 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-62.5 bg-red-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="relative z-10">

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 bg-white border border-red-100 text-red-800 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-8 shadow-sm">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            2026 Batch — Limited Seats
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 mb-4">
            Digital Marketing
            <span className="block text-primary mt-1">
              Internship in Pondicherry
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="max-w-2xl mx-auto text-lg text-gray-500 leading-relaxed mb-10">
            Master SEO, Social Media Marketing, Paid Ads, and Analytics
            through live campaigns and real-time marketing projects.
          </p>

          {/* EXACT SAME BUTTON POSITION */}
          <button
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-bold rounded-full shadow-xl shadow-primary/20 hover:opacity-90 transition-opacity duration-200"
            onClick={openForm}
          >
            <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <BadgeCheck size={16} />
            </span>
            Apply for Internship
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* ABOUT SECTION - SAME CARD STYLE */}
      <section className="mb-24">
        <div className="flex items-start gap-6 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
          <div className="w-14 h-14 shrink-0 bg-gradient-to-br from-primary to-red-400 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
            <Code2 size={24} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-1">
              About This Internship
            </h2>
            <div className="w-10 h-1 bg-gradient-to-r from-primary to-red-400 rounded-full mb-4" />
            <p className="text-gray-600 leading-relaxed">
              Learn how to plan, execute, monitor, and optimize digital marketing
              campaigns using SEO, social media platforms, paid ads, and analytics
              tools. Gain real-world campaign experience.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS + OUTCOMES */}
      <section className="mb-20 grid md:grid-cols-2 gap-6">

        {/* SKILLS */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">
          <h3 className="text-xl font-extrabold mb-5">
            Skills You Will Learn
          </h3>

          <div className="flex flex-wrap gap-2">
            {[
              "SEO & Keyword Research",
              "Social Media Marketing",
              "Content Marketing",
              "Google Ads",
              "Campaign Analytics",
              "Conversion Optimization",
              "Digital Tools & Dashboards",
            ].map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-xs font-semibold bg-red-50 text-red-700 rounded-full border border-red-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* OUTCOMES */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">
          <h3 className="text-xl font-extrabold mb-5">
            What You Will Achieve
          </h3>

          <ul className="space-y-4">
            {[
              "Strong digital marketing foundation",
              "Hands-on SEO & ads experience",
              "Live campaign execution skills",
              "Portfolio-ready marketing projects",
              "Confidence for marketing roles",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-1 text-green-500" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="text-center">
        <button
          onClick={openForm}
          className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-bold rounded-full shadow-xl shadow-primary/20 hover:opacity-90 transition-opacity duration-200"
        >
          <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <BadgeCheck size={16} />
          </span>
          Apply for Internship
          <ArrowRight size={18} />
        </button>

        <p className="mt-4 text-sm text-gray-500">
          Limited seats available • Apply early
        </p>
      </section>

      {isOpen && <InternshipForm />}
    </div>
  );
}