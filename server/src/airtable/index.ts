const axios = require("axios").default;

const apiUrl = (apiKey: string) => `https://api.airtable.com/v0/appyVEK9HUo9uPDNX/Games?api_key=${apiKey}`;

export const getRecords = async (apiKey: string): Promise<void> => {
  try {
    const response = await axios.get(apiUrl(apiKey));
    console.log(response.data);
  } catch (error) {
    console.error("Fetch failed");
  }
};

export const upsertRecord = async (apiKey: string): Promise<void> => {
    try {
        const response = await axios.get(apiUrl(apiKey));
        console.log(response.data);
      } catch (error) {
        console.error("Fetch failed");
      }
}


var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyzN9TKa3at7qyLl'}).base('appyVEK9HUo9uPDNX');

base('Games').create([
  {
    "fields": {
      "Name": "Room1",
      "roomId": "roomid"
    }
  },
  {
    "fields": {
      "Name": "Room1",
      "roomId": "roomid"
    }
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    console.log(record.getId());
  });
});
