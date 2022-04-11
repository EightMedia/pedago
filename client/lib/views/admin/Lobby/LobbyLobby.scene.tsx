import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button, ButtonGroup } from "../../../components/Button";
import { Icon, IconsEnum } from "../../../components/Icon/Icon";
import { Logo } from "../../../components/Logo";
import { Page } from "../../../components/Page";
import { PageSlot } from "../../../components/Page/Page";
import { Panel } from "../../../components/Panel";
import { PanelGroup } from "../../../components/PanelGroup";
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
  const text = useContext(LanguageContext).adminLobby.lobby;

  const handleSettings = () => {
    alert("settings view");
  };

  return (
    <Page background={2}>
      <PageSlot location="headerLeft">
        <PlayerCount players={room?.players} variation="light" />
      </PageSlot>
      <PageSlot location="headerCenter">
        <Logo />
      </PageSlot>
      <PageSlot location="headerRight">
        <ButtonGroup>
          <Button variation="whiteBlocked" onClick={handleSettings}>
            <Icon icon={IconsEnum.Settings} />
            {text.settingsButton}
          </Button>
          <Button variation="whiteBlocked" onClick={handleInfo as () => void}>
            <Icon icon={IconsEnum.Info} />
            {text.rulesButton}
          </Button>
        </ButtonGroup>
      </PageSlot>

      <Stack gap="xs">
        <Panel width="full">
          <header className={styles.header}>
            <div className={styles.roomCode}>{room?.roomCode}</div>
            <p>
              {text.code} <a href={siteUrl}>{readableSiteUrl}</a> {text.andJoin}
            </p>
            <Button onClick={handleStart as () => void}>{text.start}</Button>
          </header>
        </Panel>
        <PanelGroup>
          {groups &&
            groups.map((group) => <PlayerGroup key={group.id} {...group} />)}
        </PanelGroup>
      </Stack>
    </Page>
  );
};
