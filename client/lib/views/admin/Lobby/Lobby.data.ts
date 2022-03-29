import { LobbyType } from "./Lobby.types";

export const LobbyData: LobbyType = {
  handleStart: () => alert("start"),
  room: {
    roomCode: 1234,
    id: "1234",
    groups: [
      {
        id: "groupid123",
        name: "Hogeschool Arnhem en Nijmegen",
      },
    ],
  },
};

export const LobbyDataOneGroup: LobbyType = {
  handleStart: () => alert("start"),
  room: {
    roomCode: 1234,
    id: "1234",
    groups: [
      {
        id: "1",
        name: "Hogeschool Arnhem en Nijmegen",
        players: [
          {
            name: "Stijn",
          },
          {
            name: "Esmee",
          },
          {
            name: "Dilara",
          },
          {
            name: "Vincent",
          },
        ],
      },
    ],
  },
};

export const LobbyDataTwogroups: LobbyType = {
  handleStart: () => alert("start"),
  room: {
    roomCode: 1234,
    id: "1234",
    groups: [
      {
        id: "1",
        name: "Hogeschool Arnhem en Nijmegen",
        players: [
          {
            name: "Stijn",
          },
          {
            name: "Esmee",
          },
          {
            name: "Dilara",
          },
          {
            name: "Vincent",
          },
        ],
      },
      {
        id: "2",
        name: "Hogeschool Rotterdam",
        players: [
          {
            name: "Dilara",
          },
          {
            name: "Esmee",
          },
          {
            name: "Vincent",
          },
          {
            name: "Stijn",
          },
        ],
      },
    ],
  },
};
