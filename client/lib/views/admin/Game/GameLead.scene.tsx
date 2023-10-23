import { Button, ButtonGroup } from "@components/Button";
import { Icon } from "@components/Icon";
import { IconsEnum } from "@components/Icon/Icon";
import { Logo } from "@components/Logo";
import { Modal } from "@components/Modal";
import { Page } from "@components/Page";
import { PageSlot } from "@components/Page/Page";
import { PlayerCount } from "@components/PlayerCount";
import { Title } from "@components/Title";
import { Stack } from "@layouts/Stack";
import { PlayerStatus } from "models";
import { useContext, useState } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { TimedCallback } from "../../../utils/timedCallback.util";
import { GameInfo } from "./GameOnboarding";

export type GameLeadProps = {
  openSettings?: () => void;
  round: number;
  roundMax: number;
  teams: {
    name: string;
    status: PlayerStatus;
    players: string[];
  }[];
  callback?: () => void;
};

export const GameLead = ({
  openSettings,
  round,
  roundMax,
  teams,
  callback,
}: GameLeadProps) => {
  const { text } = useContext(LanguageContext);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const playerCount = teams.reduce((acc, team) => acc + team.players.length, 0);

  if (callback) {
    TimedCallback(2, callback);
  }
  return (
    <>
      <Page background={6} valign="center">
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
              <span className="lg-only">{text.adminGame.round.settingsButton}</span>
            </Button>
            <Button
              variation="whiteBlocked"
              onClick={() => setShowInfoModal(true)}
            >
              <Icon icon={IconsEnum.Info} />
              <span className="lg-only">{text.adminGame.round.rulesButton}</span>
            </Button>
          </ButtonGroup>
        </PageSlot>
        <Title>
          {text.adminGame.lead.continuing} {round} {text.adminGame.lead.of} {roundMax}
        </Title>
      </Page>
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
