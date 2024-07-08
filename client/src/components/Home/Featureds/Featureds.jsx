import React, { useEffect, useRef, useState } from "react";
import axios from "../../../axios";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useFetch } from "../../../hooks/useFetch";
import { Featured } from "../Featureds/Featured";
import { Featured as SkeletonFeatured } from "../../Skeleton/Featured";
import styles from "./featureds.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Featureds() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [swiper, setSwiper] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  const { data, loading } = useFetch("https://mern-shoppay.onrender.com/api/featureds");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsive = await axios.get('https://mern-shoppay.onrender.com/api/products');
        setProducts(responsive.data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (swiper?.params) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <section className={styles.featureds}>
      <div className={styles.featureds__content}>
        <h1 className={styles.title}>Featured Products</h1>
        <p className={styles.text}>Get Them Before They're Gone!</p>
        <div className={styles.list}>
          <Swiper
            slidesPerView={1}
            modules={[Pagination, Navigation]}
            className={styles.slider}
            spaceBetween={30}
            navigation={{
              prevEl: prevRef?.current,
              nextEl: nextRef?.current,
              disabledClass: styles.disabled
            }}
            breakpoints={{
              420: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              590: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              780: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            pagination={{
              el: paginationRef.current,
              type: "fraction",
              bulletClass: styles.pagination_,
              bulletActiveClass: styles.navigation__pagination_active,
              dynamicBullets: true,
              formatFractionCurrent: function (number) {
                return ("" + number).slice(-2);
              },
              formatFractionTotal: function (number) {
                return ("" + number).slice(-2);
              },
              renderFraction: function (currentClass, totalClass) {
                return `<span class="${styles.current} ${currentClass}"></span> / <span class="${styles.total} ${totalClass}"></span>`;
              },
            }}
            onSwiper={setSwiper}
          >
            {loading || error
              ? [...Array(4)].map((_, index) => (
                  <SwiperSlide key={index} className={styles.slide}>
                    <SkeletonFeatured />
                  </SwiperSlide>
                ))
              : data.map((slide) => (
                  <SwiperSlide key={slide._id} className={styles.slide}>
                    <Featured {...slide} />
                  </SwiperSlide>
                ))}
          </Swiper>
          <div className={styles.controller}>
            <button className={styles.navigation_prev} ref={prevRef}>
              <MdKeyboardArrowLeft className={styles.arrow} />
            </button>
            <div className={styles.pagination} ref={paginationRef}></div>
            <button className={styles.navigation_next} ref={nextRef}>
            <MdKeyboardArrowRight className={styles.arrow} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
