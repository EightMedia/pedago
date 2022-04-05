import { RoomDto } from "models";
import { PlayerType } from "models/lib/models/player-type.enum";
import { WizardType } from "../lib/views/admin/Wizard/Wizard.types";

export const convertToRoomDto = (
  data: WizardType["data"]
): Partial<RoomDto> => {
  return {
    options: data.options,
    groups: data.groups,
    admin: {
      ...data.info,
    },
  };
};

export const getWizardData = (room: Partial<RoomDto>): WizardType["data"] => {
  return {
    info: {
      ...room.admin,
      players: {
        ...room.admin?.players,
        type: PlayerType.Students,
        sector: []
      }
    },
    options: room.options,
    groups: room.groups,
  };
};
