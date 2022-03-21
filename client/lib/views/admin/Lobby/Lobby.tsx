import { AdminEvent, Group, Player, SocketCallback } from "models";
import { memo } from "react";
import { Page } from "../../../components/Page";
import { PlayerGroup } from "../../../components/PlayerGroup";
import { Stack } from "../../../layouts/Stack";
import styles from "./Lobby.module.css";
import { LobbyType } from "./Lobby.types";

const LobbyComponent = ({ socket, playerList, room }: LobbyType) => {
  const siteUrl = process.env.SITE_URL || "https://example.com";
  const readableSiteUrl = process.env.SITE_READABLE_URL || "example.com";

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

  const handleStart = () => {
    socket.emit(AdminEvent.StartGame, room.id, (r: SocketCallback) => {
      console.log(r);
    });
  };

  return (
    <Page>
      <header className={styles.header}>
        <div className="roomCode">{room.roomCode}</div>
        <p>
          Voer de code in op <a href={siteUrl}>{readableSiteUrl}</a> en doe mee
        </p>
        <button onClick={handleStart}>Start</button>
      </header>
      <Stack gap="xs">
        {room.groups &&
          room.groups.map((group) => (
            <div key={group.id}>
              <PlayerGroup {...getPlayersForGroup(group)} />
            </div>
          ))}
      </Stack>
    </Page>
  );
};

export const Lobby = memo(LobbyComponent);
