import React from "react";
import Texture from "/img/texture.png";
import Dogimage from "/img/dogimage.png";
import "./Hero.css"; // we'll put the extra CSS here

function Hero() {
  return (
    <div id="page1">
      <h1 style={{ backgroundImage: `url(${Texture})` }}>
        unlimited release
      </h1>
      <img
        id="page1_dog_image"
        src={Dogimage}
        alt="dog"
      />
    </div>
  );
}

export default Hero;
