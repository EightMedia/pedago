import { Group, Player, RoomDto } from "models";
import { GetState, SetState } from "zustand";
import { GamesState } from "./games.store";

// GETTERS
export const getPlayerById = (
  get: GetState<GamesState>,
  roomId: string,
  playerId: string
): Player | undefined => {
  const room = get().games.find((room) => room.id === roomId);
  const players = room?.players;
  return players?.find((player) => player.id === playerId);
};

export const getGroupsByRoomId = (
  get: GetState<GamesState>,
  roomId: string
): Group[] | undefined => {
  const room = get().games.find((room) => room.id === roomId);
  return room?.groups;
};

// SETTERS
export const addRoom = (set: SetState<GamesState>, room: RoomDto) =>
  set((state: GamesState) => ({
    ...state,
    games: [...state.games, room],
  }));

export const updateRoom = (
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

export const addPlayerToRoom = (
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

export const updatePlayer = (
  set: SetState<GamesState>,
  roomId: string,
  playerId: string,
  player: Partial<Player>
): void => {
  set((state: GamesState) => ({
    games: state.games.map((r: RoomDto) => {
      if (roomId === r.id) {
        return {
          ...r,
          players: r.players.map((p) => {
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
        return r as RoomDto;
      }
    }),
  }));
};