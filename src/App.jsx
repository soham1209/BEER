import React from "react";
import NavTop from "./components/NavTop";
import NavLeft from "./components/NavLeft";
import Hero from "./components/hero/Hero";
import AboutUs from "./components/aboutUs/AboutUs";
import MounthFeels from "./components/mounthFeels/MounthFeels";
import WhatWeAre from "./components/whatWeare/WhatWeAre";



function App() {
  return (
    <div className="relative overflow-x-hidden">
      <NavTop />
      <NavLeft />
      <Hero/>
      <AboutUs/>
      <MounthFeels/>
      <WhatWeAre/>
      
    </div>
  );
}

export default App;
