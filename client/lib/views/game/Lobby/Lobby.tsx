import React from "react";
import cx from "classnames";
import styles from "./Lobby.module.css";
import { LobbyType } from "./Lobby.types";
import { Page } from "../../../components/Page";
import { groupEnd } from "console";
import { PlayerGroup } from "../../../components/PlayerGroup";
import { Title } from "../../../components/Title";
import { Intro } from "../../../components/Intro";
import { Stack } from "../../../layouts/Stack";

export const LobbyComponent = ({ round, roundMax, groups }: LobbyType) => {
  return (
    <Page>
      <div className={styles.header}>
        Ronde {round} van {roundMax}
      </div>
      <Title>
        Hoi NAAM!
        <br />
        Het spel begint zo
      </Title>
      <Intro>We wachten even tot iedereen er is en dan kunnen we starten</Intro>
      <Stack gap="xs">
        {groups.map((group) => (
          <div key={group.id}>
            <PlayerGroup {...group} />
          </div>
        ))}
      </Stack>
    </Page>
  );
};

export const Lobby = React.memo(LobbyComponent);
