import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cookies } from "react-cookie";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { Context } from "../../context";
import { Select } from "../Select";
import styles from "./product.module.scss";

export function Product({ products }) {
  const { selectedOptionSize, setSelectedOptionSize } = useContext(Context);
  const [data, setData] = useState([]);
  const pageID = Number(useParams().id);
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const [selectedCount, setSelectedCount] = useState(1);
  const [selectedImg, setSelectedImg] = useState(null);
  const [listSize, setListSize] = useState([]);
  const auth = cookies.get("token") && cookies.get("user");

  useEffect(() => {
    if (products.length) {
      products.map((product) => {
        if (product.pageID === pageID) {
          setData(product);
          setSelectedImg(product?.img?.src?.front);
        }
        setListSize(product.size);
      });

      setSelectedOptionSize(listSize[0]);
    }
  }, [products, listSize]);

  return (
    <section className={styles.product} id={data?._id}>
      <div className={styles.product__content}>
        <div className={styles.left}>
          <div className={styles.gallery}>
            <img
              src={data?.img?.src?.front}
              alt={data?.img?.alt?.front}
              onClick={() => setSelectedImg(data?.img?.src?.front)}
            />
            <img
              src={data?.img?.src?.back}
              alt={data?.img?.alt?.back}
              onClick={() => setSelectedImg(data?.img?.src?.back)}
            />
          </div>
          <div className={styles.main_hero}>
            <img src={selectedImg} alt={data?.img?.alt?.front} />
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.price}>
            {data?.price?.old && (
              <span className={styles.price__old}>
                <s>${data?.price?.old}</s>
              </span>
            )}
            <span className={styles.price__new}>
              ${data?.price?.new}
            </span>
          </div>
          <p className={styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius harum
            ipsum libero? Ea soluta laudantium placeat voluptatibus, voluptas
            dolores commodi dignissimos, similique sunt, earum praesentium qui
            culpa sapiente laboriosam iure.
          </p>
          {auth && <Select options={listSize} />}
          {!auth && (
            <span className={styles.error_message}>
              You must be logged in to make a purchase!
            </span>
          )}
          {auth && (
            <div className={styles.quantity}>
              <button
                type="button"
                className={styles.minus}
                onClick={() =>
                  setSelectedCount((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                <FaMinus />
              </button>
              <span className={styles.count}>{selectedCount}</span>
              <button
                type="button"
                className={styles.plus}
                onClick={() => setSelectedCount((prev) => prev + 1)}
              >
                <FaPlus />
              </button>
            </div>
          )}
          {auth && (
            <button
              type="button"
              className={styles.add_button}
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: data?._id,
                    img: data?.img,
                    title: data?.title,
                    price: data?.price,
                    category: data?.category,
                    size: selectedOptionSize,
                    color: data?.color,
                    selectedCount,
                  })
                )
              }
            >
              Add to cart
            </button>
          )}
          <hr className={styles.line} />
          <div style={{ overflowX: "auto" }}>
            <table className={styles.table}>
              <tbody className={styles.tbody}>
                <tr className={styles.tr}>
                  <td className={styles.td}>Category:</td>
                  <td data-label="Category:" className={styles.td}>{data?.category}</td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Sizes:</td>
                  {listSize.map((item, index) => (
                    <td key={index} className={styles.td}>
                      {item}
                    </td>
                  ))}
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Color:</td>
                  <td className={styles.td}>
                    <span
                      className={styles.circle}
                      style={{ background: data?.color }}
                    ></span>
                  </td>
                  <td className={styles.td}>{data?.color}</td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Price:</td>
                  <td className={styles.td}>${data?.price?.new}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
