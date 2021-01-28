const { setLightsToRandomColors } = require('../utils/HueLights');
const { playSound } = require('../utils/SoundEffects');

module.exports = {
    text: 'e94488a7-67e3-4e5d-9090-345e5f75eadc',
    callback: () => {
        playSound('light-switch.wav');
        setLightsToRandomColors(false);
    },
};
