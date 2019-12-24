import React from "react";

import "./card.scss";
import Image from "react-graceful-image";

const CardView = ({ image, name, genres }) => {
  return (
    <>
      <div className="content animate-fadein">
        <Image
          src={image}
          alt="banner"
          width="210"
          height="295"
          className="image"
          placeholderColor="#3b3939"
        />
        <div className="info">
          <div className="text">
            <h4>{name}</h4>
            <small>Genres: {genres}</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardView;
