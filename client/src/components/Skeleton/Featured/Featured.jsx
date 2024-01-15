import React from "react";
import ContentLoader from "react-content-loader";

export function Featured(props) {
  const styles = {
    width: "100%",
    height: "100%",
    maxWidth: "312.5px",
    maxHeight: "800px",
  };

  const viewBoxOption = "0 0 312.5 452.45";

  return (
    <ContentLoader
      speed={2}
      style={styles}
      viewBox={viewBoxOption}
      backgroundColor="#e6e3e4"
      foregroundColor="#f4f0f0"
      {...props}
    >
      <rect x="0" y="0" rx="8" ry="8" width="312.5" height="312.5" />
      <rect x="0" y="340" rx="4" ry="4" width="312.5" height="25" />
      <rect x="0" y="372" rx="4" ry="4" width="312.5" height="25" />
      <rect x="0" y="415" rx="6" ry="6" width="312.5" height="39.98" />
    </ContentLoader>
  );
}
