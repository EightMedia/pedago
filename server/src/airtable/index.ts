import { RoomDto } from "models";
import { dataToJson } from "../utils/data-to-json.util";

const Airtable = require("airtable");
const base = new Airtable({ apiKey: "keyzN9TKa3at7qyLl" }).base(
  "appyVEK9HUo9uPDNX"
);

export const createDB = (room: RoomDto, playerId: string) => {
  base("Games").create(
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
