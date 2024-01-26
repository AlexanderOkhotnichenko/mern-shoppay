import React from "react";
import styles from "./burgermenu.module.scss";

export function BurgerMenu({ isOpen, onClick }) {
  return (
    <div className={`${styles.burder_menu} ${isOpen ? styles.active : ""}`} onClick={onClick}>
      <span className={styles.burder_menu__line}></span>
    </div>
  );
}
