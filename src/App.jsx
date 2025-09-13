import React from "react";
import NavTop from "./components/NavTop";
import NavLeft from "./components/NavLeft";
import Hero from "./components/hero/Hero";
import AboutUs from "./components/aboutUs/AboutUs";
import MounthFeels from "./components/mounthFeels/MounthFeels";
import WhatWeAre from "./components/whatWeare/WhatWeAre";
import Availability from "./components/Availability/Availability";



function App() {
  return (
    <div className="relative overflow-x-hidden">
      <NavTop />
      <NavLeft />
      <Hero/>
      <AboutUs/>
      <MounthFeels/>
      <WhatWeAre/>
      <Availability/>
      
    </div>
  );
}

export default App;
