import React from "react";
import icon from "../../assets/sprite.svg";

export function Icon({ className, id }) {
  return (
    <svg className={className}>
      <use xlinkHref={icon + `#${id}`} />
    </svg>
  );
}
