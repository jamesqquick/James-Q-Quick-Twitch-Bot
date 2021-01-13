require('dotenv').config();
const {
    QuickTwitchBot,
} = require('../Auth0-Bot copy/node_modules/quick-chat-bot');
const path = require('path');
const bot = new QuickTwitchBot({
    username: process.env.TWITCH_USERNAME,
    password: process.env.TWITCH_PASSWORD,
    channel: process.env.TWITCH_USERNAME,
    commandsDir: path.join(__dirname, 'commands'),
});
bot.connect();
