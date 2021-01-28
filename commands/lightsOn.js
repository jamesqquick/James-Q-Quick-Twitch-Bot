const { turnLightsOnOrOff } = require('../utils/HueLights');
const { playSound } = require('../utils/SoundEffects');

module.exports = {
    text: 'c79189f1-6f7d-4289-9b28-5d39a144df57',
    callback: () => {
        playSound('light-switch.wav');
        turnLightsOnOrOff(true);
    },
};
