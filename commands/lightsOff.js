const { playSound, hue, lightIds } = require('jqq-stream-utils');

module.exports = {
  callback: () => {
    playSound('light-switch.wav');
    hue.turnOffLights(lightIds);
  },
  globalCooldown: 60,
};
