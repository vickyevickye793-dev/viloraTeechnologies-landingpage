"use client";

import InternshipForm from "../../component/common/form/InternshipForm";
import { ArrowRight, Code2, Globe, Layers, Database } from "lucide-react";
import { useInternshipStore } from "../../store/internshipStore";
import { 
  Briefcase, 
  TrendingUp, 
  Brain, 
  Laptop2, 
  Rocket, 
  LineChart 
} from "lucide-react";
const stacks = [
  {
    title: "MERN Stack",
    icon: Globe,
    description: "The most popular modern JavaScript stack for high-performance web apps.",
    tech: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "MongoDB"],
  },
  {
    title: "MEAN Stack",
    icon: Layers,
    description: "Enterprise-grade stack using Angular for robust, scalable applications.",
    tech: ["HTML5", "CSS3", "JavaScript", "Angular", "Node.js", "MongoDB"],
  },
  {
    title: "Python Full Stack",
    icon: Code2,
    description: "Perfect for data-heavy applications and rapid backend development.",
    tech: ["HTML5", "CSS3", "JavaScript", "Python", "Django / Flask", "MySQL"],
  },
  {
    title: "Java Full Stack",
    icon: Database,
    description: "The industry standard for secure, large-scale corporate systems.",
    tech: ["HTML5", "CSS3", "JavaScript", "Java", "Spring Boot", "MySQL"],

  },
];


export default function FullStack() {
  const { isOpen, openForm } = useInternshipStore();

  return (
    <div className="relative px-4 pb-20 mx-auto max-w-7xl overflow-x-hidden">

      <section className="relative py-20 text-center">
        <div className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: `linear-gradient(to right, #fca5a518 1px, transparent 1px), linear-gradient(to bottom, #fca5a518 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-white via-transparent to-white pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white border border-red-100 text-red-800 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-8 shadow-sm">
            Top Rated Full Stack Internship in Pondicherry 2026
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 mb-4">
            Professional Full Stack <br />
            <span className="text-primary">Developer Internship</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-gray-500 leading-relaxed mb-10">
            Kickstart your career with the best <strong>Full Stack Web Development internship in Pondicherry</strong>.
            Master Frontend, Backend, and Database management through hands-on industrial training.
          </p>

          <button
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-bold rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-all duration-200"
            onClick={openForm}
          >
            Apply for Internship
            <ArrowRight size={18} />
          </button>


        </div>
      </section>

      <section className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-secondary">
            Choose Your Specialized <span className="text-primary">Learning Path</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            We offer specialized tracks to ensure you become an expert in your chosen technology stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {stacks.map((stack, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl border border-gray-100 shadow-sm p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <stack.icon size={28} />
                </div>
                <div className="">
                  <h3 className="text-2xl font-black text-secondary">{stack.title}</h3>
                </div>
              </div>

              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{stack.description}</p>

              <div className="flex flex-wrap gap-2">
                {stack.tech.map((tech, i) => (
                  <span key={i} className={`px-3 py-1.5 text-xs font-bold rounded-lg border bg-red-50 text-red-700 border-red-100`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>



   <section className="max-w-6xl mx-auto mb-24">
  <h2 className="text-3xl md:text-4xl font-black text-center text-secondary mb-12">
    Why Choose <span className="text-primary">Full Stack Development?</span>
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    
    {/* High Demand */}
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
        <Briefcase size={26} />
      </div>
      <h3 className="text-lg font-bold mb-3">High Demand Career</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Full Stack Developers are highly demanded in IT companies and startups.
        Companies prefer professionals who can manage both frontend and backend systems.
      </p>
    </div>

    {/* Salary */}
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
        <TrendingUp size={26} />
      </div>
      <h3 className="text-lg font-bold mb-3">Better Salary Growth</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Since Full Stack Developers handle complete applications, 
        they often receive better salary packages compared to single-domain developers.
      </p>
    </div>

    {/* Skill Mastery */}
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
        <Brain size={26} />
      </div>
      <h3 className="text-lg font-bold mb-3">Complete Skill Mastery</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Learn frontend, backend, databases, APIs, authentication, 
        and deployment — everything required to build real-world applications.
      </p>
    </div>

    {/* Real Projects */}
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
        <Laptop2 size={26} />
      </div>
      <h3 className="text-lg font-bold mb-3">Build Real Projects</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Create complete websites, dashboards, e-commerce platforms, 
        and enterprise-level applications during your internship.
      </p>
    </div>

    {/* Startup Friendly */}
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
        <Rocket size={26} />
      </div>
      <h3 className="text-lg font-bold mb-3">Startup & Freelancing Friendly</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Startups prefer Full Stack Developers. You can also freelance 
        or build your own SaaS products independently.
      </p>
    </div>

    {/* Career Growth */}
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
        <LineChart size={26} />
      </div>
      <h3 className="text-lg font-bold mb-3">Faster Career Growth</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        With complete system knowledge, you can grow into roles like 
        Software Engineer, Technical Lead, or Architect.
      </p>
    </div>

  </div>
</section>



      <section className="text-center py-10 bg-red-50 rounded-3xl border border-red-100 mb-20">
        <h2 className="text-2xl md:text-3xl font-black text-secondary mb-4">Ready to build the next big thing?</h2>
        <p className="text-gray-600 mb-8">Join the elite group of developers in Pondicherry.</p>
        <button
          onClick={openForm}
          className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-bold rounded-full shadow-xl shadow-primary/20 hover:opacity-90 transition-opacity duration-200"
        >
          Apply for Internship
          <ArrowRight size={18} />
        </button>
        <p className="mt-4 text-xs font-medium text-red-400 animate-pulse">
          * 2026 Registration Closing Soon
        </p>
      </section>

      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">
        Choosing Full Stack Development is one of the smartest career decisions in 2026.
        With companies demanding developers who understand both frontend and backend
        technologies, Full Stack Developers have become essential in startups,
        IT companies, and product-based organizations. This makes Full Stack
        Development one of the most secure and future-proof career paths in the tech industry.
      </p>

      {isOpen && <InternshipForm />}
    </div>
  );
}