import { RoomDto } from "models";
import { PlayerGroupType } from "../../../components/PlayerGroup/PlayerGroup.types";

export enum LobbyStep {
  Info,
  Lobby,
}

export type LobbyType = {
  groups: PlayerGroupType[];
  room: {
    roomCode: RoomDto["roomCode"];
    players: number;
    id: RoomDto["id"];
  };
  initialStep?: LobbyStep;
  handleStart?: () => void;
  handleInfo?: () => void;
};
