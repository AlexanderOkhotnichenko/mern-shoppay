import React from "react";
import styles from "../colors.module.scss";

export function Color({ id, name, value, title, color, border, defaultChecked, onChange }) {
  return (
    <li key={id} className={styles.color}>
      <input type={"radio"} name={name} value={value} defaultChecked={defaultChecked} id={id} onChange={onChange} />
      <label
        htmlFor={id}
        title={title}
        style={{ background: color, border: `2px solid ${border}` }}
      ></label>
    </li>
  );
}
