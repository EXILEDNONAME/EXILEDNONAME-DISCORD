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
var level_60 = 19750;
var level_61 = 20350;
var level_62 = 20950;
var level_63 = 21550;
var level_64 = 22150;
var level_65 = 22750;
var level_66 = 23350;
var level_67 = 23950;
var level_68 = 24550;
var level_69 = 25150;
var level_70 = 25750;
var level_71 = 26400;
var level_72 = 27050;
var level_73 = 27700;
var level_74 = 28350;
var level_75 = 29000;
var level_76 = 29650;
var level_77 = 30300;
var level_78 = 30950;
var level_79 = 31600;
var level_80 = 32250;
var level_81 = 32950;
var level_82 = 33650;
var level_83 = 34350;
var level_84 = 35050;
var level_85 = 35750;
var level_86 = 36450;
var level_87 = 37150;
var level_88 = 37850;
var level_89 = 38550;
var level_90 = 39250;
var level_91 = 40000;
var level_92 = 40750;
var level_93 = 41500;
var level_94 = 42250;
var level_95 = 43000;
var level_96 = 43750;
var level_97 = 44500;
var level_98 = 45250;
var level_99 = 46000;
var level_100 = 46750;

var level_101 = 47550;
var level_102 = 48350;
var level_103 = 49150;
var level_104 = 49950;
var level_105 = 50750;
var level_106 = 51550;
var level_107 = 52350;
var level_108 = 53150;
var level_109 = 53950;
var level_100 = 54750;
var level_110 = 55550;
// Last +800

const fs = require('fs');
const path = require('path');

connection.connect(err => {
  if(err) throw err;
  console.log("Connecting To Server .....");
});

client.on('guildMemberAdd', member => {
  member.guild.channels.get('889590573953081444').send('Hi **' + member.user.username + '**, thanks for joined!');
});

client.on('guildMemberRemove', member => {
  member.guild.channels.get('889590573953081444').send('Oh noo **' + member.user.username + '**, has left :(');
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
            else if ( v.experience < level_38 ) { var level = '37'; var next = level_38 - level_37; var max = level_37; var set = level_38; }
            else if ( v.experience < level_39 ) { var level = '38'; var next = level_39 - level_38; var max = level_38; var set = level_39; }
            else if ( v.experience < level_40 ) { var level = '39'; var next = level_40 - level_39; var max = level_39; var set = level_40; }
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
            else if ( v.experience < level_61 ) { var level = '60'; var next = level_61 - level_60; var max = level_60; var set = level_61; }
            else if ( v.experience < level_62 ) { var level = '61'; var next = level_62 - level_61; var max = level_61; var set = level_62; }
            else if ( v.experience < level_63 ) { var level = '62'; var next = level_63 - level_62; var max = level_62; var set = level_63; }
            else if ( v.experience < level_64 ) { var level = '63'; var next = level_64 - level_63; var max = level_63; var set = level_64; }
            else if ( v.experience < level_65 ) { var level = '64'; var next = level_65 - level_64; var max = level_64; var set = level_65; }
            else if ( v.experience < level_66 ) { var level = '65'; var next = level_66 - level_65; var max = level_65; var set = level_66; }
            else if ( v.experience < level_67 ) { var level = '66'; var next = level_67 - level_66; var max = level_66; var set = level_67; }
            else if ( v.experience < level_68 ) { var level = '67'; var next = level_68 - level_67; var max = level_67; var set = level_68; }
            else if ( v.experience < level_69 ) { var level = '68'; var next = level_69 - level_68; var max = level_68; var set = level_69; }
            else if ( v.experience < level_70 ) { var level = '69'; var next = level_70 - level_69; var max = level_69; var set = level_70; }
            else if ( v.experience < level_71 ) { var level = '70'; var next = level_71 - level_70; var max = level_70; var set = level_71; }
            else if ( v.experience < level_72 ) { var level = '71'; var next = level_72 - level_71; var max = level_71; var set = level_72; }
            else if ( v.experience < level_73 ) { var level = '72'; var next = level_73 - level_72; var max = level_72; var set = level_73; }
            else if ( v.experience < level_74 ) { var level = '73'; var next = level_74 - level_73; var max = level_73; var set = level_74; }
            else if ( v.experience < level_75 ) { var level = '74'; var next = level_75 - level_74; var max = level_74; var set = level_75; }
            else if ( v.experience < level_76 ) { var level = '75'; var next = level_76 - level_75; var max = level_75; var set = level_76; }
            else if ( v.experience < level_77 ) { var level = '76'; var next = level_77 - level_76; var max = level_76; var set = level_77; }
            else if ( v.experience < level_78 ) { var level = '77'; var next = level_78 - level_77; var max = level_77; var set = level_78; }
            else if ( v.experience < level_79 ) { var level = '78'; var next = level_79 - level_78; var max = level_78; var set = level_79; }
            else if ( v.experience < level_80 ) { var level = '79'; var next = level_80 - level_79; var max = level_79; var set = level_80; }
            else if ( v.experience < level_81 ) { var level = '80'; var next = level_81 - level_80; var max = level_80; var set = level_81; }
            else if ( v.experience < level_82 ) { var level = '81'; var next = level_82 - level_81; var max = level_81; var set = level_82; }
            else if ( v.experience < level_83 ) { var level = '82'; var next = level_83 - level_82; var max = level_82; var set = level_83; }
            else if ( v.experience < level_84 ) { var level = '83'; var next = level_84 - level_83; var max = level_83; var set = level_84; }
            else if ( v.experience < level_85 ) { var level = '84'; var next = level_85 - level_84; var max = level_84; var set = level_85; }
            else if ( v.experience < level_86 ) { var level = '85'; var next = level_86 - level_85; var max = level_85; var set = level_86; }
            else if ( v.experience < level_87 ) { var level = '86'; var next = level_87 - level_86; var max = level_86; var set = level_87; }
            else if ( v.experience < level_88 ) { var level = '87'; var next = level_88 - level_87; var max = level_87; var set = level_88; }
            else if ( v.experience < level_89 ) { var level = '88'; var next = level_89 - level_88; var max = level_88; var set = level_89; }
            else if ( v.experience < level_90 ) { var level = '89'; var next = level_90 - level_89; var max = level_89; var set = level_90; }
            else if ( v.experience < level_91 ) { var level = '90'; var next = level_91 - level_90; var max = level_90; var set = level_91; }
            else if ( v.experience < level_92 ) { var level = '91'; var next = level_92 - level_91; var max = level_91; var set = level_92; }
            else if ( v.experience < level_93 ) { var level = '92'; var next = level_93 - level_92; var max = level_92; var set = level_93; }
            else if ( v.experience < level_94 ) { var level = '93'; var next = level_94 - level_93; var max = level_93; var set = level_94; }
            else if ( v.experience < level_95 ) { var level = '94'; var next = level_95 - level_94; var max = level_94; var set = level_95; }
            else if ( v.experience < level_96 ) { var level = '95'; var next = level_96 - level_95; var max = level_95; var set = level_96; }
            else if ( v.experience < level_97 ) { var level = '96'; var next = level_97 - level_96; var max = level_96; var set = level_97; }
            else if ( v.experience < level_98 ) { var level = '97'; var next = level_98 - level_97; var max = level_97; var set = level_98; }
            else if ( v.experience < level_99 ) { var level = '98'; var next = level_99 - level_98; var max = level_98; var set = level_99; }
            else if ( v.experience < level_100 ) { var level = '99'; var next = level_100 - level_99; var max = level_99; var set = level_100; }
            else { var level = '100'; var next = 0; }

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
            else if ( v.experience < level_40 ) { var level = '39'; var next = level_40 - level_39; var max = level_39; var set = level_40; }
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
            else if ( v.experience < level_61 ) { var level = '60'; var next = level_61 - level_60; var max = level_60; var set = level_61; }
            else if ( v.experience < level_62 ) { var level = '61'; var next = level_62 - level_61; var max = level_61; var set = level_62; }
            else if ( v.experience < level_63 ) { var level = '62'; var next = level_63 - level_62; var max = level_62; var set = level_63; }
            else if ( v.experience < level_64 ) { var level = '63'; var next = level_64 - level_63; var max = level_63; var set = level_64; }
            else if ( v.experience < level_65 ) { var level = '64'; var next = level_65 - level_64; var max = level_64; var set = level_65; }
            else if ( v.experience < level_66 ) { var level = '65'; var next = level_66 - level_65; var max = level_65; var set = level_66; }
            else if ( v.experience < level_67 ) { var level = '66'; var next = level_67 - level_66; var max = level_66; var set = level_67; }
            else if ( v.experience < level_68 ) { var level = '67'; var next = level_68 - level_67; var max = level_67; var set = level_68; }
            else if ( v.experience < level_69 ) { var level = '68'; var next = level_69 - level_68; var max = level_68; var set = level_69; }
            else if ( v.experience < level_70 ) { var level = '69'; var next = level_70 - level_69; var max = level_69; var set = level_70; }
            else if ( v.experience < level_71 ) { var level = '70'; var next = level_71 - level_70; var max = level_70; var set = level_71; }
            else if ( v.experience < level_72 ) { var level = '71'; var next = level_72 - level_71; var max = level_71; var set = level_72; }
            else if ( v.experience < level_73 ) { var level = '72'; var next = level_73 - level_72; var max = level_72; var set = level_73; }
            else if ( v.experience < level_74 ) { var level = '73'; var next = level_74 - level_73; var max = level_73; var set = level_74; }
            else if ( v.experience < level_75 ) { var level = '74'; var next = level_75 - level_74; var max = level_74; var set = level_75; }
            else if ( v.experience < level_76 ) { var level = '75'; var next = level_76 - level_75; var max = level_75; var set = level_76; }
            else if ( v.experience < level_77 ) { var level = '76'; var next = level_77 - level_76; var max = level_76; var set = level_77; }
            else if ( v.experience < level_78 ) { var level = '77'; var next = level_78 - level_77; var max = level_77; var set = level_78; }
            else if ( v.experience < level_79 ) { var level = '78'; var next = level_79 - level_78; var max = level_78; var set = level_79; }
            else if ( v.experience < level_80 ) { var level = '79'; var next = level_80 - level_79; var max = level_79; var set = level_80; }
            else if ( v.experience < level_81 ) { var level = '80'; var next = level_81 - level_80; var max = level_80; var set = level_81; }
            else if ( v.experience < level_82 ) { var level = '81'; var next = level_82 - level_81; var max = level_81; var set = level_82; }
            else if ( v.experience < level_83 ) { var level = '82'; var next = level_83 - level_82; var max = level_82; var set = level_83; }
            else if ( v.experience < level_84 ) { var level = '83'; var next = level_84 - level_83; var max = level_83; var set = level_84; }
            else if ( v.experience < level_85 ) { var level = '84'; var next = level_85 - level_84; var max = level_84; var set = level_85; }
            else if ( v.experience < level_86 ) { var level = '85'; var next = level_86 - level_85; var max = level_85; var set = level_86; }
            else if ( v.experience < level_87 ) { var level = '86'; var next = level_87 - level_86; var max = level_86; var set = level_87; }
            else if ( v.experience < level_88 ) { var level = '87'; var next = level_88 - level_87; var max = level_87; var set = level_88; }
            else if ( v.experience < level_89 ) { var level = '88'; var next = level_89 - level_88; var max = level_88; var set = level_89; }
            else if ( v.experience < level_90 ) { var level = '89'; var next = level_90 - level_89; var max = level_89; var set = level_90; }
            else if ( v.experience < level_91 ) { var level = '90'; var next = level_91 - level_90; var max = level_90; var set = level_91; }
            else if ( v.experience < level_92 ) { var level = '91'; var next = level_92 - level_91; var max = level_91; var set = level_92; }
            else if ( v.experience < level_93 ) { var level = '92'; var next = level_93 - level_92; var max = level_92; var set = level_93; }
            else if ( v.experience < level_94 ) { var level = '93'; var next = level_94 - level_93; var max = level_93; var set = level_94; }
            else if ( v.experience < level_95 ) { var level = '94'; var next = level_95 - level_94; var max = level_94; var set = level_95; }
            else if ( v.experience < level_96 ) { var level = '95'; var next = level_96 - level_95; var max = level_95; var set = level_96; }
            else if ( v.experience < level_97 ) { var level = '96'; var next = level_97 - level_96; var max = level_96; var set = level_97; }
            else if ( v.experience < level_98 ) { var level = '97'; var next = level_98 - level_97; var max = level_97; var set = level_98; }
            else if ( v.experience < level_99 ) { var level = '98'; var next = level_99 - level_98; var max = level_98; var set = level_99; }
            else if ( v.experience < level_100 ) { var level = '99'; var next = level_100 - level_99; var max = level_99; var set = level_100; }
            else { var level = '100'; var next = 0; }

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

              if ( v.id_discord == 407547959605985280 || v.id_discord == 913081462394327070 ) {
                //
              }
              else {

                // SET AUTO ROLE
                var level = (v.experience * 1) + message.content.length;

                if ( level > level_100 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 100"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 99"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 100 ) { message.channel.send("User <@" + message.author.id + '> has reached level 100' ); }
                  connection.query(`UPDATE users SET level = 100 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_99 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 99"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 98"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 99 ) { message.channel.send("User <@" + message.author.id + '> has reached level 99' ); }
                  connection.query(`UPDATE users SET level = 99 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_98 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 98"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 97"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 98 ) { message.channel.send("User <@" + message.author.id + '> has reached level 98' ); }
                  connection.query(`UPDATE users SET level = 98 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_97 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 97"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 96"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 97 ) { message.channel.send("User <@" + message.author.id + '> has reached level 97' ); }
                  connection.query(`UPDATE users SET level = 97 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_96 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 96"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 95"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 96 ) { message.channel.send("User <@" + message.author.id + '> has reached level 96' ); }
                  connection.query(`UPDATE users SET level = 96 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_95 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 95"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 94"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 95 ) { message.channel.send("User <@" + message.author.id + '> has reached level 95' ); }
                  connection.query(`UPDATE users SET level = 95 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_94 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 94"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 93"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 94 ) { message.channel.send("User <@" + message.author.id + '> has reached level 94' ); }
                  connection.query(`UPDATE users SET level = 94 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_93 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 93"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 92"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 93 ) { message.channel.send("User <@" + message.author.id + '> has reached level 93' ); }
                  connection.query(`UPDATE users SET level = 93 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_92 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 92"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 91"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 92 ) { message.channel.send("User <@" + message.author.id + '> has reached level 92' ); }
                  connection.query(`UPDATE users SET level = 92 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_91 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 91"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 90"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 91 ) { message.channel.send("User <@" + message.author.id + '> has reached level 91' ); }
                  connection.query(`UPDATE users SET level = 91 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_90 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 90"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 89"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 90 ) { message.channel.send("User <@" + message.author.id + '> has reached level 90' ); }
                  connection.query(`UPDATE users SET level = 90 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_89 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 89"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 88"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 89 ) { message.channel.send("User <@" + message.author.id + '> has reached level 89' ); }
                  connection.query(`UPDATE users SET level = 89 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_88 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 88"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 87"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 88 ) { message.channel.send("User <@" + message.author.id + '> has reached level 88' ); }
                  connection.query(`UPDATE users SET level = 88 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_87 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 87"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 86"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 87 ) { message.channel.send("User <@" + message.author.id + '> has reached level 87' ); }
                  connection.query(`UPDATE users SET level = 87 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_86 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 86"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 85"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 86 ) { message.channel.send("User <@" + message.author.id + '> has reached level 86' ); }
                  connection.query(`UPDATE users SET level = 86 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_85 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 85"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 84"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 85 ) { message.channel.send("User <@" + message.author.id + '> has reached level 85' ); }
                  connection.query(`UPDATE users SET level = 85 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_84 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 84"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 83"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 84 ) { message.channel.send("User <@" + message.author.id + '> has reached level 84' ); }
                  connection.query(`UPDATE users SET level = 84 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_83 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 83"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 82"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 83 ) { message.channel.send("User <@" + message.author.id + '> has reached level 83' ); }
                  connection.query(`UPDATE users SET level = 83 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_82 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 82"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 81"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 82 ) { message.channel.send("User <@" + message.author.id + '> has reached level 82' ); }
                  connection.query(`UPDATE users SET level = 82 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_81 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 81"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 80"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 81 ) { message.channel.send("User <@" + message.author.id + '> has reached level 81' ); }
                  connection.query(`UPDATE users SET level = 81 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_80 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 80"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 79"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 80 ) { message.channel.send("User <@" + message.author.id + '> has reached level 80' ); }
                  connection.query(`UPDATE users SET level = 80 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_79 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 79"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 78"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 79 ) { message.channel.send("User <@" + message.author.id + '> has reached level 79' ); }
                  connection.query(`UPDATE users SET level = 79 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_78 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 78"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 77"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 78 ) { message.channel.send("User <@" + message.author.id + '> has reached level 78' ); }
                  connection.query(`UPDATE users SET level = 78 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_77 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 77"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 76"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 77 ) { message.channel.send("User <@" + message.author.id + '> has reached level 77' ); }
                  connection.query(`UPDATE users SET level = 77 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_76 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 76"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 75"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 76 ) { message.channel.send("User <@" + message.author.id + '> has reached level 76' ); }
                  connection.query(`UPDATE users SET level = 76 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_75 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 75"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 74"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 75 ) { message.channel.send("User <@" + message.author.id + '> has reached level 75' ); }
                  connection.query(`UPDATE users SET level = 75 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_74 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 74"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 73"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 74 ) { message.channel.send("User <@" + message.author.id + '> has reached level 74' ); }
                  connection.query(`UPDATE users SET level = 74 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_73 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 73"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 72"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 73 ) { message.channel.send("User <@" + message.author.id + '> has reached level 73' ); }
                  connection.query(`UPDATE users SET level = 73 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_72 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 72"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 71"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 72 ) { message.channel.send("User <@" + message.author.id + '> has reached level 72' ); }
                  connection.query(`UPDATE users SET level = 72 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_71 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 71"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 70"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 71 ) { message.channel.send("User <@" + message.author.id + '> has reached level 71' ); }
                  connection.query(`UPDATE users SET level = 71 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_70 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 70"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 69"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 70 ) { message.channel.send("User <@" + message.author.id + '> has reached level 70' ); }
                  connection.query(`UPDATE users SET level = 70 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_69 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 69"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 68"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 69 ) { message.channel.send("User <@" + message.author.id + '> has reached level 69' ); }
                  connection.query(`UPDATE users SET level = 69 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_68 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 68"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 67"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 68 ) { message.channel.send("User <@" + message.author.id + '> has reached level 68' ); }
                  connection.query(`UPDATE users SET level = 68 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_67 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 67"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 66"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 67 ) { message.channel.send("User <@" + message.author.id + '> has reached level 67' ); }
                  connection.query(`UPDATE users SET level = 67 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_66 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 66"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 65"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 66 ) { message.channel.send("User <@" + message.author.id + '> has reached level 66' ); }
                  connection.query(`UPDATE users SET level = 66 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_65 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 65"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 64"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 65 ) { message.channel.send("User <@" + message.author.id + '> has reached level 65' ); }
                  connection.query(`UPDATE users SET level = 65 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_64 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 64"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 63"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 64 ) { message.channel.send("User <@" + message.author.id + '> has reached level 64' ); }
                  connection.query(`UPDATE users SET level = 64 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_63 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 63"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 62"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 63 ) { message.channel.send("User <@" + message.author.id + '> has reached level 63' ); }
                  connection.query(`UPDATE users SET level = 63 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_62 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 62"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 61"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 62 ) { message.channel.send("User <@" + message.author.id + '> has reached level 62' ); }
                  connection.query(`UPDATE users SET level = 62 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_61 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 61"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 60"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 61 ) { message.channel.send("User <@" + message.author.id + '> has reached level 61' ); }
                  connection.query(`UPDATE users SET level = 61 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_60 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 60"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 59"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 60 ) { message.channel.send("User <@" + message.author.id + '> has reached level 60' ); }
                  connection.query(`UPDATE users SET level = 60 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_59 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 59"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 58"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 59 ) { message.channel.send("User <@" + message.author.id + '> has reached level 59' ); }
                  connection.query(`UPDATE users SET level = 59 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_58 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 58"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 57"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 58 ) { message.channel.send("User <@" + message.author.id + '> has reached level 58' ); }
                  connection.query(`UPDATE users SET level = 58 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_57 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 57"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 56"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 57 ) { message.channel.send("User <@" + message.author.id + '> has reached level 57' ); }
                  connection.query(`UPDATE users SET level = 57 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_56 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 56"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 55"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 56 ) { message.channel.send("User <@" + message.author.id + '> has reached level 56' ); }
                  connection.query(`UPDATE users SET level = 56 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_55 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 55"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 54"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 55 ) { message.channel.send("User <@" + message.author.id + '> has reached level 55' ); }
                  connection.query(`UPDATE users SET level = 55 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_54 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 54"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 53"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 54 ) { message.channel.send("User <@" + message.author.id + '> has reached level 54' ); }
                  connection.query(`UPDATE users SET level = 54 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_53 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 53"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 52"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 53 ) { message.channel.send("User <@" + message.author.id + '> has reached level 53' ); }
                  connection.query(`UPDATE users SET level = 53 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_52 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 52"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 51"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 52 ) { message.channel.send("User <@" + message.author.id + '> has reached level 52' ); }
                  connection.query(`UPDATE users SET level = 52 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_51 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 51"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 50"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 51 ) { message.channel.send("User <@" + message.author.id + '> has reached level 51' ); }
                  connection.query(`UPDATE users SET level = 51 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_50 ) {
                  message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 50");
                  var addrole = message.guild.roles.cache.find(r => r.name === "Bronze Member");
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 49");
                  var delrole = message.guild.roles.cache.find(r => r.name === "Member");
                  if ( v.level != 50 ) { message.channel.send("User <@" + message.author.id + '> has reached level 50 and has reached bronze member status.' ); }
                  connection.query(`UPDATE users SET level = 50 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_49 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 49"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 48"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 49 ) { message.channel.send("User <@" + message.author.id + '> has reached level 49' ); }
                  connection.query(`UPDATE users SET level = 49 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_48 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 48"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 47"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 48 ) { message.channel.send("User <@" + message.author.id + '> has reached level 48' ); }
                  connection.query(`UPDATE users SET level = 48 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_47 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 47"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 46"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 47 ) { message.channel.send("User <@" + message.author.id + '> has reached level 47' ); }
                  connection.query(`UPDATE users SET level = 47 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_46 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 46"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 45"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 46 ) { message.channel.send("User <@" + message.author.id + '> has reached level 46' ); }
                  connection.query(`UPDATE users SET level = 46 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_45 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 45"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 44"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 45 ) { message.channel.send("User <@" + message.author.id + '> has reached level 45' ); }
                  connection.query(`UPDATE users SET level = 45 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_44 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 44"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 43"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 44 ) { message.channel.send("User <@" + message.author.id + '> has reached level 44' ); }
                  connection.query(`UPDATE users SET level = 44 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_43 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 43"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 42"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 43 ) { message.channel.send("User <@" + message.author.id + '> has reached level 43' ); }
                  connection.query(`UPDATE users SET level = 43 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_42 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 42"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 41"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 42 ) { message.channel.send("User <@" + message.author.id + '> has reached level 42' ); }
                  connection.query(`UPDATE users SET level = 42 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_41 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 41"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 40"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 41 ) { message.channel.send("User <@" + message.author.id + '> has reached level 41' ); }
                  connection.query(`UPDATE users SET level = 41 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_40 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 40"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 39"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 40 ) { message.channel.send("User <@" + message.author.id + '> has reached level 40' ); }
                  connection.query(`UPDATE users SET level = 40 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_39 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 39"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 38"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 39 ) { message.channel.send("User <@" + message.author.id + '> has reached level 39' ); }
                  connection.query(`UPDATE users SET level = 39 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_38 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 38"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 37"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 38 ) { message.channel.send("User <@" + message.author.id + '> has reached level 38' ); }
                  connection.query(`UPDATE users SET level = 38 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_37 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 37"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 36"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 37 ) { message.channel.send("User <@" + message.author.id + '> has reached level 37' ); }
                  connection.query(`UPDATE users SET level = 37 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_36 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 36"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 35"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 36 ) { message.channel.send("User <@" + message.author.id + '> has reached level 36' ); }
                  connection.query(`UPDATE users SET level = 36 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_35 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 35"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 34"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 35 ) { message.channel.send("User <@" + message.author.id + '> has reached level 35' ); }
                  connection.query(`UPDATE users SET level = 35 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_34 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 34"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 33"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 34 ) { message.channel.send("User <@" + message.author.id + '> has reached level 34' ); }
                  connection.query(`UPDATE users SET level = 34 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_33 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 33"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 32"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 33 ) { message.channel.send("User <@" + message.author.id + '> has reached level 33' ); }
                  connection.query(`UPDATE users SET level = 33 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_32 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 32"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 31"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 32 ) { message.channel.send("User <@" + message.author.id + '> has reached level 32' ); }
                  connection.query(`UPDATE users SET level = 32 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_31 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 31"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 30"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 31 ) { message.channel.send("User <@" + message.author.id + '> has reached level 31' ); }
                  connection.query(`UPDATE users SET level = 31 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_30 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 30"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 29"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 30 ) { message.channel.send("User <@" + message.author.id + '> has reached level 30' ); }
                  connection.query(`UPDATE users SET level = 30 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_29 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 29"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 28"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 29 ) { message.channel.send("User <@" + message.author.id + '> has reached level 29' ); }
                  connection.query(`UPDATE users SET level = 29 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_28 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 28"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 27"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 28 ) { message.channel.send("User <@" + message.author.id + '> has reached level 28' ); }
                  connection.query(`UPDATE users SET level = 28 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_27 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 27"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 26"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 27 ) { message.channel.send("User <@" + message.author.id + '> has reached level 27' ); }
                  connection.query(`UPDATE users SET level = 27 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_26 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 26"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 25"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 26 ) { message.channel.send("User <@" + message.author.id + '> has reached level 26' ); }
                  connection.query(`UPDATE users SET level = 26 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_25 ) {
                  message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 25");
                  var addrole = message.guild.roles.cache.find(r => r.name === "Member");
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 24");
                  if ( v.level != 10 ) { message.channel.send("User <@" + message.author.id + '> has reached level 25 and has reached member status.' ); }
                  connection.query(`UPDATE users SET level = 25 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_24 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 24"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 23"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 24 ) { message.channel.send("User <@" + message.author.id + '> has reached level 24' ); }
                  connection.query(`UPDATE users SET level = 24 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_23 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 23"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 22"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 23 ) { message.channel.send("User <@" + message.author.id + '> has reached level 23' ); }
                  connection.query(`UPDATE users SET level = 23 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_22 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 22"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 21"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 22 ) { message.channel.send("User <@" + message.author.id + '> has reached level 22' ); }
                  connection.query(`UPDATE users SET level = 22 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_21 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 21"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 20"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 21 ) { message.channel.send("User <@" + message.author.id + '> has reached level 21' ); }
                  connection.query(`UPDATE users SET level = 21 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_20 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 20"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 19"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 20 ) { message.channel.send("User <@" + message.author.id + '> has reached level 20' ); }
                  connection.query(`UPDATE users SET level = 20 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_19 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 19"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 18"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 19 ) { message.channel.send("User <@" + message.author.id + '> has reached level 19' ); }
                  connection.query(`UPDATE users SET level = 19 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_18 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 18"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 17"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 18 ) { message.channel.send("User <@" + message.author.id + '> has reached level 18' ); }
                  connection.query(`UPDATE users SET level = 18 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_17 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 17"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 16"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 17 ) { message.channel.send("User <@" + message.author.id + '> has reached level 17' ); }
                  connection.query(`UPDATE users SET level = 17 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_16 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 16"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 15"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 16 ) { message.channel.send("User <@" + message.author.id + '> has reached level 16' ); }
                  connection.query(`UPDATE users SET level = 16 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_15 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 15"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 14"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 15 ) { message.channel.send("User <@" + message.author.id + '> has reached level 15' ); }
                  connection.query(`UPDATE users SET level = 15 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_14 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 14"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 13"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 14 ) { message.channel.send("User <@" + message.author.id + '> has reached level 14' ); }
                  connection.query(`UPDATE users SET level = 14 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_13 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 13"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 12"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 13 ) { message.channel.send("User <@" + message.author.id + '> has reached level 13' ); }
                  connection.query(`UPDATE users SET level = 13 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_12 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 12"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 11"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 12 ) { message.channel.send("User <@" + message.author.id + '> has reached level 12' ); }
                  connection.query(`UPDATE users SET level = 12 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_11 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 11"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 10"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 11 ) { message.channel.send("User <@" + message.author.id + '> has reached level 11' ); }
                  connection.query(`UPDATE users SET level = 11 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_10 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 10"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 9"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 10 ) { message.channel.send("User <@" + message.author.id + '> has reached level 10' ); }
                  connection.query(`UPDATE users SET level = 10 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_9 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 9"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 8"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 9 ) { message.channel.send("User <@" + message.author.id + '> has reached level 9' ); }
                  connection.query(`UPDATE users SET level = 9 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_8 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 8"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 7"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 8 ) { message.channel.send("User <@" + message.author.id + '> has reached level 8' ); }
                  connection.query(`UPDATE users SET level = 8 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_7 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 7"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 6"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 7 ) { message.channel.send("User <@" + message.author.id + '> has reached level 7' ); }
                  connection.query(`UPDATE users SET level = 7 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_6 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 6"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 5"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 6 ) { message.channel.send("User <@" + message.author.id + '> has reached level 6' ); }
                  connection.query(`UPDATE users SET level = 6 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_5 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 5"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 4"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 5 ) { message.channel.send("User <@" + message.author.id + '> has reached level 5' ); }
                  connection.query(`UPDATE users SET level = 5 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_4 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 4"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 3"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 4 ) { message.channel.send("User <@" + message.author.id + '> has reached level 4' ); }
                  connection.query(`UPDATE users SET level = 4 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_3 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 3"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 2"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 3 ) { message.channel.send("User <@" + message.author.id + '> has reached level 3' ); }
                  connection.query(`UPDATE users SET level = 3 WHERE id_discord = ${message.author.id}`)
                }
                else if ( level > level_2 ) {
                  var addrole = message.guild.roles.cache.find(r => r.name === "Level 2"); message.guild.members.cache.get(message.author.id).roles.add(addrole);
                  var delrole = message.guild.roles.cache.find(r => r.name === "Level 1"); message.guild.members.cache.get(message.author.id).roles.remove(delrole);
                  if ( v.level != 2 ) { message.channel.send("User <@" + message.author.id + '> has reached level 2' ); }
                  connection.query(`UPDATE users SET level = 2 WHERE id_discord = ${message.author.id}`)
                }
                else {
                  var role = message.guild.roles.cache.find(r => r.name === "Level 1"); message.guild.members.cache.get(message.author.id).roles.add(role);
                  if ( v.level != 1 ) { message.channel.send("User <@" + message.author.id + '> has reached level 1' ); }
                  connection.query(`UPDATE users SET level = 1 WHERE id_discord = ${message.author.id}`)
                }
                // END SET AUTO ROLE
              }

            }
          })
        }
        else {
          connection.query(`INSERT INTO users (id_role, id_discord, name, experience, password) VALUES (3, ${message.author.id}, '${message.author.username}',  ${message.content.length}, '$2y$10$x8tLljlCUqzmy3TOsXnXxeZfGTbQY6gOchZtUikvfgWz/1N0UU.Qe')`)
        }
      })

    });

    client.login(process.env.TOKEN);
