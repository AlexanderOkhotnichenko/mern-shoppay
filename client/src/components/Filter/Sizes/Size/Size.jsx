import React from "react";
import { LuCheck } from "react-icons/lu";
import styles from "../sizes.module.scss";

export function Size({ id, value, label, onChange }) {
  return (
    <li className={styles.size} key={id}>
      <input type={"checkbox"} value={value} id={id} onChange={() => onChange(id)} />
      <label htmlFor={id}>
        <div className={styles.checkbox}>
          <LuCheck />
        </div>
        <span className={styles.filter__size__text}>{label}</span>
      </label>
    </li>
  );
}
