import { memo } from "react";
import cx from "classnames";
import styles from "./Player.module.css";
import { PlayerType } from "./Player.types";
import Avatar from "boring-avatars";

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
