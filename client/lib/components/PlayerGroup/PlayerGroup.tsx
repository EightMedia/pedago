import cx from "classnames";
import { memo, useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { Player } from "../Player/Player";
import { PlayerCount } from "../PlayerCount";
import styles from "./PlayerGroup.module.css";
import { PlayerGroupType } from "./PlayerGroup.types";

export const PlayerGroupComponent = ({ name, players }: PlayerGroupType) => {
  const text = useContext(LanguageContext).adminLobby.playerGroup;
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
        <p>{text.waiting}</p>
      )}
    </div>
  );
};

export const PlayerGroup = memo(PlayerGroupComponent);
