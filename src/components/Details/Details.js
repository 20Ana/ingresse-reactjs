import React, { useState, useEffect } from "react";

import "./details.scss";
import { getShow } from "services";
import { H2, Row, Col } from "aphrodite-react";
import { IMG_PLACEHOLDER_LOADING } from "utils/constants";

export default function Details({ match }) {
  const [show, setShow] = useState({});

  const fetchData = async () => {
    const result = await getShow(match.params.id);
    setShow(result);
  };

  function setImagePlaceholder() {
    return show.image ? show.image : IMG_PLACEHOLDER_LOADING;
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Row>
        <Col xs={12} sm={12}>
          <div className="content-details">
            <div className="image-banner">
              <img src={setImagePlaceholder()} alt="banner" />
            </div>
            <div className="content-info">
              <H2 className="title-content">{show.name}</H2>
              <p>In Theaters: {show.premiered}</p>
              <p>Genres: {show.genres}</p>
              <div dangerouslySetInnerHTML={{ __html: show.summary }} />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
