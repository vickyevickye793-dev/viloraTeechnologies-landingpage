import Image from "next/image";
import card1 from "../../../public/assets/ww.jpg";
// import card2 from "../../../public/assets/h3-images-2.webp"
const Card = () => {
  const card={
    // name:"Vilora Technologies",
    subTitle:"Process &  Methodologies",
    details:"VILORA Technology meets traditional process models including Spiral (incremental), Cascade and Quick Prototyping for the industry. Based on the needs of the customer, our approach is decided and our vision is to always be part of the progress of the customer. We suggest the spiral model for most projects on the basis of our deep experience in delivering quality strategies for diverse customers, as it helps minimize risk and market penetration. For handling teams and different facets of software creation, we have strategy documents templates available. Our implementation process includes detailed preparation and documentation for each project element, such as: methodologies for implementation, setup and budget ramp-up of project teams, configuration management of software and application,quality control, performance management, compilation of measurements, monitoring & reporting."
  }
  return (
    <>
      <div className="grid grid-cols-2 bg-white">
        <div className=" m-5">
            <Image src={card1} alt="" />
        </div>
        <div className="p-10 grid gap-5">
          {/* <h1 className="text-[#0075ff] text-xl">{card.name}</h1> */}
          <h1 className="text-5xl text-[#051229] font-bold">{card.subTitle}</h1>
          <span className=" text-[#364052] flex">
            {card.details}
            {/* <Image src={card2} className="size-60" alt="" /> */}
          </span>
        </div>
      </div>
    </>
  );
};
export default Card;
