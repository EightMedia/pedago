import { PlayerStatus } from "models";
import { useState } from "react";
import { ButtonGroup } from "../../../components/Button";
import { Button } from "../../../components/Button/Button";
import { Icon, IconsEnum } from "../../../components/Icon/Icon";
import { Logo } from "../../../components/Logo";
import { Modal } from "../../../components/Modal";
import { Page } from "../../../components/Page";
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
  timer,
}: GameType) => {
  const [showStopModal, setShowStopModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
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

  return (
    <>
      <Page>
        <div className={styles.header}>
          <PlayerCount variation="light" players={playerCount} />
          <Logo />
          <ButtonGroup>
            <Button
              variation="whiteBlocked"
              onClick={openSettings as () => void}
            >
              <Icon icon={IconsEnum.Settings} />
              Settings
            </Button>
            <Button
              variation="whiteBlocked"
              onClick={() => setShowInfoModal(true)}
            >
              <Icon icon={IconsEnum.Info} />
              Uitleg
            </Button>
          </ButtonGroup>
        </div>

        <div className={styles.round}>
          <Center>
            <p>Categorie: {round.current}</p>
            <Title>
              Ronde {round.current} van {round.total}
            </Title>
            <div className={styles.timerAndStop}>
              {timer && <Timer time={600} />}
              <Button onClick={() => teamsStillPlaying ? setShowStopModal(!showStopModal) : handleStopRound()}>
                Ronde afronden
              </Button>
            </div>
          </Center>
        </div>

        <PanelGroup>
          <TeamsList teams={notStartedTeams} title="Niet begonnen" />
          <TeamsList teams={inProgressTeams} title="Bezig" />
          <TeamsList teams={doneTeams} title="Klaar" />
        </PanelGroup>
      </Page>
      {showStopModal && (
        <Modal handleClose={() => setShowStopModal(false)}>
          <PanelTitle>Weet je het zeker?</PanelTitle>
          <p>Er {teamsStillPlaying === 1 ? "is nog 1 team" : `zijn nog ${teamsStillPlaying} teams`} bezig met het afronden van de ronde.</p>
          <Button onClick={handleStopRound}>
            Ja, start de volgende ronde
          </Button>
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
