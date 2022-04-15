import { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
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
import { Text } from "../../../components/Text";
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
  const text = useContext(LanguageContext).adminLobby.lobby;
  const [lock, setLock] = useState(IconsEnum.LockOpen);

  const handleSettings = () => {
    alert("settings view");
  };

  const handleLock = () => {
    setLock(
      lock === IconsEnum.LockOpen ? IconsEnum.LockClosed : IconsEnum.LockOpen
    );
    console.log("locking not implemented yet");
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
            <Icon icon={IconsEnum.Settings} size="md" />
            <span className={"lg-only"}>{text.settingsButton}</span>
          </Button>
          <Button variation="whiteBlocked" onClick={handleInfo as () => void}>
            <Icon icon={IconsEnum.Info} size="md" />
            <span className={"lg-only"}>{text.rulesButton}</span>
          </Button>
        </ButtonGroup>
      </PageSlot>

      <Stack gap="lg">
        <Panel width="full">
          <header className={styles.header}>
            <div className={styles.roomCode}>
              <CopyToClipboard text={siteUrl + "/game/" + room?.roomCode}>
                <button className={styles.codeButton}>
                  {room?.roomCode} <Icon icon={IconsEnum.Copy} />
                </button>
              </CopyToClipboard>
            </div>
            <Text size="lg" align="center">
              {text.code}
            </Text>
            <ButtonGroup>
              <Button
                onClick={handleLock as () => void}
                variation="whiteBlockedOutline"
              >
                <Icon icon={lock} size="xl" />
                <span className="sr-only">Lock</span>
              </Button>
              <Button
                onClick={handleStart as () => void}
                className={styles.startButton}
              >
                {text.start}
              </Button>
            </ButtonGroup>
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
