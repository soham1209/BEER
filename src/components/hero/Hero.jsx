import React from "react";
import Texture from "/img/texture.png";
import Dogimage from "/img/dogimage.png";
import "./Hero.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 },
    });

    tl.from(".top", { y: -100, opacity: 0 });

    tl.from(".bottom", { y: 100, opacity: 0 }, "-=0.8"); // overlaps slightly

    tl.to("#page1_dog_image", { opacity: 1, duration: .5 }, "-=0.3");

    tl.fromTo(".bottle img", { opacity: 0 }, { opacity: 1, duration: 1 },);
  });

  return (
    <div id="page1" className="flex flex-col items-center">
      <h1 className="top" style={{ backgroundImage: `url(${Texture})` }}>
        unlimited
      </h1>
      <h1 className="bottom" style={{ backgroundImage: `url(${Texture})` }}>
        release
      </h1>
      <img
        id="page1_dog_image"
        src={Dogimage}
        alt="dog"
        className="opacity-0 mt-6"
      />
    </div>
  );
}

export default Hero;
