import React from "react";
import cx from "classnames";
import styles from "./Game.module.css";
import { GameType } from "./Game.types";
import { Page } from "../../../components/Page";

export const GameComponent = ({}: GameType) => {
  return (
    <Page>
      <h2>Game</h2>
    </Page>
  );
};

export const Game = React.memo(GameComponent);
