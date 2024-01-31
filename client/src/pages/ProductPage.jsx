import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useSizeWindow } from "../hooks/useSizeWindow";
import { Product as SkeletonProduct } from "../components/Skeleton/Product";
import { MobileProduct as SkeletonMobileProduct } from "../components/Skeleton/MobileProduct";
import { Product } from "../components/Product/Product";
import { resetPagePosition } from "../resetPagePosition";
import styles from "../App.module.scss";

export function ProductPage() {
  const [mobileView, setMobileView] = useState(false);
  const [loading, setLoading] = useState(true);
  const breakpoint = 770;

  const { data } = useFetch("/api/products");
  const [width] = useSizeWindow();

  useEffect(() => {
    if (data.length) setLoading(false);

    width <= breakpoint ? setMobileView(true) : setMobileView(false);
  }, [data, width]);

  resetPagePosition(0, 0);

  const mobile = () => {
    return loading ? <SkeletonMobileProduct /> : <Product products={data} />;
  };
  const desktop = () => {
    return loading ? <SkeletonProduct /> : <Product products={data} />;
  };

  return (
    <section className={styles.product_page}>
      <div className={styles.product_page__content}>
        {mobileView ? mobile() : desktop()}
      </div>
    </section>
  );
}
