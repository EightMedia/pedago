import { RoomDto } from "models";
import { dataToJson } from "../utils/data-to-json.util";

const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

export const storeGame = (room: RoomDto, playerId: string) => {
  base(process.env.AIRTABLE_GAMES_TABLE).create(
    [
      {
        fields: {
          Game: dataToJson(room, playerId),
        },
      },
    ],
    (err: any, records: any[]) => {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach((record) => {
        console.log(record.getId());
      });
    }
  );
};
