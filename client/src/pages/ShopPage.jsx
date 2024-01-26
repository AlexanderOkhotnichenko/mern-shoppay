import React, { useContext, useState } from "react";
import { Context } from "../context";
import { useFetch } from "../hooks/useFetch";
import { Filter } from "../components/Filter";
import { ProductList } from "../components/ProductList/ProductList";
import { Search } from "../components/Filter/Search";
import { Categorys } from "../components/Filter/Categorys";
import { Loading } from "../components/Loading";
import { NavPagination } from "../components/Filter/NavPagination";
import { resetPagePosition } from "../resetPagePosition";
import styles from "../App.module.scss";

export function ShopPage() {
  const { currentPage } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);

  const { data, listGoods, loading } = useFetch('/api/products');

  // PAGINATION PAGE
  const goodsPerPage = 8;
  const lastIndex = currentPage * goodsPerPage;
  const firstIndex = lastIndex - goodsPerPage;
  const pageCount = Math.ceil(listGoods.length / goodsPerPage);
  const numbers = [...Array(pageCount + 1).keys()].slice(1);
  const result = listGoods.slice(firstIndex, lastIndex);

  resetPagePosition(0, 0);

  return (
    <div className={styles.container_stores}>
      <Filter loading={loading} fetchProducts={data} isOpen={isOpen}/>
      <div className={`${styles.container_products} ${isOpen ? styles.is_open : ''}`}>
        <Categorys fetchProducts={result} loading={loading} onClickTableButton={() => setIsOpen(!isOpen)} />
        <Search feachProducts={listGoods} loading={loading} />
        {loading ? <Loading /> : <ProductList goods={result} />}
        <NavPagination paginationCount={numbers} pageCount={pageCount} />
      </div>
    </div>
  );
}
