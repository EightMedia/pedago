const Airtable = require("airtable");
const base = new Airtable({ apiKey: "keyzN9TKa3at7qyLl" }).base(
  "appyVEK9HUo9uPDNX"
);

export const createDB = () => {
  base("Games").create(
    [
      {
        fields: {
          Game: JSON.stringify({
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
          }),
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    }
  );
};
