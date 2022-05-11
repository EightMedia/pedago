import { RoomDto } from "models";
import { dataToJson } from "../utils/data-to-json.util";

const Airtable = require("airtable");
let base: any;
if (process.env.AIRTABLE_API_KEY) {
  base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_BASE_ID
  );
}

const storeGame = (room: RoomDto, playerId: string) => {
  if (!base) {
    base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
      process.env.AIRTABLE_BASE_ID
    );
  }
  if (base) {
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

export default storeGame;
