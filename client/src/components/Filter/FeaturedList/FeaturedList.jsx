import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useFetch } from "../../../hooks/useFetch"
import { Featured } from "./Featured";
import { Featured as SkeletonFeatured } from "../../Skeleton/Featured";
import styles from "./featuredlist.module.scss";
import "swiper/scss";

export function FeaturedList() {
  const [swiper, setSwiper] = useState();
  const prevButton = useRef();
  const nextButton = useRef();

  const { data, loading } = useFetch('/api/featureds');

  useEffect(() => {
    if (swiper) {
      swiper?.navigation?.init();
      swiper?.navigation?.update();
    }
  }, [swiper]);

  return (
    <section className={styles.featured_list}>
      <div className={styles.featured_list__content}>
        <div className={styles.title__wrapper}>
          <h2 className={styles.title__title}>Featured Products</h2>
          <p className={styles.title__text}>Get Them Before They're Gone!</p>
        </div>
        <Swiper
          className={styles.featured__slider}
          modules={[Navigation, Pagination]}
          spaceBetween={40}
          slidesPerView={4}
          navigation={{
            prevEl: prevButton.current,
            nextEl: nextButton.current,
          }}
          pagination={{
            el: "#pagination",
            type: "fraction",
            formatFractionCurrent: function (number) {
              return number;
            },
            formatFractionTotal: function (number) {
              return number;
            },
          }}
          onSwiper={setSwiper}
        >
          {loading
            ? [...Array(4)].map((_, index) => (
                <SwiperSlide key={index}>
                  <SkeletonFeatured />
                </SwiperSlide>
              ))
            : data.map((featured) => (
                <SwiperSlide key={featured._id}>
                  <Featured {...featured} />
                </SwiperSlide>
              ))}
        </Swiper>
        <div className={styles.navigation}>
          <button className={styles.navigation__prev} ref={prevButton}>
            <MdOutlineKeyboardArrowLeft />
          </button>
          <div className={styles.navigation__pagination} id="pagination"></div>
          <button className={styles.navigation__next} ref={nextButton}>
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
