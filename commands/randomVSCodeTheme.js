const { setRandomTheme } = require('../utils/VSCode');

module.exports = {
    text: 'e5ba5987-4f5d-424b-863c-e7811531c4b6',
    callback: (channel, tags, message, self, client) => {
        console.log('Responding to command: randomTheme');
        setRandomTheme();
    },
};
