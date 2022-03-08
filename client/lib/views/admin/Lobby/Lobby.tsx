import React from "react";
import cx from "classnames";
import styles from "./Lobby.module.css";
import { LobbyType } from "./Lobby.types";

export const LobbyComponent = ({}: LobbyType) => {
  return (
    <div className={cx("Lobby", styles.Lobby)}>
      <h2>Lobby</h2>
    </div>
  );
};

export const Lobby = React.memo(LobbyComponent);
