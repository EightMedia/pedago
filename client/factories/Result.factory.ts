import { Category, Round } from "models";

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
          caring + value;
          break;
        case Category.Personal:
          personal + value;
          break;
        case Category.Contextual:
          contextual + value;
          break;
        case Category.Critical:
          critical + value;
          break;
        case Category.Functional:
          functional + value;
          break;
        case Category.Psychological:
          psychological + value;
          break;
      }
    });
  });
  return [caring, personal, contextual, critical, functional, psychological];
};
