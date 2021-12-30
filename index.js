ire('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const dotenv = require('dotenv');

const TOKEN = (process.env.TOKEN);

const { Client } = require('discord.js-selfbot-v11')

const client = new Client();

client.on('ready', () => { 
  client.user.setStatus('dnd')
   console.log(`${client.user.username} Successfully Logged in!`)

})

client.login(TOKEN);
