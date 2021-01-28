const { setRandomTheme } = require('../utils/VSCode');
const { playSound } = require('../utils/SoundEffects');

module.exports = {
    text: 'e5ba5987-4f5d-424b-863c-e7811531c4b6',
    callback: (channel, tags, message, self, client) => {
        console.log('Responding to command: randomTheme');
        playSound('coin.wav');
        setRandomTheme();
    },
};
