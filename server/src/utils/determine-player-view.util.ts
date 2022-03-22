import { Player, ViewName, ViewState } from "models";

export const determinePlayerView = (
    player: Player
  ): ViewState => {
    if (player.view === ViewName.Game) {
      const currentRound = player.rounds.length;
      switch (currentRound) {
        case 0:
          return {
            name: ViewName.Game,
            data: { round: 1 },
          };
        case 1:
          return {
            name: ViewName.Game,
            data: { round: 2 },
          };
        case 2:
          return {
            name: ViewName.Game,
            data: { round: 3 },
          };
        case 3:
          return {
            name: ViewName.Game,
            data: { round: 4 },
          };
        case 4:
          return {
            name: ViewName.Game,
            data: { round: 5 },
          };
        case 5:
          return {
            name: ViewName.Game,
            data: { round: 6 },
          };
        case 6:
          return {
            name: ViewName.Result,
          };
        default:
          return { name: ViewName.Lobby };
      }
    } else {
      return { name: player.view };
    }
  };
