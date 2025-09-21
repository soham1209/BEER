import React from "react";
import lagunitasLogo from '/img/lagunitas-logo.png'

export default function NavTop() {
  return (
    <nav className="fixed z-10 flex w-[94.2vw] h-[12vh] items-center justify-between px-[4.5vw] left-[5vw]">
      <img
        src={lagunitasLogo}
        alt="Lagunitas Logo"
        className="h-[50px]"
      />
      <button className="px-4 py-2 text-white uppercase font-extrabold text-[20px] leading-6 bg-red-700 cursor-pointer">
        Buy Beer
      </button>
      <i className="ri-menu-line text-[2.5vw] hidden"></i>
    </nav>
  );
}