import React from "react";

import { Routes } from "./routes";
import style from "./App.css";
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
