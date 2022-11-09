const { playSound, hue, lightIds } = require('jqq-stream-utils');

module.exports = {
  callback: () => {
    playSound('light-switch.wav');
    hue.turnOnLights(lightIds);
  },
  globalCooldown: 60,
};
