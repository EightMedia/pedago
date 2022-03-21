import { memo } from "react";
import { Intro } from "../../../components/Intro";
import { Page } from "../../../components/Page";
import { PlayerGroup } from "../../../components/PlayerGroup";
import { Title } from "../../../components/Title";
import { Stack } from "../../../layouts/Stack";
import styles from "./Lobby.module.css";
import { LobbyType } from "./Lobby.types";

const LobbyComponent = ({ round, roundMax, groups, playerName }: LobbyType) => {
  return (
    <Page>
      <div className={styles.header}>
        Ronde {round} van {roundMax}
      </div>
      <Title>
        Hoi {playerName}
        <br />
        Het spel begint zo
      </Title>
      <Intro>We wachten even tot iedereen er is en dan kunnen we starten</Intro>
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
