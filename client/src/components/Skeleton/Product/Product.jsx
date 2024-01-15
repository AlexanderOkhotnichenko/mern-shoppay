import React from "react";
import ContentLoader from "react-content-loader";

export function Product(props) {
  const styles = {
    width: "100%",
    height: "100%",
    maxWidth: "1402",
    maxHeight: "575",
  };

  const viewBoxOption = "0 0 1402 575";

  return (
    <ContentLoader
      speed={2}
      style={styles}
      viewBox={viewBoxOption}
      backgroundColor="#e6e3e4"
      foregroundColor="#f4f0f0"
      {...props}
    >
      <rect x="0" y="0" rx="8" ry="6" width="142" height="144" />
      <rect x="0" y="154" rx="8" ry="6" width="142" height="144" />
      <rect x="162" y="0" rx="8" ry="6" width="466" height="466" />
      <rect x="676" y="0" rx="8" ry="6" width="629" height="38" />
      <rect x="676" y="48" rx="8" ry="6" width="113" height="24" />
      <rect x="676" y="92" rx="8" ry="6" width="629" height="72" />
      <rect x="676" y="192" rx="8" ry="6" width="64" height="34" />
      <rect x="676" y="248" rx="8" ry="6" width="112" height="38" />
      <rect x="676" y="314" rx="8" ry="6" width="153" height="40" />
      <rect x="676" y="314" rx="8" ry="6" width="153" height="40" />
      <rect x="676" y="378" rx="0" ry="6" width="629" height="1" />
      <rect x="676" y="403" rx="8" ry="6" width="342" height="158" />
    </ContentLoader>
  );
}
