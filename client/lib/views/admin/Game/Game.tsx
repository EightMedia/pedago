import { PlayerStatus } from "models";
import { memo, useState } from "react";
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

const GameComponent = ({
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

  return (
    <>
      <Page>
        <div className={styles.header}>
          <PlayerCount variation="light" players={playerCount} />
          <Logo />
          <ButtonGroup>
            <Button variation="whiteBlocked" onClick={openSettings}>
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
              <Button onClick={() => setShowStopModal(!showStopModal)}>
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
          <p>Er zijn nog 12 spelers bezig met het afronden van de ronde.</p>
          <Button onClick={stopRound}>Ja, start de volgende ronde</Button>
        </Modal>
      )}
      {showInfoModal && (
        <Modal handleClose={() => setShowInfoModal(false)}>
          <PanelTitle>Uitleg</PanelTitle>
          <Stack>
            <div className="set">
              <h4>Meedoen</h4>
              <p>Alle spelers moeten eerst naar pedago.game gaan.</p>
            </div>
            <div>
              <h4>Unieke code</h4>
              <p>
                Spelers kunnen meedoen met het spel door de code in te vullen
                die straks verschijnt.
              </p>
            </div>
            <div>
              <h4>Scherm delen</h4>
              <p>
                Het is handig om je scherm te delen, zodat spelers ten alle
                tijden zien of ze al meedoen, of wat de code is.
              </p>
            </div>
            <div>
              <h4>Spel starten</h4>
              <p>Wanneer je het spel start kun je niet meer terug.</p>
            </div>
            <div>
              <h4>‘Locken’</h4>
              <p>
                Er is een slotje naast de startknop die je kunt indrukken om te
                voorkomen dat er nog meer mensen mee gaan doen.
              </p>
            </div>
            <div>
              <h4>Spelers verwijderen</h4>
              <p>
                Spelers kunnen worden gekickt wanneer ze niet welkom zijn, door
                er op te klikken of tappen.
              </p>
            </div>
            <div>
              <h4>Instellingen aanpassen</h4>
              <p>
                De timer kan worden uitgeschakeld en de groepsnamen kunnen
                worden aangepast.
              </p>
            </div>
          </Stack>
        </Modal>
      )}
    </>
  );
};

export const Game = memo(GameComponent);
