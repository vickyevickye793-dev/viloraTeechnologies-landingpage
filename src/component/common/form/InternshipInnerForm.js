"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { addInternshipApplication } from "../../../services/internshipApi";

export default function InternshipInnerForm() {
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        const now = new Date();

        const payload = {
            name: formData.get("name"),
            phoneNumber: formData.get("phone"),
            collage: formData.get("collage"),
            internshipRole: formData.get("role"),
            duration: Number(formData.get("duration")),
            member: Number(formData.get("member")),
            message: formData.get("message") || null,
            branch: formData.get("branch"),
            date: now.toLocaleDateString("en-GB"),
            time: now.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
            }),
        };

        const res = await addInternshipApplication(payload);
        console.log(res)
        setLoading(false);

        if (res.success) {
            e.target.reset();
            setShowSuccess(true);
        } else {
            alert("Failed to submit");
        }
    };

    return (
        <div className="flex justify-center px-4 py-16">
            <div className="w-full max-w-md p-6 bg-white/95 
                border border-gray-200 
                shadow-[inset_0_2px_8px_rgba(0,0,0,0.08)] rounded-2xl">

                {/* Header */}
                <div className="mb-4 text-center">
                    <h1 className="text-2xl font-bold text-primary">
                        <span className="text-Secondary">Join</span>{" "}
                        <span className="text-sky-400">Our</span> Team
                    </h1>
                    <p className="text-gray-600">
                        Apply now & kickstart your career journey
                    </p>
                </div>

                {/* Success Message */}
                {showSuccess && (
                    <div className="mb-4 p-4 rounded-xl bg-green-50 border border-green-200 text-center">
                        <CheckCircle2 className="mx-auto mb-2 text-green-600" size={36} />
                        <p className="font-semibold text-green-700">
                            Application submitted successfully!
                        </p>
                        <p className="text-sm text-gray-600">
                            Our HR team will contact you soon.
                        </p>
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                        name="name"
                        required
                        placeholder="Full Name"
                        className="outline-none w-full p-2 text-sm border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />

                    <input
                        name="phone"
                        required
                        maxLength={10}
                        inputMode="numeric"
                        placeholder="Phone Number"
                        onInput={(e) =>
                            (e.target.value = e.target.value.replace(/\D/g, ""))
                        }
                        className=" outline-none w-full p-2 text-sm border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />

                    <input
                        name="collage"
                        required
                        placeholder="College Name"
                        className="outline-none w-full p-2 text-sm border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />

                    <div className="grid grid-cols-2 gap-3">
                        <div className="relative w-full">
                            <select
                                name="role"
                                required
                                className="w-full p-2 text-sm transition-all duration-200 border-2 border-gray-200 outline-none rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            >
                                <option value="">Select Internship Role</option>
                                <option value="Full Stack Developer">Full Stack Developer</option>
                                <option value="Python Full Stack Developer">Python Full Stack Developer</option>
                                <option value="Java Full Stack Developer">Java Full Stack Developer</option>
                                <option value="Web Designer">Web Designer</option>
                                <option value="UI/UX Designer">UI/UX Designer</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Data Analyst">Data Analyst</option>
                            </select>
                        </div>

                        <div className="relative w-full">
                            <select
                                name="duration"
                                required
                                className="w-full p-2 text-sm transition-all duration-200 border-2 border-gray-200 outline-none rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            >
                                <option value="">Select Duration</option>
                                <option value="1">1 Month</option>
                                <option value="2">2 Months</option>
                                <option value="3">3 Months</option>
                                <option value="6">6 Months</option>
                            </select>
                        </div>
                        <div className="relative w-full">
                            <select
                                name="member"
                                required
                                className="w-full p-2 text-sm transition-all duration-200 border-2 border-gray-200 outline-none rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            >
                                <option value="">Select Member</option>
                                <option value="1">1 Member</option>
                                <option value="2">2 Members</option>
                                <option value="3">3 Members</option>
                                <option value="4">4 Members</option>
                                <option value="5">5 Members</option>
                                <option value="6">6 Members</option>
                                <option value="7">7 Members</option>
                                <option value="8">8 Members</option>
                                <option value="9">9 Members</option>
                                <option value="10">10 Members</option>
                            </select>
                        </div>

                        <div className="relative w-full">
                            <select
                                name="branch"
                                required
                                className="w-full p-2 text-sm transition-all duration-200 border-2 border-gray-200 outline-none rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            >
                                <option value="">Select Branch</option>
                                <option value="IG Square Pondicherry">IG Square Pondicherry</option>
                                <option value="Venkata Nagar Pondicherry">
                                    Venkata Nagar Pondicherry
                                </option>
                            </select>
                        </div>
                    </div>
                    <textarea
                        name="message"
                        rows="3"
                        placeholder="Why do you want this internship?"
                        className="outline-none w-full p-2 text-sm border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition
                         ${loading ? "bg-gray-400" : "bg-primary hover:scale-105"}`}
                    >
                        <Send size={18} />
                        {loading ? "Submitting..." : "Submit Application"}
                    </button>
                </form>
            </div>
        </div>
    );
}
