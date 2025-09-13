import React from "react";
import bottle from '../img/bottle.png'

export default function BottleImage() {
  return (
    <div className="absolute left-[8vw] top-1/2 -translate-y-1/2 h-[90vh] w-[90vh] flex items-center justify-center z-0">
      <img
        src={bottle}
        alt="Lagunitas Bottle"
        className="h-full w-auto"
      />
    </div>
  );
}
