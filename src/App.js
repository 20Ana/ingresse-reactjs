import React from "react";

import { Routes } from "./routes";
import "./App.scss";
import { Container } from "aphrodite-react";

function App() {
  return (
    <>
      <Container>
        <Routes />
      </Container>
    </>
  );
}

export default App;
