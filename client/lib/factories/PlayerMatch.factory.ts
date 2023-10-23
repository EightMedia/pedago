import { PlayerMatchType } from "@views/game/PlayerMatch/PlayerMatch.types";
import { RoomDto } from "models";

export const getPlayerMatchType = (
  round: number,
  roundMax: number,
  room: RoomDto,
  playerId: string
): PlayerMatchType => {
  const currentTeam = room.teams?.find((t) => t.some((p) => p.id === playerId));
  const teamName = room.teams?.findIndex((t) =>
    t.some((p) => p.id === playerId)
  );
  const teamMembers = currentTeam
    ?.filter((p) => p.id !== playerId)
    .map((p) => {
      return {
        name: p.name,
        group: p.group?.name,
      };
    });

  return {
    round,
    roundMax,
    teamName: (teamName as number) + 1,
    teamMembers: teamMembers as { name: string; group: string }[],
  };
};


