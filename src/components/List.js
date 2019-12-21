import React from "react";

import CardView from "./Card";
import { Row, Col } from "aphrodite-react";
import { Link } from "react-router-dom";

export const List = ({ shows }) => {
  const customCol = {
    padding: "10px"
  };

  return (
    <Row horizontal="left">
      {shows.map((show, index) => {
        return (
          <Col xs={4} sm={4} key={index} style={customCol}>
            <Link to={`/details/${show.id}`}>
              <CardView
                name={show.name}
                image={show.image}
                genres={show.genres}
              />
            </Link>
          </Col>
        );
      })}
    </Row>
  );
};
