import React, { useContext } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Context } from "../../../context";
import styles from "./navpagination.module.scss";

export function NavPagination({ paginationCount, pageCount }) {
  const { currentPage, setCurrentPage } = useContext(Context);

  const changeNumberPage = (id) => {
    setCurrentPage(id);
  };

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== pageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className={styles.nav_pagination}>
      <button className={styles.prev} onClick={prevPage}><MdOutlineKeyboardArrowLeft /></button>
      <div className={styles.page}>
        {
          paginationCount.map((number, index) => (
            <span className={`${styles.page__number} ${currentPage === number ? styles.target : ''}`} key={index} onClick={() => changeNumberPage(number)}>{number}</span>
          ))
        }
      </div>
      <button className={styles.next} onClick={nextPage}><MdOutlineKeyboardArrowRight /></button>
    </section>
  );
}
