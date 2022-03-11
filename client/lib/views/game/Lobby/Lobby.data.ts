import { LobbyType } from "./Lobby.types";

export const LobbyDataOneGroup: LobbyType = {
  round: 1,
  roundMax: 6,
  groups: [
    {
      id: 1,
      name: "Group 1",
      players: [
        {
          name: "Stijn",
        },
        {
          name: "Bo",
        },
        {
          name: "Vincent",
        },
        {
          name: "Annabelle",
        },
        {
          name: "Bastiaan",
        },
      ],
    },
  ],
};

export const LobbyDataTwoGroups: LobbyType = {
  round: 1,
  roundMax: 6,
  groups: [
    {
      id: 1,
      name: "Hogeschool Arnhem en Nijmegen",
      players: [
        {
          name: "Stijn",
        },
        {
          name: "Bo",
        },
        {
          name: "Vincent",
        },
        {
          name: "Annabelle",
        },
        {
          name: "Bastiaan",
        },
      ],
    },
    {
      id: 2,
      name: "Veterstrikschool Alkmaar Zuid",
      players: [
        {
          name: "Stijn",
        },
        {
          name: "Bo",
        },
        {
          name: "Vincent",
        },
        {
          name: "Annabelle",
        },
        {
          name: "Bastiaan",
        },
      ],
    },
  ],
};
