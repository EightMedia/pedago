import { Player } from "models";

export const getPlayerId = (
  socketId: string,
  players: Player[]
): string | undefined => {
  return (
    getPlayerIdToLocalStorage() ||
    players?.find((p) => p.socketId === socketId)?.id
  );
};

export const setPlayerIdToLocalStorage = (playerId: string): void => {
  localStorage.setItem("playerId", playerId);
};

export const getPlayerIdToLocalStorage = (): string | null => {
  return localStorage.getItem("playerId");
};
