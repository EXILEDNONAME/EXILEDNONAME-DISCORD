require("dotenv").config();

const { Client, Intents } = require('discord.js');
const { createConnection } = require('mysql');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = process.env.PREFIX;

var level_1 = 1000;
var level_2 = 2000;
var level_3 = 4000;
var level_4 = 8000;
var level_5 = 16000;
var level_6 = 32000;
var level_7 = 64000;
var level_8 = 128000;
var level_9 = 256000;
var level_10 = 512000;

const connection = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect(err => {
  if(err) throw err;
  console.log("Connecting To Server .....");
});

client.on("ready", () => { console.log("Bot Connected!"); });

client.on("message", (message) => {

  // AUTO REGISTER USERS TO DATABASE
  if (!connection.query(`SELECT * FROM users WHERE id_discord != ${message.author.id}`)) {
    connection.query(`INSERT INTO users (id_discord, username, experience) VALUES (${message.author.id}, '${message.author.username}', '10')`)
  }
  else {
    // EXISTING USERS TO DATABASE - ADDED AUTOMATIC EXPERIENCE
    connection.query(`SELECT * FROM users WHERE id_discord = ${message.author.id}`, async function (err, results, userID, balance, fields, rows) {
      let data = results.map(x => {
        if (!message.content.startsWith(prefix + "test")) {
          connection.query(`UPDATE users SET experience = ${x.experience + message.content.length} WHERE id_discord = ${message.author.id}`)
        }
      })
    })
  }

  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "test")) {
    var sql = `SELECT * FROM users WHERE id_discord = ${message.author.id}`
    connection.query(sql, async function (err, results, userID, balance, fields, rows) {
      let data = results.map(v => {
        if ( v.experience < level_1 ) {
          var level = '1';
          var next = level_2 - level_1;
        }
        if ( v.experience < level_2 ) {
          var level = '2';
          var next = level_3 - level_2;
        }
        if ( v.experience < level_3 ) {
          var level = '3';
          var next = level_4 - level_3;
        }
        if ( v.experience < level_4 ) {
          var level = '4';
          var next = level_5 - level_4;
        }
        if ( v.experience < level_5 ) {
          var level = '5';
          var next = level_6 - level_5;
        }
        if ( v.experience < level_6 ) {
          var level = '6';
          var next = level_7 - level_6;
        }
        if ( v.experience < level_7 ) {
          var level = '7';
          var next = level_8 - level_7;
        }

        var progress = (v.experience / next) * 100;

        var guild = client.guilds.cache.get(process.env.SERVER_ID);
        var role = guild.roles.cache.find(role => role.name === 'Administrator');
        console.log(`Found the role ${role.id}`);

        message.channel.send(`
          For You <@${message.author.id}>'s :
          Access : Administrator
          ID : ${message.author.username}
          Experience : ${v.experience}
          Level : ${level}
          Progress : ${progress.toFixed(2)}%`
        )
      })
    })
  }

  // ID is not registered on the server

  // CLEAR MESSAGE CHANNEL
  if (message.content.startsWith(prefix + "cls")) {
    async function clear() {
      message.delete();
      const fetched = await message.channel.messages.fetch({limit: 99});
      message.channel.bulkDelete(fetched);
    }
    clear();
  }
});

client.login(process.env.TOKEN);
