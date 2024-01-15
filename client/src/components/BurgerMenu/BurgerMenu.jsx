import React, { useState } from "react";
import styles from "./burgermenu.module.scss";

export function BurgerMenu() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={`${styles.burder_menu} ${open ? styles.open : ""}`} onClick={handleClick}>
      <span className={styles.burder_menu__line}></span>
    </div>
  );
}
