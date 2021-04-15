const { playSound, hue, lightIds } = require('jqq-stream-utils');

module.exports = {
    text: 'ad9f051b-a114-4403-86e4-87ea13088133',
    callback: (...args) => {
        playSound('light-switch.wav');
        hue.setColor(lightIds[0], 'green');
        hue.setColor(lightIds[1], 'red');
    },
};
