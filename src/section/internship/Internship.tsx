"use client";

import React, { useState } from "react";
import { ArrowRight, BadgeCheck, CheckCircle2, Code } from "lucide-react";
import InternshipForm from "../../component/common/form/InternshipForm";
import { benefits, internshipRoles, whyInternship } from "../../component/localDb/InternShip";
import { useRouter } from "next/navigation";

export default function Internship() {
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">

      <section className="p-10">
        <div className="flex flex-col justify-center items-center px-4 text-center w-full relative z-10">

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Kickstart Your Career with
            <span className="block ">
              Industry-Ready Internship Programs
            </span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10">
            Gain real-world experience through live projects, expert mentorship,
            and hands-on training designed to prepare you for today’s IT industry.
            Build strong portfolios and become job-ready with confidence.
          </p>

          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-3 px-10 py-4 text-lg font-semibold text-white 
            bg-primary rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            <BadgeCheck className="w-5 h-5" />
            Apply for Internship
            <ArrowRight className="w-5 h-5" />
          </button>

        </div>


      </section>



      <section id="roles" className="py-20 bg-gradient-to-b from-white to-slate-100">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Choose Your <span className="text-primary">Learning Path</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Select from our carefully designed programs tailored to industry demands
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {internshipRoles.map((role, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-slate-200 
                shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 flex items-center justify-center 
                  rounded-xl bg-primary text-white shadow-md group-hover:scale-110 transition">
                    <Code className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {role.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {role.desc}
                </p>

                <button
                  onClick={() => router.push(role.url)}
                  className="w-full inline-flex items-center justify-center gap-2 
                  px-6 py-3 text-sm font-semibold text-white rounded-xl 
                  bg-primary hover:opacity-90 transition"
                >
                  View Program Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showForm && <InternshipForm closeForm={() => setShowForm(false)} />}

    </main>
  );
}