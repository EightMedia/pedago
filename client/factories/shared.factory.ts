import { Player } from "models";

export const getPlayerId = (
    socketId: string,
    players: Player[]
  ): string | undefined => {
    return players?.find((p) => p.socketId === socketId)?.id;
  };
