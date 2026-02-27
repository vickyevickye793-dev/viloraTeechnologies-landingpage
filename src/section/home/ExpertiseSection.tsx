"use client";
import Image from "next/image";
import expect from "../../../public/assets/expected.png"

const CHECKPOINTS = [
  "Adopting proven development models like Spiral, Cascade & Prototyping",
  "Minimizing risk through structured and incremental execution",
  "Ensuring quality, monitoring, and long-term customer success",
];
export default function ExpertiseSection() {

    return (

        <section className="expertise-section bg-white w-full py-16 md:py-24 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div
                    className="relative w-full overflow-hidden group"
                    style={{ aspectRatio: "4/4" }}
                >
                    <Image
                        src={expect}
                        alt="Business meeting"
                        className="w-full h-full object-cover"
                        fill
                        priority
                    />



                    <span
                        className="absolute inset-0 
                    bg-[linear-gradient(110deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_40%,rgba(255,255,255,0.45)_50%,rgba(255,255,255,0)_60%,rgba(255,255,255,0)_100%)]
                    translate-x-[-100%]
                    group-hover:animate-[shine_0.6s_ease-out]

                    pointer-events-none"
                    />
                </div>




                <div className="flex flex-col gap-5">

                    <span
                        className="text-[16px] font-bold uppercase tracking-[0.22em] text-primary"

                    >
                        Long-term growth vision
                    </span>

                    <h2
                        className="text-[clamp(28px,3.5vw,42px)] font-extrabold leading-[1.18] tracking-tight"
                        style={{ color: "#0d1b3e" }}
                    >
                        Process & Methodologies
                    </h2>

                    <p
                        className="text-[14px] leading-[1.75] max-w-md"
                        style={{ color: "#5a6a85" }}
                    >
                        VILORA Technologies follows proven traditional process models such as Spiral (Incremental), Cascade, and Quick Prototyping based on customer requirements.

                        We primarily recommend the Spiral Model for most projects, as it minimizes risk and supports effective market penetration.

                        Our structured approach includes detailed documentation, implementation methodologies, team setup and budgeting, configuration management, quality control, performance tracking, measurement analysis, and continuous monitoring & reporting.

                        Our vision is to always contribute to our customers’ growth and long-term success.
                    </p>

                    <ul className="flex flex-col gap-3 mt-1">
                        {CHECKPOINTS.map((point, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <span
                                    className="flex-shrink-0 w-5 h-5 flex items-center justify-center"
                                >
                                    <svg
                                        width="18"
                                        height="14"
                                        viewBox="0 0 18 14"
                                        fill="none"
                                    >
                                        <path
                                            d="M1.5 7L6.5 12L16.5 2"
                                            stroke="#cf282e"
                                            strokeWidth="2.2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                <span
                                    className="text-[13.5px] font-semibold"
                                    style={{ color: "#1e2d50" }}
                                >
                                    {point}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>



    );
}