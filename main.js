require("dotenv").config();

const { MessageEmbed } = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { createConnection } = require('mysql');
const prefix = process.env.PREFIX;
const https = require("https");

var converter = require('steam-id-convertor');
var bigInt = require("big-integer");

const connection = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// USER LEVEL & EXPERIENCE
var level_0 = 0;
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
var level_11 = 125000;
var level_12 = 150000;
var level_13 = 200000;
var level_14 = 300000;
var level_15 = 500000;
var level_16 = 600000;
var level_17 = 700000;
var level_18 = 800000;
var level_19 = 900000;
var level_20 = 1000000;

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
    name: 'help',
    description: 'Help Commands Server',
  })

  commands?.create({
    name: 'profile',
    description: 'Check Profile (Experience & Level)',
    options: [
      {
        name: 'id',
        description: 'Check Profile (Experience & Level)',
        required: false,
        type: 3,
      }
    ]
  })

})

client.on('interactionCreate', async (interaction) => {

  const guilID = process.env.SERVER_ID;
  const guild = client.guilds.cache.get(interaction.guildID)

  if (!interaction.isCommand()) { return }
  const { commandName, options } = interaction

  if (commandName === 'profile') {
    if (interaction.options.getString('id')) {
      var sql = `SELECT * FROM users WHERE id_discord = ${interaction.options.getString('id')}`
      connection.query(sql, function (err, result, fields) {
        if (err) throw err;
        if (result.length > 0 ) {
          let data = result.map(v => {
            if ( v.experience < level_1 ) { var level = '0'; var next = level_1 - level_0; var max = level_0; var set = level_1; }
            else if ( v.experience < level_2 ) { var level = '1'; var next = level_2 - level_1; var max = level_1; var set = level_2; }
            else if ( v.experience < level_3 ) { var level = '2'; var next = level_3 - level_2; var max = level_2; var set = level_3; }
            else if ( v.experience < level_4 ) { var level = '3'; var next = level_4 - level_3; var max = level_3; var set = level_4; }
            else if ( v.experience < level_5 ) { var level = '4'; var next = level_5 - level_4; var max = level_4; var set = level_5; }
            else if ( v.experience < level_6 ) { var level = '5'; var next = level_6 - level_5; var max = level_5; var set = level_6; }
            else if ( v.experience < level_7 ) { var level = '6'; var next = level_7 - level_6; var max = level_6; var set = level_7; }
            else if ( v.experience < level_8 ) { var level = '7'; var next = level_8 - level_7; var max = level_7; var set = level_8; }
            else if ( v.experience < level_9 ) { var level = '8'; var next = level_9 - level_8; var max = level_8; var set = level_9; }
            else if ( v.experience < level_10 ) { var level = '9'; var next = level_10 - level_9; var max = level_9; var set = level_10; }
            else if ( v.experience < level_11 ) { var level = '10'; var next = level_11 - level_10; var max = level_10; var set = level_11; }
            else if ( v.experience < level_12 ) { var level = '11'; var next = level_12 - level_11; var max = level_11; var set = level_12; }
            else if ( v.experience < level_13 ) { var level = '12'; var next = level_13 - level_12; var max = level_12; var set = level_13; }
            else if ( v.experience < level_14 ) { var level = '13'; var next = level_14 - level_13; var max = level_13; var set = level_14; }
            else if ( v.experience < level_15 ) { var level = '14'; var next = level_15 - level_14; var max = level_14; var set = level_15; }
            else if ( v.experience < level_16 ) { var level = '15'; var next = level_16 - level_15; var max = level_15; var set = level_16; }
            else if ( v.experience < level_17 ) { var level = '16'; var next = level_17 - level_16; var max = level_16; var set = level_17; }
            else if ( v.experience < level_18 ) { var level = '17'; var next = level_18 - level_17; var max = level_17; var set = level_18; }
            else if ( v.experience < level_19 ) { var level = '18'; var next = level_19 - level_18; var max = level_18; var set = level_19; }
            else if ( v.experience < level_20 ) { var level = '19'; var next = level_20 - level_19; var max = level_19; var set = level_20; }
            else { var level = '20'; var next = 0; }

            var progress   = (v.experience - max);
            var progress_1 = (progress / next) * 100;

            if ( v.id_role == 1 ) { var roles = 'Administrator'; }
            if ( v.id_role == 2 ) { var roles = 'Member'; }
            if ( v.id_role == 3 ) { var roles = 'User'; }

            interaction.reply({
              content: `ID : <@${interaction.options.getString('id')}>,
              Access : ${roles}
              Experience : ${v.experience}/${set} (${progress_1.toFixed(2)}%)
              Level : ${level}`,
              ephemeral: true,
            })
          })
        }
        else {
          interaction.reply({
            content: `There's no record!`,
            ephemeral: true,
          })
        }
      })

    }
    else {
      var sql = `SELECT * FROM users WHERE id_discord = ${interaction.user.id}`
      connection.query(sql, function (err, result, fields) {
        if (err) throw err;
        if (result.length > 0 ) {
          let data = result.map(v => {
            if ( v.experience < level_1 ) { var level = '0'; var next = level_1 - level_0; var max = level_0; var set = level_1; }
            else if ( v.experience < level_2 ) { var level = '1'; var next = level_2 - level_1; var max = level_1; var set = level_2; }
            else if ( v.experience < level_3 ) { var level = '2'; var next = level_3 - level_2; var max = level_2; var set = level_3; }
            else if ( v.experience < level_4 ) { var level = '3'; var next = level_4 - level_3; var max = level_3; var set = level_4; }
            else if ( v.experience < level_5 ) { var level = '4'; var next = level_5 - level_4; var max = level_4; var set = level_5; }
            else if ( v.experience < level_6 ) { var level = '5'; var next = level_6 - level_5; var max = level_5; var set = level_6; }
            else if ( v.experience < level_7 ) { var level = '6'; var next = level_7 - level_6; var max = level_6; var set = level_7; }
            else if ( v.experience < level_8 ) { var level = '7'; var next = level_8 - level_7; var max = level_7; var set = level_8; }
            else if ( v.experience < level_9 ) { var level = '8'; var next = level_9 - level_8; var max = level_8; var set = level_9; }
            else if ( v.experience < level_10 ) { var level = '9'; var next = level_10 - level_9; var max = level_9; var set = level_10; }
            else if ( v.experience < level_11 ) { var level = '10'; var next = level_11 - level_10; var max = level_10; var set = level_11; }
            else if ( v.experience < level_12 ) { var level = '11'; var next = level_12 - level_11; var max = level_11; var set = level_12; }
            else if ( v.experience < level_13 ) { var level = '12'; var next = level_13 - level_12; var max = level_12; var set = level_13; }
            else if ( v.experience < level_14 ) { var level = '13'; var next = level_14 - level_13; var max = level_13; var set = level_14; }
            else if ( v.experience < level_15 ) { var level = '14'; var next = level_15 - level_14; var max = level_14; var set = level_15; }
            else if ( v.experience < level_16 ) { var level = '15'; var next = level_16 - level_15; var max = level_15; var set = level_16; }
            else if ( v.experience < level_17 ) { var level = '16'; var next = level_17 - level_16; var max = level_16; var set = level_17; }
            else if ( v.experience < level_18 ) { var level = '17'; var next = level_18 - level_17; var max = level_17; var set = level_18; }
            else if ( v.experience < level_19 ) { var level = '18'; var next = level_19 - level_18; var max = level_18; var set = level_19; }
            else if ( v.experience < level_20 ) { var level = '19'; var next = level_20 - level_19; var max = level_19; var set = level_20; }
            else { var level = '20'; var next = 0; }

            var progress   = (v.experience - max);
            var progress_1 = (progress / next) * 100;

            if ( v.id_role == 1 ) { var roles = 'Administrator'; }
            if ( v.id_role == 2 ) { var roles = 'Member'; }
            if ( v.id_role == 3 ) { var roles = 'User'; }

            interaction.reply({
              content: `ID : <@${interaction.user.id}>,
              Access : ${roles}
              Experience : ${v.experience}/${set} (${progress_1.toFixed(2)}%)
              Balance : ${v.balance}
              Level : ${level}`,
              ephemeral: true,
            })
          })
        }
      })
    }
  }

  else if (commandName === 'help') {
    interaction.reply({
      content: `Server Command :
      /status , check your profile (experience & level)
      /balance , check your balance
      /store , boost your experience & level
      /transfer , transfer balance to other user`,
      ephemeral: true,
    })
  }
});

client.on("message", (message) => {
  var sql = `SELECT * FROM users WHERE id_discord = ${message.author.id}`
  connection.query(sql, function (err, result, fields, steam32ID) {
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

        // TEST
        else if (message.content.startsWith(prefix + "statsdota")) {
          https.get("https://api.opendota.com/api/players/" + v.id_dotaplayer, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => { body += data; });
            res.on("end", () => {
              body = JSON.parse(body);
                https.get("https://api.opendota.com/api/players/" + v.id_dotaplayer + "/wl", res => {
                  res.setEncoding("utf8");
                  let body2 = "";
                  res.on("data", data2 => { body2 += data2; });
                  res.on("end", () => {
                    body2 = JSON.parse(body2);
                    if (body.profile == undefined) {
                      message.channel.send(`<@${message.author.id}> There's no record!, Use the command !register dota <id>`);
                      message.channel.send(`<@${message.author.id}> Check your ID: https://www.opendota.com/`);
                    }
                    wins = body2.win;
                    loss = body2.lose;
                    var test2 = (body2.win / (body2.win + body2.lose)) * 100;
                    https.get("https://api.opendota.com/api/players/" + v.id_dotaplayer + "/recentMatches", res => {
                      res.setEncoding("utf8");
                      let tempData = "";
                      res.on("data", data3 => { tempData += data3; });
                      res.on("end", () => {
                        tempData = JSON.parse(tempData);
                        var match = tempData[0];
                        if (body.rank_tier !== null) {
                          if (body.rank_tier > '70') { rankString = "Divine [" }
                          else if (body.rank_tier > '60') { rankString = "Ancient [" }
                          else if (body.rank_tier > '50') { rankString = "Legend [" }
                          else if (body.rank_tier > '40') { rankString = "Archon [" }
                          else if (body.rank_tier > '30') { rankString = "Guardian [" }
                          else if (body.rank_tier > '20') { rankString = "Herald ["; }
                          rankString += (body.rank_tier + "").substring(1) + "]"
                        }

                        // TEST
                        const exampleEmbed = new MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle(v.id_dotaplayer)
                        .setURL('https://www.opendota.com/players/' + v.id_dotaplayer)
                        .setAuthor(body.profile.personaname, body.profile.avatarfull + "", 'https://www.opendota.com/players/' + v.id_dotaplayer)
                        .setDescription(
                          "WL : " + body2.win + "/" + body2.lose + "\n" +
                          "Winsrate : " + test2.toFixed(2) + "%" + "\n")
                          .setTimestamp()
                          .setFooter('Dota 2', body.profile.avatarfull + "");
                          message.channel.send({ embeds: [exampleEmbed] });
                          // END TEST

                        });
                      });
                    });
                  });
              });
            });
            // END DOTA STATS

          }

          // IGNORING EXPERIENCE FROM COMMAND
          else {
            connection.query(`UPDATE users SET experience = ${(v.experience * 1) + message.content.length} WHERE id_discord = ${message.author.id}`)

            // SET AUTO ROLE
            var level = (v.experience * 1) + message.content.length;

            if ( level > level_10 ) {
              var addrole = message.guild.roles.cache.find(r => r.name === "Level 10");
              var delrole = message.guild.roles.cache.find(r => r.name === "Level 9");
              message.guild.members.cache.get(message.author.id).roles.add(addrole);
              message.guild.members.cache.get(message.author.id).roles.remove(delrole);
            }
            else if ( level > level_9 ) {
              var addrole = message.guild.roles.cache.find(r => r.name === "Level 9");
              var delrole = message.guild.roles.cache.find(r => r.name === "Level 8");
              message.guild.members.cache.get(message.author.id).roles.add(addrole);
              message.guild.members.cache.get(message.author.id).roles.remove(delrole);
            }
            else if ( level > level_8 ) {
              var addrole = message.guild.roles.cache.find(r => r.name === "Level 8");
              var delrole = message.guild.roles.cache.find(r => r.name === "Level 7");
              message.guild.members.cache.get(message.author.id).roles.add(addrole);
              message.guild.members.cache.get(message.author.id).roles.remove(delrole);
            }
            else if ( level > level_7 ) {
              var addrole = message.guild.roles.cache.find(r => r.name === "Level 7");
              var delrole = message.guild.roles.cache.find(r => r.name === "Level 6");
              message.guild.members.cache.get(message.author.id).roles.add(addrole);
              message.guild.members.cache.get(message.author.id).roles.remove(delrole);
            }
            else if ( level > level_6 ) {
              var addrole = message.guild.roles.cache.find(r => r.name === "Level 6");
              var delrole = message.guild.roles.cache.find(r => r.name === "Level 5");
              message.guild.members.cache.get(message.author.id).roles.add(addrole);
              message.guild.members.cache.get(message.author.id).roles.remove(delrole);
            }
            else if ( level > level_5 ) {
              var addrole = message.guild.roles.cache.find(r => r.name === "Level 5");
              var delrole = message.guild.roles.cache.find(r => r.name === "Level 4");
              message.guild.members.cache.get(message.author.id).roles.add(addrole);
              message.guild.members.cache.get(message.author.id).roles.remove(delrole);
            }
            else if ( level > level_4 ) {
              var addrole = message.guild.roles.cache.find(r => r.name === "Level 4");
              var delrole = message.guild.roles.cache.find(r => r.name === "Level 3");
              message.guild.members.cache.get(message.author.id).roles.add(addrole);
              message.guild.members.cache.get(message.author.id).roles.remove(delrole);
            }
            else if ( level > level_3 ) {
              var addrole = message.guild.roles.cache.find(r => r.name === "Level 3");
              var delrole = message.guild.roles.cache.find(r => r.name === "Level 2");
              message.guild.members.cache.get(message.author.id).roles.add(addrole);
              message.guild.members.cache.get(message.author.id).roles.remove(delrole);
            }
            else if ( level > level_2 ) {
              var addrole = message.guild.roles.cache.find(r => r.name === "Level 2");
              var delrole = message.guild.roles.cache.find(r => r.name === "Level 1");
              message.guild.members.cache.get(message.author.id).roles.add(addrole);
              message.guild.members.cache.get(message.author.id).roles.remove(delrole);
            }
            else if ( level > level_1 ) {
              var role = message.guild.roles.cache.find(r => r.name === "Level 1");
              message.guild.members.cache.get(message.author.id).roles.add(role);
            }
            // END SET AUTO ROLE

          }
        })
      }
      else {
        connection.query(`INSERT INTO users (id_role, id_discord, name, experience, password) VALUES (3, ${message.author.id}, '${message.author.username}',  ${message.content.length}, '$2y$10$x8tLljlCUqzmy3TOsXnXxeZfGTbQY6gOchZtUikvfgWz/1N0UU.Qe')`)
      }
    })

  });

  client.login(process.env.TOKEN);
