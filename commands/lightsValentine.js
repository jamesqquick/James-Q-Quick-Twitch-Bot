const { playSound, hue, lightIds } = require('jqq-stream-utils');

module.exports = {
    callback: () => {
        hue.setColors(lightIds, 'pink');
    },
};
