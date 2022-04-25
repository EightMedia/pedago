import { PlayerStatus } from "models";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { RoomContext } from "../../../../contexts/RoomContext";
import { TimerContext, TIMER_SECONDS } from "../../../../contexts/TimerContext";
import { ButtonGroup } from "../../../components/Button";
import { Button } from "../../../components/Button/Button";
import { Icon, IconsEnum } from "../../../components/Icon/Icon";
import { Logo } from "../../../components/Logo";
import { Modal } from "../../../components/Modal";
import { Page } from "../../../components/Page";
import { PageSlot } from "../../../components/Page/Page";
import { PanelTitle } from "../../../components/Panel";
import { PanelGroup } from "../../../components/PanelGroup";
import { PlayerCount } from "../../../components/PlayerCount";
import { TeamsList } from "../../../components/TeamsList";
import { Timer } from "../../../components/Timer";
import { Title } from "../../../components/Title";
import { Center } from "../../../layouts/Center";
import { Stack } from "../../../layouts/Stack";
import styles from "./Game.module.css";
import { GameType } from "./Game.types";
import { GameInfo } from "./GameOnboarding";

export const GameRound = ({
  openSettings,
  stopRound,
  round,
  teams,
}: GameType) => {
  const [showStopModal, setShowStopModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const text = useContext(LanguageContext);
  const timerContext = useContext(TimerContext);
  const room = useContext(RoomContext);
  const gameText = text.adminGame.round;
  const router = useRouter();

  const playerCount = teams.reduce((acc, team) => acc + team.players.length, 0);
  // teams with status not started:
  const notStartedTeams = teams.filter(
    (team) => team.status === PlayerStatus.NotStarted
  );
  // teams with status inProgress or Discuss
  const inProgressTeams = teams.filter(
    (team) =>
      team.status === PlayerStatus.InProgress ||
      team.status === PlayerStatus.Discuss
  );
  // teams with status Done
  const doneTeams = teams.filter((team) => team.status === PlayerStatus.Done);
  const teamsStillPlaying = notStartedTeams?.length + inProgressTeams?.length;

  const handleStopRound = () => {
    setShowStopModal(false);
    (stopRound as () => void)();
  };

  useEffect(() => {
    if (timerContext === TIMER_SECONDS) {
      setTimeout(() => {
        router.reload();
      }, 500);
    }
  }, [router, timerContext]);

  return (
    <>
      <Page background={5}>
        <PageSlot location="headerLeft">
          <PlayerCount variation="light" players={playerCount} />
        </PageSlot>
        <PageSlot location="headerCenter">
          <Logo />
        </PageSlot>
        <PageSlot location="headerRight">
          <ButtonGroup>
            <Button
              variation="whiteBlocked"
              onClick={openSettings as () => void}
            >
              <Icon icon={IconsEnum.Settings} />
              <span className="lg-only">{gameText.settingsButton}</span>
            </Button>
            <Button
              variation="whiteBlocked"
              onClick={() => setShowInfoModal(true)}
            >
              <Icon icon={IconsEnum.Info} />
              <span className="lg-only">{gameText.rulesButton}</span>
            </Button>
          </ButtonGroup>
        </PageSlot>

        <PageSlot location="body">
          <div className={styles.round}>
            <Center>
              <p>
                {gameText.category}: {round.current}
              </p>
              <Title>
                {text.game.round} {round.current} {text.game.of} {round.total}
              </Title>
              <div className={styles.timerAndStop}>
              {(room?.options?.timer as boolean) && <Timer time={timerContext as number} />}
                <Button
                  onClick={() =>
                    teamsStillPlaying
                      ? setShowStopModal(!showStopModal)
                      : handleStopRound()
                  }
                >
                  {gameText.finish}
                </Button>
              </div>
            </Center>
          </div>

          <PanelGroup>
            <TeamsList
              teams={notStartedTeams}
              title={gameText.notStarted}
              emptyText={gameText.allStarted}
            />
            <TeamsList
              teams={inProgressTeams}
              title={gameText.playing}
              emptyText={gameText.notPlaying}
            />
            <TeamsList
              teams={doneTeams}
              title={gameText.done}
              emptyText={gameText.notDone}
            />
          </PanelGroup>
        </PageSlot>
      </Page>
      {showStopModal && (
        <Modal handleClose={() => setShowStopModal(false)}>
          <PanelTitle>{gameText.areYouSure}</PanelTitle>
          <p>
            {gameText.there}{" "}
            {teamsStillPlaying === 1
              ? gameText.isOneTeam
              : `${gameText.are} ${teamsStillPlaying} teams`}{" "}
            {gameText.stillPlaying}
          </p>
          <Button onClick={handleStopRound}>{gameText.yesSure}</Button>
        </Modal>
      )}
      {showInfoModal && (
        <Modal handleClose={() => setShowInfoModal(false)}>
          <Stack>
            <GameInfo title="Info" />
          </Stack>
        </Modal>
      )}
    </>
  );
};
