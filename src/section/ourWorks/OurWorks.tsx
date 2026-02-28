'use client'

import Image from "next/image"
// import bgImg from "../../../public/assets/services/page-Head.webp"
// import works from "../../../public/assets/work_bg.webp"
import { OurWorks as projectsData } from "../../component/localDb/ourWorks"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

const OurWorksPage = () => {

    const [data, setData] = useState("")
    const projects = projectsData || []

    const button = [
        { label: "Mobile Apps", value: "MobilApp" },
        { label: "Online Shopping", value: "onlineShopping" },
        { label: "Health Care", value: "healthCare" },
        { label: "Tour Sites", value: "toursite" },
        { label: "Studio", value: "studio" },
        { label: "Other Sites", value: "OtherSites" }
    ]

    const filteredProjects = data
        ? projects.filter((item) => item.category === data)
        : projects

    return (
        <div>

            <div className="relative">
                {/* <Image src={bgImg} alt="header" /> */}
                <div className="absolute bg-black/40 inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-white text-4xl md:text-6xl font-bold">Our Works</h1>
                    <p className="bg-white/20 p-2 rounded-3xl text-white">Home / Our Works</p>
                </div>
            </div>

            <div className="flex relative justify-end">
                <div className="md:absolute left-0 grid gap-8 m-10">
                    <h1 className="text-primary text-4xl md:text-5xl font-bold">Our Works.</h1>
                    <p className="text-black">
                        We are a team of engineers & agile specialists working towards one goal,
                        to make technology solve real-life problems.
                    </p>
                    <button className="bg-[#e3da22] w-fit p-3 rounded-md">
                        Connect with us
                    </button>
                </div>
                {/* <Image src={works} alt="works" className="hidden md:block w-[600px] h-auto" /> */}
            </div>

            <div className="py-8 text-center">
                <h1 className="text-primary text-4xl md:text-5xl font-bold">
                    Our Successful Projects
                </h1>

                <p className="text-[#364052] mt-4">
                    Our experience and expertise combined with deep understanding
                    of customer behavior has helped diverse industries across the globe.
                </p>

                <div className="flex flex-wrap justify-center mt-6">
                    <button
                        className={`cursor-pointer p-2 m-1 rounded-md text-white ${data === "" ? "bg-red-700" : "bg-primary"}`}
                        onClick={() => setData("")}
                    >
                        Show All
                    </button>

                    {button.map((item) => (
                        <button
                            key={item.value}
                            onClick={() => setData(item.value)}
                            className={`cursor-pointer p-2 m-1 rounded-md text-white duration-300 ${data === item.value
                                    ? "bg-red-700"
                                    : "bg-primary"
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-5 gap-10">
                    {filteredProjects.map(({ name, id, img, url }) => (
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={id}
                            className="group"
                        >
                            <Image
                                src={img}
                                alt={name}
                                className="rounded-3xl group-hover:scale-105 transition duration-500"
                            />
                            <h1 className="text-[#364052] font-bold text-xl p-2">
                                {name}
                            </h1>
                        </a>
                    ))}
                </div>
            </div>

            <div className="bg-[#0075ff] md:flex items-center justify-around p-10 text-center text-white">
                <div>
                    <h1 className="text-3xl md:text-6xl font-bold">
                        Let’s Grow Together!
                    </h1>
                    <p className="text-xl mt-3">
                        We’ll be a great team! Have a look at our latest openings.
                    </p>
                </div>

                <div className="bg-white text-[#0b1628] flex p-2 items-center w-fit rounded-3xl mx-auto md:mx-0 mt-6 md:mt-0 cursor-pointer">
                    <div className="bg-[#0075FF] p-2 rounded-full text-white mr-2">
                        <ArrowRight />
                    </div>
                    Join Our Team
                </div>
            </div>

        </div>
    )
}

export default OurWorksPage