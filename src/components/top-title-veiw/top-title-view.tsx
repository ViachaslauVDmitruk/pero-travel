import styles from "./top-title-view.module.scss";

type TitleViewProps = {
  title: string;
};

export const TopTitleView = ({ title }: TitleViewProps) => {
  return (
    <div className={styles.top}>
      <div className={styles.title}>{title}</div>
      <div className={styles.viewAll}>Смотреть все</div>
    </div>
  );
};
