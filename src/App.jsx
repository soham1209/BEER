import React, { useEffect } from "react";
import NavTop from "./components/NavTop";
import NavLeft from "./components/NavLeft";
import Hero from "./components/hero/Hero";
import AboutUs from "./components/aboutUs/AboutUs";
import MounthFeels from "./components/mounthFeels/MounthFeels";
import WhatWeAre from "./components/whatWeare/WhatWeAre";
import Availability from "./components/availability/Availability";
import ReadMore from "./components/readMore/ReadMore";
import BottleImage from "./components/BottleImage";



function App() {
  

  return (
    <div className=" overflow-hidden" >
      <NavTop />
      <NavLeft />
      <BottleImage />
      <Hero />
      <AboutUs />
      <MounthFeels />
      <WhatWeAre />
      <Availability />
      <ReadMore />
    </div>
  );
}

export default App;
