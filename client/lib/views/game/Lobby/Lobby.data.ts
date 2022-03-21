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
        },
        {
          name: "Esmee",
        },
        {
          name: "Dilara",
        },
        {
          name: "Susanne",
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
