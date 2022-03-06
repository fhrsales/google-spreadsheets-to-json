# google-spreadsheets-to-json

<strong>Para rodar no servidor:</strong><br>
Copie os arquivos 'client.json', 'index.js', 'jobs.sh' e 'package.json' para a pasta do servidor<br>
Rode o comando 'npm install'. Isso instalará todos os módulos necessários na pasta 'node_modules'<br>
<br>
<hr>
<strong>Para criar uma tarefa no crontab</strong><br>
Digite crontab -e para adicionar o comando que executará o script to dia à meia noite (0 0 * * *)<br>
Digite 'i'<br>
0 0 * * * /bin/sh /var/www/html/atelie/rabiscos/google-spreadsheets-to-json/jobs.sh<br>
Digite 'esc'<br>
Digite ':wq' para salvar e sair do arquivo<br>
