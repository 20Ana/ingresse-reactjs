import React, { Component } from "react";

import CardList from "./Card";
import InputSearch from "./Search";

export default class Home extends Component {
  render() {
    return (
      <>
        <InputSearch />
        <CardList />
      </>
    );
  }
}
