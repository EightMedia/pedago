import { RoomDto } from "models";
import { PlayerGroupType } from "../../../components/PlayerGroup/PlayerGroup.types";

export enum LobbyStep {
  Info,
  Lobby,
}

export type LobbyType = {
  room: {
    roomCode: RoomDto["roomCode"];
    id: RoomDto["id"];
    groups: PlayerGroupType[];
  };
  initialStep?: LobbyStep;
  handleStart: () => void;
  handleInfo: () => void;
};
