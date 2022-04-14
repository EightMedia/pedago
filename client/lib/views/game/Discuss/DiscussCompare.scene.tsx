import {
  ComponentPropsWithoutRef,
  forwardRef,
  Ref,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { Icon, IconsEnum } from "../../../components/Icon/Icon";
import { Modal } from "../../../components/Modal";
import { Page } from "../../../components/Page";
import { PageSlot } from "../../../components/Page/Page";
import { Player } from "../../../components/Player";
import { Shape } from "../../../components/Shape";
import { Text } from "../../../components/Text";
import { TextTitle } from "../../../components/TextTitle";
import { Timer } from "../../../components/Timer";
import { Stack } from "../../../layouts/Stack";
import { GameInfo } from "../../admin/Game/GameOnboarding";
import styles from "./Discuss.module.css";
import { DiscussCompareProps } from "./Discuss.types";

function useEqualRows() {
  const [maxHeight, setMaxHeight] = useState(0);

  const elementsRef = useRef<HTMLElement[]>([]);

  function getRefs(element: HTMLElement | null) {
    if (element && !elementsRef.current.includes(element)) {
      elementsRef.current.push(element);
    }
  }

  function getMaxHeight() {
    setMaxHeight(0);

    const newMaxHeight = Math.max(
      ...elementsRef.current.map(({ offsetHeight }) => offsetHeight)
    );

    setMaxHeight(newMaxHeight);
  }

  useEffect(() => {
    getMaxHeight();

    const observer = new ResizeObserver(getMaxHeight);
    const [element] = elementsRef.current;
    observer.observe(element);
    return () => observer.unobserve(element);
  }, []);

  return {
    ref: getRefs,
    style: {
      height: maxHeight || undefined,
    },
  };
}

interface CompareCardProps extends ComponentPropsWithoutRef<"div"> {
  card: number;
  round: number;
}

const CompareCard = forwardRef(
  (
    { card, round = 0, ...rest }: CompareCardProps,
    ref?: Ref<HTMLDivElement>
  ) => {
    const text = useContext(LanguageContext);

    return (
      <div {...rest} ref={ref} className={styles.card}>
        <Shape category={Number(card)} />
        <Text>{text.rounds[round]?.cards[card]?.title}</Text>
      </div>
    );
  }
);

export const DiscussCompare = ({
  handleReady,
  teamMembers,
  round = 0,
}: DiscussCompareProps) => {
  const text = useContext(LanguageContext);

  const [showInfoModal, setShowInfoModal] = useState(false);

  const rowProps = teamMembers?.[0]?.cards.map(useEqualRows) || [];

  return (
    <>
      <Page>
        <PageSlot location="headerLeft">
          <Timer time={600} />
        </PageSlot>
        <PageSlot location="headerCenter">
          <TextTitle>{text.discuss.compare.discussDiff}</TextTitle>
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
          <div className={styles.compare}>
            {teamMembers?.map(({ name, cards }) => (
              <Stack key={name}>
                <Player name={name} />
                {cards?.map((card, index) => (
                  <CompareCard
                    key={card}
                    {...rowProps[index]}
                    card={card}
                    round={round}
                  />
                ))}
              </Stack>
            ))}
          </div>
          <Button onClick={handleReady}>{text.discuss.compare.ready}</Button>
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
