import React from "react";

function Availability() {
  return (
    <div id="page5" className="w-screen">
      <h5 className="font-Gilroy text-base mb-2">Availability</h5>
      <h1 className="text-[7vw] font-[Anton] uppercase mb-6">year round</h1>

      <div
        id="page5_image_box"
        className="w-screen h-[85vh] px-[5vw] flex items-center justify-evenly"
      >
        {/* Bottle 1 */}
        <div id="page5_bottel" className="w-[15vw] h-[60vh] flex flex-col items-center justify-center">
          <img id="image11" src="img/image1.png" alt="" className="h-[48vh] w-[15vw]" />
          <h4 className="font-Dosis text-center mt-2">On Top</h4>
        </div>

        {/* Bottle 2 */}
        <div id="page5_bottel" className="w-[15vw] h-[60vh] flex flex-col items-center justify-center">
          <img id="image22" src="img/image2.png" alt="" className="w-[15vw] rotate-[-15deg]" />
          <h4 className="font-Dosis text-center mt-2">22 oz Bottles</h4>
          <h6 className="font-Gilroy text-[1.1vmax] mt-1 flex justify-around">6-PACK</h6>
        </div>

        {/* Bottle 3 */}
        <div id="page5_bottel" className="w-[15vw] h-[60vh] flex flex-col items-center justify-center">
          <img id="image33" src="img/ipa.png" alt="" className="h-[47vh] w-[15vw] rotate-[-15deg] opacity-0" />
          <h4 className="font-Dosis text-center mt-2">22 oz Bottles</h4>
          <h6 className="font-Gilroy text-[1.1vmax] mt-1 flex justify-around">6-PACK</h6>
        </div>

        {/* Bottle 4 */}
        <div id="page5_bottel" className="w-[15vw] h-[60vh] flex flex-col items-center justify-center">
          <img id="image44" src="img/image3.png" alt="" className="w-[15vw] rotate-[-15deg]" />
          <h4 className="font-Dosis text-center mt-2">21 oz Bottles</h4>
        </div>

        {/* Bottle 5 */}
        <div id="page5_bottel" className="w-[15vw] h-[60vh] flex flex-col items-center justify-center">
          <img id="image55" src="img/image4.png" alt="" className="w-[15vw] rotate-[-15deg]" />
          <h4 className="font-Dosis text-center mt-2">33 oz Bottles</h4>
        </div>
      </div>
    </div>
  );
}

export default Availability;
