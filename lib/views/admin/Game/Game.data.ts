import { PlayerStatus } from "../../../models";
import { GameType } from "./Game.types";

export const teamsStart = [
  {
    name: "1",
    status: PlayerStatus.NotStarted,
    players: ["Sjoerd", "Karin"],
  },
  {
    name: "2",
    status: PlayerStatus.NotStarted,
    players: ["Elif", "Esmee"],
  },
  {
    name: "3",
    status: PlayerStatus.NotStarted,
    players: ["Jannick", "Jeroen", "Jalal"],
  },
  {
    name: "4",
    status: PlayerStatus.NotStarted,
    players: ["Hendrik", "Khalid"],
  },
  {
    name: "5",
    status: PlayerStatus.NotStarted,
    players: ["Jeroen", "Jannick", "Jalal"],
  },
  {
    name: "6",
    status: PlayerStatus.NotStarted,
    players: ["Maartje", "Ilona"],
  },
  {
    name: "7",
    status: PlayerStatus.NotStarted,
    players: ["Selin", "Jalal"],
  },
];

export const teamsBusy = [
  {
    name: "1",
    status: PlayerStatus.Done,
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
];

export const teamsReady = [
  {
    name: "1",
    status: PlayerStatus.Done,
    players: ["Sjoerd", "Karin"],
  },
  {
    name: "2",
    status: PlayerStatus.Done,
    players: ["Elif", "Esmee"],
  },
  {
    name: "3",
    status: PlayerStatus.Done,
    players: ["Jannick", "Jeroen", "Jalal"],
  },
  {
    name: "4",
    status: PlayerStatus.Done,
    players: ["Hendrik", "Khalid"],
  },
  {
    name: "5",
    status: PlayerStatus.Done,
    players: ["Jeroen", "Jannick", "Jalal"],
  },
  {
    name: "6",
    status: PlayerStatus.Done,
    players: ["Maartje", "Ilona"],
  },
  {
    name: "7",
    status: PlayerStatus.Done,
    players: ["Selin", "Jalal"],
  },
];

export const GameData: GameType = {
  openSettings: () => alert("open settings"),
  stopRound: () => alert("stop round"),
  timer: true,
  round: {
    current: 1,
    total: 6,
  },
  teams: [],
};
