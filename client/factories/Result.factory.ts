import { Category, Group, Player, RoomDto, Round } from "models";
import { ResultGroup, ResultSet } from "../lib/components/Result/Result.types";

const getResultsForRounds = (rounds: Round[]): ResultSet => {
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

const getResultsForAllPlayers = (players: Player[]): ResultSet => {
  const addedResults = players
    .map((p) => getResultsForRounds(p.rounds))
    .reduce(
      (previousValue: ResultSet, currentValue: number[]): ResultSet => {
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
  return addedResults.map((r) => r / players.length) as ResultSet;
};

const getPlayersFromGroup = (room: RoomDto, group: Group): ResultSet => {
  const players = room.players.filter((p: Player) => p.group?.id === group.id);
  return getResultsForAllPlayers(players);
};

export const getResultData = (
  room: RoomDto,
  playerId: string | null
): {
  me: ResultSet | undefined;
  groups: ResultGroup[] | undefined;
} => {
  let me = undefined;
  if (playerId) {
    const myRounds = room.players.find(
      (p: Player) => p.id === playerId
    )?.rounds;
    me = getResultsForRounds(myRounds as Round[]);
  }
  const groups = room.groups?.map((group: Group): ResultGroup => {
    return {
      ...group,
      data: getPlayersFromGroup(room, group),
    };
  });
  return {
    me,
    groups,
  };
}

export const getDataForAllGroups = (groups: ResultGroup[]): ResultSet => {
  let rnd = 1;
  return groups.map(g => g.data).reduce(
    (acc, data) => {
      const sum: ResultSet = acc.map((num, i) => {
        return (num * (rnd - 1) + data[i]) / rnd;
      });
      rnd++;
      return sum;
    },
    [0, 0, 0, 0, 0, 0]
  );
}
