import React, { useRef } from "react";
import Texture from "/img/texture.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const InfoBox = ({ title, subtitle, value, unit, description }) => (
  <div className="flex justify-between items-center border-t-[0.2vmax] border-black mb-[1vh]">
    <h2 className="text-[40px] font-[druk heavy]">
      {value} <span className="text-[30px]">{unit}</span>
    </h2>
    <p className="text-[10px] font-semibold leading-[13px] w-[12vw] text-[#111]">
      {description}
    </p>
  </div>
);

function AboutUs() {
  const containerRef = useRef(null);

  const infoData = [
    {
      title: "ABV",
      subtitle: "Alcohol by volume",
      value: "6.2",
      unit: "%",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis mollitia corporis facere ullam hic tempore unde quaerat quisquam",
    },
    {
      title: "IBU",
      subtitle: "International Bitterness Units",
      value: "51",
      unit: ".1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis mollitia corporis facere ullam hic tempore unde quaerat quisquam",
    },
    {
      title: "ABV",
      subtitle: "Alcohol by volume",
      value: "6.2",
      unit: "%",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis mollitia corporis facere ullam hic tempore unde quaerat quisquam",
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%", // when top of AboutUs hits 60% of viewport
        toggleActions: "play none none none",
      },
      defaults: { ease: "power3.out" },
    });

    tl.from(".left h3", { x: -100, opacity: 0, duration: 0.8 })
      .from(".left h1", { x: -100, opacity: 0, duration: 0.8 }, "-=0.4")
      .from(".left p", { x: -100, opacity: 0, duration: 0.8 }, "-=0.4")
      .from(".left button", { x: -100, opacity: 0, duration: 0.8 }, "-=0.4")
      .from(".right", { x: 100, opacity: 0, duration: 1 }, "-=0.5");
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex justify-between items-center w-screen h-screen px-[10vw] pr-[4.1vw]"
    >
      {/* Left */}
      <div className="left w-[25vw] h-[79vh]">
        <h3 className="font-dancing mb-[12px]">Unlimited Release</h3>
        <h1
          className="w-[25vw] h-[30vh] text-[7vw] leading-[14vh] font-[Anton] font-medium uppercase mb-[12px] bg-top bg-no-repeat bg-cover text-transparent antialiased"
          style={{
            backgroundImage: `url(${Texture})`,
            backgroundColor: "black",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          India Pale Ale
        </h1>
        <p className="font-[Gilroy] text-[#111] text-[13px] font-medium leading-[22px] mb-[15px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
          officia error? Totam unde nulla ea repudiandae, corporis optio
          recusandae repellat asperiores minima voluptate soluta laboriosam
          debitis architecto quaerat fugiat nostrum aliquam. Minima ratione
          sequi omnis ipsa beatae ab odio id ad, voluptates fuga incidunt nisi.
        </p>
        <button className="px-[20px] py-[10px] font-[druk heavy] text-[18px] font-extrabold uppercase leading-[20px] bg-black text-white cursor-pointer">
          Buy Now!
        </button>
      </div>

      {/* Right */}
      <div className="right w-[26.5vw] h-[65vh] p-[3.5vmax] border-[0.2vmax] border-black shadow-[0_0_0.2vmax_black] font-[Gilroy] flex flex-col">
        {infoData.map((item, idx) => (
          <div key={idx} className="mb-4">
            <h3 className="text-[15px] font-semibold mb-[3px]">{item.title}</h3>
            <h5 className="text-[13px] font-semibold text-[#666] mb-[6px]">
              {item.subtitle}
            </h5>
            <InfoBox {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
