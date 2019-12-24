import React, { useState, useEffect } from "react";

import "./details.scss";
import { getShow } from "services";
import Image from "react-graceful-image";
import { useHistory } from "react-router-dom";
import { H2, Row, Col } from "aphrodite-react";
import SvgLeftArrow from "components/Icons/LeftArrow";

export default function Details({ match }) {
  let history = useHistory();
  const [show, setShow] = useState({});
  const { image, name, genres, summary, premiered } = show;

  useEffect(() => {
    getShow(match.params.id).then(setShow);
  }, [match.params.id]);

  return (
    <>
      <div className="animate-fadein">
        <div className="arrow">
          <button className="btn-arrow" onClick={() => history.goBack()}>
            <SvgLeftArrow width="19" height="19" />
          </button>
          <h3 className="title-arrow">{genres}</h3>
        </div>
        <Row>
          <Col xs={12} sm={12}>
            <div className="content-details">
              <div className="animate-fadein image-align-mobile">
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
