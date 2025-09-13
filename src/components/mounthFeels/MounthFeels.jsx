import React from "react";
import Texture from "/img/texture.png";
import YoutubeImage from "/img/youtube_imgae.jpg";

function MounthFeels() {
  return (
    <section
      id="page3"
      className="w-screen min-h-[110vh] px-[10vmax] pr-[5vmax]"
    >
      {/* Heading */}
      <h1
        className="w-[85vw] text-[18.3vw] leading-[18.5vw] font-[Anton] font-medium uppercase bg-center bg-cover text-transparent"
        style={{
          backgroundImage: `url(${Texture})`,
          backgroundColor: "rgb(177,29,29)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        MounthFeels
      </h1>

      {/* Content */}
      <div
        id="page3_text"
        className="flex justify-between mt-8"
      >
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est quaerat cumque veritatis, non nisi voluptatibus et veniam, excepturi illo neque! Quos, explicabo. Ad deserunt quos harum, ducimus explicabo doloribus.
          </p>
          <p className="mt-[3vh] font-[Dosis] font-thin">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est quaerat cumque veritatis, non nisi voluptatibus et veniam, excepturi illo neque! Quos, explicabo. Ad deserunt quos harum, ducimus explicabo doloribus.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MounthFeels;
