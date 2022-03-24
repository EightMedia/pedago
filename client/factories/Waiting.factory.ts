import { RoomDto } from "models";
import { WaitingType } from "../lib/views/game/Waiting/Waiting.types";

export const getWaitingType = (
  round: number,
  roundMax: number,
  room: RoomDto,
  playerId: string
): WaitingType => {
  const teamMembers: string[] = [];
  const currentTeam = room.teams?.find((t) => t.some((p) => p.id === playerId));
  currentTeam
    ?.filter((p) => p.id !== playerId)
    .map((p) => {
      teamMembers.push(p.name);
    });
  return {
    round,
    roundMax,
    teamMembers,
  };
};
