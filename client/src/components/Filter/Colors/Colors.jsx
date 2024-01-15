import React from "react";
import { Color } from "./Color";
import styles from "./colors.module.scss";

export function Colors({ handleColor }) {
  return (
    <div className={styles.filter}>
      <h2 className={styles.filter__title}>Colors:</h2>
      <ul className={styles.filter__list}>
        <Color id={"all-color"} title={"All"} defaultChecked={true} value={""} name={"color"} color={"linear-gradient(45deg, #e11d48 30%, #1d4ed8 80%)"} onChange={handleColor} />
        <Color id={"black"} title={"Black"} value={"black"} name={"color"} color={"#0A0A0A"} onChange={handleColor} />
        <Color id={"burlywood"} title={"Burlywood"} value={"burlywood"} name={"color"} color={"burlywood"} onChange={handleColor} />
        <Color id={"crimson"} title={"Crimson"} value={"crimson"} name={"color"} color={"crimson"} onChange={handleColor} />
        <Color id={"yellow"} title={"Yellow"} value={"yellow"} name={"color"} color={"#FDE047"} onChange={handleColor} />
        <Color id={"blue"} title={"Blue"} value={"blue"} name={"color"} color={"#1D4Ed8"} onChange={handleColor} />
        <Color id={"white"} title={"White"} value={"white"} name={"color"} color={"#FFFFFF"} border={"#0A0A0A"} onChange={handleColor} />
        <Color id={"gray"} title={"Gray"} value={"gray"} name={"color"} color={"gray"} onChange={handleColor} />
        <Color id={"brown"} title={"Brown"} value={"brown"} name={"color"} color={"#804030"} onChange={handleColor} />
        <Color id={"green"} title={"Green Aloe"} value={"green"} name={"color"} color={"#7A765A"} onChange={handleColor} />
      </ul>
    </div>
  );
}
