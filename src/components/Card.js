import React from "react";

import { Card, Row, Col, Container } from "aphrodite-react";

const CardList = props => {
  return (
    <Container>
      <Row horizontal="left">
        <Col xs={4} sm={4}>
          <Card boxShadow>
            <div>Banner</div>
            <div className="info">
              <span>Título</span>
              <span>Gênero</span>
              <span>Pôster</span>
              <span>Favoritar</span>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardList;
