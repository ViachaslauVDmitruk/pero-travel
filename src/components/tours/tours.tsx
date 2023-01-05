import { useState } from "react";
import { CardDescription } from "../card-description";
import styles from "./tours.module.scss";

export const Tours = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [toursPerPage] = useState<number>(4);

  const lastTourIndex = currentPage * toursPerPage;
  const firstToutIndex = lastTourIndex - toursPerPage;

  return (
    <div className={styles.tours}>
      <div className={styles.title}>Наши туры</div>
      <CardDescription />
    </div>
  );
};
