const { hue, lightIds } = require('../utils/HueLights');

module.exports = {
    callback: () => {
        hue.setColors(lightIds, 'pink');
    },
};
