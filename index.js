const botclient = require("./bot");
const config = require("./config.json");

// define the client
const bot = new botclient(config);

// load colors
bot.color = require('./colors.js');

//load emojis
bot.emoji = require('./emojis.js');

//start the bot
bot.start();









  