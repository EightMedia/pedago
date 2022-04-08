import { Group, Player } from "./../lib/models";

export const makeTeamsFromPlayerList = (players: Player[]): Player[][] => {
  players = shufflePlayerList(players);
  const teams: Player[][] = [];
  let team: Player[] = [];

  for (let i = 0; i < players.length; i++) {
    team.push(players[i]);
    if (i % 2 === 1) {
      teams.push(team);
      if (!(players.length % 2 === 1 && i === players.length - 2)) {
        team = [];
      }
    }
  }
  return teams;
};

const shufflePlayerList = (players: Player[]): Player[] => {
  let currentIndex = players.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [players[currentIndex], players[randomIndex]] = [
      players[randomIndex],
      players[currentIndex],
    ];
  }

  return getPlayerGroups(players);
};

const getPlayerGroups = (players: Player[]): Player[] => {
  const result =  players.reduce((acc: any, player: Player) => {
    const key = (player["group"] as Group)["id"];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(player);
    return acc;
  }, []);
  return zipPlayers(players.length, result);
};

const zipPlayers = (amount: number, playersByGroup: Player[][]): Player[] => {
  const [group1, group2, group3, group4] = playersByGroup;
  const playerList: Player[] = [];
  for (let i = 0; i < amount; i++) {
    if (group1?.length && group1[i]) {
      playerList.push(group1[i]);
    }
    if (group2?.length && group2[i]) {
      playerList.push(group2[i]);
    }
    if (group3?.length && group3[i]) {
      playerList.push(group3[i]);
    }
    if (group4?.length && group4[i]) {
      playerList.push(group4[i]);
    }
  }
  return playerList;
};
