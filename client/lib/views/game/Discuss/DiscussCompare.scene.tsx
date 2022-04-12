import { useContext, useState } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { Icon, IconsEnum } from "../../../components/Icon/Icon";
import { Modal } from "../../../components/Modal";
import { Page } from "../../../components/Page";
import { PageSlot } from "../../../components/Page/Page";
import { Player } from "../../../components/Player";
import { Shape } from "../../../components/Shape";
import { Text } from "../../../components/Text";
import { Timer } from "../../../components/Timer";
import { Stack } from "../../../layouts/Stack";
import { GameInfo } from "../../admin/Game/GameOnboarding";
import styles from "./Discuss.module.css";
import { DiscussCompareProps } from "./Discuss.types";

const CompareCard = ({ id, round = 0 }: { id: number; round: number }) => {
  const text = useContext(LanguageContext);
  return (
    <div className={styles.card}>
      <Shape category={Number(id - 1)} className={styles.icon} />
      <div className={styles.title}>
        {text.rounds[round].cards[id - 1].title}
      </div>
    </div>
  );
};

const CompareCardsList = ({
  player,
  cards = [],
  round = 0,
}: {
  player: string;
  cards: number[];
  round: number;
}) => (
  <Stack>
    <Player name={player} />
    {cards.map((card) => (
      <CompareCard key={card} id={card} round={round} />
    ))}
  </Stack>
);

export const DiscussCompare = ({
  handleReady,
  teamMembers,
  round = 0,
}: DiscussCompareProps) => {
  const text = useContext(LanguageContext);
  const [showInfoModal, setShowInfoModal] = useState(false);
  return (
    <>
      <Page>
        <PageSlot location="headerLeft">
          <Timer time={600} />
        </PageSlot>
        <PageSlot location="headerCenter">
          <Text align="center">{text.discuss.compare.discussDiff}</Text>
        </PageSlot>
        <PageSlot location="headerRight">
          <Button
            variation="whiteBlocked"
            onClick={() => setShowInfoModal(true)}
          >
            <Icon icon={IconsEnum.Info} />
            <span className={styles.infoBtnText}>
              {text.discuss.compare.info}
            </span>
          </Button>
        </PageSlot>
        <PageSlot location="body">
          <Stack>
            <div className={styles.compare}>
              {teamMembers &&
                teamMembers.map((member) => (
                  <CompareCardsList
                    key={member.name}
                    player={member.name}
                    cards={member.cards}
                    round={round}
                  />
                ))}
            </div>
            <Button onClick={handleReady}>{text.discuss.compare.ready}</Button>
          </Stack>
        </PageSlot>
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
