import { Button } from "@components/Button";
import { Icon } from "@components/Icon";
import { IconsEnum } from "@components/Icon/Icon";
import { Modal } from "@components/Modal";
import { Page } from "@components/Page";
import { PageSlot } from "@components/Page/Page";
import { SortList } from "@components/SortList";
import { Timer } from "@components/Timer";
import { LanguageContext } from "@contexts/LanguageContext";
import { TimerContext } from "@contexts/TimerContext";
import { Center } from "@layouts/Center";
import { Category, PlayerEvent, Round, SocketCallback } from "models";
import { useContext, useEffect, useState } from "react";
import { WizardInfo } from "../Wizard/WizardInfo";
import styles from "./Game.module.css";
import { GameSortType } from "./Game.types";

export const GameSort = ({
  round,
  playerId,
  socket,
  room,
  teamName,
}: GameSortType) => {
  const { text, lang } = useContext(LanguageContext);
  const roundText = text.rounds[round - 1];
  const timer = useContext(TimerContext);
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

  const belongText = {
    NL: "Je hoort bij",
    EN: "You are part of",
  };

  useEffect(() => {
    if (socket) {
      socket.on(PlayerEvent.FinishRoundByAdmin, finishRoundByAdmin);
    }
    return () => {
      socket.off(PlayerEvent.FinishRoundByAdmin);
    };
  }, [socket]);

  return (
    <div className={styles.gameSort}>
      <div className={styles.belongBar}>
        {belongText[lang]}
        &nbsp;
        <span style={{ fontWeight: 700 }}>Team {teamName}</span>
      </div>
      <Page background={6}>
        <PageSlot location="headerLeft">
          {(room?.options?.timer as boolean) && <Timer time={timer} />}
        </PageSlot>
        <PageSlot location="headerCenter">
          <h2 className={styles.lead}>{roundText?.lead}</h2>
        </PageSlot>
        <PageSlot location="headerRight">
          <Button
            variation="whiteBlocked"
            onClick={() => setShowInfoModal(true)}
          >
            <Icon icon={IconsEnum.Info} />
            <span className="lg-only">Info</span>
          </Button>
        </PageSlot>
        <PageSlot location="body">
          <SortList
            cards={roundText?.cards}
            round={round}
            handleSortOrder={handleSortOrder}
          />
          <Center space="sm">
            <Button onClick={() => handleDoneSorting()}>
              {text.game.done}
            </Button>
          </Center>
        </PageSlot>
      </Page>
      {showInfoModal && (
        <Modal handleClose={() => setShowInfoModal(false)}>
          <WizardInfo onClick={() => setShowInfoModal(false)} />
        </Modal>
      )}
    </div>
  );
};
