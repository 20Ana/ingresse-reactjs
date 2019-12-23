import React from "react";

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
  <Input
    type="text"
    id="search"
    placeholder="Search..."
    styles={customInput}
    onChange={debounce(e => setQuery(e.target.value), 300)}
  />
);

export default InputSearch;
