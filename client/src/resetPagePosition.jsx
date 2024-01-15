import React, { useEffect } from "react";

export function resetPagePosition(positionY, positionX) {
  useEffect(() => {
    window.scrollTo(positionY, positionX);
  }, []);

  return <></>;
}
