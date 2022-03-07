import { RoomDto } from 'models';
import create from 'zustand';

export interface GamesState {
    games: Record<string, RoomDto>;
}

const useStore = create<GamesState>(set => ({
    games: {},
    addRoom: (room: RoomDto) =>
        set((state: GamesState) => ({
            ...state,
            games: { ...state.games, [room.id]: room },
        })),
    updateRoom: (roomId: string, room: RoomDto) =>
        set((state: GamesState) => ({
            ...state,
            games: {
                ...state.games,
                [roomId]: { ...state.games[roomId], room },
            },
        })),
    removeAllGames: () => set({ games: {} }),
}));
