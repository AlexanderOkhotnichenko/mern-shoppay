import React from 'react'
import styles from "../categorys.module.scss";

export function Category({ id, name, value, title, defaultChecked, onChange }) {
  return (
    <div className={styles.category}>
      <input type={"radio"} id={id} name={name} value={value} defaultChecked={defaultChecked} onChange={onChange} />
      <label htmlFor={id}>{title}</label>
    </div>
  )
}
