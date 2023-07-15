// Modify the variables spreadsheetId and tabName
// refer to: https://benborgers.com/posts/google-sheets-json

const spreadsheetId = "1xzauyCWXrrCp2Zls8L91tUwUJJhfK9UZWYbDcMZGAOo";
const tabName = "Sheet1";
const announcementUrl = `https://opensheet.elk.sh/${spreadsheetId}/${tabName}`;

export const body = [];

fetch(announcementUrl)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((row) => {
      body.push(row);
    });
  });
