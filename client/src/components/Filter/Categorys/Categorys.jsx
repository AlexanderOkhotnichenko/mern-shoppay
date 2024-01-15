import React, { useContext } from 'react'
import { Context } from '../../../context';
import { Category } from './Category';
import styles from "./categorys.module.scss";


export function Categorys({ loading }) {
  const { setSelectedCategory, searchValue } = useContext(Context);

  const handleSelectedCategory = (event) => setSelectedCategory(event.target.value);

  return (
    <section className={`${styles.filter} ${loading || searchValue ? styles.lock : ''}`}>
      <div className={styles.filter__list}>
        <Category id={"all-category"} value={""} name={"category"} title={"All"} defaultChecked onChange={handleSelectedCategory} />
        <Category id={"sale"} value={"sale"} name={"category"} title={"Sale"} onChange={handleSelectedCategory} />
        <Category id={"dry-weather"} value={"dry-weather"} name={"category"} title={"Dry Weather"} onChange={handleSelectedCategory} />
        <Category id={"new-season"} value={"new-season"} name={"category"} title={"New Season"} onChange={handleSelectedCategory} />
        <Category id={"classics"} value={"classics"} name={"category"} title={"Classics"} onChange={handleSelectedCategory} />
      </div>
    </section>
  )
}
