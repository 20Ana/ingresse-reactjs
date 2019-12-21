import React from "react";

import ContentLoader from "react-content-loader";

export const Loading = () => {
  <ContentLoader
    height={295}
    width={245}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="39" y="11" rx="0" ry="0" width="210" height="295" />
    <rect x="38" y="320" rx="0" ry="0" width="213" height="23" />
    <rect x="38" y="357" rx="0" ry="0" width="213" height="23" />
  </ContentLoader>;
};
