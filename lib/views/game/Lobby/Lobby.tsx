import { memo, useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Intro } from "../../../components/Intro";
import { Page } from "../../../components/Page";
import { PlayerGroup } from "../../../components/PlayerGroup";
import { Title } from "../../../components/Title";
import { Stack } from "../../../layouts/Stack";
import styles from "./Lobby.module.css";
import { LobbyType } from "./Lobby.types";

const LobbyComponent = ({ round, roundMax, groups, playerName }: LobbyType) => {
  const text = useContext(LanguageContext);
  
  return (
    <Page>
      <div className={styles.header}>
        {text.game.round} {round} {text.game.of} {roundMax}
      </div>
      <Title>
        {text.gameLobby.hi} {playerName}!
        <br />
        {text.gameLobby.willStart} 
      </Title>
      <Intro> {text.gameLobby.waiting}</Intro>
      <Stack gap="xs">
        {groups &&
          groups.map((group) => (
            <div key={group.id}>
              <PlayerGroup {...group} />
            </div>
          ))}
      </Stack>
    </Page>
  );
};

export const Lobby = memo(LobbyComponent);
