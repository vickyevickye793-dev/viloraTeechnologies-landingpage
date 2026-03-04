"use client";

const marqueeData = [
  "Modern Web Applications",
  "Chat Bot Integration",
  "AI-Powered Solution",
  "SEO",
  "Mobile Apps",
  "E-Commerce Website",
  "CRM , ERP",
];

export default function MarqueeSection() {
  return (
    <section className="marquee">
      <div className="marquee-inner">
        {[...marqueeData, ...marqueeData,...marqueeData].map((text, index) => (
          <div key={index} className="marquee-content">
            <span>{text}</span>
            <span className="">O</span>
          </div>
        ))}
      </div>
    </section>
  );
}