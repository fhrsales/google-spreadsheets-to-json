const {
  extractSheets
} = require("spreadsheet-to-json");
const fs = require('fs')

// optional custom format cell function
const formatCell = (sheetTitle, columnTitle, value) => value.toUpperCase();

extractSheets({
    // your google spreadhsheet key
    spreadsheetKey: "1w2FTUk5ncGhvCgsWgw_8H40JntA-9EPjMbH9xgLx1Hg",
    // your google oauth2 credentials or API_KEY
    credentials: require("./client.json"),
    // optional: names of the sheets you want to extract
    sheetsToExtract: ["Todos presenciais"],
    // optional: custom function to parse the cells
    //formatCell: formatCell
  },
  function (err, data) {
    if (err) {
      console.log("ERROR:", err);
    }
    // console.log(data);
    fs.writeFileSync('./agregador.json', JSON.stringify(data))
  }
);