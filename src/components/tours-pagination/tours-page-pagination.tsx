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
      <Button src={prev} />
      {pageNumbers.map((item, i) => (
        <li key={i} onClick={() => paginate(item)}>
          {item}
        </li>
      ))}
      <Button src={next} />
    </ul>
  );
};
