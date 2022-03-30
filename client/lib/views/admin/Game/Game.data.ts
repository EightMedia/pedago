import { PlayerStatus } from "models";
import { GameType } from "./Game.types";

export const GameData: GameType = {
  openSettings: () => alert("open settings"),
  openInfo: () => alert("open info"),
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
      status: PlayerStatus.InProgress,
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
      status: PlayerStatus.Done,
      players: ["Selin", "Jannick", "Jalal"],
    },
  ],
};
