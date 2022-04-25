import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Page } from "../../../components/Page";
import { PageSlot } from "../../../components/Page/Page";
import { Player } from "../../../components/Player";
import { Timer } from "../../../components/Timer";
import { Title } from "../../../components/Title";
import styles from "./Game.module.css";

export const GameLead = ({
  time = 3,
  callback,
  round,
  roundMax = 6,
}: {
  time?: number;
  callback?: () => void;
  round: number;
  roundMax?: number;
}) => {
  const [counter, setCounter] = useState(time);
  const { text } = useContext(LanguageContext);

  useEffect(() => {
    if (!callback) return;
    const interval = setInterval(() => {
      setCounter(counter - 1);
      if (counter === 0) {
        clearInterval(interval);
        callback && callback();
      }
    }, 1000);
    return;
  }, [counter, setCounter, callback]);
  return (
    <Page valign="center" background={6}>
      <PageSlot location="headerLeft">
        <Timer time={600} />
      </PageSlot>
      <PageSlot location="headerCenter">
        {text.game.round} {round} {text.game.of} {roundMax}
      </PageSlot>
      <PageSlot location="subheader">
        <div className={styles.players}>
          <Player name="Stijn" />
          <Player name="Vincent" />
        </div>
      </PageSlot>
      <Title>{text.rounds[round - 1].lead}</Title>
    </Page>
  );
};
