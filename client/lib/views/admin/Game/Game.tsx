import React from "react";
import cx from "classnames";
import styles from "./Game.module.css";
import { GameType } from "./Game.types";

export const GameComponent = ({}: GameType) => {
  return (
    <div className={cx("Game", styles.Game)}>
      <h2>Game</h2>
    </div>
  );
};

export const Game = React.memo(GameComponent);
