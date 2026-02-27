'use client'
import Image from "next/image"
import bgImg from "../../../public/assets/services/page-Head.webp"
import { ArrowLeft, ArrowRight } from "lucide-react"
import core from "../../../public/assets/about/core.png"
import PersonalApproach from "../../../public/assets/about/perapp.png"
import customer from "../../../public/assets/about/customer.png"
import team from "../../../public/assets/about/team.png"
import Card from "../home/Card"
import evolute from "../../../public/assets/about/evolute.webp"
import client from "../../../public/assets/about/h2-test-1.webp"
import double from "../../../public/assets/about/DoubleQurtes.png"
import divide from "../../../public/assets/about/divider.webp"
const About = () => {
    const setApart = [
        {
            title: "Core Values",
            detail: "We engage every project with focus and purpose. We're not all right with just okay; we know the better work comes from pushing the 'nice enough' wall constantly. And any time we're working on that, we do it. And of the members of our team is attentive and committed to what can be done.",
            Icon: core
        },
        {
            title: "Personal Approach",
            detail: "Each project is distinctive, because we take time to consider the 'why' behind each project we take on. We brainstorm, and we come up with a solution together that is practical and addresses the issue at hand. We're designing, weighing, prototyping, evaluating and evaluating again.",
            Icon: PersonalApproach
        },
        {
            title: "Self Organized Teams",
            detail: "We're not doing pile-on. Our capacity to self-organize and react to any situation lies in our key to success. We like working in small teams that know the topic at hand and own it. No extra layer, no hoops, clear data flow, tight feedback loops-all we need to execute quickly.",
            Icon: team
        },
        {
            title: "Strong Relationships with Customers",
            detail: "We've met many great thinkers since our creation 5 years ago, talented people who collaborated with us. With a storey, a vision they want their product to represent, they came to us. For us, consumers are not only entities whom we support; they are the vital team members of Classic Informatics.",
            Icon: customer
        }
    ]
    const About = { title: "About our company", subTitle: "Vilora Technologies", details: "We are a team of developers and agile professionals collaborating for one mission in order to address real-life challenges using technology.", discripition: "VILORA Technologies is a Pondicherry-based software company led by experienced IT professionals, offering services in software development, mobile app development, web application development, quality assurance, and implementation. With strong expertise in single and multi-operating system environments, VILORA refines and streamlines ideas before designing and building innovative solutions. The company combines technical excellence with deep functional knowledge to deliver effective business solutions, maintaining close client relationships to understand objectives and maximize results." }
    const evolution = { title: "Our evolution", details: "'Founded in 2002 by Burdee Ncolase en. our firm started with our great vision to bring innovative solutions of businesses facing unprecedented challenges. That began as a small consultings firm quickly evolved into a trusted partner for companies around the globe . Our journey into began with a simple idea thats offer unparalleled consulting services empower Our core values of integrity, innovation, and excellence guide everything we do leading the wave in consulting's.'" }
    const calculation = [
        { text: "Complete project", number: "93%" },
        { text: "Reach worldwide", number: "20M" },
        { text: "Faster growth", number: "8.5x" }
    ]
    const feedback = [
        {
            double: double,
            clientName: "Burdee Nicolas",
            role: "Business Owner",
            img: client,
            feedback: "Partnering with solvior has been a transformative experience for our organization. Their expert guidance through our market expansion strategy was invaluable. They helped us navigate complex regulatory environments and develop a clear, actionable plan that has led to successful",
            rating: "★★★★★"
        },
        // {
        //     double: double,
        //     clientName: "Natalie Harry",
        //     role: "Sr.Executive",
        //     img: client,
        //     feedback: "Partnering with solvior has been a transformative experience for our organization. Their expert guidance through our market expansion strategy was invaluable. They helped us navigate complex regulatory environments and develop a clear, actionable plan that has led to successfu",
        //     rating: "★★★★★"
        // }
    ]
    return (
        <>
            <div className="">
                <div className=" relative">
                    <Image src={bgImg} alt="" />
                    <div className="absolute bg-black/40 inset-0 flex flex-col items-center justify-center">
                        <h1 className="text-white text-6xl font-bold">About</h1>
                        <p className="bg-white/20 p-2 rounded-3xl">Home/About</p>
                    </div>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 m-30 gap-2">
                    <div className="">
                        <h1 className="text-lg text-danger">{About.title}</h1>
                        <span className="text-3xl md:text-5xl text-[#0b1628] font-bold">{About.subTitle}</span><br />
                        <span className="text-md text-[#364052]">{About.details}</span>

                    </div>
                    <div className="">
                        <span className="text-md text-[#364052]">{About.discripition}</span>
                        <div className="bg-[#0b1628] text-white pr-3 p-1 m-4 rounded-4xl flex items-center w-fit">
                            <div className="bg-[#0075FF] p-2 w-fit rounded-full"><ArrowRight /></div>Connect with us
                        </div>
                    </div>
                </div>
                    <Card />
                <div className="grid md:grid-cols-4 m-5 gap-5">
                    {
                        setApart.map(({ title, detail, Icon }) => (
                            <div className="w-fit border p-5 gap-4 bg-white border-gray-300 flex flex-col items-start" key={title}>
                                <Image src={Icon} alt="" />
                                <h1 className="text-[#0b1628] font-bold text-xl">{title}</h1>
                                <p className="text-[#364052] text-sm">{detail}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="grid grid-cols-1 m-20 md:grid-cols-2 gap-5">
                    <div className="bg-[#dfecfd] p-2">
                        <div className="grid grid-cols-1 gap-9">
                            <h1 className="bg-[#0075FF] font-bold p-3 w-fit text-2xl rounded-4xl">&#x2a;{evolution.title}</h1>
                            <p className="text-[#364052]">{evolution.details}</p>
                            <div className="md:flex justify-around">
                                {
                                    calculation.map((item) => (
                                        <div className="" key={item.number}>
                                            <h1 className="text-6xl font-bold text-[#0b1628]">{item.number}</h1>
                                            <p className="text-[#364052]">{item.text}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="bg-white">
                        <Image src={evolute} alt="" />
                    </div>
                </div>
                <div className="m-20 grid  gap-10">
                    <div className="text-center grid gap-5">
                        <h1 className="text-[#0075ff] text-xl">Clients feedback</h1>
                        <p className="text-[#0b1628] text-5xl font-extrabold">Our clients testimonials</p>
                    </div>
                    <div className="md:flex gap-10">
                        <Image src={client} alt="" />
                        <div className="fex">
                            {feedback.map(({ clientName, img, double, rating, role, feedback }) => (
                                <div className="" key={clientName}>
                                    <Image className="-ml-5 mb-10" src={double} alt="" />
                                    <p className="text-gray-700 text-2xl">{feedback}</p>
                                    <div className="mt-10 relative">
                                        <div className=" absolute top-5 right-0">
                                            <button className="m-2 cursor-pointer hover:bg-[#0075ff] hover:text-white duration-1000 border p-3 rounded-full border-gray-400 text-[#0b1628]"><ArrowLeft /></button>
                                            <button className="m-2 border cursor-pointer hover:bg-[#0075ff] hover:text-white duration-1000 p-3 rounded-full border-gray-400 text-[#0b1628]"><ArrowRight /></button>
                                        </div>
                                        <Image src={divide} alt="divide" />
                                    </div>
                                    <div className="flex gap-4 -mt-15 mx-5">
                                        <Image className="-ml-5 w-20 h-20 rounded-full" src={img} alt="" />
                                        <div>
                                            <span className="text-[#0075ff] bg-gray-700/20 rounded-2xl p-1">
                                                {rating}
                                            </span>
                                            <h1 className="text-[#0b1628] text-2xl font-bold">{clientName}</h1>
                                            <p className="text-gray-400 text-lg">{role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-[#0075ff] md:flex items-center justify-around p-5 text-center">
                    <div className="">
                        <h1 className="text-7xl">Let’s Grow Together!</h1>
                        <p className="text-2xl">We’ll be a great team! Have a look at our latest openings.</p></div>
                    <div className="bg-white h-fit text-[#0b1628] flex p-1 items-center w-fit rounded-3xl">
                        <div className="bg-[#0075FF] p-2 rounded-full"><ArrowRight /></div>Join Our Tean
                    </div>
                </div>
            </div>
        </>
    )
}
export default About