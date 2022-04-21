import cx from "classnames";
import { memo, useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { Center } from "../../layouts/Center";
import { Button } from "../Button";
import { GlassPanel } from "../GlassPanel";
import { Player } from "../Player/Player";
import { PlayerCount } from "../PlayerCount";
import styles from "./PlayerGroup.module.css";
import { PlayerGroupType } from "./PlayerGroup.types";

export const PlayerGroupComponent = ({
  name,
  players,
  counter = true,
  handleGroupChange,
}: PlayerGroupType) => {
  const text = useContext(LanguageContext);
  return (
    <GlassPanel>
      <Center>
        {counter && <PlayerCount players={players?.length as number} />}
        <div className={cx(styles.groupName)}>{name}</div>
        {players?.length ? (
          <div className={cx(styles.players)}>
            {players.map((player, index) => (
              <Player key={index} {...player} />
            ))}
          </div>
        ) : (
          <p>{text.waiting.waiting}</p>
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
  );
};

export const PlayerGroup = memo(PlayerGroupComponent);
