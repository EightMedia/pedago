import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { SortList } from "../../../components/SortList";
import { Center } from "../../../layouts/Center";
import styles from "./Game.module.css";
import { GameSortType } from "./Game.types";

export const GameSort = ({ round, handleDoneSorting }: GameSortType) => {
  const data = useContext(LanguageContext);
  const roundData = data.rounds[round];

  return (
    <>
      <Center space="sm">
        <h2 className={styles.lead}>{roundData.lead}</h2>
      </Center>
      <SortList cards={roundData.cards} />
      <Center space="sm">
        <Button onClick={() => handleDoneSorting([4, 2, 3, 1, 0, 5])}>
          {data.game.done}
        </Button>
      </Center>
    </>
  );
};
