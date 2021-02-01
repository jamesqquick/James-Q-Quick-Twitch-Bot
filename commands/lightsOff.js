const { hue, lightIds } = require('../utils/HueLights');
const { playSound } = require('../utils/SoundEffects');

module.exports = {
    text: '3bf24f61-0530-4307-8008-1b28afd42750',
    callback: () => {
        playSound('light-switch.wav');
        hue.turnOffLights(lightIds);
    },
};
