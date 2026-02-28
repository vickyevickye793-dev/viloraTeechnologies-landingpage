"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";
import { addInternshipApplication } from "../../../services/internshipApi";

export default function InternshipForm({ closeForm }) {
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        const now = new Date();
        const userMessage = formData.get("message")?.trim();

        const payload = {
            name: formData.get("name"),
            phoneNumber: formData.get("phone"),
            collage: formData.get("collage")?.trim(),
            internshipRole: formData.get("role"),
            duration: Number(formData.get("duration")),
            member: Number(formData.get("member")),
            message: userMessage || null,
            branch: formData.get("branch"),
            date: now.toLocaleDateString("en-GB"),
            time: now.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
            }),
        };



        // console.log("Payload:", payload);
        const res = await addInternshipApplication(payload);
        console.log(res)
        console.log(payload)

        setLoading(false);

        if (res.success) {
            e.target.reset();
            setShowSuccess(true);
        }
        else {
            alert("Failed to submit");
        }
    };

    return (
        <>
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">

                <div className="relative w-full max-w-md p-4 duration-300 border border-gray-100 shadow-2xl bg-white/95 backdrop-blur-md rounded-3xl animate-in fade-in">

                    <button
                        onClick={closeForm}
                        className="absolute text-gray-400 transition-all duration-200 top-5 right-5 hover:text-gray-700 hover:rotate-90"
                    >
                        <X size={24} />
                    </button>


                    <div className="mb-2 text-center">
                        <h1 className="text-2xl font-bold text-primary">
                            <span className="text-Secondary">Join</span>{" "}
                            <span className="text-sky-400">Our</span> Team
                        </h1>
                        <p className="text-gray-600">
                            Apply now & kickstart your career journey
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="relative">
                            <input
                                name="name"
                                required
                                placeholder="Full Name"
                                className="w-full p-2 text-sm transition-all duration-200 border-2 border-gray-200 outline-none rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            />
                        </div>

                        <div className="relative">
                            <input
                                name="phone"
                                required
                                maxLength={10}
                                inputMode="numeric"
                                pattern="[0-9]{10}"
                                placeholder="Phone Number"
                                onInput={(e) => {
                                    e.target.value = e.target.value.replace(/\D/g, "");
                                }}
                                className="w-full p-2 text-sm transition-all duration-200 border-2 border-gray-200 outline-none rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            />
                        </div>

                        <div className="relative">
                            <input
                                name="collage"
                                required
                                placeholder="collage"
                                className="w-full p-2 text-sm transition-all duration-200 border-2 border-gray-200 outline-none rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            />
                        </div>

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



                        <div className="relative">
                            <textarea
                                name="message"
                                rows="3"
                                placeholder="Why do you want this internship? Tell us about yourself..."
                                className="w-full p-2 text-sm transition-all duration-200 border-2 border-gray-200 outline-none rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 rounded-sm font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] shadow-lg
                                     ${loading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-primary hover:shadow-xl"
                                }`}
                        >
                            <Send size={20} />
                            {loading ? "Submitting..." : "Submit Application"}
                        </button>

                    </form>
                </div>
            </div>

            {showSuccess && (
                <div className="fixed inset-0 z-[10000] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl shadow-2xl w-[100%] max-w-md p-8 sm:p-10 border-2 border-green-200 flex flex-col items-center text-center relative overflow-hidden animate-[slideUp_0.3s_ease-out]">

                        <div className="absolute w-40 h-40 bg-green-100 rounded-full opacity-50 -top-20 -right-20"></div>
                        <div className="absolute w-40 h-40 bg-blue-100 rounded-full opacity-50 -bottom-20 -left-20"></div>

                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10 animate-[bounce_1s_ease-in-out]">
                            <CheckCircle2 className="text-white" size={48} strokeWidth={3} />
                        </div>

                        <h2 className="relative z-10 mb-3 text-3xl font-bold text-green-600 sm:text-4xl">
                            Application Submitted Successfully!
                        </h2>

                        <p className="relative z-10 mb-2 text-lg font-semibold text-gray-700">
                            Welcome to Vilora Tech Education
                        </p>

                        <p className="relative z-10 mb-6 text-sm text-gray-600">
                            Our HR team will contact you soon.
                        </p>


                        <button
                            onClick={closeForm}
                            className="relative z-10 px-8 py-3 font-bold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:shadow-lg hover:scale-105"
                        >
                            Close
                        </button>

                    </div>
                </div>
            )}
        </>
    );
}