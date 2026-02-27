"use client";

import { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    const containerRef = useRef(null);
    const digit1Ref = useRef(null);
    const digit2Ref = useRef(null);
    const digit3Ref = useRef(null);
    const badgeRef = useRef(null);
    const descRef = useRef(null);
    const btnRef = useRef(null);
    const glitchRef = useRef(null);
    const gridRef = useRef(null);
    const scanRef = useRef(null);

    useEffect(() => {
        let gsap;
        let glitchInterval;

        const init = async () => {
            const gsapModule = await import("gsap");
            gsap = gsapModule.gsap || gsapModule.default;

            gsap.fromTo(
                gridRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1.2, ease: "power2.out" }
            );

            gsap.fromTo(
                scanRef.current,
                { top: "-10%" },
                {
                    top: "110%",
                    duration: 3.5,
                    ease: "none",
                    repeat: -1,
                    repeatDelay: 1,
                }
            );

            gsap.fromTo(
                badgeRef.current,
                { y: -40, opacity: 0, scale: 0.8 },
                { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)", delay: 0.3 }
            );

            const digits = [digit1Ref.current, digit2Ref.current, digit3Ref.current];
            gsap.fromTo(
                digits,
                { y: 120, opacity: 0, rotateX: -90, transformOrigin: "center top" },
                {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    duration: 0.9,
                    stagger: 0.12,
                    ease: "expo.out",
                    delay: 0.5,
                }
            );



            gsap.fromTo(
                [descRef.current, btnRef.current],
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power3.out", delay: 1 }
            );

            const triggerGlitch = () => {
                if (!glitchRef.current) return;
                const tl = gsap.timeline();
                tl.to(glitchRef.current, {
                    skewX: () => Math.random() * 10 - 5,
                    x: () => Math.random() * 10 - 5,
                    duration: 0.05,
                })
                    .to(glitchRef.current, { skewX: 0, x: 0, duration: 0.05 })
                    .to(glitchRef.current, {
                        x: () => Math.random() * 6 - 3,
                        duration: 0.05,
                    })
                    .to(glitchRef.current, { x: 0, duration: 0.05 });
            };

            glitchInterval = setInterval(triggerGlitch, 3500);
        };

        init();

        return () => {
            clearInterval(glitchInterval);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative flex flex-col items-center justify-center min-h-screen bg-[#fafaf8] text-slate-900 overflow-hidden px-4"
            style={{ fontFamily: "'Courier New', monospace" }}
        >
            <div
                ref={gridRef}
                className="absolute inset-0 opacity-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(220,38,38,0.07) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(220,38,38,0.07) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />

            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(220,38,38,0.06) 0%, transparent 70%)",
                }}
            />

            <div
                ref={scanRef}
                className="absolute left-0 right-0 pointer-events-none"
                style={{
                    height: "2px",
                    background:
                        "linear-gradient(90deg, transparent, rgba(220,38,38,0.35), transparent)",
                    filter: "blur(1px)",
                }}
            />

            {["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"].map(
                (pos, i) => (
                    <div
                        key={i}
                        className={`absolute ${pos} w-8 h-8 sm:w-12 sm:h-12 pointer-events-none`}
                        style={{
                            borderTop: i < 2 ? "1px solid rgba(220,38,38,0.3)" : "none",
                            borderBottom: i >= 2 ? "1px solid rgba(220,38,38,0.3)" : "none",
                            borderLeft: i % 2 === 0 ? "1px solid rgba(220,38,38,0.3)" : "none",
                            borderRight: i % 2 === 1 ? "1px solid rgba(220,38,38,0.3)" : "none",
                        }}
                    />
                )
            )}

            <div className="relative z-10 text-center w-full max-w-3xl flex flex-col items-center gap-5 sm:gap-7">

                <div ref={badgeRef} className="opacity-0">
                    <span
                        className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.35em] text-red-600 border border-red-200 px-4 py-1.5 rounded-sm"
                        style={{ background: "rgba(220,38,38,0.05)" }}
                    >
                        <span
                            className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse inline-block"
                        />
                        Error · Page Not Found
                    </span>
                </div>

                <div ref={glitchRef} className="relative select-none">
                    <div
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        style={{
                            transform: "translate(-3px, 0)",
                            mixBlendMode: "multiply",
                        }}
                    >
                        <span
                            className="text-[clamp(100px,22vw,220px)] font-black leading-none tracking-tighter"
                            style={{
                                color: "rgba(0,180,220,0.18)",
                                fontFamily: "'Courier New', monospace",
                            }}
                        >
                            404
                        </span>
                    </div>
                    <div
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        style={{
                            transform: "translate(3px, 0)",
                            mixBlendMode: "multiply",
                        }}
                    >
                        <span
                            className="text-[clamp(100px,22vw,220px)] font-black leading-none tracking-tighter"
                            style={{
                                color: "rgba(255,0,60,0.12)",
                                fontFamily: "'Courier New', monospace",
                            }}
                        >
                            404
                        </span>
                    </div>

                    <div className="flex items-center justify-center perspective-[800px]">
                        {["4", "0", "4"].map((digit, i) => (
                            <span
                                key={i}
                                ref={i === 0 ? digit1Ref : i === 1 ? digit2Ref : digit3Ref}
                                className="opacity-0 font-black leading-none"
                                style={{
                                    fontSize: "clamp(100px, 22vw, 220px)",
                                    fontFamily: "'Courier New', monospace",
                                    background:
                                        i === 1
                                            ? "linear-gradient(180deg, #e53e3e 0%, #9b1c1c 100%)"
                                            : "linear-gradient(180deg, #1a1a1a 0%, #dc2626 55%, #9b1c1c 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    letterSpacing: "-0.05em",
                                    filter: "drop-shadow(0 4px 24px rgba(220,38,38,0.2))",
                                    display: "inline-block",
                                }}
                            >
                                {digit}
                            </span>
                        ))}
                    </div>
                </div>

                <p
                    ref={descRef}
                    className="opacity-0 text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] max-w-xs sm:max-w-sm leading-loose"
                    style={{ color: "rgba(15,15,15,0.4)" }}
                >
                    &gt;&gt; The page you&apos;re looking for has drifted into deep space /{" "}
                    <span style={{ color: "rgba(220,38,38,0.8)" }}>null</span>
                </p>

                <div ref={btnRef} className="opacity-0">
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-3 px-7 sm:px-9 py-3.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-red-600 transition-all duration-300 rounded-sm relative overflow-hidden"
                        style={{
                            background: "rgba(220,38,38,0.06)",
                            border: "1px solid rgba(220,38,38,0.3)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgb(220,38,38)";
                            e.currentTarget.style.borderColor = "rgb(220,38,38)";
                            e.currentTarget.style.color = "#fff";
                            e.currentTarget.style.boxShadow =
                                "0 8px 30px rgba(220,38,38,0.3)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(220,38,38,0.06)";
                            e.currentTarget.style.borderColor = "rgba(220,38,38,0.3)";
                            e.currentTarget.style.color = "rgb(220,38,38)";
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        <ArrowLeft size={13} />
                        Return to home
                    </Link>
                </div>

                <div
                    className="flex items-center gap-4 sm:gap-6 text-[8px] sm:text-[9px] tracking-widest uppercase"
                    style={{ color: "rgba(15,15,15,0.25)" }}
                >
                    {["STATUS: 404", "SIGNAL: LOST", "SYS: ERROR"].map((item, i) => (
                        <span key={i} className="flex items-center gap-1.5">
                            <span
                                className="w-1 h-1 rounded-full inline-block"
                                style={{ background: "rgba(220,38,38,0.4)" }}
                            />
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}