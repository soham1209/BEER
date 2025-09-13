import React from "react";

export default function NavLeft() {
  return (
    <nav className=" z-10 flex flex-col items-center gap-[2vmax] w-[5vw] h-screen border-r-2 border-[#2b2a2a] py-[25px] fixed">
      <i className="ri-menu-line text-2xl cursor-pointer"></i>
      <i className="ri-search-line text-2xl cursor-pointer"></i>
    </nav>
  );
}
