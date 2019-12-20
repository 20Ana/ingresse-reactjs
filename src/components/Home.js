import React, { useState, useEffect } from "react";

import CardView from "./Card";
import InputSearch from "./Search";
import { search } from "../services";
import { Row, Col } from "aphrodite-react";

export default function Home() {
  const [data, setData] = useState({ shows: [] });

  const customCol = {
    padding: "10px"
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await search("love");
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <InputSearch />
      <Row horizontal="left">
        {data.shows.map((s, index) => {
          console.log(s.image);

          return (
            <Col xs={3} sm={3} key={index} style={customCol}>
              <CardView name={s.name} image={s.image} genres={s.genres} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
