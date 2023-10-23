import { Player, PlayerStatus, RoomDto } from "models";

export const getAdminGameType = (
  room: RoomDto
): {
  timer: boolean;
  teams: {
    name: string;
    status: PlayerStatus;
    players: string[];
  }[];
  round: {
    current: number;
    total: number;
  };
} => {
  return {
    timer: room.options?.timer as boolean,
    teams: room.teams?.map((team, index) => {
      return {
        name: (index + 1).toString(),
        status: getStatus(team),
        players: team.map((p) => p.name),
      };
    }) as { name: string; status: PlayerStatus; players: string[] }[],
    round: {
      current: room.round,
      total: 6,
    },
  };
};

const getStatus = (team: Player[]): PlayerStatus => {
  const statusOfAll = (status: PlayerStatus): boolean => {
    return team.some((p) => p.status === status);
  };
  if (statusOfAll(PlayerStatus.Done)) {
    return PlayerStatus.Done;
  } else if (
    statusOfAll(PlayerStatus.Discuss) ||
    statusOfAll(PlayerStatus.InProgress)
  ) {
    return PlayerStatus.InProgress;
  } else {
    return PlayerStatus.NotStarted;
  }
};
