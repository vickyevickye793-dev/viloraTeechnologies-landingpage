"use client";

import React from "react";
import { X, Send } from "lucide-react";
import { useInternshipStore } from "@/src/store/internshipStore";
import SuccessModal from "../modal/SuccessModal";

export default function InternshipForm() {
    const { loading, closeForm, submitApplication, resetState } =
        useInternshipStore();

    const handleSubmit = async (e) => {
        e.preventDefault();

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
            branch: formData.get("branch"),
            message: userMessage || null,
            date: now.toLocaleDateString("en-GB"),
            time: now.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
            }),
        };

        await submitApplication(payload);

        if (useInternshipStore.getState().success) {
            e.target.reset();
        }
    };
    return (
        <>
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">

                <div className="relative w-full max-w-md p-4 duration-300 border border-gray-100 shadow-2xl bg-white/95 backdrop-blur-md rounded-3xl animate-in fade-in">

                    <button
                        onClick={() => {
                            resetState();
                            closeForm();
                        }}
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
            <SuccessModal />

        </>
    );
}