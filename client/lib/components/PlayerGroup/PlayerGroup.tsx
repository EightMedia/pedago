import cx from "classnames";
import { memo } from "react";
import { Player } from "../Player/Player";
import { PlayerCount } from "../PlayerCount";
import styles from "./PlayerGroup.module.css";
import { PlayerGroupType } from "./PlayerGroup.types";

export const PlayerGroupComponent = ({ name, players }: PlayerGroupType) => {
  // if (!players) return null;
  return (
    <div className={cx(styles.playerGroup)}>
      <PlayerCount players={players?.length || 0} />
      <div className={cx(styles.groupName)}>{name}</div>
      {players ? (
        <div className={cx(styles.players)}>
          {players.map((player, index) => (
            <Player key={index} {...player} />
          ))}
        </div>
      ) : (
        <p>We wachten nog op spelers</p>
      )}
    </div>
  );
};

export const PlayerGroup = memo(PlayerGroupComponent);
