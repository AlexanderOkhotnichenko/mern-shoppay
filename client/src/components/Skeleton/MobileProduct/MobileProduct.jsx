import React from "react";
import ContentLoader from "react-content-loader";

export function MobileProduct(props) {
  const styles = {
    width: "100%",
    height: "100%",
    maxWidth: "1402",
    maxHeight: "1235",
  };

  const viewBoxOption = "0 0 1402 1235";

  return (
    <ContentLoader
      speed={2}
      style={styles}
      viewBox={viewBoxOption}
      backgroundColor="#e6e3e4"
      foregroundColor="#f4f0f0"
      {...props}
    >
      <rect x="0" y="0" rx="8" ry="6" width="304" height="324" />
      <rect x="0" y="344" rx="8" ry="6" width="304" height="324" />
      <rect x="344" y="0" rx="8" ry="6" width="75%" height="668" />
      <rect x="0" y="725" rx="8" ry="6" width="100%" height="50" />
      <rect x="0" y="810" rx="8" ry="6" width="110" height="40" />
      <rect x="132" y="810" rx="8" ry="6" width="110" height="40" />
      <rect x="0" y="890" rx="8" ry="6" width="100%" height="130" />
      <rect x="0" y="1060" rx="8" ry="6" width="125" height="60" />
      <rect x="0" y="1160" rx="8" ry="6" width="300" height="70" />
    </ContentLoader>
  );
}
