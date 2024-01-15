import React from "react";
import { Size } from "./Size";
import styles from "./sizes.module.scss";

export function Sizes({ handleSize }) {
  return (
    <div className={styles.filter}>
      <h2 className={styles.filter__title}>Size:</h2>
      <ul className={styles.filter__list}>
        <Size value={"XS"} id={1} label={"XS - (35 - 37)"} onChange={handleSize} />
        <Size value={"SM"} id={2} label={"SM - (37 - 39)"} onChange={handleSize} />
        <Size value={"MD"} id={3} label={"MD - (39 - 41)"} onChange={handleSize} />
        <Size value={"LG"} id={4} label={"LG - (41 - 43)"} onChange={handleSize} />
        <Size value={"XL"} id={5} label={"XL - (43 - 46)"} onChange={handleSize} />
      </ul>
    </div>
  );
}
