import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { ViewName } from 'models';

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

io.on('connection', socket => {
    const sendGameData = () => {
        io.emit('newData', games);
    };

    console.log('a user connected with socket ID: ', socket.id);

    // send welcome to user on this socket
    socket.emit('message', 'Hello you have connected');

    // begin to send user to start screen
    socket.emit('to', { name: ViewName.Wizard });

    // log anything that comes in
    socket.onAny((eventName, ...args) => {
        console.log('event: ', eventName, args, games);
    });

    /**
     *
     * Send a message
     *
     */

    socket.on('message', data => {
        const { room, msg, to } = data;
        console.log('Message sent to ' + to + ' with data: ', data);
        if (to === 'room') {
            io.to(room).emit('message', msg);
        }
        if (to === 'me') {
            socket.emit('message', msg);
        }
        if (to === 'all') {
            io.emit('message', msg);
        }
    });

    /**
     *
     * To
     *
     */

    socket.on('to', view => {
        socket.emit('to', view);
    });

    /**
     *
     * Create room
     *
     */

    socket.on('createRoom', room => {
        const pin = Math.floor(1000 + Math.random() * 9000);
        socket.join(room);
        // string for current timestamp:
        const timestamp = new Date().getTime().toString();
        // create room in games object
        games[room] = {
            players: {},
            pin: pin,
            admin: socket.id,
            active: true,
            locked: false,
            started: timestamp,
        };
        socket.emit('message', 'You created a room');
        socket.emit('to', { view: ViewName.Wizard, data: { room: room } });
        sendGameData();
    });

    /**
     *
     * Join room
     *
     */

    socket.on('joinRoom', data => {
        const userId = socket.id;
        const { room, name } = data;

        // check if room exists
        const roomExists = room in games;
        if (roomExists) {
            socket.join(room);
            games[room].players[userId] = { name: name, id: userId };
            socket
                .to(room)
                .emit('message', `${games[room].players[userId].name} joined`);
            socket.emit('message', 'You joined room ' + room);
        } else {
            socket.emit('Room ' + room + ' does not exist.');
        }
        sendGameData();
    });

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
        sendGameData();
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
