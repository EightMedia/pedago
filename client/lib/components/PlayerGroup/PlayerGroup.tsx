import { memo } from "react";
import cx from "classnames";
import styles from "./PlayerGroup.module.css";
import { PlayerGroupType } from "./PlayerGroup.types";
import { Player } from "../Player/Player";

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
