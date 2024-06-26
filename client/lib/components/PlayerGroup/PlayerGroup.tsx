import { LanguageContext } from "@contexts/LanguageContext";
import { Center } from "@layouts/Center";
import cx from "classnames";
import { memo, useContext } from "react";
import { Button } from "../Button";
import { GlassPanel } from "../GlassPanel";
import { Player } from "../Player/Player";
import { PlayerCount } from "../PlayerCount";
import styles from "./PlayerGroup.module.css";
import { PlayerGroupType } from "./PlayerGroup.types";

export const PlayerGroupComponent = ({
  name,
  players,
  kickPlayer,
  handleGroupChange,
}: PlayerGroupType) => {
  const { text } = useContext(LanguageContext);
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
                  <Player key={index} {...player} kickPlayer={kickPlayer} />
                ))}
              </div>
            </>
          ) : (
            <p className={styles.waiting}>{text.adminLobby.playerGroup.waiting}</p>
          )}
          {handleGroupChange && (
            <Button
              variation="line"
              className={styles.changeButton}
              onClick={handleGroupChange}
            >
              {text.gameLobby.changeToThisGroup}
            </Button>
          )}
        </Center>
      </GlassPanel>
    </div>
  );
};

export const PlayerGroup = memo(PlayerGroupComponent);
