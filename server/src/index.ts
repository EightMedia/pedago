import express from 'express';
import { createServer } from 'http';
import { RoomDto, ViewName } from 'models';
import { Server, Socket } from 'socket.io';
import { disconnectAll, registerGame, reset, updateRoomDto } from './admin';
import { joinGroup, joinRoomByGameCode, joinRoomWithName } from './player';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: ['http://localhost:8000'],
    },
});

console.log('--- Pedago Server started at port 3001 ---');

io.on('connection', (socket: Socket) => {
    console.log('a user connected with socket ID: ', socket.id);

    // send welcome to user on this socket
    socket.emit('message', 'Hello you have connected');

    // begin to send user to start screen
    socket.emit('to', { name: ViewName.Game });

    // METHODS

    //    Admin methods

    socket.on('registerGame', (room: RoomDto) => registerGame(room, socket));
    socket.on('updateRoom', (room: Partial<RoomDto>) => updateRoomDto(room))
    socket.on('reset', () => reset(socket));
    socket.on('disconnect', () => disconnectAll(socket));

    // Player methods

    socket.on('joinRoomByGameCode', (gameCode: number, callback) =>
        joinRoomByGameCode(gameCode, callback),
    );
    socket.on('joinRoomWithName', (roomId: string, name: string, callback) =>
        joinRoomWithName(roomId, name, socket, callback),
    );
    socket.on(
        'joinGroup',
        (groupId: string, roomId: string, playerId: string, callback) =>
            joinGroup(groupId, roomId, playerId, socket, callback),
    );
});

httpServer.listen(3001);
