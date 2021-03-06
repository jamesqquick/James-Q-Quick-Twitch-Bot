const { playSound, hue, lightIds } = require('jqq-stream-utils');

module.exports = {
    text: 'e94488a7-67e3-4e5d-9090-345e5f75eadc',
    callback: () => {
        playSound('light-switch.wav');
        hue.turnOnAllLights();
        lightIds.forEach((id) => hue.setColor(id, 'random'));
    },
};
