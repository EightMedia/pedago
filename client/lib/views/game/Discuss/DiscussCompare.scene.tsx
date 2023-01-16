import cx from "classnames";
import {
  ComponentPropsWithoutRef,
  forwardRef,
  Ref,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { RoomContext } from "../../../../contexts/RoomContext";
import { TimerContext } from "../../../../contexts/TimerContext";
import { Button } from "../../../components/Button";
import { Icon, IconsEnum } from "../../../components/Icon/Icon";
import { Modal } from "../../../components/Modal";
import { Page } from "../../../components/Page";
import { PageSlot } from "../../../components/Page/Page";
import { Player } from "../../../components/Player";
import { Shape } from "../../../components/Shape";
import { Text } from "../../../components/Text";
import { Timer } from "../../../components/Timer";
import { Center } from "../../../layouts/Center";
import { Stack } from "../../../layouts/Stack";
import { WizardInfo } from "../Wizard/WizardInfo";
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

const CompareCard = forwardRef(function CompareCard(
  { card, round, ...rest }: CompareCardProps,
  ref?: Ref<HTMLDivElement>
) {
  const { text } = useContext(LanguageContext);

  return (
    <div {...rest} ref={ref} className={styles.card}>
      <Shape category={Number(card)} />
      <Text size="md">{text.rounds[round]?.cards[card]?.title}</Text>
    </div>
  );
});

export const DiscussCompare = ({
  handleReady,
  teamMembers,
  round,
}: DiscussCompareProps) => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const timer = useContext(TimerContext);
  const room = useContext(RoomContext);
  const { text } = useContext(LanguageContext);
  const rowProps = teamMembers?.[0]?.cards?.map(useEqualRows) || [];

  return (
    <>
      <Page>
        <PageSlot location="headerLeft">
          {(room?.options?.timer as boolean) && <Timer time={timer} />}
        </PageSlot>
        <PageSlot location="headerCenter">
          <Center>{text.discuss.compare.discussDiff}</Center>
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
          <div
            className={cx(
              styles.compare,
              styles["compareCols" + (teamMembers?.length || 2)]
            )}
          >
            {teamMembers?.map(({ name, cards }) => (
              <Stack key={name}>
                <Player name={name} />
                {cards?.map((card, index) => (
                  <CompareCard
                    key={card}
                    {...rowProps[index]}
                    card={card}
                    round={round - 1}
                  />
                ))}
              </Stack>
            ))}
          </div>
          <Center>
            <Button onClick={handleReady}>{text.discuss.compare.ready}</Button>
          </Center>
        </PageSlot>
      </Page>
      {showInfoModal && (
        <Modal handleClose={() => setShowInfoModal(false)}>
          <WizardInfo onClick={() => setShowInfoModal(false)} />
        </Modal>
      )}
    </>
  );
};
