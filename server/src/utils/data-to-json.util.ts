import { Role, RoomDto } from "models";
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
    typePlayer: room.admin.players?.type,
    education: room.admin.players?.education,
    year: room.admin.players?.year,
    sector: room.admin.players?.sector.join(","),
    individualResult: resultData.me,
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
