import { PlayerType, Role, RoomDto, Sector } from "models";
import { getResultData } from "./result.util";

export const dataToJson = (room: RoomDto, playerId: string): string => {
  const resultData = getResultData(room, playerId);
  const groups = resultData.groups?.reduce(
    (acc, group) => ({ ...acc, [group.name]: group.data }),
    {}
  );
  const data = {
    date: room.startDate,
    organisation: room.organisation?.name,
    location: room.organisation?.location,
    adminRole: getRole(
      room.admin.role as Role[],
      room.admin.customRole as string
    ),
    typePlayer:
      typeof room.admin.players?.type === "number" &&
      getPlayerType(room.admin.players?.type as number),
    education: room.admin.players?.education,
    year: room.admin.players?.year?.join(", "),
    sector: getSector(room.admin.players?.sector as number[]),
    totalResult: resultData.total,
    ...groups,
  };
  return JSON.stringify(data);
};

const getRole = (roles: Role[], customRole: string) => {
  return `${roles?.map((_, i) => Object.values(Role)[i]).join(", ")}${
    customRole ? ", " + customRole : ""
  }`;
};

const getSector = (sector: number[]): string | undefined => {
  if (!sector) return undefined;
  return (
    sector
      .map((s) =>
        Object.entries(Sector).find((entry) => entry.includes(s.toString()))
      )
      .map((s) => s && s[1])
      .join(", ") || undefined
  );
};

const getPlayerType = (type: number): string | undefined => {
  if (!type) return undefined;
  return Object.entries(PlayerType).filter((e) => e[1] === type)[0][0] || undefined;
};
