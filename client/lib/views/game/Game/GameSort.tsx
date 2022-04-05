import { Category, Player, PlayerEvent, Round, SocketCallback } from "models";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { RoomContext } from "../../../../contexts/RoomContext";
import { SocketContext } from "../../../../contexts/SocketContext";
import { getPlayerId } from "../../../../factories/shared.factory";
import { Button } from "../../../components/Button";
import { SortList } from "../../../components/SortList";
import { Center } from "../../../layouts/Center";
import styles from "./Game.module.css";
import { GameSortType } from "./Game.types";

export const GameSort = ({ round }: GameSortType) => {
  const data = useContext(LanguageContext);
  const roundData = data.rounds[round - 1];
  const room = useContext(RoomContext);
  const socket = useContext(SocketContext);
  const playerId = getPlayerId(socket?.id as string, room?.players as Player[]);

  const handleSortOrder = (order: Category[]): void => {
    localStorage.setItem("order", order.toString());
  };

  const getSortOrder = (): Category[] => {
    const localOrder = localStorage.getItem("order");
    return localOrder?.split(",").map((o) => parseInt(o, 10)) as number[];
  };

  const handleDoneSorting = (): void => {
    socket?.emit(
      PlayerEvent.StoreRound,
      room?.id,
      playerId,
      {
        number: round,
        order: getSortOrder(),
      } as Round,
      (res: SocketCallback) => {
        console.log(res);
      }
    );
  };

  const finishRoundByAdmin = (): void => {
    socket?.emit(
      PlayerEvent.FinishRoundByAdmin,
      room?.id,
      playerId,
      {
        number: round,
        order: getSortOrder(),
      } as Round,
      (res: SocketCallback) => {
        console.log(res);
      }
    );
  };

  useEffect(() => {
    if (socket) {
      socket.on(PlayerEvent.FinishRoundByAdmin, finishRoundByAdmin);
    }
  }, [socket]);

  return (
    <>
      <Center space="sm">
        <h2 className={styles.lead}>{roundData?.lead}</h2>
      </Center>
      <SortList
        cards={roundData?.cards}
        round={round}
        handleSortOrder={handleSortOrder}
      />
      <Center space="sm">
        <Button onClick={() => handleDoneSorting()}>{data.game.done}</Button>
      </Center>
    </>
  );
};
