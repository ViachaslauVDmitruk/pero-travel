import { Button } from "../button";
import prev from "./assets/prev.png";
import next from "./assets/next.png";
import styles from "./tours-page-pagination.module.scss";
type PageProps = {
  toursPerPage: number;
  totalTours: number;
  paginate: (arg: number) => void;
};

export const ToursPagePagination = ({
  toursPerPage,
  totalTours,
  paginate,
}: PageProps) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTours / toursPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className={styles.pagination}>
      {/* <button src={prev} /> */}
      <button className={styles.button}>
        <img src={prev} alt="img" />
      </button>
      <div className={styles.numbers}>
        {pageNumbers.map((item, i) => (
          <li key={i} className={styles.number} onClick={() => paginate(item)}>
            {item}
          </li>
        ))}
      </div>
      <button className={styles.button}>
        <img src={next} alt="img" />
      </button>
      {/* <Button src={next} /> */}
    </ul>
  );
};
