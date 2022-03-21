import cx from "classnames";
import { memo } from "react";
import { Player } from "../Player/Player";
import styles from "./PlayerGroup.module.css";
import { PlayerGroupType } from "./PlayerGroup.types";

export const PlayerGroupComponent = ({ name, players }: PlayerGroupType) => {
  if (!players) return null;
  return (
    <div className={cx(styles.playerGroup)}>
      <div className={cx(styles.groupName)}>{name}</div>
      <div className={cx(styles.players)}>
        {players.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </div>
    </div>
  );
};

export const PlayerGroup = memo(PlayerGroupComponent);
