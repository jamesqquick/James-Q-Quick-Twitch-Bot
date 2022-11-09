const { playSound, hue, lightIds } = require('jqq-stream-utils');

module.exports = {
  callback: () => {
    playSound('light-switch.wav');
    hue.turnOnAllLights();
    lightIds.forEach((id) => hue.setColor(id, 'random'));
  },
};
