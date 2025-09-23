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
        end: "top -410%",
        scrub: true,
        pin: true,
      },
    });
    gsap.to(".bottle img", {
      scale: 0.57,
      scrollTrigger: {
        trigger: ".bottle",
        start: "top center", 
        end: "top -410%", 
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="w-full flex justify-center ml-10 ">
      <div className="absolute h-[300vh] ">
        {/* gives enough space to scroll */}
        <div className="bottle absolute left-1/2 top-[10vh] -translate-x-1/2 h-[90vh] w-[90vh] flex items-center justify-center z-20">
          <img src={bottle} alt="Lagunitas Bottle" className="h-full w-auto" />
        </div>
      </div>
    </div>
  );
}
