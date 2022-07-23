<h1 align="center">
Discord Ticket Bot
  <br>
</h1>


<p align="center">
  <a href="#about">About</a>
  •
  <a href="#features">Features</a>
  •
  <a href="#installation">Installation</a>
  •
  <a href="#setting-up">Setting Up</a>
</p>

## About

The following is a discord ticket bot which only works in one server, you can use it to manage your own server tickets and also have the ability to fork this repo and improve it!

If you liked this repository, feel free to leave a star ⭐!

## Features

You can run `t!create <channel>` To set it up.<br>
Users also have the ability to close the ticket!<br>
You can even customise everything from the `config.json` file.

## Installation

```
git clone https://github.com/peterhanania/ticket-bot.git
```
then run:
```
npm install
```



## Setting Up

Set up all your information in the *config.json* File as such
```
{
  "prefix": "BOT_PREFIX",
  "main_token": "BOT_TOKEN",
  "developers": ["DEV_IDS],
  "bot_name":"YOUR_BOT_NAME",
  "emoji":"REACTION_EMOJI",
  "color":"PREFFERED_EMBED_COLOR",
  "ticket_limit":"TICKET_LIMIT",
  "support_role_id":"SUPPORT_ROLE_ID",
  "category_id":"CATEGORY_ID",
  "log_channel_id":"TICKET_LOG_CHANNEL_ID"
}
```
 > You can change the emojis in `emojis.js` and colors in `colors.js`
 
 ### Important
 Please make sure to have enabled `Privileged Intents` on your Discord [developer portal](https://discordapp.com/developers/applications/). 


Once done, you can launch the bot with `node index.js`. 

Any questions? DM me on <a href="https://discord.com/users/710465231779790849">Discord</a>.
