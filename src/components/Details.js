import React, { useState, useEffect } from "react";

import { getShow } from "../services";
import { Card, H2, Row, Col, H3 } from "aphrodite-react";

export default function Details({ match }) {
  const customCard = {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginTop: "2rem"
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
          <Card style={customCard}>
            <div>
              <img src={show.image} alt="banner" />
              <span>In Theaters: {show.premiered}</span>
            </div>
            <div>
              <H2>{show.name}</H2>
              <H3>Genres: {show.genres}</H3>
              <br />
              <div dangerouslySetInnerHTML={{ __html: show.summary }} />
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
