import iconClock from "./assets/icons/clock.svg";
import iconCost from "./assets/icons/cost.svg";

import styles from "./slider-excursions.module.scss";
import { TopTitleView } from "../top-title-veiw";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider-excursions.scss";
import { excursions } from "../../constans/slider-excursions";
import { Button } from "../button";

export const SliderExcursions = () => {
  return (
    <div className={styles.sliderExcursions}>
      <div className={styles.wrapper}>
        <TopTitleView title="Популярные эскурсии" />
      </div>
      <div className={styles.boxSwiper}>
        <Swiper
          spaceBetween={30}
          slidesPerView={3.3}
          // pagination={
          // {
          // el: "swiper-progressbar",
          // type: "bullets",
          // }
          // }
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          modules={[Pagination, Navigation]}
        >
          {excursions.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.swiperItem}>
                <img src={item.src} alt="img" />
                <div className={styles.info}>
                  <div className={styles.tour}>{item.typeTour}</div>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.costDuration}>
                    <div className={styles.duration}>
                      <div className={styles.image}>
                        <img src={iconClock} alt="img" />
                      </div>
                      <div className={styles.text}>{item.duration}</div>
                    </div>
                    <div className={styles.cost}>
                      <div className={styles.image}>
                        <img src={iconCost} alt="img" />
                      </div>
                      <div className={styles.text}>{item.cost} ₽</div>
                    </div>
                  </div>
                  <div className={styles.discription}>{item.discription}</div>
                  <Button buttonText="Подробнее" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.swiperNavigation}>
          <div className={styles.arrows}>
            <div className="button-prev"></div>
            <div className="button-next"></div>
          </div>
          {/* <div className="swiper-progressbar">
            <span className="swiper-progressbar-fill"></span>
          </div> */}
          {/* <div className="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal">
            <span className="swiper-pagination-progressbar-fill"></span>
          </div> */}
        </div>
      </div>
    </div>
  );
};
