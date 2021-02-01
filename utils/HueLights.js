require('dotenv').config();
const Hue = require('@bradgarropy/hue-sdk');

const hue = new Hue(process.env.HUE_BRIDGE_IP, process.env.HUE_USERNAME);
const lightIds = [3, 4];
module.exports = {
    hue,
    lightIds,
};
