import React, { useState, useEffect } from "react";

import "./details.scss";
import { getShow } from "services";
import Image from "react-graceful-image";
import { H2, Row, Col } from "aphrodite-react";

export default function Details({ match }) {
  const [show, setShow] = useState({});
  const { image, name, genres, summary, premiered } = show;

  useEffect(() => {
    getShow(match.params.id).then(setShow);
  }, [match.params.id]);

  return (
    <>
      <div className="animate-fadein">
        <Row>
          <Col xs={12} sm={12}>
            <div className="content-details">
              <div className="animate-fadein">
                <Image
                  src={image}
                  alt="banner"
                  width="210"
                  height="295"
                  placeholderColor="#3b3939"
                />
              </div>
              <div className="content-info">
                <H2 className="title-content">{name}</H2>
                <p>In Theaters: {premiered}</p>
                <p>Genres: {genres}</p>
                <div dangerouslySetInnerHTML={{ __html: summary }} />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
