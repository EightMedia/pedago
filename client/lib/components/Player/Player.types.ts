import { Group, Player } from "models";

export type PlayerType = {
  name: Player["name"];
  id: Player["id"];
  group?: Group["name"];
  size?: "sm" | "lg";
  active?: boolean;
  kickPlayer?: (playerId: string) => void;
};
