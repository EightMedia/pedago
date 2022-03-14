import Avatar from "boring-avatars";
import cx from "classnames";
import { memo } from "react";
import styles from "./Player.module.css";
import { PlayerType } from "./Player.types";

export const PlayerComponent = ({ name, group, size }: PlayerType) => {
  return (
    <div className={cx(styles.player)}>
      <Avatar square={true} name={name} variant="beam" size={32} />
      <span className={styles.name}>{name}</span>
      {size === "lg" && group && <span className={styles.group}>{group}</span>}
    </div>
  );
};

export const Player = memo(PlayerComponent);
