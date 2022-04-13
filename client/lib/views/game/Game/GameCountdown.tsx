import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { RoomContext } from "../../../../contexts/RoomContext";
import { TimerContext } from "../../../../contexts/TimerContext";
import { Page } from "../../../components/Page";
import { PageSlot } from "../../../components/Page/Page";
import { Player } from "../../../components/Player";
import { Timer } from "../../../components/Timer";
import styles from "./Game.module.css";

export const GameCountdown = ({
  time = 3,
  callback,
  round,
  roundMax,
}: {
  time?: number;
  callback?: () => void;
  round: number;
  roundMax: number;
}) => {
  const [counter, setCounter] = useState(time);
  const text = useContext(LanguageContext);
  const timer = useContext(TimerContext);
  const room = useContext(RoomContext);

  useEffect(() => {
    if (!callback) return;
    const interval = setInterval(() => {
      setCounter(counter - 1);
      if (counter === 0) {
        clearInterval(interval);
        callback();
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [counter, setCounter, callback]);

  return (
    <Page background={6} valign="center">
      <PageSlot location="headerLeft">
        {(room?.options?.timer as boolean) && <Timer time={timer} />}
      </PageSlot>
      <PageSlot location="headerCenter">
        {text.game.round} {round} {text.game.of} {roundMax}
      </PageSlot>
      <PageSlot location="body">
        <div className={styles.players}>
          <Player name="Demo player 1" />
          <Player name="Demo player 1" />
        </div>
        <span className={styles.countdownNumber}>{counter}</span>
      </PageSlot>
    </Page>
  );
};
