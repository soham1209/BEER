import React from "react";
import ad from './img/ad.jpg'

function ReadMore() {
  return (
    <div id="page6" className="w-screen h-[90vh] flex gap pl-[9vw]">
      {/* Image Part */}
      <div id="page6_part1 " className="w-2/3">
        <img
          src={ad}
          alt=""
          className=" h-[62vh] object-cover"
        />
      </div>

      {/* Text Part */}
      <div id="page6_part2" className="flex flex-col w-1/3">
        <h5 className="font-Gilroy text-[2vmax]">Recipes</h5>
        <h1 className="mt-[3vh] w-[30vw] font-[Anton] font-thin text-[4vw] leading-[9.5vh] uppercase">
          Beer Speaks. Bellies Grumble.
        </h1>
        <p className="mt-[3vh] font-[Dosis] font-normal text-[#111] w-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maiores
          saepe, ex magnam temporibus repellendus nobis doloremque voluptates
          quis ad fugit rem similique, porro, neque voluptate numquam quae?
          Repudiandae, ratione!
        </p>
        <button className="w-48 mt-[3vh] text-[1.2vmax] px-[1.5vmax] py-[0.8vmax] font-[Anton] font-thin uppercase text-white bg-black border-none cursor-pointer">
          Read More
        </button>
      </div>
    </div>
  );
}

export default ReadMore;
