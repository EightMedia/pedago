import { RoomDto } from "models";
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
    },
    options: room.options,
    groups: room.groups,
  };
};
