const Airtable = require('airtable');
const base = new Airtable({apiKey: 'keyzN9TKa3at7qyLl'}).base('appyVEK9HUo9uPDNX');

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
], );
