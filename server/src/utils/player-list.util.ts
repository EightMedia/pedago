import { Player } from "models";


export const makeTeamsFromPlayerList = (players: Player[]): Player[][] => {
    players = shufflePlayerList(players);
    let teams: Player[][] = [];
    let team: Player[] = [];
  
    for (let i = 0; i < players.length; i++) {
      team.push(players[i]);
      if (i % 2 === 1) {
        team.push(players[i]);
        if (i % 2 === 1) {
          teams.push(team);
          if (!(players.length % 2 === 1 && i === players.length - 2)) {
            team = [];
          }
        }
      }
    }
    return teams;
  };
  
  export const shufflePlayerList = (players: Player[]): Player[] => {
    let currentIndex = players.length,
      randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [players[currentIndex], players[randomIndex]] = [
        players[randomIndex],
        players[currentIndex],
      ];
    }
  
    return players;
  };
