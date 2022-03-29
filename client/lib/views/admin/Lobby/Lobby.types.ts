import { PlayerGroupType } from "../../../components/PlayerGroup/PlayerGroup.types";

export enum LobbyStep {
  Info,
  Lobby,
}

export type LobbyType = {
  groups: PlayerGroupType[];
  initialStep?: LobbyStep;
  handleStart?: () => void;
  handleInfo?: () => void;
};
