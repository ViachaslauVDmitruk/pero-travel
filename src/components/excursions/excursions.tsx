import img01 from "./assets/icons/1.svg";
import img02 from "./assets/icons/2.svg";
import img03 from "./assets/icons/3.svg";
import img04 from "./assets/icons/4.svg";

import styles from "./excursions.module.scss";

export const Excursions = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.title}>Виды экскурсий</div>
        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.image}>
              <img src={img01} alt="img" />
            </div>
            <div className={styles.content}>
              <div className={styles.itemTitle}>Автобусный тур</div>
              <div className={styles.itemText}>
                Один из самых насыщенных впечатлениями, доступных по цене и
                популярных видов отдыха. Во время одной поездки можно посмотреть
                достопримечательности сразу нескольких городов, причем обойдется
                это едва ли не в разы дешевле классического экскурсионного тура
                с ночевками в отелях.
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.image}>
              <img src={img02} alt="img" />
            </div>
            <div className={styles.content}>
              <div className={styles.itemTitle}>Джиппинг</div>
              <div className={styles.itemText}>
                Это путешествие на автомобилях высокой проходимости с
                преодолением естественных препятствий, это экстремальный вид
                спорта и отдыха, представляющий собой прохождение туристического
                маршрута по бездорожью на автомобилях.
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.image}>
              <img src={img03} alt="img" />
            </div>
            <div className={styles.content}>
              <div className={styles.itemTitle}>Яхтинг</div>
              <div className={styles.itemText}>
                Это то же, что круиз на лайнере или прогулка на пароме, только
                на яхте больше свободы, размеры судна в разы меньше, нет
                назойливой команды, можно самостоятельно почувствовать себя
                капитаном, постоять за штурвалом. Именно здесь вы почувствуете
                величайшие просторы Черногор моря.
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.image}>
              <img src={img04} alt="img" />
            </div>
            <div className={styles.content}>
              <div className={styles.itemTitle}>Каньонинг</div>
              <div className={styles.itemText}>
                Это экстремально-спортивный вид отдыха, который заключается в
                преодолении каньонов (обводненных или нет) при помощи
                альпинистского и иного снаряжения, а иногда и вброд, но без
                лодок или иных плавсредств.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
