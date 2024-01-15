import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import styles from "./accordion.module.scss";

export function Accordion({ icon, title, link = [], text, isActive, onClick }) { 
 
  return (
    <div className={`${styles.accordion} ${isActive}`} onClick={onClick}>
      <div className={styles.accordion__title}>
        {icon}
        <span>{title}</span>
        <IoIosArrowDown className={styles.accordion__arrow} />
      </div>
      <div className={styles.accordion__back}>
        <p>
          {text}
          <Link to={link.href}>{link.text}</Link>
        </p>
      </div>
    </div>
  )
}