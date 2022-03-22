import { LobbyType } from "./Lobby.types";

export const LobbyData: LobbyType = {
  room: {
    id: "roomid123",
    roomCode: 1234,
  },
  groups: [
    {
      id: "groupid123",
      name: "Hogeschool Arnhem en Nijmegen",
    },
  ],
};

export const LobbyDataOneGroup: LobbyType = {
  room: {
    id: "roomid123",
    roomCode: 1234,
  },
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
};

export const LobbyDataTwogroups: LobbyType = {
  room: {
    id: "roomid123",
    roomCode: 1234,
  },
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
};
