import React, { useState } from "react";
import { Accordion } from "../../Accordion";
import { data } from "./data";
import accordionStyles from "../../Accordion/accordion.module.scss";
import styles from "./advantages.module.scss";

export function Advantages() {
  const [isActive, setIsActive] = useState('');

  const handleActive = (index) => {
    if (isActive === index) {
      return setIsActive('');
    }

    setIsActive(index);
  }

  return (
    <section className={styles.advantages}>
      <div className={styles.advantages__content}>
        <h1 className={styles.title}>Try them out in practice.</h1>
        <p className={styles.text}>Just contact our team for support!</p>
        <div className={styles.list}>
          {
            data.map((accordion, index) => (
              <Accordion
                key={index}
                icon={accordion.icon}
                title={accordion.title}
                link={accordion.link}
                text={accordion.text}
                isActive={isActive === index ? accordionStyles.active : ''}
                onClick={() => handleActive(index)}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
}
