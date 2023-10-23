import { Page } from "@components/Page";
import { PageSlot } from "@components/Page/Page";
import { Player } from "@components/Player";
import { Timer } from "@components/Timer";
import { Title } from "@components/Title";
import { LanguageContext } from "@contexts/LanguageContext";
import { TimerContext } from "@contexts/TimerContext";
import { Player as PlayerModel, RoomDto } from "models";
import { useContext, useEffect, useState } from "react";
import styles from "./Game.module.css";

export const GameLead = ({
  time = 3,
  callback,
  round,
  roundMax = 6,
  players,
  teamName,
  room
}: {
  time?: number;
  callback?: () => void;
  round: number;
  roundMax?: number;
  teamName: string;
  players: PlayerModel[];
  room: RoomDto;
}) => {
  const [counter, setCounter] = useState(time);
  const { text } = useContext(LanguageContext);
  const timer = useContext(TimerContext);

  useEffect(() => {
    if (!callback) return;
    const interval = setInterval(() => {
      setCounter(counter - 1);
      if (counter === 0) {
        clearInterval(interval);
        callback && callback();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [counter, setCounter, callback]);
  return (
    <Page valign="center" background={6}>
      <PageSlot location="headerLeft">
        {(room?.options?.timer as boolean) && <Timer time={timer} />}
      </PageSlot>
      <PageSlot location="headerCenter">
        {text.game.round} {round} {text.game.of} {roundMax}
      </PageSlot>
      <PageSlot className={styles.playersList} location="subheader">
        <div className={styles.players}>
          {players?.length &&
            players.map((player, i) => <Player key={i} name={player.name} />)}
        </div>
        <div>
          {text.playerMatch.youAre}
          &nbsp;
          <span style={{ fontWeight: 700 }}>Team {teamName}</span>
        </div>
      </PageSlot>
      <Title>{text.rounds[round - 1].lead}</Title>
    </Page>
  );
};
