import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../context";
import { Link } from "react-router-dom";
import styles from "./search.module.scss";

export function Search({ feachProducts, loading }) {
  const { searchValue, setSearchValue } = useContext(Context);
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = (event) => setSearchValue(event.target.value);

  const applySearch = () => {
    let updataSearch = feachProducts;

    if (searchValue) {
      updataSearch = updataSearch.filter((product) => product.title.toLowerCase().search(searchValue.toLowerCase().trim()) !== -1);
      document.body.style.overflow = "hidden";
      setSearchResult(updataSearch);
    }
    
    if (!searchValue.length) {
      document.body.style.overflow = 'auto';
      setSearchResult([]);
    }
  };

  useEffect(() => {
    applySearch();
  }, [searchValue]);

  return (
    <section className={`${styles.filter} ${loading ? styles.lock : ""}`}>
      <div className={styles.filter__content}>
        <div className={styles.search}>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
            onChange={handleSearch}
          />
        </div>
        <div className={styles.search_result}>
          {searchResult.map(({ _id, img, title, price, link }) => (
            <Link to={link.href} className={styles.card} key={_id} id={_id}>
              <img
                src={img.src.front}
                alt={img.alt.front}
                className={styles.card__img}
              />
              <div className={styles.card__row}>
                <h2 className={styles.card__title}>{title}</h2>
                <div className={styles.card__price}>
                  {price?.old ? (
                    <span className={styles.price_old}>
                      <s>${price.old}</s>
                    </span>
                  ) : (
                    ""
                  )}
                  <span className={styles.price_new}>${price.new}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
