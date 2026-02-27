"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import project from "../../../public/assets/hero-banner2.png"
const servicesData = [
    {
        id: 1,
        title: "Business process optimization",
        image: project,
    },
    {
        id: 2,
        title: "Strategic planning & execution",
        image: project,
    },
    {
        id: 3,
        title: "Leadership executive coaching",
        image: project,
    },
    {
        id: 4,
        title: "Digital Transformation",
        image: project,
    },
    {
        id: 5,
        title: "Financial Consulting",
        image: project,
    },
    {
        id: 6,
        title: "Business process optimization",
        image: project,
    },
    {
        id: 7,
        title: "Strategic planning & execution",
        image: project,
    },
];

export default function ServicesSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState(0);
    useEffect(() => {
        if (isDragging) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) =>
                prev + 3 >= servicesData.length ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(timer);
    }, [isDragging]);
    const handleDragStart = (clientX: number) => {
        setStartX(clientX);
        setIsDragging(true);
    };

    const handleDragMove = (clientX: number) => {
        if (!isDragging) return;
        setDragOffset(clientX - startX);
    };

    const handleDragEnd = (clientX: number) => {
        if (!isDragging) return;

        const diff = clientX - startX;

        if (diff > 80) {
            setCurrentIndex((prev) =>
                prev === 0 ? servicesData.length - 3 : prev - 1
            );
        } else if (diff < -80) {
            setCurrentIndex((prev) =>
                prev + 3 >= servicesData.length ? 0 : prev + 1
            );
        }

        setDragOffset(0);
        setIsDragging(false);
    };
    return (
        <section className="bg-white py-20 px-4 min-h-screen flex flex-col items-center">

            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-[#0a1d37] leading-tight">
                    Our Works
                </h2>
            </div>

            <div className="max-w-7xl w-full overflow-hidden relative">
                <div
                    className="flex transition-transform duration-700 ease-in-out gap-6 
                                cursor-grab active:cursor-grabbing select-none"
                    style={{
                        transform: `translateX(calc(-${currentIndex * (100 / 3.1)}% + ${dragOffset}px))`,
                        transition: isDragging ? "none" : "transform 700ms ease-in-out",
                    }}

                    onMouseDown={(e) => handleDragStart(e.clientX)}
                    onMouseMove={(e) => handleDragMove(e.clientX)}
                    onMouseUp={(e) => handleDragEnd(e.clientX)}
                    onMouseLeave={(e) => handleDragEnd(e.clientX)}
                    onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
                    onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
                    onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
                >
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className="min-w-full md:min-w-[calc(33.333%-1rem)]
           select-none relative group h-[480px] rounded-sm overflow-hidden cursor-pointer"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                draggable={false}
                                className="absolute inset-0 w-full h-full object-cover 
             grayscale-80 transition-all duration-500 
             group-hover:grayscale-0 group-hover:scale-105 
             pointer-events-none"
                            />


                            <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                                <h3 className="text-white text-2xl font-bold leading-tight max-w-[200px]">
                                    {service.title}
                                </h3>

                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                                    <ArrowRight size={24} className="text-[#0a1d37] group-hover:text-white transition-colors" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex gap-2 mt-10">
                {Array.from({ length: servicesData.length - 2 }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 transition-all duration-500 rounded-full ${currentIndex === idx ? "w-10 bg-primary" : "w-2 bg-primary/30"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}