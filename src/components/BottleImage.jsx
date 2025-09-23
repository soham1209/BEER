import React from "react";
import bottle from "/img/bottle.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BottleImage() {
  useGSAP(() => {
    gsap.to(".bottle img", {
      y: -50,
      rotate: -15,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".bottle",
        start: "top 10%",
        end: "top -408%",
        scrub: true,
        pin: true,
        // pinSpacing: false ,
        // pinType: "transform"
      },
    });
    gsap.to(".bottle img", {
      scale: 0.55,
      scrollTrigger: {
        trigger: ".bottle",
        start: "top center",
        end: "top -408%",
        scrub: true,
      },
    });
    // window.addEventListener("load", () => {
    //   ScrollTrigger.refresh();
    // });
  }, []);

  return (
    <div className="absolute h-[300vh] w-screen flex items-center justify-center ml-6 ">
      {/* gives enough space to scroll */}
      <div className="bottle absolute top-[10vh] flex items-center justify-center h-[90vh] w-[90vh] z-20  ">
        <img src={bottle} alt="Lagunitas Bottle" className="h-full w-auto " />
      </div>
    </div>
  );
}
