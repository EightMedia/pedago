import {
    DiscussStep,
    DiscussType
} from "@views/game/Discuss/Discuss.types";
import { RoomDto } from "models";

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
  const discussInfoSeen = room.round > 1;
  const teamMembers: {
    socketId: string;
    name: string;
    cards: number[];
  }[] = currentTeam?.map((p) => {      
    return {
      socketId: p.socketId,
      name: p.name,
      cards: p.rounds.find(r => r.number === round)?.order,
    };
  }) as {
    socketId: string;
    name: string;
    cards: number[];
  }[];

  return {
    round,
    roundMax,
    initialStep,
    pause,
    teamMembers,
    discussInfoSeen,
    autoPlay
  };
};
