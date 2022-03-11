import { Group, Player, RoomDto, Round } from "models";
import { GetState, SetState } from "zustand/vanilla";
import { GamesState } from "./games.store";

// GETTERS
export const getPlayerByIdFn = (
  get: GetState<GamesState>,
  roomId: string,
  playerId: string
): Player | undefined => {
  const room = get().games.find((room) => room.id === roomId);
  const players = room?.players;
  return players?.find((player) => player.id === playerId);
};

export const getGroupsByRoomIdFn = (
  get: GetState<GamesState>,
  roomId: string
): Group[] | undefined => {
  const room = get().games.find((room) => room.id === roomId);
  return room?.groups;
};

// SETTERS
export const addRoomFn = (set: SetState<GamesState>, room: RoomDto) =>
  set((state: GamesState) => ({
    ...state,
    games: [...state.games, room],
  }));

export const updateRoomFn = (
  set: SetState<GamesState>,
  room: Partial<RoomDto>
) => {
  set((state: GamesState) => ({
    games: state.games.map((r: RoomDto) => {
      if (room.id === r.id) {
        return {
          ...r,
          ...room,
        } as RoomDto;
      } else {
        return r as RoomDto;
      }
    }),
  }));
};

export const addPlayerToRoomFn = (
  set: SetState<GamesState>,
  roomId: string,
  player: Partial<Player>
): void => {
  set((state: GamesState) => ({
    games: state.games.map((room) => {
      if (room.id === roomId) {
        room.players.push(player as Player);
      }
      return room;
    }),
  }));
};

export const updatePlayerFn = (
  set: SetState<GamesState>,
  roomId: string,
  playerId: string,
  player: Partial<Player>
): void => {
  set((state: GamesState) => ({
    games: state.games.map((room: RoomDto) => {
      if (roomId === room.id) {
        return {
          ...room,
          players: room.players.map((p) => {
            if (p.id === playerId) {
              return {
                ...p,
                ...player,
              } as Player;
            } else {
              return p;
            }
          }),
        } as RoomDto;
      } else {
        return room as RoomDto;
      }
    }),
  }));
};

export const setPlayerReadyFn = (
  set: SetState<GamesState>,
  roomId: string,
  playerId: string,
  ready: boolean
): void => {
  set((state: GamesState) => ({
    games: state.games.map((room: RoomDto) => {
      if (roomId === room.id) {
        return {
          ...room,
          players: room.players.map((player) => {
            if (player.id === playerId) {
              return {
                ...player,
                ready: ready,
              } as Player;
            } else {
              return player;
            }
          }),
        } as RoomDto;
      } else {
        return room as RoomDto;
      }
    }),
  }));
};

export const makeTeamsFn = (set: SetState<GamesState>, roomId: string) => {
  set((state: GamesState) => ({
    games: state.games.map((room) => {
      if (roomId === room.id) {
        return {
          ...room,
          teams: ((): Player[][] => {
            let teams: Player[][] = [];
            let team: Player[] = [];
            const players = room.players;

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
          })(),
        } as RoomDto;
      } else {
        return room as RoomDto;
      }
    }),
  }));
};

export const storeRoundFn = (
  set: SetState<GamesState>,
  roomId: string,
  playerId: string,
  round: Round
): void => {
  set((state: GamesState) => ({
    games: state.games.map((room) => {
      if (roomId === room.id) {
        return {
          ...room,
          players: room.players.map((player) => {
            if (player.id === playerId) {
              player.rounds.push(round);
            }
            return player;
          }),
        } as RoomDto;
      } else {
        return room as RoomDto;
      }
    }),
  }));
};
