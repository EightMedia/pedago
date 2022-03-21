import { ViewName } from "models";
import { PlayerStatus } from "models/lib/models/player-status.enum";
import { memo } from "react";
import { Page } from "../../../components/Page";
import { GameType } from "./Game.types";

const GameComponent = ({ handleView, teams, stopRound }: GameType) => {
  return (
    <Page>
      <h2>Game</h2>
      <button onClick={stopRound}></button>
      <button onClick={() => console.log(teams)}>Log teams</button>
      <button onClick={() => handleView({ name: ViewName.Lobby })}>Back</button>
      <div>
        Not started
        {teams &&
          teams
            .filter((t) => t.every((p) => p.status === PlayerStatus.NotStarted))
            ?.map((team, index) => (
              <div key={index}>
                <div>{index + 1}</div>
                {team && team.map((p, i) => <div key={i}>{p.name}</div>)}
              </div>
            ))}
      </div>
      <div>
        In progress
        {teams &&
          teams
            .filter((t) => t.every((p) => p.status === PlayerStatus.InProgress))
            ?.map((team, index) => (
              <div key={index}>
                <div>{index + 1}</div>
                {team && team.map((p, i) => <div key={i}>{p.name}</div>)}
              </div>
            ))}
      </div>
      <div>
        Done
        {teams &&
          teams
            .filter((t) => t.every((p) => p.status === PlayerStatus.Done))
            ?.map((team, index) => (
              <div key={index}>
                <div>{index + 1}</div>
                {team && team.map((p, i) => <div key={i}>{p.name}</div>)}
              </div>
            ))}
      </div>
    </Page>
  );
};

export const Game = memo(GameComponent);
