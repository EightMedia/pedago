import { PlayerStatus } from "models";
import { GameType } from "./Game.types";

export const GameData: GameType = {
  openSettings: () => alert("open settings"),
  stopRound: () => alert("stop round"),
  timer: true,
  round: {
    current: 1,
    total: 6,
  },
  teams: [
    {
      name: "1",
      status: PlayerStatus.InProgress,
      players: ["Sjoerd", "Karin"],
    },
    {
      name: "2",
      status: PlayerStatus.InProgress,
      players: ["Elif", "Esmee"],
    },
    {
      name: "3",
      status: PlayerStatus.InProgress,
      players: ["Jannick", "Jeroen", "Jalal"],
    },
    {
      name: "4",
      status: PlayerStatus.Done,
      players: ["Hendrik", "Khalid"],
    },
    {
      name: "5",
      status: PlayerStatus.InProgress,
      players: ["Jeroen", "Jannick", "Jalal"],
    },
    {
      name: "6",
      status: PlayerStatus.InProgress,
      players: ["Maartje", "Ilona"],
    },
    {
      name: "7",
      status: PlayerStatus.InProgress,
      players: ["Selin", "Jalal"],
    },
  ],
};
