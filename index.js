// para rodar no servidor:
// Copie os arquivos 'client.json', 'index.js', 'jobs.sh' e 'package.json' para a pasta do servidor
// Rode o comando 'npm install'. Isso instalará todos os módulos necessários na pasta 'node_modules'
// Digite 'crontab -e' para adicionar o comando que executará o script 'index.js' todos os dias, à meia noite (0 0 * * *)
// Digite 'i'
// 0 0 * * * /bin/sh /var/www/html/atelie/rabiscos/google-spreadsheets-to-json/jobs.sh
// Digite 'esc'
// Digite ':wq' para salvar e sair do arquivo

const fs = require('fs') // módulo para gravar arquivo no disco
const {
  extractSheets
} = require("spreadsheet-to-json"); // módulo para extrair dados de planilha do google
//const formatCell = (sheetTitle, columnTitle, value) => value.toUpperCase(); // optional custom format cell function

extractSheets({
    // Chave de sua planilha do google. Ex. https://docs.google.com/spreadsheets/d/1w2FTUk5ncGhvCgsWgw_8H40JntA-9EPjMbH9xgLx1Hg/edit#gid=1186394448
    spreadsheetKey: "1w2FTUk5ncGhvCgsWgw_8H40JntA-9EPjMbH9xgLx1Hg",
    // Arquivo com as credenciais google oauth2 e API_KEY
    credentials: require("./client.json"),
    // Opcional: nomes das planilhas que você quer extrair. Separados por vírgulas
    sheetsToExtract: ["Todos presenciais"],
    // Opcional: função customizada para parsear as células
    // formatCell: formatCell
  },
  function (err, data) {
    if (err) {
      console.log("ERROR:", err);
    }
    // console.log(data);
    fs.writeFileSync('./todosPresenciais.json', JSON.stringify(data)) // grava arquivo no disco
  }
);