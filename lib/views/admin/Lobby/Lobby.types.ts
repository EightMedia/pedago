import { PlayerGroupType } from "../../../components/PlayerGroup/PlayerGroup.types";
import { RoomDto } from "./../lib/models";

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
