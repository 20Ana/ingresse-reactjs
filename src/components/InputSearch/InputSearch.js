import React from "react";

import "./input-search.scss";
import MagnifyingGlass from "components/Icons/MagnifyingGlass";
import { Input } from "aphrodite-react";

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const customInput = {
  marginBottom: "2rem",
  marginTop: "2rem"
};

const InputSearch = ({ setQuery }) => (
  <div className="content-search">
    <MagnifyingGlass width="16" height="16" className="icon-search" />
    <Input
      type="text"
      id="search"
      placeholder="Search"
      styles={customInput}
      className="input-search"
      onChange={debounce(e => setQuery(e.target.value), 300)}
    />
  </div>
);

export default InputSearch;
