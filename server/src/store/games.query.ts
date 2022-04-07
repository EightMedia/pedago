import { Group, Player, PlayerStatus, RoomDto, Round } from "models";
import { GetState, SetState } from "zustand/vanilla";
import { makeTeamsFromPlayerList } from "../utils/player-list.util";
import { GamesState } from "./games.store";

// GETTERS
export const getPlayerByIdFn = (
  get: GetState<GamesState>,
  roomId: string,
  playerId: string
): Player | undefined => {
  const room = get().games.find((room: RoomDto) => room.id === roomId);
  const players = room?.players;
  return players?.find((player: Player) => player.id === playerId);
};

export const getGroupsByRoomIdFn = (
  get: GetState<GamesState>,
  roomId: string
): Group[] | undefined => {
  const room = get().games.find((room: RoomDto) => room.id === roomId);
  return room?.groups;
};

// SETTERS/UPSERTERS
export const addRoomFn = (set: SetState<GamesState>, room: RoomDto) => {
  return set((state: GamesState) => {
    state.games.push(room);
  });
};

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
    games: state.games.map((room: RoomDto) => {
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
          players: room.players.map((p: Player) => {
            if (p.id === playerId) {
              return {
                ...p,
                ...player,
              } as Player;
            } else {
              return p;
            }
          }),
          teams: room.teams?.map((team: Player[]) => {
            return team.map((p: Player) => {
              if (p.id === playerId) {
                return {
                  ...p,
                  ...player,
                };
              } else {
                return p;
              }
            });
          }),
        } as RoomDto;
      } else {
        return room as RoomDto;
      }
    }),
  }));
};

export const setPlayerStatusFn = (
  set: SetState<GamesState>,
  roomId: string,
  playerId: string,
  teamIndex: number,
  status: PlayerStatus
): void => {
  set((state: GamesState) => ({
    games: state.games.map((room: RoomDto) => {
      if (roomId === room.id) {
        return {
          ...room,
          players: room.players?.map((p: Player) => {
            if (p.id === playerId) {
              return {
                ...p,
                status,
              };
            } else {
              return p;
            }
          }),
          teams: room.teams?.map((team: Player[], index: number) => {
            if (index === teamIndex) {
              return team.map((p: Player) => {
                if (p.id === playerId) {
                  return {
                    ...p,
                    status,
                  };
                } else {
                  return p;
                }
              });
            } else {
              return team;
            }
          }),
        };
      } else {
        return room as RoomDto;
      }
    }),
  }));
};

export const setTeamReadyFn = (
  set: SetState<GamesState>,
  roomId: string,
  teamIndex: number,
  status: PlayerStatus
) => {
  set((state: GamesState) => ({
    games: state.games.map((room: RoomDto) => {
      if (roomId === room.id) {
        const team: Player[] = (room.teams as Player[][])[teamIndex];
        team.map((player: Player) => {
          return {
            ...player,
            status: status,
          };
        });
        return room as RoomDto;
      } else {
        return room as RoomDto;
      }
    }),
  }));
};

export const updateAllPlayersFn = (
  set: SetState<GamesState>,
  roomId: string,
  player: Partial<Player>
) => {
  set((state: GamesState) => ({
    games: state.games.map((room: RoomDto) => {
      if (roomId === room.id) {
        return {
          ...room,
          players: room.players.map((p: Player) => ({ ...p, ...player })),
          teams: room.teams?.map((team: Player[]) => {
            team.map((p: Player) => ({ ...p, ...player }));
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
    games: state.games.map((room: RoomDto) => {
      if (roomId === room.id) {
        return {
          ...room,
          teams: makeTeamsFromPlayerList(room.players),
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
  teamIndex: number,
  round: Round
): void => {
  set((state: GamesState) => ({
    games: state.games.map((room: RoomDto) => {
      if (roomId === room.id) {
        return {
          ...room,
          players: room.players.map((player: Player) => {
            if (player.id === playerId) {
              const roundIndex = player.rounds.findIndex(
                (r) => r.number === round.number
              );
              if (roundIndex >= 0) {
                player.rounds.splice(roundIndex, 1);
              }
              player.rounds.push(round);
            }
            return player;
          }),
          teams: room.teams?.map((team: Player[], index: number) => {
            if (index === teamIndex) {
              return team.map((player: Player) => {
                if (player.id === playerId) {
                  const roundIndex = player.rounds.findIndex(
                    (r) => r.number === round.number
                  );
                  if (roundIndex >= 0) {
                    player.rounds.splice(roundIndex, 1);
                  }
                  player.rounds.push(round);
                }
                return player;
              });
            } else {
              return team;
            }
          }),
        } as RoomDto;
      } else {
        return room as RoomDto;
      }
    }),
  }));
};
