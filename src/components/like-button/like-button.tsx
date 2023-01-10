import { useState } from "react";
import favoritesActive from "./assets/favorites-active.png";
import favoritesDisable from "./assets/favorites-disable.png";

import styles from "./like-button.module.scss";

export const LikeButton = () => {
  const [favorites, setFavorites] = useState<boolean>(false);

  const isLike = () => {
    favorites ? setFavorites(false) : setFavorites(true);
  };

  return (
    <div className={styles.like} onClick={() => isLike()}>
      <img src={favorites ? favoritesActive : favoritesDisable} alt="img" />
    </div>
  );
};
