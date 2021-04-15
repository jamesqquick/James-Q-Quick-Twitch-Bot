const { playSound, setRandomTheme } = require('jqq-stream-utils');

module.exports = {
    text: 'e5ba5987-4f5d-424b-863c-e7811531c4b6',
    callback: async (channel, tags, message, self, client) => {
        console.log('Responding to command: randomTheme');
        const theme = await setRandomTheme();
        playSound('coin.wav');
        client.say(channel, `Switched to '${theme}' theme.`);
    },
};
