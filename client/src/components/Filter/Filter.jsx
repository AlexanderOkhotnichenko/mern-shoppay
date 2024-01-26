import React, { useContext, useEffect } from "react";
import { Sizes } from "./Sizes";
import { Colors } from "./Colors";
import { Price } from "./Price";
import { Context } from "../../context";
import styles from "./filter.module.scss";

export function Filter({ loading, fetchProducts, isOpen }) {
  const {
    selectedSize,
    setSelectedSize,
    selectedColor,
    setSelectedColor,
    selectedPrice,
    setSelectedPrice,
    selectedCategory,
    searchValue,
    setListGoods,
    setCurrentPage,
  } = useContext(Context);

  const handleSelectedSize = (id) => {
    const cusinesStateList = selectedSize;
    const changeCheckedCuisines = cusinesStateList.map((item) =>
      item.id == id ? { ...item, checked: !item.checked } : item
    );
    setSelectedSize(changeCheckedCuisines);
  };
  const handleSelectedColor = (event) => setSelectedColor(event.target.value);
  const handleSelectedPrice = (value) => setSelectedPrice(value);

  const applyFilters = () => {
    let updateList = fetchProducts;

    if (selectedCategory) {
      updateList = updateList.filter(
        ({ category }) => category === selectedCategory
      );
    }

    if (selectedSize) {
      const selectedCheckbox = selectedSize
        .filter((item) => item.checked)
        .map((el) => el.label);

      if (selectedCheckbox.length > 0) {
        updateList = updateList.filter((product) =>
          product.size.some((item) => selectedCheckbox.includes(item))
        );
      }
    }

    if (selectedColor) {
      updateList = updateList.filter(({ color }) => color === selectedColor);
    }

    if (selectedPrice) {
      const minPrice = selectedPrice[0];
      const maxPrice = selectedPrice[1];

      updateList = updateList.filter(
        (item) => item.price.new >= minPrice && item.price.new <= maxPrice
      );
    }

    setListGoods(updateList);
    setCurrentPage(1);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedSize, selectedColor, selectedPrice, selectedCategory]);

  return (
    <aside
      className={`${styles.filter} ${loading || searchValue ? styles.lock : ""} ${isOpen ? styles.is_open : ''}`}
    >
      <div className={styles.filter__content}>
        <Sizes handleSize={handleSelectedSize} />
        <Colors handleColor={handleSelectedColor} />
        <Price valuePrice={selectedPrice} handlePrice={handleSelectedPrice} />
      </div>
    </aside>
  );
}
