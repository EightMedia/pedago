import { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactMarkdown from "react-markdown";
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
  const { text } = useContext(LanguageContext);
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
            <span className={"lg-only"}>
              {text.adminLobby.lobby.settingsButton}
            </span>
          </Button>
          <Button variation="whiteBlocked" onClick={handleInfo as () => void}>
            <Icon icon={IconsEnum.Info} size="md" />
            <span className={"lg-only"}>
              {text.adminLobby.lobby.rulesButton}
            </span>
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
            <ReactMarkdown className={styles.codeText}>{text.adminLobby.lobby.code}</ReactMarkdown>
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
                {text.adminLobby.lobby.start}
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
