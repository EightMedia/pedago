import cx from "classnames";
import { memo } from "react";
import { Icon, IconsEnum } from "../Icon/Icon";
import styles from "./PlayerCount.module.css";
import { PlayerCountType } from "./PlayerCount.types";

const PlayerCountComponent = ({
  players,
  variation = "dark",
}: PlayerCountType) => {
  return (
    <div className={cx(styles.box, styles[variation])}>
      <Icon icon={IconsEnum.Person} className={styles.icon} size="sm" />
      <span className={styles.text}>{players}</span>
    </div>
  );
};

export const PlayerCount = memo(PlayerCountComponent);
