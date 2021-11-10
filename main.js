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
var level_1 = 50;
var level_2 = 100;
var level_3 = 150;
var level_4 = 200;
var level_5 = 250;
var level_6 = 350;
var level_7 = 450;
var level_8 = 550;
var level_9 = 650;
var level_10 = 750;
var level_11 = 900;
var level_12 = 1050;
var level_13 = 1200;
var level_14 = 1350;
var level_15 = 1500;
var level_16 = 1700;
var level_17 = 1900;
var level_18 = 2100;
var level_19 = 2300;
var level_20 = 2500;
var level_21 = 2750;
var level_22 = 3000;
var level_23 = 3250;
var level_24 = 3500;
var level_25 = 3750;
var level_26 = 4050;
var level_27 = 4350;
var level_28 = 4650;
var level_29 = 4950;
var level_30 = 5250;
var level_31 = 5600;
var level_32 = 5950;
var level_33 = 6300;
var level_34 = 6650;
var level_35 = 7000;
var level_36 = 7400;
var level_37 = 7800;
var level_38 = 8200;
var level_39 = 8600;
var level_40 = 9000;
var level_41 = 9450;
var level_42 = 9900;
var level_43 = 10350;
var level_44 = 10800;
var level_45 = 11250;
var level_46 = 11750;
var level_47 = 12250;
var level_48 = 13250;
var level_49 = 13750;
var level_50 = 14250;

var level_51 = 14800;
var level_52 = 15350;
var level_53 = 15900;
var level_54 = 16450;
var level_55 = 17000;
var level_56 = 17550;
var level_57 = 18100;
var level_58 = 18650;
var level_59 = 19200;
var level_60 = 19750; // Last +550

const fs = require('fs');
const path = require('path');

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
            else if ( v.experience < level_21 ) { var level = '20'; var next = level_21 - level_20; var max = level_20; var set = level_21; }
            else if ( v.experience < level_22 ) { var level = '21'; var next = level_22 - level_21; var max = level_21; var set = level_22; }
            else if ( v.experience < level_23 ) { var level = '22'; var next = level_23 - level_22; var max = level_22; var set = level_23; }
            else if ( v.experience < level_24 ) { var level = '23'; var next = level_24 - level_23; var max = level_23; var set = level_24; }
            else if ( v.experience < level_25 ) { var level = '24'; var next = level_25 - level_24; var max = level_24; var set = level_25; }
            else if ( v.experience < level_26 ) { var level = '25'; var next = level_26 - level_25; var max = level_25; var set = level_26; }
            else if ( v.experience < level_27 ) { var level = '26'; var next = level_27 - level_26; var max = level_26; var set = level_27; }
            else if ( v.experience < level_28 ) { var level = '27'; var next = level_28 - level_28; var max = level_27; var set = level_28; }
            else if ( v.experience < level_29 ) { var level = '28'; var next = level_29 - level_29; var max = level_28; var set = level_29; }
            else if ( v.experience < level_30 ) { var level = '29'; var next = level_30 - level_30; var max = level_29; var set = level_30; }
            else if ( v.experience < level_31 ) { var level = '30'; var next = level_31 - level_30; var max = level_30; var set = level_31; }
            else if ( v.experience < level_32 ) { var level = '31'; var next = level_32 - level_31; var max = level_31; var set = level_32; }
            else if ( v.experience < level_33 ) { var level = '32'; var next = level_33 - level_32; var max = level_32; var set = level_33; }
            else if ( v.experience < level_34 ) { var level = '33'; var next = level_34 - level_33; var max = level_33; var set = level_34; }
            else if ( v.experience < level_35 ) { var level = '34'; var next = level_35 - level_34; var max = level_34; var set = level_35; }
            else if ( v.experience < level_36 ) { var level = '35'; var next = level_36 - level_35; var max = level_35; var set = level_36; }
            else if ( v.experience < level_37 ) { var level = '36'; var next = level_37 - level_36; var max = level_36; var set = level_37; }
            else if ( v.experience < level_38 ) { var level = '37'; var next = level_38 - level_38; var max = level_37; var set = level_38; }
            else if ( v.experience < level_39 ) { var level = '38'; var next = level_39 - level_39; var max = level_38; var set = level_39; }
            else if ( v.experience < level_40 ) { var level = '39'; var next = level_40 - level_40; var max = level_39; var set = level_40; }
            else if ( v.experience < level_41 ) { var level = '40'; var next = level_41 - level_40; var max = level_40; var set = level_41; }
            else if ( v.experience < level_42 ) { var level = '41'; var next = level_42 - level_41; var max = level_41; var set = level_42; }
            else if ( v.experience < level_43 ) { var level = '42'; var next = level_43 - level_42; var max = level_42; var set = level_43; }
            else if ( v.experience < level_44 ) { var level = '43'; var next = level_44 - level_43; var max = level_43; var set = level_44; }
            else if ( v.experience < level_45 ) { var level = '44'; var next = level_45 - level_44; var max = level_44; var set = level_45; }
            else if ( v.experience < level_46 ) { var level = '45'; var next = level_46 - level_45; var max = level_45; var set = level_46; }
            else if ( v.experience < level_47 ) { var level = '46'; var next = level_47 - level_46; var max = level_46; var set = level_47; }
            else if ( v.experience < level_48 ) { var level = '47'; var next = level_48 - level_47; var max = level_47; var set = level_48; }
            else if ( v.experience < level_49 ) { var level = '48'; var next = level_49 - level_48; var max = level_48; var set = level_49; }
            else if ( v.experience < level_50 ) { var level = '49'; var next = level_50 - level_49; var max = level_49; var set = level_50; }
            else if ( v.experience < level_51 ) { var level = '50'; var next = level_51 - level_50; var max = level_50; var set = level_51; }
            else if ( v.experience < level_52 ) { var level = '51'; var next = level_52 - level_51; var max = level_51; var set = level_52; }
            else if ( v.experience < level_53 ) { var level = '52'; var next = level_53 - level_52; var max = level_52; var set = level_53; }
            else if ( v.experience < level_54 ) { var level = '53'; var next = level_54 - level_53; var max = level_53; var set = level_54; }
            else if ( v.experience < level_55 ) { var level = '54'; var next = level_55 - level_54; var max = level_54; var set = level_55; }
            else if ( v.experience < level_56 ) { var level = '55'; var next = level_56 - level_55; var max = level_55; var set = level_56; }
            else if ( v.experience < level_57 ) { var level = '56'; var next = level_57 - level_56; var max = level_56; var set = level_57; }
            else if ( v.experience < level_58 ) { var level = '57'; var next = level_58 - level_57; var max = level_57; var set = level_58; }
            else if ( v.experience < level_59 ) { var level = '58'; var next = level_59 - level_58; var max = level_58; var set = level_59; }
            else if ( v.experience < level_60 ) { var level = '59'; var next = level_60 - level_59; var max = level_59; var set = level_60; }
            else { var level = '60'; var next = 0; }

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
            else if ( v.experience < level_21 ) { var level = '20'; var next = level_21 - level_20; var max = level_20; var set = level_21; }
            else if ( v.experience < level_22 ) { var level = '21'; var next = level_22 - level_21; var max = level_21; var set = level_22; }
            else if ( v.experience < level_23 ) { var level = '22'; var next = level_23 - level_22; var max = level_22; var set = level_23; }
            else if ( v.experience < level_24 ) { var level = '23'; var next = level_24 - level_23; var max = level_23; var set = level_24; }
            else if ( v.experience < level_25 ) { var level = '24'; var next = level_25 - level_24; var max = level_24; var set = level_25; }
            else if ( v.experience < level_26 ) { var level = '25'; var next = level_26 - level_25; var max = level_25; var set = level_26; }
            else if ( v.experience < level_27 ) { var level = '26'; var next = level_27 - level_26; var max = level_26; var set = level_27; }
            else if ( v.experience < level_28 ) { var level = '27'; var next = level_28 - level_28; var max = level_27; var set = level_28; }
            else if ( v.experience < level_29 ) { var level = '28'; var next = level_29 - level_29; var max = level_28; var set = level_29; }
            else if ( v.experience < level_30 ) { var level = '29'; var next = level_30 - level_30; var max = level_29; var set = level_30; }
            else if ( v.experience < level_31 ) { var level = '30'; var next = level_31 - level_30; var max = level_30; var set = level_31; }
            else if ( v.experience < level_32 ) { var level = '31'; var next = level_32 - level_31; var max = level_31; var set = level_32; }
            else if ( v.experience < level_33 ) { var level = '32'; var next = level_33 - level_32; var max = level_32; var set = level_33; }
            else if ( v.experience < level_34 ) { var level = '33'; var next = level_34 - level_33; var max = level_33; var set = level_34; }
            else if ( v.experience < level_35 ) { var level = '34'; var next = level_35 - level_34; var max = level_34; var set = level_35; }
            else if ( v.experience < level_36 ) { var level = '35'; var next = level_36 - level_35; var max = level_35; var set = level_36; }
            else if ( v.experience < level_37 ) { var level = '36'; var next = level_37 - level_36; var max = level_36; var set = level_37; }
            else if ( v.experience < level_38 ) { var level = '37'; var next = level_38 - level_37; var max = level_37; var set = level_38; }
            else if ( v.experience < level_39 ) { var level = '38'; var next = level_39 - level_38; var max = level_38; var set = level_39; }
            else if ( v.experience < level_40 ) { var level = '39'; var next = level_40 - level_40; var max = level_39; var set = level_40; }
            else if ( v.experience < level_41 ) { var level = '40'; var next = level_41 - level_40; var max = level_40; var set = level_41; }
            else if ( v.experience < level_42 ) { var level = '41'; var next = level_42 - level_41; var max = level_41; var set = level_42; }
            else if ( v.experience < level_43 ) { var level = '42'; var next = level_43 - level_42; var max = level_42; var set = level_43; }
            else if ( v.experience < level_44 ) { var level = '43'; var next = level_44 - level_43; var max = level_43; var set = level_44; }
            else if ( v.experience < level_45 ) { var level = '44'; var next = level_45 - level_44; var max = level_44; var set = level_45; }
            else if ( v.experience < level_46 ) { var level = '45'; var next = level_46 - level_45; var max = level_45; var set = level_46; }
            else if ( v.experience < level_47 ) { var level = '46'; var next = level_47 - level_46; var max = level_46; var set = level_47; }
            else if ( v.experience < level_48 ) { var level = '47'; var next = level_48 - level_47; var max = level_47; var set = level_48; }
            else if ( v.experience < level_49 ) { var level = '48'; var next = level_49 - level_48; var max = level_48; var set = level_49; }
            else if ( v.experience < level_50 ) { var level = '49'; var next = level_50 - level_49; var max = level_49; var set = level_50; }
            else if ( v.experience < level_51 ) { var level = '50'; var next = level_51 - level_50; var max = level_50; var set = level_51; }
            else if ( v.experience < level_52 ) { var level = '51'; var next = level_52 - level_51; var max = level_51; var set = level_52; }
            else if ( v.experience < level_53 ) { var level = '52'; var next = level_53 - level_52; var max = level_52; var set = level_53; }
            else if ( v.experience < level_54 ) { var level = '53'; var next = level_54 - level_53; var max = level_53; var set = level_54; }
            else if ( v.experience < level_55 ) { var level = '54'; var next = level_55 - level_54; var max = level_54; var set = level_55; }
            else if ( v.experience < level_56 ) { var level = '55'; var next = level_56 - level_55; var max = level_55; var set = level_56; }
            else if ( v.experience < level_57 ) { var level = '56'; var next = level_57 - level_56; var max = level_56; var set = level_57; }
            else if ( v.experience < level_58 ) { var level = '57'; var next = level_58 - level_57; var max = level_57; var set = level_58; }
            else if ( v.experience < level_59 ) { var level = '58'; var next = level_59 - level_58; var max = level_58; var set = level_59; }
            else if ( v.experience < level_60 ) { var level = '59'; var next = level_60 - level_59; var max = level_59; var set = level_60; }
            else { var level = '60'; var next = 0; }

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
      /profile , check your profile and user id (experience & level)`,
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
              const fetched = await message.channel.messages.fetch({limit: 50});
              message.channel.bulkDelete(100, true);
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
              console.log(level);

              if ( level > level_60 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 60"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 59"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 60' );
              }
              else if ( level > level_59 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 59"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 58"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 59' );
              }
              else if ( level > level_58 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 58"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 57"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 58' );
              }
              else if ( level > level_57 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 57"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 56"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 57' );
              }
              else if ( level > level_56 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 56"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 55"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 56' );
              }
              else if ( level > level_55 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 55"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 54"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 55' );
              }
              else if ( level > level_54 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 54"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 53"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 54' );
              }
              else if ( level > level_53 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 53"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 52"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 53' );
              }
              else if ( level > level_52 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 52"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 51"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 52' );
              }
              else if ( level > level_51 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 51"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 50"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 51' );
              }
              else if ( level > level_50 ) {
                message.guild.members.cache.get(message.author.id).roles.add(addrole);
                message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 50");
                var addrole = message.guild.roles.cache.find(r => r.name === "Bronze Member");
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 49");
                message.channel.send("User <@" + message.author.id + '> has reached level 50, and has reached bronze member status' );
              }
              else if ( level > level_49 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 49"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 48"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 49' );
              }
              else if ( level > level_48 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 48"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 47"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 48' );
              }
              else if ( level > level_47 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 47"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 46"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 47' );
              }
              else if ( level > level_46 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 46"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 45"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 46' );
              }
              else if ( level > level_45 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 45"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 44"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 45' );
              }
              else if ( level > level_44 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 44"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 43"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 44' );
              }
              else if ( level > level_43 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 43"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 42"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 43' );
              }
              else if ( level > level_42 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 42"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 41"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 42' );
              }
              else if ( level > level_41 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 41"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 40"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 41' );
              }
              else if ( level > level_40 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 40"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 39"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 40' );
              }
              else if ( level > level_39 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 39"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 38"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 39' );
              }
              else if ( level > level_38 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 38"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 27"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 38' );
              }
              else if ( level > level_37 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 37"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 36"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 37' );
              }
              else if ( level > level_36 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 36"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 35"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 36' );
              }
              else if ( level > level_35 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 35"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 34"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 35' );
              }
              else if ( level > level_34 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 34"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 33"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 34' );
              }
              else if ( level > level_33 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 33"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 32"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 33' );
              }
              else if ( level > level_32 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 32"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 31"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 32' );
              }
              else if ( level > level_31 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 31"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 30"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 31' );
              }
              else if ( level > level_30 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 30"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 29"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 30' );
              }
              else if ( level > level_29 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 29"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 28"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 29' );
              }
              else if ( level > level_28 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 28"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 27"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 28' );
              }
              else if ( level > level_27 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 27"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 26"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 27' );
              }
              else if ( level > level_26 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 26"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 25"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 26' );
              }
              else if ( level > level_25 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 25"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 24"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 25' );
              }
              else if ( level > level_24 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 24"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 23"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 24' );
              }
              else if ( level > level_23 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 23"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 22"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 23' );
              }
              else if ( level > level_22 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 22"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 21"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 22' );
              }
              else if ( level > level_21 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 21"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 20"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 21' );
              }
              else if ( level > level_20 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 20"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 19"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 20' );
              }
              else if ( level > level_19 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 19"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 18"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 19' );
              }
              else if ( level > level_18 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 18"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 17"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 18' );
              }
              else if ( level > level_17 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 17"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 16"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 17' );
              }
              else if ( level > level_16 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 16"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 15"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 16' );
              }
              else if ( level > level_15 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 15"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 14"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 15' );
              }
              else if ( level > level_14 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 14"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 13"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 14' );
              }
              else if ( level > level_13 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 13"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 12"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 13' );
              }
              else if ( level > level_12 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 12"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 11"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 12' );
              }
              else if ( level > level_11 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 11"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 10"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 11' );
              }
              else if ( level > level_10 ) {
                message.guild.members.cache.get(message.author.id).roles.add(addrole);
                message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 10");
                var addrole = message.guild.roles.cache.find(r => r.name === "Member");
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 9");
                message.channel.send("User <@" + message.author.id + '> has reached level 10, and has reached member status' );
              }
              else if ( level > level_9 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 9"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 8"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 9' );
              }
              else if ( level > level_8 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 8"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 7"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 8' );
              }
              else if ( level > level_7 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 7"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 6"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 7' );
              }
              else if ( level > level_6 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 6"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 5"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 6' );
              }
              else if ( level > level_5 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 5"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 4"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 5' );
              }
              else if ( level > level_4 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 4"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 3"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 4' );
              }
              else if ( level > level_3 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 3"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 2"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User <@" + message.author.id + '> has reached level 3' );
              }
              else if ( level > level_2 ) {
                var addrole = message.guild.roles.cache.find(r => r.name === "Level 2"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                var delrole = message.guild.roles.cache.find(r => r.name === "Level 1"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                message.channel.send("User @{" + message.author.id + '} has reached level 2' );
              }
              else {
                var role = message.guild.roles.cache.find(r => r.name === "Level 1"); message.guild.members.cache.get(message.author.id).roles.add(role);
                message.channel.send("User <@" + message.author.id + '> has reached level 1' );
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
