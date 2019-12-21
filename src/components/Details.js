import React, { useState, useEffect } from "react";

import { getShow } from "../services";
import { Card, Img, H2, P, Row, Col, H3 } from "aphrodite-react";

export default function Details({ match }) {
  const customCard = {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between"
  };

  const [show, setShow] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await getShow(match.params.id);
      setShow(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <Row horizontal="center">
        <Col xs={12} sm={12}>
          <Card boxShadow style={customCard}>
            <img src={show.image} alt="" />
            <div>
              <H2>{show.name}</H2>
              <span>In Theaters: {show.premiered}</span>
              <H3>Genres: {show.genres}</H3>
              <div dangerouslySetInnerHTML={{ __html: show.summary }} />
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
