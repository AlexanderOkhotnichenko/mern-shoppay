import React from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import styles from "./price.module.scss";
import "./price.scss";

export function Price({ valuePrice, handlePrice }) {
  return (
    <div className={styles.filter}>
      <h2 className={styles.filter__title}>Price Range:</h2>
      <small className={styles.filter__current_range}>
        Current Range: <b>${valuePrice[1] - valuePrice[0]}</b>
      </small>
      <div className={styles.price}>
        <RangeSlider
          min={0}
          max={60}
          defaultValue={valuePrice}
          onInput={handlePrice}
        />
        <div className={styles.price__values}>
          <span className={styles.left_value}>${valuePrice[0]}</span>
          <span className={styles.right_value}>${valuePrice[1]}</span>
        </div>
      </div>
    </div>
  );
}
