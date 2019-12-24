import React from "react";

import "./list.scss";
import CardView from "components/Card/Card";
import { Row, Col } from "aphrodite-react";
import { useHistory } from "react-router-dom";

export const List = ({ shows }) => {
  let history = useHistory();

  const customCol = {
    padding: "10px"
  };

  function handleCLick(id) {
    localStorage.setItem("listShows", JSON.stringify(shows));
    history.push(`/details/${id}`);
  }

  if (shows.length > 0) {
    return (
      <>
        <Row horizontal="center">
          {shows.map(show => {
            return (
              <Col xs={3} sm={3} key={show.id} style={customCol}>
                <div onClick={() => handleCLick(show.id)}>
                  <CardView
                    name={show.name}
                    image={show.image}
                    genres={show.genres}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </>
    );
  }

  return (
    <>
      <div>
        <h3 className="text-results">No results</h3>
      </div>
    </>
  );
};
