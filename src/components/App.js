import React, { Component } from "react";

import Home from "./Home";
import { Container } from "aphrodite-react";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Home />
      </Container>
    );
  }
}
