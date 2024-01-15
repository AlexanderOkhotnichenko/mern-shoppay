import React, { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Context } from "../../context";
import styles from "./select.module.scss";

export function Select({ options = [] }) {
  const { setSelectedOptionSize } = useContext(Context);
  const [openSelect, setOpenSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (value) => () => {
    setSelectedOption(value);
    setSelectedOptionSize(value);
    setOpenSelect(false);
  };

  return (
    <div className={`${styles.select} ${openSelect ? styles.open : ""}`}>
      <div className={styles.header} onClick={() => setOpenSelect(!openSelect)}>
        {selectedOption || options[0]}
        <IoIosArrowDown className={styles.arrow} />
      </div>
      <div className={styles.body}>
        <ul className={styles.options}>
          {options.map((option, index) => (
            <li
              onClick={handleSelect(option)}
              key={index}
              className={styles.option}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
