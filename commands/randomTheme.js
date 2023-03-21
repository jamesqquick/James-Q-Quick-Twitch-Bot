const { playSound, setRandomTheme } = require('jqq-stream-utils');

module.exports = {
  callback: async (channel, tags, message, self, client) => {
    console.log('Responding to command: randomTheme');
    const theme = await setRandomTheme();
    playSound('coin.wav');
    client.say(channel, `Switched to '${theme}' theme.`);
  },
  globalCooldown: 60,
  userCooldown: 300,
};
