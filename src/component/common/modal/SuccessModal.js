"use client";

import { CheckCircle2 } from "lucide-react";
import { useInternshipStore } from "@/src/store/internshipStore";

export default function SuccessModal() {
  const { success, resetState } = useInternshipStore();

  if (!success) return null;

  return (
    <div className="fixed inset-0 z-[10000] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 border-2 border-green-200 flex flex-col items-center text-center">

        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
          <CheckCircle2 className="text-white" size={48} strokeWidth={3} />
        </div>

        <h2 className="mb-3 text-2xl font-bold text-green-600">
          Application Submitted Successfully!
        </h2>

        <p className="mb-6 text-sm text-gray-600">
          Our HR team will contact you soon.
        </p>

        <button
          onClick={resetState}
          className="px-6 py-3 font-bold text-white rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:shadow-lg hover:scale-105 transition"
        >
          Close
        </button>

      </div>
    </div>
  );
}