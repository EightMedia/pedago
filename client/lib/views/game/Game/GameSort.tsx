import { Category } from "models";
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
        <Button
          onClick={() =>
            handleDoneSorting([
              Category.Caring,
              Category.Contextual,
              Category.Critical,
              Category.Functional,
              Category.Personal,
              Category.Psychological,
            ])
          }
        >
          {data.game.done}
        </Button>
      </Center>
    </>
  );
};
