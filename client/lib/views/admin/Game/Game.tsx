import { AdminEvent, SocketCallback, ViewName } from "models";
import { PlayerStatus } from "models/lib/models/player-status.enum";
import { memo, useContext } from "react";
import { RoomContext } from "../../../../contexts/RoomContext";
import { SocketContext } from "../../../../contexts/SocketContext";
import { Page } from "../../../components/Page";
import { GameType } from "./Game.types";

const GameComponent = ({ handleView, teams }: GameType) => {
  const socket = useContext(SocketContext);
  const room = useContext(RoomContext);

  const stopRound = () => {
    socket?.emit(
      AdminEvent.FinishRound,
      room?.id,
      room?.round,
      (res: SocketCallback) => {
        console.log(res);
      }
    );
  };

  return (
    <Page>
      <h2>Game</h2>
      <button onClick={stopRound}>Stopround</button>
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
            .filter((t) =>
              t.every(
                (p) =>
                  p.status === PlayerStatus.InProgress ||
                  p.status === PlayerStatus.Discuss
              )
            )
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
            .filter((t) => t.some((p) => p.status === PlayerStatus.Done))
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
