const { turnLightsOnOrOff } = require('../utils/HueLights');

module.exports = {
    text: '3bf24f61-0530-4307-8008-1b28afd42750',
    callback: () => turnLightsOnOrOff(false),
};
