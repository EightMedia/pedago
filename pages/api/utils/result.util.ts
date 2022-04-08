import { Category, Group, Player, RoomDto, Round } from "../../../lib/models";

const getResultsForRounds = (rounds: Round[]): number[] => {
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
          personal = personal + value;
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

const getResultsForAllPlayers = (players: Player[]): number[] => {
  const addedResults = players
    .map((p) => getResultsForRounds(p.rounds))
    .reduce(
      (previousValue: number[], currentValue: number[]): number[] => {
        return [
          previousValue[0] + currentValue[0],
          previousValue[1] + currentValue[1],
          previousValue[2] + currentValue[2],
          previousValue[3] + currentValue[3],
          previousValue[4] + currentValue[4],
          previousValue[5] + currentValue[5],
        ];
      },
      [0, 0, 0, 0, 0, 0]
    );
  const sortedAddedResults = sort(addedResults);
  let reducedNumbers: number[] = [];

  addedResults.forEach((r) => {
    const index = sortedAddedResults.findIndex((rs) => r === rs);
    switch (index) {
      case 0:
        reducedNumbers.push(36);
        break;
      case 1:
        reducedNumbers.push(30);
        break;
      case 2:
        reducedNumbers.push(24);
        break;
      case 3:
        reducedNumbers.push(18);
        break;
      case 4:
        reducedNumbers.push(12);
        break;
      case 5:
        reducedNumbers.push(6);
        break;
      default:
        reducedNumbers = [0, 0, 0, 0, 0, 0];
        break;
    }
  });
  return reducedNumbers;
};

const sort = (arr: number[]) => arr.map((a) => a).sort((a, b) => b - a);

const getPlayersFromGroup = (room: RoomDto, group: Group): number[] => {
  const players = room.players.filter((p: Player) => p.group?.id === group.id);
  return getResultsForAllPlayers(players);
};

export const getResultData = (
  room: RoomDto,
  playerId: string
): {
  me: number[];
  total: number[];
  groups?: {
    id: string;
    name: string;
    data: number[];
  }[];
} => {
  const myRounds = room.players.find((p: Player) => p.id === playerId)?.rounds;
  const me = getResultsForRounds(myRounds as Round[]);
  const total = getResultsForAllPlayers(room.players);
  const groups = room.groups?.map((group: Group) => {
    return {
      ...group,
      data: getPlayersFromGroup(room, group),
    };
  });
  return {
    me,
    total,
    groups,
  };
};
