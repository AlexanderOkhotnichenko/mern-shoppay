import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NoResult } from "../components/NoResult";
import { Cart } from "../components/Cart";
import { Total } from "../components/Total";
import { Payments } from "../components/Payments";
import { resetPagePosition } from "../resetPagePosition";

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
  gap: "2.5rem",
};

const section = {
  maxWidth: "87.625rem",
  padding: "2.5rem 3rem",
  margin: "0 auto",
}

export function CartPage() {
  const [noResult, setNoResult] = useState(false);
  const [orderButton, setOrderButton] = useState(false);
  const products = useSelector(state => state.cart.products);

  const handleOrderButton = () => setOrderButton(true);

  resetPagePosition(0, 0);
  const total = () => {
    let total = 0;
    products.forEach((item) => total += item.selectedCount * item?.price?.new);

    return total.toFixed(2);
  }

  useEffect(() => {
    if (!products.length) setNoResult(true);
  }, [products]);

  return (
    <section style={section}>
      <div style={grid}>
        {products?.map((cart) => (
          <Cart key={cart._id} {...cart} />
        ))}
      </div>
      {noResult ? <NoResult /> : <Total total={total()} onClick={handleOrderButton} />}
      {orderButton && <Payments total={String(total())} />}
    </section>
  );
}
