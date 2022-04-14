import cx from "classnames";
import { memo, useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { Center } from "../../layouts/Center";
import { GlassPanel } from "../GlassPanel";
import { Player } from "../Player/Player";
import { PlayerCount } from "../PlayerCount";
import styles from "./PlayerGroup.module.css";
import { PlayerGroupType } from "./PlayerGroup.types";

export const PlayerGroupComponent = ({ name, players }: PlayerGroupType) => {
  const text = useContext(LanguageContext).adminLobby.playerGroup;
  return (
    <div className={styles.playerGroup}>
      <GlassPanel>
        <Center>
          {players?.length ? (
            <>
              <PlayerCount players={players?.length as number} />
              <div className={cx(styles.groupName)}>{name}</div>
              <div className={cx(styles.players)}>
                {players.map((player, index) => (
                  <Player key={index} {...player} />
                ))}
              </div>
            </>
          ) : (
            <p className={styles.waiting}>{text.waiting}</p>
          )}
        </Center>
      </GlassPanel>
    </div>
  );
};

export const PlayerGroup = memo(PlayerGroupComponent);
