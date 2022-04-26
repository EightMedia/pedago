import { setCookies } from "cookies-next";
import { Player } from "models";

export const getPlayerId = (
  socketId: string,
  players: Player[]
): string | undefined => {
  return (
    players?.find((p) => p.socketId === socketId)?.id
  );
};

export const setPlayerIdToCookies = (playerId: string): void => {
  setCookies("playerId", playerId);
};

export const setTimeStampToLocalStorage = (timeStamp: number): void => {
  localStorage.setItem("timeStamp", timeStamp.toString());
};

export const getTimeStampFromLocalStorage = (): number | null => {
  const stamp = localStorage.getItem("timeStamp");
  return stamp ? parseInt(stamp, 10) : null;
};
