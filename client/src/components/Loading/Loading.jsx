import React from "react";
import ReactLoading from "react-loading";

export function Loading() {
  const styles_container = {
    width: '100%',
    minHeight: 'calc(100vh - 8.75rem)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const styles_unit = {
    width: '15%',
    height: '15%',
    fill: '#592ff4',
  };

  return (
    <div style={styles_container}>
      <ReactLoading
        type={"spin"}
        name={"Spin"}
        style={styles_unit}
      />
    </div>
  );
}
