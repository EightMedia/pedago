import { Event, Player, RoomDto, ViewName } from "models";
import { Socket } from "socket.io";
import gamesStore from "./store/games.store";

const store = gamesStore.getState();

export const updateClientRoom = (socket: Socket, roomId: string): void => {
  const room = store.getRoomById(roomId) as RoomDto;
  socket.broadcast.to(room?.id).emit(Event.Room, room);
  socket.emit(Event.Room, room);
};

export const updatePlayersInLobby = (socket: Socket, roomId: string): void => {
  const room = store.getRoomById(roomId) as RoomDto;
  const playersInLobby = room?.players.filter(
    (p: Player) => p.view === ViewName.Lobby
  );
  socket.broadcast.to(roomId).emit(Event.PlayerList, playersInLobby);
  socket.emit(Event.PlayerList, playersInLobby);
};
