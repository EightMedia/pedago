import { Player } from "models";

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

export const setTimeStampToLocalStorage = (timeStamp: number): void => {
  localStorage.setItem("timeStamp", timeStamp.toString());
};

export const getTimeStampFromLocalStorage = (): number | null => {
  const stamp = localStorage.getItem("timeStamp");
  return stamp ? parseInt(stamp, 10) : null;
};
