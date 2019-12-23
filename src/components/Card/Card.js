import React from "react";

import "./card.scss";
import { IMG_PLACEHOLDER_LOADING } from "utils/constants";

function setImagePlaceholder(image) {
  return image ? image : IMG_PLACEHOLDER_LOADING;
}

const CardView = ({ image, name, genres }) => {
  return (
    <>
      <div className="content">
        <img src={setImagePlaceholder(image)} alt="banner" className="image" />
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
