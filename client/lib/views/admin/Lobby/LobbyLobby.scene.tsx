import { removeCookies } from "cookies-next";
import { AdminEvent } from "models";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactMarkdown from "react-markdown";
import { Socket } from "socket.io-client";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { SocketContext } from "../../../../contexts/SocketContext";
import { Button, ButtonGroup } from "../../../components/Button";
import { Icon, IconsEnum } from "../../../components/Icon/Icon";
import { Logo } from "../../../components/Logo";
import { Modal } from "../../../components/Modal";
import { Page } from "../../../components/Page";
import { PageSlot } from "../../../components/Page/Page";
import { Panel, PanelTitle } from "../../../components/Panel";
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
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [lock, setLock] = useState(IconsEnum.LockOpen);
  const siteUrl = process.env.SITE_URL || "https://example.com";
  const readableSiteUrl = process.env.SITE_READABLE_URL || "example.com";
  const { text } = useContext(LanguageContext);
  const socket = useContext(SocketContext);
  const router = useRouter();

  const handleLock = () => {
    setLock(
      lock === IconsEnum.LockOpen ? IconsEnum.LockClosed : IconsEnum.LockOpen
    );
    console.log("locking not implemented yet");
  };

  const handleDestroyGame = () => {
    (socket as Socket).emit(AdminEvent.Reset, room?.id);
    removeCookies("room");
    router.push("/");
  };

  return (
    <>
      <Page background={2}>
        <PageSlot location="headerLeft">
          <PlayerCount players={room?.players} variation="light" />
        </PageSlot>

        <PageSlot location="headerCenter">
          <Logo />
        </PageSlot>

        <PageSlot location="headerRight">
          <ButtonGroup>
            <Button
              variation="whiteBlocked"
              onClick={() => setShowSettingsModal(true)}
            >
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
              <ReactMarkdown className={styles.codeText}>
                {text.adminLobby.lobby.code}
              </ReactMarkdown>
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
      {showSettingsModal && (
        <Modal handleClose={() => setShowSettingsModal(false)}>
          <Panel width="md">
            <PanelTitle>{text.adminLobby.lobby.settingsButton}</PanelTitle>
            <Button
              stretch
              variation="danger"
              warning={text.adminGame.round.destroyWarning}
              onClick={handleDestroyGame}
            >
              {text.adminGame.round.destroyGame}
            </Button>
          </Panel>
        </Modal>
      )}
    </>
  );
};
