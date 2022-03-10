import { Group, Player, RoomDto } from "models";
import create, { GetState, SetState } from "zustand";
import {
  addPlayerToRoomFn,
  addRoomFn,
  getGroupsByRoomIdFn,
  getPlayerByIdFn,
  updatePlayerFn,
  updateRoomFn,
} from "./games.query";
export interface GamesState {
  games: RoomDto[];

  getRoomById: (roomId: string) => RoomDto | undefined;
  getRoomByGameCode: (gameCode: number) => RoomDto | undefined;
  getPlayerById: (roomId: string, playerId: string) => Player | undefined;
  getGroupsByRoomId: (roomId: string) => Group[] | undefined;
  
  addRoom: (room: RoomDto) => void;
  updateRoom: (room: RoomDto) => void;
  addPlayerToRoom: (roomId: string, player: Partial<Player>) => void;
  updatePlayer: (
    roomId: string,
    playerId: string,
    player: Partial<Player>
  ) => void;
  removeAllGames: () => void;
}

const gamesStore = create<GamesState>(
  (set: SetState<GamesState>, get: GetState<GamesState>) => ({
    games: [],

    // Getters
    getRoomById: (roomId: string) =>
      get().games.find((room) => room.id === roomId),
    getRoomByGameCode: (gameCode: number) =>
      get().games.find((room) => room.gameCode === gameCode),
    getPlayerById: (roomId, playerId) => getPlayerByIdFn(get, roomId, playerId),
    getGroupsByRoomId: (roomId: string) => getGroupsByRoomIdFn(get, roomId),

    // Setters
    addRoom: (room: RoomDto) => addRoomFn(set, room),
    updateRoom: (room: RoomDto) => updateRoomFn(set, room),
    addPlayerToRoom: (roomId: string, player: Partial<Player>) =>
      addPlayerToRoomFn(set, roomId, player),
    updatePlayer: (roomId: string, playerId: string, player: Partial<Player>) =>
      updatePlayerFn(set, roomId, playerId, player),
    removeAllGames: () => set({ games: [] }),
  })
);

export default gamesStore;
