const { setLightsForChristmas } = require('../utils/HueLights');
const { playSound } = require('../utils/SoundEffects');
module.exports = {
    text: 'ad9f051b-a114-4403-86e4-87ea13088133',
    callback: (...args) => {
        playSound('light-switch.wav');
        setLightsForChristmas();
    },
};
