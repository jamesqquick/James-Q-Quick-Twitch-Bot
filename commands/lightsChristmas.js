const { playSound, hue, lightIds } = require('jqq-stream-utils');

module.exports = {
  callback: (...args) => {
    playSound('light-switch.wav');
    hue.setColor(lightIds[0], 'green');
    hue.setColor(lightIds[1], 'red');
  },
};
