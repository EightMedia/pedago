import { ViewName } from "models";
import { memo } from "react";
import { Page } from "../../../components/Page";
import { GameType } from "./Game.types";

const GameComponent = ({handleView, teams, stopRound}: GameType) => {
  return (
    <Page>
      <h2>Game</h2>
      <button onClick={stopRound}></button>
      <button onClick={() => console.log(teams)}>Log teams</button>
      <button onClick={() => handleView({name: ViewName.Lobby})}>Back</button>
    </Page>
  );
};

export const Game = memo(GameComponent);
