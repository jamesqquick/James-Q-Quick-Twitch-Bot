const { playSound } = require('jqq-stream-utils');

module.exports = {
    callback: () => {
        playSound('fail.wav');
    },
    userCooldown: 300,
    globalCooldown: 300,
};
