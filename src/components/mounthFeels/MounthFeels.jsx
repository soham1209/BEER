import React, { useRef } from "react";
import Texture from "/img/texture.png";
import YoutubeImage from "/img/youtube_imgae.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";



function MounthFeels() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%", 
        toggleActions: "play none none none",
      },
      defaults: { ease: "power3.out", duration: 1 },
    });

    // Headings
    tl.from(".leftText", { x: -150, opacity: 0 })
      .from(".rightText", { x: 150, opacity: 0 }, "-=0.7");

    // Content parts
    tl.from("#page3_text_part1", { x: -100, opacity: 0, duration: 1 }, "-=0.5")
      .from("#page3_text_part2", { x: 100, opacity: 0, duration: 1 }, "-=0.7");
  });

  return (
    <section
      ref={containerRef}
      id="page3"
      className="w-screen min-h-[110vh] px-[10vmax] pr-[5vmax]"
    >
      {/* Heading */}
      <div className="flex w-[85vw]">
        <h1
          className="leftText text-[18vw] leading-[18.5vw] font-[Anton] font-medium uppercase bg-center bg-cover text-transparent -ml-18"
          style={{
            backgroundImage: `url(${Texture})`,
            backgroundColor: "rgb(177,29,29)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Mounth
        </h1>
        <h1
          className="rightText text-[18vw] leading-[18.5vw] font-[Anton] font-medium uppercase bg-center bg-cover text-transparent"
          style={{
            backgroundImage: `url(${Texture})`,
            backgroundColor: "rgb(177,29,29)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Feels
        </h1>
      </div>

      {/* Content */}
      <div id="page3_text" className="flex justify-between mt-8">
        {/* Left: Image + caption */}
        <div id="page3_text_part1" className="flex flex-col items-start">
          <a href="#">
            <img
              src={YoutubeImage}
              alt="Youtube Thumbnail"
              className="w-[25vw] mt-[3vh]"
            />
          </a>
          <h5 className="w-[23vw] text-[2vw] mt-[3vh] leading-[4vh] font-[Gilroy]">
            Hear it from our beamonster Jeremy Marshall
          </h5>
        </div>

        {/* Right: Text content */}
        <div
          id="page3_text_part2"
          className="w-[30vw] p-[1vmax_2vmax] flex flex-col"
        >
          <h5 className="w-[25vw] text-[1vmax] font-[Dosis] font-thin">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            officiis omnis fuga ipsum, molestias voluptates rem vitae
            perferendis, illo sit aliquid tenetur nisi.
          </h5>
          <h2 className="mt-[2vmax] text-[1.5vmax] font-[Anton] font-thin tracking-[0.05vmax]">
            STYLE
          </h2>
          <p className="mt-[3vh] font-[Dosis] font-thin">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            est quaerat cumque veritatis, non nisi voluptatibus et veniam,
            excepturi illo neque! Quos, explicabo. Ad deserunt quos harum, ducimus
            explicabo doloribus.
          </p>
          <p className="mt-[3vh] font-[Dosis] font-thin">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            est quaerat cumque veritatis, non nisi voluptatibus et veniam,
            excepturi illo neque! Quos, explicabo. Ad deserunt quos harum, ducimus
            explicabo doloribus.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MounthFeels;
