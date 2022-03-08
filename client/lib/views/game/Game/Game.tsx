import { ViewName } from "models";
import React from "react";
import { SortList } from "../../../components/SortList";
import { GameType } from "./Game.types";

const gameCountdown = ({ counter }: { counter: number }) => {
  return (
    <>
      <h2>Counting {counter - 7}</h2>
    </>
  );
};

const gameLead = ({ counter }: { counter: number }) => {
  return (
    <>
      <h2>Lorem ipsum lead tekst...</h2>
      <small>{counter}</small>
    </>
  );
};

export const Game = ({ handleEmit, mockCounter = 0 }: GameType) => {
  const [counter, setCounter] = React.useState(10);

  React.useEffect(() => {
    if (mockCounter) {
      setCounter(mockCounter);
    } else {
      counter > 0 &&
        setInterval(() => {
          setCounter((time) => time - 1);
        }, 1000);
    }
  }, []);

  if (counter > 7) return gameCountdown({ counter });
  if (counter > 0) return gameLead({ counter });
  return (
    <>
      <h2>Sorting!</h2>
      {/* <SortList /> */}
      <button onClick={() => handleEmit(ViewName.Wizard)}>I'm done!</button>
    </>
  );
};
