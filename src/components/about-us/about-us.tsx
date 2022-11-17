import image from "./assets/about-us.jpg";
import styles from "./about-us.module.scss";

export const AboutUs = () => {
  return (
    <div className={styles.about}>
      <div className={styles.image}>
        <img src={image} alt="img" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <div className={styles.title}>О нас</div>
          <div className={styles.contentText}>
            PeroTravel - Первый онлайн-сервис по бронированию экскурсий без
            очередей и операторов. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
