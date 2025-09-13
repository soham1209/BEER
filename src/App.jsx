import React from "react";
import NavTop from "./components/NavTop";
import NavLeft from "./components/NavLeft";
import Hero from "./components/hero/Hero";
import AboutUs from "./components/aboutUs/AboutUs";
import MounthFeels from "./components/mounthFeels/MounthFeels";



function App() {
  return (
    <div className="relative">
      <NavTop />
      <NavLeft />
      <Hero/>
      <AboutUs/>
      <MounthFeels/>
      
    </div>
  );
}

export default App;
