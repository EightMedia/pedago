import { Group, Player } from "../../models";

export type PlayerType = {
  name: Player["name"];
  group?: Group["name"];
  size?: "sm" | "lg";
  active?: boolean;
};
