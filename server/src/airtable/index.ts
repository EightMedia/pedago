import { RoomDto } from "models";
import { dataToJson } from "../utils/data-to-json.util";

const Airtable = require("airtable");

function createAirtable() {
  if (process.env.AIRTABLE_API_KEY && process.env.AIRTABLE_BASE_ID) {
    return new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
      process.env.AIRTABLE_BASE_ID
    );
  } else {
    return undefined;
  }
}

const gameToAirtable = (room: RoomDto, playerId: string) => {
  const base = createAirtable();

  if (base && process.env.AIRTABLE_GAMES_TABLE) {
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
  }
};

export default gameToAirtable;
