import { Group, Player } from "models";
import { memo } from "react";
import { Intro } from "../../../components/Intro";
import { Page } from "../../../components/Page";
import { PlayerGroup } from "../../../components/PlayerGroup";
import { Title } from "../../../components/Title";
import { Stack } from "../../../layouts/Stack";
import styles from "./Lobby.module.css";
import { LobbyType } from "./Lobby.types";

const LobbyComponent = ({
  round,
  roundMax,
  groups,
  playerList,
  playerId,
}: LobbyType) => {
  const getPlayersForGroup = (
    group: Group
  ): Group & {
    players: Array<{ name: Player["name"] }>;
  } => {
    return {
      ...(group as Group),
      players: playerList
        .filter((p) => p.group.id === group.id)
        .map((p) => {
          return { name: p.name };
        }),
    };
  };

  const getPlayerName = (id: string | null): string => {
    const players: Player[] = playerList.filter((p) => p.id === id);
    if (players.length === 1) {
      return players[0].name;
    } else {
      return "";
    }
  };

  return (
    <Page>
      <div className={styles.header}>
        Ronde {round} van {roundMax}
      </div>
      <Title>
        Hoi {getPlayerName(playerId)}
        <br />
        Het spel begint zo
      </Title>
      <Intro>We wachten even tot iedereen er is en dan kunnen we starten</Intro>
      <Stack gap="xs">
        {groups &&
          groups.map((group) => (
            <div key={group.id}>
              <PlayerGroup {...getPlayersForGroup(group)} />
            </div>
          ))}
      </Stack>
    </Page>
  );
};

export const Lobby = memo(LobbyComponent);
