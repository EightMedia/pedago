import { Category, Player, Round } from "models";

export const getResultsForRounds = (rounds: Round[]): number[] => {
    let [
      caring = 0,
      personal = 0,
      contextual = 0,
      critical = 0,
      functional = 0,
      psychological = 0,
    ]: number[] = [];
  
    rounds.forEach((round) => {
      round.order.forEach((cat: Category, index: number) => {
        const value = index + 1;
        switch (cat) {
          case Category.Caring:
            caring = caring + value;
            break;
          case Category.Personal:
            personal = personal+ value;
            break;
          case Category.Contextual:
            contextual = contextual + value;
            break;
          case Category.Critical:
            critical = critical + value;
            break;
          case Category.Functional:
            functional = functional + value;
            break;
          case Category.Psychological:
            psychological = psychological + value;
            break;
          default:
            null;
        }
      });
    });
    return [caring, personal, contextual, critical, functional, psychological];
  };
  
  export const getResultsForAllPlayers = (players: Player[]) => {
      return players
          .map(p => getResultsForRounds(p.rounds))
          .reduce((previousValue: number[], currentValue: number[], currentIndex: number, array: number[][]): number[] => {
          return [
              previousValue[0] + currentValue[0],
              previousValue[1] + currentValue[1],
              previousValue[2] + currentValue[2],
              previousValue[3] + currentValue[3],
              previousValue[4] + currentValue[4],
              previousValue[5] + currentValue[5],
          ]
      }, [0,0,0,0,0,0])
  };
