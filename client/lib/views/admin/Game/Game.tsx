import { memo } from "react";
import { Page } from "../../../components/Page";
import { GameType } from "./Game.types";

export const GameComponent = ({}: GameType) => {
  return (
    <Page>
      <h2>Game</h2>
    </Page>
  );
};

export const Game = memo(GameComponent);
