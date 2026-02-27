"use client";

const marqueeData = [
  "Success and impact",
  "Founders and vision",
  "Passion and progress",
  "Growth and impact",
  "Team and values",
  "Innovation and future",
];

export default function MarqueeSection() {
  return (
    <section className="marquee">
      <div className="marquee-inner">
        {[...marqueeData, ...marqueeData].map((text, index) => (
          <div key={index} className="marquee-content">
            <span>{text}</span>
            <span className="hex">O</span>
          </div>
        ))}
      </div>
    </section>
  );
}