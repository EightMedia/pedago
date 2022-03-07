import { Player, RoomDto } from 'models';
import useGamesStore from './games.store';

export const getRoomById = (roomId: string): RoomDto | undefined => {
    return useGamesStore(state => state.games.find(room => room.id === roomId));
};

export const getRoomByGameCode = (gameCode: number): RoomDto | undefined => {
    const games = useGamesStore(state => state.games);
    return games.find(room => room.gameCode === gameCode);
};

export const getPlayerById = (
    roomId: string,
    playerId: string,
): Player | undefined => {
    const room = useGamesStore(state =>
        state.games.find(room => room.id === roomId),
    );
    const players = room?.players;
    return players?.find(player => player.playerId === playerId);
};

export const findRoomIndexById = (roomId: string): number => {
    const games = useGamesStore(state => state.games);
    return games.findIndex(room => room.id === roomId);
};

export const getGames = useGamesStore(state => state.games);


