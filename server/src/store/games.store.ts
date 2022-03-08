import { Group, Player, RoomDto } from 'models';
import create, { GetState, SetState } from 'zustand';
import {
    addPlayerToRoom,
    addRoom,
    getGroupsByRoomId,
    getPlayerById,
    updatePlayer,
    updateRoom,
} from './games.query';
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
        player: Partial<Player>,
    ) => void;
    removeAllGames: () => void;
}

const useGamesStore = create<GamesState>(
    (set: SetState<GamesState>, get: GetState<GamesState>) => ({
        games: [],
        // Getters
        getRoomById: (roomId: string) =>
            get().games.find(room => room.id === roomId),
        getRoomByGameCode: (gameCode: number) =>
            get().games.find(room => room.gameCode === gameCode),
        getPlayerById: (roomId, playerId) =>
            getPlayerById(get, roomId, playerId),
        getGroupsByRoomId: (roomId: string) => getGroupsByRoomId(get, roomId),
        // Setters
        addRoom: (room: RoomDto) => addRoom(set, room),
        updateRoom: (room: RoomDto) => updateRoom(set, room),
        addPlayerToRoom: (roomId: string, player: Partial<Player>) =>
            addPlayerToRoom(set, roomId, player),
        updatePlayer: (
            roomId: string,
            playerId: string,
            player: Partial<Player>,
        ) => updatePlayer(set, roomId, playerId, player),
        removeAllGames: () => set({ games: [] }),
    }),
);

export default useGamesStore;
