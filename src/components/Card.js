import React from "react";

import { Card, Img, H3, P } from "aphrodite-react";

const CardView = props => {
  const customCard = {
    display: "flex",
    flexDirection: "column"
  };

  return (
    <Card boxShadow style={customCard}>
      <Img rounded alt="banner" src={props.image} />
      <div className="info">
        <H3 center>{props.name}</H3>
        <P>Genres: {props.genres}</P>
        <span>Favoritar</span>
      </div>
    </Card>
  );
};

export default CardView;
