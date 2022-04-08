import { Player } from "./../lib/models";

export const getPlayerId = (
  socketId: string,
  players: Player[]
): string | undefined => {
  return (
    getPlayerIdFromLocalStorage() ||
    players?.find((p) => p.socketId === socketId)?.id
  );
};

export const setPlayerIdToLocalStorage = (playerId: string): void => {
  localStorage.setItem("playerId", playerId);
};

export const getPlayerIdFromLocalStorage = (): string | null => {
  return localStorage.getItem("playerId");
};
