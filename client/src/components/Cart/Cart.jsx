import React from 'react'
import { useDispatch } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { removeItem } from '../../redux/cartReducer';
import styles from "./cart.module.scss";

export function Cart({ _id, img, title, category, size, color, price, selectedCount }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.cart} id={_id}>
      <div className={styles.left}>
        <img src={img?.src?.front} alt={img?.alt?.front} />
      </div>
      <div className={styles.right}>
        <h4 className={styles.title} title={title}>{title}</h4>
        <div className={styles.description}>
          <span className={styles.category}>Category: {category}</span>
          <span className={styles.size}>Size: {size}</span>
          <span className={styles.color}>Color: {color}</span>
        </div>
        <div className={styles.price}>{selectedCount} x ${price?.new}</div>
      </div>
      <MdDelete className={styles.delete} onClick={() => dispatch(removeItem(_id))} />
    </div>
  )
}
