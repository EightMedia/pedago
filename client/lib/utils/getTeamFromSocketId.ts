import { Player, RoomDto } from "models";

export const getTeamFromSocketId = (room: RoomDto, socketId: string): Player[] | undefined =>{
    return room?.teams?.find((t: Player[]) => t.some((p: Player) => p.socketId === socketId));
}
