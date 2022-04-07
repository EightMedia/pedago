import { RoomDto } from "models";
import {
  DiscussStep,
  DiscussType
} from "../lib/views/game/Discuss/Discuss.types";

export const getDiscussType = (
  round: number,
  roundMax: number,
  initialStep = DiscussStep.Intro,
  pause = false,
  autoPlay = true,
  room: RoomDto,
  playerId: string
): DiscussType => {
  const currentTeam = room.teams?.find((t) => t.some((p) => p.id === playerId));

  const teamMembers: {
    name: string;
    cards: number[];
  }[] = currentTeam?.map((p) => {      
    return {
      name: p.name,
      cards: p.rounds.find(r => r.number === round)?.order,
    };
  }) as {
    name: string;
    cards: number[];
  }[];

  return {
    round,
    roundMax,
    initialStep,
    pause,
    teamMembers,
    autoPlay
  };
};
