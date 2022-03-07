import express from 'express';
import { createServer } from 'http';
import { RoomDto, ViewName } from 'models';
import { Server, Socket } from 'socket.io';
import { registerGame } from './admin';
import { joinRoomByGameCode } from './player';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: ['http://localhost:8000'],
    },
});

console.log('--- Pedago Server started at port 3001 ---');

type gameType = any;
const games = {} as { [key: string]: gameType };

io.on('connection', (socket: Socket) => {
    console.log('a user connected with socket ID: ', socket.id);

    // send welcome to user on this socket
    socket.emit('message', 'Hello you have connected');

    // begin to send user to start screen
    socket.emit('to', { name: ViewName.Game });

    // log anything that comes in
    socket.onAny((eventName, ...args) => {
        console.log('event: ', eventName, args, games);
    });

    socket.on('to', view => {
        socket.emit('to', view);
    });

    //    Admin methods

    socket.on('registerGame', (room: RoomDto) => registerGame(room, socket));

    // Player methods

    socket.on('joinRoomByGameCode', (gameCode: number, callback) =>
        joinRoomByGameCode(gameCode, socket, callback),
    );

    /**
     *
     * Demo options, redirect everyone to specific views
     *
     */
    socket.on('reset', () => {
        socket.broadcast.emit('to', { view: ViewName.Wizard, data: {} });
    });
    socket.on('killRoom', room => {
        // message all players
        io.in(room).emit('message', 'Room was killed, party ended ☠️');
        // redirect everyone to start screen
        io.in(room).emit('to', { view: ViewName.Wizard, data: {} });
        io.in(room).socketsLeave(room);
        // delete room
        delete games[room];
    });

    /**
     *
     * clean exit
     *
     */

    socket.on('disconnect', () => {
        socket.removeAllListeners();
    });
});

httpServer.listen(3001);
