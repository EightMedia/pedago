import { DEFAULT_LANGUAGE } from "@contexts/LanguageContext";
import { WizardType } from "@views/admin/Wizard/Wizard.types";
import { getCookie } from "cookies-next";
import { Language, RoomDto } from "models";
import { PlayerType } from "models/lib/models/player-type.enum";

export const convertToRoomDto = (
  data: WizardType["data"]
): Partial<RoomDto> => {
  const language: Language = getCookie("language") as Language || DEFAULT_LANGUAGE;

  return {
    options: data.options,
    groups: data.groups,
    admin: {
      ...data.info,
    },
    language
  };
};

export const getWizardData = (room: Partial<RoomDto>): WizardType["data"] => {
  return {
    info: {
      ...room?.admin,
      players: {
        ...room?.admin?.players,
        type: PlayerType.Students,
        sector: []
      }
    },
    options: room?.options,
    groups: room?.groups,
  };
};
