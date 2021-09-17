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
    name: 'status',
    description: 'Check Your Profile (Experience & Level)',
  })

  commands?.create({
    name: 'balance',
    description: 'Check Your Balance',
  })

  commands?.create({
    name: 'store',
    description: 'Boost your experience & level',
  })

  commands?.create({
    name: 'transfer',
    description: 'Transfer Balance to Other User',
  })

  commands?.create({
    name: 'help',
    description: 'Help Commands Server',
  })

  commands?.create({
    name: 'check',
    description: 'Send a GIF of a penguin',
    options: [
      {
          name: "stickers",
          description: "Whether to show only stickers",
          // Type 5 is a boolean value
          type: 3,
          required: false
      }
    ]
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
          content: `Try to start sending message on channel, Good Luck!`,
          ephemeral: true,
        })
      }
    })
  }

  if (commandName === 'help') {
    interaction.reply({
      content: `Server Command :
      /status , check your profile (experience & level)
      /balance , check your balance
      /store , boost your experience & level
      /transfer , transfer balance to other user`,
      ephemeral: true,
    })
  }

  if (commandName === 'balance') {
    interaction.reply({
      content: `Not available at this time, under construction`,
      ephemeral: true,
    })
  }

  if (commandName === 'store') {
    interaction.reply({
      content: `Not available at this time, under construction`,
      ephemeral: true,
    })
  }

  if (commandName === 'transfer') {
    interaction.reply({
      content: `Not available at this time, under construction`,
      ephemeral: true,
    })
  }

});

client.on("message", (message) => {

  let role = message.guild.roles.cache.find(r => r.name === "Level 1");
  // ADD ROLE
  message.guild.members.cache.get(message.author.id).roles.add(role);
  // REMOVE ROLE
  // message.guild.members.cache.get(message.author.id).roles.remove(role);

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

          var channelID = "884992367650807828";
          var wins = "";
          var loss = "";
          https.get("https://api.opendota.com/api/players/" + v.id_dotaplayer, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
              body += data;
            });
            res.on("end", () => {
              body = JSON.parse(body);

              console.log(wins);



              https.get("https://api.opendota.com/api/players/" + v.id_dotaplayer + "/wl", res => {

                res.setEncoding("utf8");
                let body2 = "";
                res.on("data", data2 => {
                  body2 += data2;
                });
                res.on("end", () => {
                  body2 = JSON.parse(body2);
                  if (body.profile == undefined) {
                    console.log("profile not found");
                    return;
                  }
                  wins = body2.win;
                  loss = body2.lose;
                  console.log(body.profile.account_id);
                  var test2 = (body2.win / (body2.win + body2.lose)) * 100;
                  console.log("Wins : " + body2.win);
                  console.log("Losses : " + body2.lose);

                  https.get("https://api.opendota.com/api/players/" + v.id_dotaplayer + "/recentMatches", res => {
                    res.setEncoding("utf8");
                    let tempData = "";
                    res.on("data", data3 => {
                      tempData += data3;
                    });
                    res.on("end", () => {
                      tempData = JSON.parse(tempData);
                      // console.log(tempData);
                      var match = tempData[0];
                      console.log("match"+match);

                      var rankString = "";
                      if (body.rank_tier !== null) {
                        rankString += "Actual: ";
                        if (body.rank_tier > '70') { rankString += "Divine [" }
                        else if (body.rank_tier > '60') { rankString += "Ancient [" }
                        else if (body.rank_tier > '50') { rankString += "Legend [" }
                        else if (body.rank_tier > '40') { rankString += "Archon [" }
                        else if (body.rank_tier > '30') { rankString += "Guardian [" }
                        else if (body.rank_tier > '20') { rankString += "Herald ["; }
                        rankString += (body.rank_tier + "").substring(1) + "]; "
                        console.log(rankString);
                      }

                      var fieldsArray = [{
                        name: "Name",
                        value: body.profile.personaname + ""
                      },
                      {
                        name: "MMR",
                        value: rankString + "Estimated: " + body.mmr_estimate.estimate + ""
                      },
                      {
                        name: "Win/Loss",
                        value: "Wins: " + wins + " Losses: " + loss
                      }];

                      if (body.playerstats === undefined) {
                        console.log({
                          to: channelID,
                          message: "Your wish is my command " + "<@!>" + "!",
                          embed: {
                            title: "Steam",
                            url: "http://steamcommunity.com/id/1174475702",
                            description: "[OpenDota](https://www.opendota.com/players/" + body.profile.account_id + ")",
                              thumbnail: {
                                url: body.profile.avatarfull + ""
                              },
                              fields: fieldsArray
                            }
                          }, function(error, response) {
                            console.log(error);
                            console.log(response);
                          });
                        }

                        // TEST
                        const exampleEmbed = new MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle(rankString)
                        .setURL('https://discord.js.org/')
                        .setAuthor(body.profile.personaname, body.profile.avatarfull + "", 'https://discord.js.org')
                        .setDescription(
                          "Wins : " + body2.win + "\n" +
                          "Losses : " + body2.lose + "\n" +
                          "Winsrate : " + test2.toFixed(2) + "%" + "\n" +
                          "MMR : ±" + body.mmr_estimate.estimate)
                          // .setThumbnail('https://toppng.com//public/uploads/preview/dota-2-logo-png-image-library-download-logo-11563058448psapfna0tj.png')
                          // .addFields(
                          // 	{ name: 'Regular field title', value: 'Some value here' },
                          // 	{ name: '\u200B', value: '\u200B' },
                          // 	{ name: 'Inline field title', value: 'Some value here', inline: true },
                          // 	{ name: 'Inline field title', value: 'Some value here', inline: true },
                          // )
                          .addField('Inline field title', 'Some value here', true)
                          // .setImage(body.profile.avatarfull + "")
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
            }

          })
        }
        else {
          connection.query(`INSERT INTO users (id_role, id_discord, name, experience, password) VALUES (3, ${message.author.id}, '${message.author.username}',  ${message.content.length}, '$2y$10$x8tLljlCUqzmy3TOsXnXxeZfGTbQY6gOchZtUikvfgWz/1N0UU.Qe')`)
        }
      })

    });

    client.login(process.env.TOKEN);
