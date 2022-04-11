import { Category, Player, PlayerEvent, Round, SocketCallback } from "models";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { RoomContext } from "../../../../contexts/RoomContext";
import { SocketContext } from "../../../../contexts/SocketContext";
import { getPlayerId } from "../../../../factories/shared.factory";
import { Button } from "../../../components/Button";
import { Icon } from "../../../components/Icon";
import { IconsEnum } from "../../../components/Icon/Icon";
import { Modal } from "../../../components/Modal";
import { SortList } from "../../../components/SortList";
import { Timer } from "../../../components/Timer";
import { Center } from "../../../layouts/Center";
import { Stack } from "../../../layouts/Stack";
import styles from "./Game.module.css";
import { GameSortType } from "./Game.types";

export const GameSort = ({ round }: GameSortType) => {
  const text = useContext(LanguageContext);
  const roundText = text.rounds[round - 1];
  const room = useContext(RoomContext);
  const socket = useContext(SocketContext);
  const playerId = getPlayerId(socket?.id as string, room?.players as Player[]);
  const [showInfoModal, setShowInfoModal] = useState(false);

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
      <Timer time={600} />
      <Center space="sm">
        <h2 className={styles.lead}>{roundText?.lead}</h2>
      </Center>

      <Button variation="whiteBlocked" onClick={() => setShowInfoModal(true)}>
        <Icon icon={IconsEnum.Info} />
        Info
      </Button>
      <SortList
        cards={roundText?.cards}
        round={round}
        handleSortOrder={handleSortOrder}
      />
      <Center space="sm">
        <Button onClick={() => handleDoneSorting()}>{text.game.done}</Button>
      </Center>

      {showInfoModal && (
        <Modal handleClose={() => setShowInfoModal(false)}>
          <Stack>info</Stack>
        </Modal>
      )}
    </>
  );
};
