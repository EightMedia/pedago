import cx from "classnames";
import { memo } from "react";
import { Player } from "../Player/Player";
import styles from "./PlayerGroup.module.css";
import { PlayerGroupType } from "./PlayerGroup.types";

export const PlayerGroupComponent = ({
  id,
  name,
  players,
}: PlayerGroupType) => {
  return (
    <div className={cx("PlayerGroup", styles.PlayerGroup)}>
      {players.map((player) => (
        <Player {...player} />
      ))}
    </div>
  );
};

export const PlayerGroup = memo(PlayerGroupComponent);
