import { Socket } from 'socket.io';
import { getRoomByGameCode, getRoomById } from './store/games.query';

export const joinRoomByGameCode = (
    gameCode: number,
    socket: Socket,
    callback: ({ status, roomId }: { status: string; roomId: string }) => void,
) => {
    const room = getRoomByGameCode(gameCode);

    if (room) {
        callback({
            status: 'OK',
            roomId: room.id,
        });
    } else {
        socket.emit(`Room with game code ${gameCode} does not exist.`);
    }
};

export const joinRoomWithName = (
    roomId: string,
    name: string,
    socket: Socket,
) => {
    const room = getRoomById(roomId);
    const playerNameTaken = room?.players.some(p => p.name === name);

    if (!playerNameTaken) {
        socket.join(roomId);
        socket.broadcast.emit('message', `${name} has joined the game`);
        socket.emit('message', `You have joined room ${roomId}`);
    } else {
        socket.emit('message', `Name taken: ${name}. Choose a different name.`);
    }
};
