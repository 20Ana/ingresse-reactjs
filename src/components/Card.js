import React from "react";

import style from "../styles/card.scss";

const CardView = ({ image, name, genres }) => {
  const customCard = {
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <>
      <div className="content">
        <img src={image} alt="banner" className="image" />
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
