import { RoomDto } from "models";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { RoomContext } from "../../../../contexts/RoomContext";
import { SocketContext } from "../../../../contexts/SocketContext";
import { TimerContext } from "../../../../contexts/TimerContext";
import { Page } from "../../../components/Page";
import { PageSlot } from "../../../components/Page/Page";
import { Player } from "../../../components/Player";
import { Timer } from "../../../components/Timer";
import { Title } from "../../../components/Title";
import { getTeamFromSocketId } from "../../../utils/getTeamFromSocketId";
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
  const socket = useContext(SocketContext);
  const room = useContext(RoomContext);
  const players = getTeamFromSocketId(room as RoomDto, socket?.id as string);
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
      <PageSlot location="subheader">
        <div className={styles.players}>
          {players?.length &&
            players.map((player, i) => <Player key={i} name={player.name} />)}
        </div>
      </PageSlot>
      <Title>{text.rounds[round - 1].lead}</Title>
    </Page>
  );
};
