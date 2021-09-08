require("dotenv").config();

const { Client, Intents } = require('discord.js');
const { createConnection } = require('mysql');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = process.env.PREFIX;

const connection = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// USER LEVEL & EXPERIENCE
var level_1 = 250;
var level_2 = 500;
var level_3 = 2500;
var level_4 = 5000;
var level_5 = 10000;
var level_6 = 15000;
var level_7 = 25000;
var level_8 = 50000;
var level_9 = 75000;
var level_10 = 100000;

connection.connect(err => {
  if(err) throw err;
  console.log("Connecting To Server .....");
});

client.on("ready", () => {
  console.log("Bot Connected!");
  const guild = client.guilds.cache.get(process.env.SERVER_ID)
  let commands

  if (guild) { commands = guild.commands }
  else { commands = client.application?.commands }

  commands?.create({
    name: 'status',
    description: 'Check Your Profile (Experience & Level).',
  })

  commands?.create({
    name: 'help',
    description: 'Help Commands Server',

  })

})

client.on('interactionCreate', async (interaction) => {

  const guilID = process.env.SERVER_ID;
  const guild = client.guilds.cache.get(interaction.guildID)

  if (!interaction.isCommand()) { return }
  const { commandName, options } = interaction

  if (commandName === 'status') {
    var sql = `SELECT * FROM users WHERE id_discord = ${interaction.user.id}`
    connection.query(sql, function (err, result, fields) {
      if (err) throw err;
      if (result.length > 0 ) {
        let data = result.map(v => {

          if ( v.experience < level_1 ) { var level = '0'; var next = level_1; }
          else if ( v.experience < level_2 ) { var level = '1'; var next = level_3 - level_2; }
          else if ( v.experience < level_3 ) { var level = '2'; var next = level_4 - level_3; }
          else if ( v.experience < level_4 ) { var level = '3'; var next = level_5 - level_4; }
          else if ( v.experience < level_5 ) { var level = '4'; var next = level_6 - level_5; }
          else if ( v.experience < level_6 ) { var level = '5'; var next = level_7 - level_6; }
          else if ( v.experience < level_7 ) { var level = '6'; var next = level_8 - level_7; }
          else if ( v.experience < level_8 ) { var level = '7'; var next = level_9 - level_8; }
          else if ( v.experience < level_9 ) { var level = '8'; var next = level_10 - level_9; }
          else { var level = '10'; var next = 0; }

          var progress = (v.experience / next) * 100;

          interaction.reply({
            content: ` :
            Access : Unknown
            ID : <@${interaction.user.id}>
            Experience : ${v.experience}/${next}
            Level : ${level}
            Progress : ${progress.toFixed(2)}%`,
            ephemeral: true,
          })
        })
      }
      else {
        interaction.reply({
          content: ` :
          Try start sending message on channel, Good Luck`,
          ephemeral: true,
        })
      }
    })
  }

  if (commandName === 'help') {
    interaction.reply({
      content: ` :
      Server Command :
      /status , check your profile (experience & level)
      /balance , coming soon
      /store , coming soon
      /transfer , coming soon`,
      ephemeral: true,
    })
  }

});

client.on("message", (message) => {

  var sql = `SELECT * FROM users WHERE id_discord = ${message.author.id}`
  connection.query(sql, function (err, result, fields) {
    if (err) throw err;
    if (result.length > 0 ) {
      let data = result.map(v => {

        // CLEAR CHAT CHANNEL
        if (message.content.startsWith(prefix + "cls")) {
          if ( v.id_role == 1 ) {
            async function clear() {
              message.delete();
              const fetched = await message.channel.messages.fetch({limit: 99});
              message.channel.bulkDelete(fetched);
            }
            clear();
          }
        }

        // IGNORING EXPERIENCE FROM COMMAND
        else { connection.query(`UPDATE users SET experience = ${(v.experience * 1) + message.content.length} WHERE id_discord = ${message.author.id}`) }

      })
    }
    else {
      connection.query(`INSERT INTO users (id_role, id_discord, name, experience, password) VALUES (3, ${message.author.id}, '${message.author.username}',  ${message.content.length}, '$2y$10$x8tLljlCUqzmy3TOsXnXxeZfGTbQY6gOchZtUikvfgWz/1N0UU.Qe')`)
    }
  })

});

client.login(process.env.TOKEN);
