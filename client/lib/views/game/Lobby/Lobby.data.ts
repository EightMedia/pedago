import { LobbyType } from "./Lobby.types";

export const LobbyDataOneGroup: LobbyType = {
  round: 1,
  roundMax: 6,
  playerName: "Stijn",
  groups: [
    {
      id: "1",
      name: "Hogeschool Arnhem en Nijmegen",
      players: [
        {
          name: "Stijn",
          active: true,
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
          name: "Susanne",
          id: "ID",
        },
      ],
    },
  ],
};

export const LobbyDataTwoGroups: LobbyType = {
  round: 1,
  roundMax: 6,
  playerName: "Stijn",
  groups: [
    {
      id: "1",
      name: "Hogeschool Arnhem en Nijmegen",
      players: [
        {
          name: "Stijn",
          active: true,
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
