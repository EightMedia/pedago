import { Button } from "../../../components/Button";
import { Icon, IconsEnum } from "../../../components/Icon/Icon";
import { Page } from "../../../components/Page";
import { Panel } from "../../../components/Panel";
import { PlayerCount } from "../../../components/PlayerCount";
import { PlayerGroup } from "../../../components/PlayerGroup";
import { Stack } from "../../../layouts/Stack";
import styles from "./Lobby.module.css";
import { LobbyType } from "./Lobby.types";

export const LobbyLobby = ({
  room,
  groups,
  handleStart,
  handleInfo,
}: LobbyType) => {
  const siteUrl = process.env.SITE_URL || "https://example.com";
  const readableSiteUrl = process.env.SITE_READABLE_URL || "example.com";

  const handleSettings = () => {
    alert("settings view");
  };

  return (
    <Page>
      <div className={styles.header}>
        <PlayerCount players={room?.players} variation="light" />
        <span className="logo">Logo</span>
        <div className={styles.buttonGroup}>
          <Button onClick={handleSettings}>
            <Icon icon={IconsEnum.Settings} />
            Instellingen
          </Button>
          <Button onClick={handleInfo as () => void}>
            <Icon icon={IconsEnum.Info} />
            Uitleg
          </Button>
        </div>
      </div>
      <Stack gap="xs">
        <Panel>
          <header className={styles.header}>
            <div className={styles.roomCode}>{room?.roomCode}</div>
            <p>
              Voer de code in op <a href={siteUrl}>{readableSiteUrl}</a> en doe
              mee
            </p>
            <Button onClick={handleStart as () => void}>Start</Button>
          </header>
        </Panel>
        {groups &&
          groups.map((group) => <PlayerGroup key={group.id} {...group} />)}
      </Stack>
    </Page>
  );
};
