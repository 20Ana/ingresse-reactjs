import React from "react";

import "./App.scss";
import { Routes } from "./routes";
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
