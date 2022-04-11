import Avatar from "boring-avatars";
import cx from "classnames";
import { memo } from "react";
import styles from "./Player.module.css";
import { PlayerType } from "./Player.types";

export const avatarColors = [
  "#ffb700",
  "#f82a42",
  "#00ab58",
  "#a81af4",
  "#196cff",
];

const PlayerComponent = ({ name, group, size = "sm", active }: PlayerType) => {
  const avatarSize = size === "sm" ? 32 : 64;
  return (
    <div
      className={cx(
        styles.player,
        active ? styles.active : null,
        size === "sm" ? styles.sm : styles.lg
      )}
    >
      <Avatar
        square={true}
        name={name}
        variant="beam"
        size={avatarSize}
        colors={avatarColors}
      />
      <div className={styles.nameWrapper}>
        <span className={styles.name}>{name}</span>
        {size === "lg" && group && (
          <span className={styles.group}>{group}</span>
        )}
      </div>
    </div>
  );
};

export const Player = memo(PlayerComponent);
