import { AdminEvent, SocketCallback } from "models";
import { memo } from "react";
import { Button } from "../../../components/Button";
import { Page } from "../../../components/Page";
import { Panel } from "../../../components/Panel";
import { PlayerGroup } from "../../../components/PlayerGroup";
import { Stack } from "../../../layouts/Stack";
import styles from "./Lobby.module.css";
import { LobbyType } from "./Lobby.types";

const LobbyComponent = ({ socket, room, groups }: LobbyType) => {
  const siteUrl = process.env.SITE_URL || "https://example.com";
  const readableSiteUrl = process.env.SITE_READABLE_URL || "example.com";

  const handleStart = () => {
    socket?.emit(AdminEvent.StartGame, room.id, (r: SocketCallback) => {
      console.log(r);
    });
  };

  return (
    <Page>
      <Stack gap="xs">
        <Panel>
          <header className={styles.header}>
            <div className={styles.roomCode}>{room.roomCode}</div>
            <p>
              Voer de code in op <a href={siteUrl}>{readableSiteUrl}</a> en doe
              mee
            </p>
            <Button onClick={handleStart}>Start</Button>
          </header>
        </Panel>
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
