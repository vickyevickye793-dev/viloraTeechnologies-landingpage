// "use client";

// import React from "react";
// import { ArrowRight, BadgeCheck, Code } from "lucide-react";
// import InternshipForm from "../../component/common/form/InternshipForm";
// import {
//   internshipRoles,
// } from "../../component/localDb/InternShip";
// import { useRouter } from "next/navigation";
// import { useInternshipStore } from "../../store/internshipStore";

// export default function Internship() {
//   const { isOpen, openForm } = useInternshipStore();
//   const router = useRouter();

//   return (
//     <main className="min-h-screen bg-linear-to-b from-white via-slate-50 to-white">

//       {/* HERO SECTION */}
//       <section className="p-10">
//         <div className="flex flex-col justify-center items-center px-4 text-center w-full relative z-10">

//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
//             Kickstart Your Career with
//             <span className="block">
//               Industry-Ready Internship Programs
//             </span>
//           </h1>

//           <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10">
//             Gain real-world experience through live projects, expert mentorship,
//             and hands-on training designed to prepare you for today’s IT industry.
//             Build strong portfolios and become job-ready with confidence.
//           </p>

//           <button
//             onClick={openForm}
//             className="inline-flex items-center gap-3 px-10 py-4 text-lg font-semibold text-white 
//             bg-primary rounded-full shadow-lg hover:scale-105 transition-all duration-300"
//           >
//             <BadgeCheck className="w-5 h-5" />
//             Apply for Internship
//             <ArrowRight className="w-5 h-5" />
//           </button>

//         </div>
//       </section>


//       {/* ROLES SECTION */}
//       <section id="roles" className="py-20 bg-linear-to-b from-white to-slate-100">
//         <div className="container px-4 mx-auto max-w-6xl">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
//               Choose Your <span className="text-primary">Learning Path</span>
//             </h2>
//             <p className="text-gray-600 text-lg">
//               Select from our carefully designed programs tailored to industry demands
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2">
//             {internshipRoles.map((role, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-3xl p-8 border border-slate-200 
//                 shadow-sm hover:shadow-xl transition-all duration-300 group"
//               >
//                 <div className="flex items-center gap-4 mb-5">
//                   <div className="w-12 h-12 flex items-center justify-center 
//                   rounded-xl bg-primary text-white shadow-md group-hover:scale-110 transition">
//                     <Code className="w-6 h-6" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900">
//                     {role.title}
//                   </h3>
//                 </div>

//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   {role.desc}
//                 </p>

//                 <button
//                   onClick={() => router.push(role.url)}
//                   className="w-full inline-flex items-center justify-center gap-2 
//                   px-6 py-3 text-sm font-semibold text-white rounded-xl 
//                   bg-primary hover:opacity-90 transition"
//                 >
//                   View Program Details
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* GLOBAL MODAL */}
//       {isOpen && <InternshipForm />}

//     </main>
//   );
// }






// "use client";
// import React, { useEffect, useRef } from "react";
// import { ArrowRight, BadgeCheck, Code } from "lucide-react";
// import InternshipForm from "../../component/common/form/InternshipForm";
// import { internshipRoles } from "../../component/localDb/InternShip";
// import { useRouter } from "next/navigation";
// import { useInternshipStore } from "../../store/internshipStore";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// export default function Internship() {
//   const { isOpen, openForm } = useInternshipStore();
//   const router = useRouter();

//   const sectionRef = useRef<HTMLElement>(null);
//   const headingRef = useRef<HTMLDivElement>(null);
//   const lineRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<HTMLDivElement>(null);
//   const ctaRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Heading line draw
//       gsap.fromTo(
//         lineRef.current,
//         { scaleX: 0, transformOrigin: "left center" },
//         {
//           scaleX: 1,
//           duration: 0.8,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: headingRef.current,
//             start: "top 85%",
//           },
//         }
//       );

//       // Heading fade up
//       gsap.fromTo(
//         headingRef.current,
//         { y: 50, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.9,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: headingRef.current,
//             start: "top 85%",
//           },
//         }
//       );

//       // Cards stagger
//       const cards = cardsRef.current?.querySelectorAll(".role-card");
//       if (cards) {
//         gsap.fromTo(
//           cards,
//           { y: 80, opacity: 0, scale: 0.95 },
//           {
//             y: 0,
//             opacity: 1,
//             scale: 1,
//             duration: 0.7,
//             ease: "power3.out",
//             stagger: 0.15,
//             scrollTrigger: {
//               trigger: cardsRef.current,
//               start: "top 85%",
//             },
//           }
//         );
//       }

//       // Icon bounce per card on scroll
//       const icons = cardsRef.current?.querySelectorAll(".card-icon");
//       if (icons) {
//         gsap.fromTo(
//           icons,
//           { scale: 0, rotation: -20 },
//           {
//             scale: 1,
//             rotation: 0,
//             duration: 0.6,
//             ease: "back.out(1.7)",
//             stagger: 0.15,
//             delay: 0.3,
//             scrollTrigger: {
//               trigger: cardsRef.current,
//               start: "top 85%",
//             },
//           }
//         );
//       }

//       // CTA strip slide up
//       gsap.fromTo(
//         ctaRef.current,
//         { y: 40, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.8,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: ctaRef.current,
//             start: "top 90%",
//           },
//         }
//       );

//       // Number watermarks float animation
//       const numbers = cardsRef.current?.querySelectorAll(".watermark-num");
//       if (numbers) {
//         numbers.forEach((num) => {
//           gsap.to(num, {
//             y: -12,
//             duration: 3,
//             ease: "sine.inOut",
//             repeat: -1,
//             yoyo: true,
//           });
//         });
//       }
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   // Card hover magnetic effect
//   const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const card = e.currentTarget;
//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left - rect.width / 2;
//     const y = e.clientY - rect.top - rect.height / 2;
//     gsap.to(card, {
//       rotateX: -y / 25,
//       rotateY: x / 25,
//       duration: 0.4,
//       ease: "power2.out",
//       transformPerspective: 800,
//     });
//   };

//   const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
//     gsap.to(e.currentTarget, {
//       rotateX: 0,
//       rotateY: 0,
//       duration: 0.6,
//       ease: "elastic.out(1, 0.5)",
//     });
//   };

//   const handleCardMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
//     gsap.to(e.currentTarget, { y: -10, duration: 0.3, ease: "power2.out" });
//   };

//   const handleCardMouseLeaveY = (e: React.MouseEvent<HTMLDivElement>) => {
//     gsap.to(e.currentTarget, { y: 0, duration: 0.5, ease: "elastic.out(1,0.5)" });
//     handleCardMouseLeave(e);
//   };
//   return (
//     <main className="min-h-screen bg-white">


//       <section className="relative overflow-hidden mx-auto text-center py-20 px-4 bg-white">
//         <div className="relative z-10 max-w-4xl mx-auto">

//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-gray-900">
//             Build Your Future with{" "}
//             <span className="text-primary">Industry-Ready</span>{" "}
//             <span>Internships</span>
//           </h1>

//           <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
//             Gain real-world experience through live projects, expert mentorship,
//             and hands-on training designed to prepare you for today&apos;s IT industry.
//             Build strong portfolios and become job-ready with confidence.
//           </p>

//           <button
//             onClick={openForm}
//             className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-bold text-base rounded-full shadow-lg hover:opacity-90 hover:-translate-y-1 transition-all duration-300"
//           >
//             <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
//               <BadgeCheck className="w-4 h-4 text-white" />
//             </span>
//             Apply for Internship
//             <ArrowRight className="w-5 h-5" />
//           </button>

//         </div>
//       </section>

//       <section
//         ref={sectionRef}
//         id="roles"
//         className="py-20 px-4 bg-gray-50 relative overflow-hidden"
//       >
//         {/* Grid background */}
//         <div
//           className="absolute inset-0 pointer-events-none opacity-40"
//           style={{
//             backgroundImage: `linear-linear(to right, #fca5a515 1px, transparent 1px), linear-linear(to bottom, #fca5a515 1px, transparent 1px)`,
//             backgroundSize: "48px 48px",
//           }}
//         />
//         <div className="absolute inset-0 bg-linear-to-b from-gray-50 via-transparent to-gray-50 pointer-events-none" />
//         <div className="absolute top-10 right-10 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
//         <div className="absolute bottom-10 left-10 w-56 h-56 bg-red-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

//         <div className="relative z-10 max-w-6xl mx-auto">

//           {/* Heading */}
//           <div ref={headingRef} className="text-center mb-16 opacity-0">
//             <div className="inline-flex items-center gap-2 bg-white border border-red-100 text-red-800 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-5 shadow-sm">
//               <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
//               Internship Tracks
//             </div>
//             <div
//               ref={lineRef}
//               className="w-14 h-1 bg-linear-to-r from-red-800 to-red-400 rounded-full mx-auto mb-5"
//               style={{ transformOrigin: "left center", scaleX: 0 }}
//             />
//             <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
//               Choose Your{" "}
//               <span className="text-red-800 relative inline-block">
//                 Learning Path
//                 <span className="absolute -bottom-1 left-0 right-0 h-1 bg-red-200 rounded-full" />
//               </span>
//             </h2>
//             <p className="text-gray-500 text-base mt-5 max-w-lg mx-auto leading-relaxed">
//               Select from our carefully designed programs tailored to industry demands
//             </p>
//           </div>

//           {/* Cards */}
//           <div ref={cardsRef} className="grid gap-6 md:grid-cols-3">
//             {internshipRoles.map((role, index) => (
//               <div
//                 key={index}
//                 className="role-card relative bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col cursor-pointer"
//                 style={{ transformStyle: "preserve-3d" }}
//                 onMouseEnter={handleCardMouseEnter}
//                 onMouseLeave={handleCardMouseLeaveY}
//                 onMouseMove={handleCardMouseMove}
//               >
//                 {/* Hover top bar */}
//                 <div className="h-1 w-full bg-linear-to-r from-red-900 via-red-600 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                 {/* Watermark number */}
//                 <span className="watermark-num absolute top-3 right-5 text-8xl font-black text-red-900/[0.04] select-none leading-none pointer-events-none">
//                   {String(index + 1).padStart(2, "0")}
//                 </span>

//                 <div className="p-8 flex flex-col flex-1">
//                   {/* Icon row */}
//                   <div className="flex items-center justify-between mb-6">
//                     <div className="card-icon w-14 h-14 bg-linear-to-br from-red-900 to-red-500 rounded-2xl flex items-center justify-center shadow-lg shadow-red-900/20">
//                       <Code className="w-6 h-6 text-white" />
//                     </div>
//                     <span className="text-xs font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
//                       Track {String(index + 1).padStart(2, "0")}
//                     </span>
//                   </div>

//                   <h3 className="text-xl font-extrabold text-gray-900 mb-3">{role.title}</h3>
//                   <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-4 flex-1">{role.desc}</p>

//                   <div className="h-px bg-gray-100 mb-5" />

//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {["Live Projects", "Certificate", "Mentorship"].map((tag) => (
//                       <span key={tag} className="text-xs text-gray-500 bg-gray-50 border border-gray-100 px-3 py-1 rounded-full font-medium">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <button
//                     onClick={() => router.push(role.url)}
//                     className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-linear-to-r from-red-900 to-red-600 rounded-xl hover:from-red-800 hover:to-red-500 transition-all duration-300 shadow-md shadow-red-900/20"
//                   >
//                     View Program Details
//                     <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
//                       <ArrowRight className="w-3 h-3" />
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* CTA Strip */}
//           <div
//             ref={ctaRef}
//             className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white border border-red-100 rounded-2xl px-8 py-6 shadow-sm opacity-0"
//           >
//             <div>
//               <p className="font-bold text-gray-900 text-lg">Not sure which track suits you?</p>
//               <p className="text-gray-400 text-sm mt-1">Talk to our mentors and find the right program.</p>
//             </div>
//             <button
//               onClick={openForm}
//               className="inline-flex items-center gap-2 px-8 py-3.5 bg-red-900 text-white text-sm font-bold rounded-xl hover:bg-red-800 transition-all duration-300 shadow-md shadow-red-900/20 whitespace-nowrap"
//             >
//               <BadgeCheck className="w-4 h-4" />
//               Get Free Counselling
//               <ArrowRight className="w-4 h-4" />
//             </button>
//           </div>

//         </div>
//       </section>
//       {isOpen && <InternshipForm />}

//     </main>
//   );
// }





"use client";
import React, { useEffect, useRef } from "react";
import { ArrowRight, BadgeCheck, Code, Users, Trophy, Zap } from "lucide-react";
import InternshipForm from "../../component/common/form/InternshipForm";
import { internshipRoles } from "../../component/localDb/InternShip";
import { useRouter } from "next/navigation";
import { useInternshipStore } from "../../store/internshipStore";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Internship() {
  const { isOpen, openForm } = useInternshipStore();
  const router = useRouter();

  // Hero refs
  const heroRef = useRef<HTMLElement>(null);
  const heroBadgeRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroParaRef = useRef<HTMLParagraphElement>(null);
  const heroBtnRef = useRef<HTMLButtonElement>(null);
  const heroStatsRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  // Roles refs
  const rolesRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── HERO ANIMATIONS ──────────────────────────────

      // Blobs float
      gsap.to(blob1Ref.current, {
        y: -30, x: 15, duration: 6, ease: "sine.inOut", repeat: -1, yoyo: true,
      });
      gsap.to(blob2Ref.current, {
        y: 20, x: -20, duration: 8, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1,
      });

      // Hero timeline
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      heroTl
        .fromTo(heroBadgeRef.current,
          { y: -30, opacity: 0, scale: 0.8 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7 }
        )
        .fromTo(heroTitleRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.3"
        )
        .fromTo(heroParaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(heroBtnRef.current,
          { y: 20, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(heroStatsRef.current?.querySelectorAll(".stat-item") ?? [],
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.12 },
          "-=0.3"
        );

      // Stat number count-up
      heroStatsRef.current?.querySelectorAll(".stat-number").forEach((el) => {
        const target = el.getAttribute("data-target") ?? "0";
        const isPercent = target.includes("%");
        const isPlus = target.includes("+");
        const num = parseInt(target);
        gsap.fromTo(
          { val: 0 },
          {
            val: num,
            duration: 2,
            ease: "power2.out",
            delay: 1,
            onUpdate: function () {
              el.textContent = Math.round(this.targets()[0].val) + (isPercent ? "%" : isPlus ? "+" : "");
            },
          },
          { val: num }
        );
      });

      // ── ROLES SECTION ANIMATIONS ──────────────────────

      // Line draw
      gsap.fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        }
      );

      // Heading fade up
      gsap.fromTo(headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        }
      );

      // Cards stagger
      gsap.fromTo(cardsRef.current?.querySelectorAll(".role-card") ?? [],
        { y: 80, opacity: 0, scale: 0.93 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out", stagger: 0.15,
          scrollTrigger: { trigger: cardsRef.current, start: "top 85%" },
        }
      );

      // Icons bounce
      gsap.fromTo(cardsRef.current?.querySelectorAll(".card-icon") ?? [],
        { scale: 0, rotation: -30 },
        {
          scale: 1, rotation: 0, duration: 0.7, ease: "back.out(1.7)", stagger: 0.15, delay: 0.4,
          scrollTrigger: { trigger: cardsRef.current, start: "top 85%" },
        }
      );

      // Tags stagger
      gsap.fromTo(cardsRef.current?.querySelectorAll(".card-tag") ?? [],
        { x: -10, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.4, ease: "power2.out", stagger: 0.05, delay: 0.6,
          scrollTrigger: { trigger: cardsRef.current, start: "top 85%" },
        }
      );

      // Watermark float
      cardsRef.current?.querySelectorAll(".watermark-num").forEach((num, i) => {
        gsap.to(num, {
          y: -14, duration: 3 + i * 0.5, ease: "sine.inOut", repeat: -1, yoyo: true,
        });
      });

      // CTA strip
      gsap.fromTo(ctaRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ctaRef.current, start: "top 90%" },
        }
      );

      // Shimmer line on CTA
      gsap.fromTo(".cta-shine",
        { x: "-100%" },
        {
          x: "200%", duration: 1.8, ease: "power1.inOut", repeat: -1, repeatDelay: 3,
          scrollTrigger: { trigger: ctaRef.current, start: "top 90%" },
        }
      );

    }, [heroRef, rolesRef]);

    return () => ctx.revert();
  }, []);

  // 3D magnetic card
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(card, { rotateX: -y / 22, rotateY: x / 22, duration: 0.4, ease: "power2.out", transformPerspective: 900 });
    // Glow follow
    const glow = card.querySelector(".card-glow") as HTMLElement;
    if (glow) {
      const px = ((e.clientX - rect.left) / rect.width) * 100;
      const py = ((e.clientY - rect.top) / rect.height) * 100;
      gsap.to(glow, { background: `radial-linear(circle at ${px}% ${py}%, rgba(139,0,0,0.08), transparent 70%)`, duration: 0.3 });
    }
  };

  const handleCardEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { y: -12, duration: 0.35, ease: "power2.out" });
    const bar = e.currentTarget.querySelector(".top-bar") as HTMLElement;
    if (bar) gsap.to(bar, { scaleX: 1, duration: 0.4, ease: "power2.out" });
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { y: 0, rotateX: 0, rotateY: 0, duration: 0.6, ease: "elastic.out(1,0.5)" });
    const bar = e.currentTarget.querySelector(".top-bar") as HTMLElement;
    if (bar) gsap.to(bar, { scaleX: 0, duration: 0.3, ease: "power2.in" });
    const glow = e.currentTarget.querySelector(".card-glow") as HTMLElement;
    if (glow) gsap.to(glow, { background: "transparent", duration: 0.4 });
  };

  // Hero button pulse
  const handleBtnEnter = () => {
    gsap.to(heroBtnRef.current, { scale: 1.05, duration: 0.3, ease: "power2.out" });
  };
  const handleBtnLeave = () => {
    gsap.to(heroBtnRef.current, { scale: 1, duration: 0.4, ease: "elastic.out(1,0.5)" });
  };


  return (
    <main className="min-h-screen bg-white overflow-x-hidden">

      <section ref={heroRef} className="relative overflow-hidden bg-white text-center py-28 px-4">

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-linear(to right, #fca5a518 1px, transparent 1px), linear-linear(to bottom, #fca5a518 1px, transparent 1px)`,
            backgroundSize: "52px 52px",
          }}
        />


        <div className="relative z-10 max-w-4xl mx-auto">

          <h1
            ref={heroTitleRef}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-gray-900 opacity-0"
          >
            Build Your Future with{" "}
            <span className="text-primary relative inline-block">
              Industry-Ready
            </span>{" "}
            <span>Internships</span>
          </h1>

          <p
            ref={heroParaRef}
            className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-10 opacity-0"
          >
            Gain real-world experience through live projects, expert mentorship,
            and hands-on training designed to prepare you for today&apos;s IT industry.
            Build strong portfolios and become job-ready with confidence.
          </p>

          <button
            ref={heroBtnRef}
            onClick={openForm}
            onMouseEnter={handleBtnEnter}
            onMouseLeave={handleBtnLeave}
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-bold text-base rounded-full shadow-xl hover:opacity-95 transition-opacity duration-200 opacity-0 relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/10 -translate-x-full skew-x-12 btn-shine" />
            <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <BadgeCheck className="w-4 h-4 text-white" />
            </span>
            Apply for Internship
            <ArrowRight className="w-5 h-5" />
          </button>

        </div>
      </section>


      <section
        ref={rolesRef}
        id="roles"
        className="py-20 px-4 bg-gray-50 relative overflow-hidden"
      >

        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `linear-linear(to right, #fca5a515 1px, transparent 1px), linear-linear(to bottom, #fca5a515 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">

          <div ref={headingRef} className="text-center mb-16 opacity-0">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Choose Your{" "}
              <span className="text-primary relative inline-block">
                Learning Path
              </span>
            </h2>
            <p className="text-gray-500 text-base mt-5 max-w-lg mx-auto leading-relaxed">
              Select from our carefully designed programs tailored to industry demands
            </p>
          </div>

          <div ref={cardsRef} className="grid gap-6 md:grid-cols-3">
            {internshipRoles.map((role, index) => (
              <div
                key={index}
                className="role-card relative bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
                onMouseEnter={handleCardEnter}
                onMouseLeave={handleCardLeave}
                onMouseMove={handleCardMouseMove}
              >
                <div className="card-glow absolute inset-0 pointer-events-none z-0 transition-all duration-300" />

                <div className="relative z-10 p-8 flex flex-col flex-1">

                  <div className="card-icon mb-6 w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-red-900/20">
                    <Code className="w-6 h-6 text-white" />
                  </div>


                  <h3 className="text-xl font-extrabold text-gray-900 mb-3 transition-colors duration-300">
                    {role.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-4 flex-1">
                    {role.desc}
                  </p>

                  <div className="h-px bg-gray-100 mb-5" />

                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Live Projects", "Certificate", "Mentorship"].map((tag) => (
                      <span
                        key={tag}
                        className="card-tag text-xs text-gray-500 bg-gray-50 border border-gray-100 px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => router.push(role.url)}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-primary rounded-xl transition-all duration-300 shadow-md shadow-red-900/20"
                  >
                    View Program Details
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </button>

                </div>
              </div>
            ))}
          </div>



        </div>
      </section>

      {isOpen && <InternshipForm />}
    </main>
  );
}