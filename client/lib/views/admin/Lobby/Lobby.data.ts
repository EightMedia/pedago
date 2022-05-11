import { LobbyType } from "./Lobby.types";

export const LobbyData: LobbyType = {
  handleStart: () => alert("start"),
  room: {
    roomCode: 1234,
    players: 0,
    id: "1234",
  },
  groups: [
    {
      id: "groupid123",
      name: "Hogeschool Arnhem en Nijmegen",
    },
  ],
};

export const LobbyDataOneGroup: LobbyType = {
  handleStart: () => alert("start"),
  room: {
    roomCode: 1234,
    players: 4,
    id: "1234",
  },
  groups: [
    {
      id: "1",
      name: "Hogeschool Arnhem en Nijmegen",
      players: [
        {
          name: "Stijn",
          id: "ID",
        },
        {
          name: "Esmee",
          id: "ID",
        },
        {
          name: "Dilara",
          id: "ID",
        },
        {
          name: "Vincent",
          id: "ID",
        },
      ],
    },
  ],
};

export const LobbyDataTwogroups: LobbyType = {
  handleStart: () => alert("start"),
  room: {
    roomCode: 1234,
    players: 8,
    id: "1234",
  },
  groups: [
    {
      id: "1",
      name: "Hogeschool Arnhem en Nijmegen",
      players: [
        {
          name: "Stijn",
          id: "ID",
        },
        {
          name: "Esmee",
          id: "ID",
        },
        {
          name: "Dilara",
          id: "ID",
        },
        {
          name: "Vincent",
          id: "ID",
        },
      ],
    },
    {
      id: "2",
      name: "Hogeschool Rotterdam",
      players: [
        {
          name: "Dilara",
          id: "ID",
        },
        {
          name: "Esmee",
          id: "ID",
        },
        {
          name: "Vincent",
          id: "ID",
        },
        {
          name: "Stijn",
          id: "ID",
        },
      ],
    },
  ],
};
