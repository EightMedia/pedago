import { RoomDto } from 'models';
import create, { GetState, SetState } from 'zustand';
import { findRoomIndexById, getRoomById } from './games.query';

export interface GamesState {
    games: RoomDto[];
    addRoom: (room: RoomDto) => void;
    updateRoom: (room: RoomDto) => void;
    removeAllGames: () => void;
}

const useGamesStore = create<GamesState>((set: SetState<GamesState>, get:GetState<GamesState>) => ({
    games: [],
    addRoom: (room: RoomDto) =>
        set((state: GamesState) => ({
            ...state,
            games: [...state.games, room],
        })),
    updateRoom: (room: Partial<RoomDto>) => {
        const index = findRoomIndexById(room.id as string);
        let selectedRoom = get().games[index];
        selectedRoom = { ...selectedRoom, ...room}
    },
    removeAllGames: () => set({ games: [] }),
}));

export default useGamesStore;
