"use client";

import {  ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-white text-slate-900 overflow-hidden px-4">
            
            <div className="relative z-10 text-center max-w-2xl w-full flex flex-col items-center gap-6">

                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-red-600 border border-red-200 px-4 py-1.5 rounded-full bg-red-50">
                    Page Not Found
                </span>

                <h1 className="text-[160px] md:text-[240px] font-black leading-none tracking-tighter -my-2">
                    <span className="bg-gradient-to-b from-red-600 to-red-400 bg-clip-text text-transparent">
                        4
                    </span>
                    <span className="bg-gradient-to-b from-red-400 to-red-600 bg-clip-text text-transparent">
                        0
                    </span>
                    <span className="bg-gradient-to-b from-red-600 to-red-400 bg-clip-text text-transparent">
                        4
                    </span>
                </h1>

                <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500 max-w-sm leading-relaxed">
                    The page you&apos;re looking for has drifted into deep space
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-3 px-8 py-3.5 bg-red-600 text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm shadow-[0_0_30px_rgba(220,38,38,0.2)] hover:shadow-[0_0_45px_rgba(220,38,38,0.4)] hover:scale-105 active:scale-95"
                >
                    <ArrowLeft size={14} />
                    Back to Home
                </Link>

            </div>
        </div>
    );
}