import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function WhatWeAre() {
  useGSAP(() => {
    // Floating animations for each block
    gsap.to("#page4_color1", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to("#page4_color2", {
      y: -25,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5,
    });

    gsap.to("#page4_color3", {
      y: -18,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1,
    });

    // Optional: rotate the Mason jar slowly
    gsap.to("#page4_color_image4", {
      rotation: "-22deg",
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div id="page4" className="w-screen h-screen flex relative overflow-hidden">
      {/* Color Block 1 */}
      <div id="page4_color1" className="relative">
        <img
          id="page4_color_image1"
          src="img/Green-LSS.png"
          alt=""
          className="w-[20vw] mt-0 ml-[20vh]"
        />
        <div
          id="page4_color_image1_text"
          className="absolute text-white text-center"
          style={{ top: "5%", left: "50%", width: "13vw" }}
        >
          <h4
            className="uppercase font-[Anton] font-thin border-b-[0.2vmax] tracking-[0.1vmax]"
            style={{ width: "8vw", marginBottom: "1vh", marginLeft: "3vmax" }}
          >
            tropical
          </h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia harum
            accusamus placeat distinctio iusto exercitationem labore nulla atque
            temporibus beatae?
          </p>
        </div>
      </div>

      {/* Color Block 2 */}
      <div id="page4_color2" className="relative">
        <img
          id="page4_color_image2"
          src="img/Green-LSS.png"
          alt=""
          className="w-[21vw] mt-[26vh] ml-[-6vh]"
        />
        <div
          id="page4_color_image2_text"
          className="absolute text-white text-center"
          style={{ top: "32%", left: "9%", width: "13vw" }}
        >
          <h4
            className="uppercase font-[Anton] font-thin border-b-[0.2vmax] tracking-[0.1vmax] text-center"
            style={{ width: "4vw", marginLeft: "5vmax" }}
          >
            pink
          </h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia harum
            accusamus placeat distinctio iusto exercitationem labore nulla atque
            temporibus beatae?
          </p>
        </div>
      </div>

      {/* Color Block 3 */}
      <div id="page4_color3" className="relative">
        <img
          id="page4_color_image3"
          src="img/splat-black.png"
          alt=""
          className="w-[25vw] mt-[20vh] ml-[40vh]"
        />
        <div
          id="page4_color_image3_text"
          className="absolute text-white text-center"
          style={{ top: "30%", left: "59%", width: "15vw" }}
        >
          <h4
            className="uppercase font-[Anton] font-thin border-b-[0.2vmax] tracking-[0.1vmax]"
            style={{ width: "8vw", marginBottom: "1vh", marginLeft: "3.5vmax" }}
          >
            caramel-malt
          </h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia harum
            accusamus placeat distinctio iusto exercitationem labore nulla atque
            temporibus beatae?
          </p>
        </div>
      </div>

      {/* Mason Jar Image */}
      <img
        id="page4_color_image4"
        src="./img/LittleSumpin_MasonJar_Photo-671x1024.png"
        alt=""
        className="w-[16vw] h-[50vh]"
        style={{
          marginTop: "45vh",
          marginLeft: "-165vh",
          transform: "rotate(-17deg)",
        }}
      />
    </div>
  );
}

export default WhatWeAre;
