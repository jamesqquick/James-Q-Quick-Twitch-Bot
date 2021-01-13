require('dotenv').config();
const axios = require('axios');

const lightIds = [3, 4]; //TODO: get from environment variable

const turnLightOnOrOff = async (lightId, on, hue, sat, bri) => {
    try {
        return await axios.put(
            `http://${process.env.HUE_BRIDGE_IP}/api/${process.env.HUE_USERNAME}/lights/${lightId}/state`,
            {
                on,
                ...(sat && { sat }),
                ...(bri && { bri }),
                ...(hue && { hue }),
            }
        );
    } catch (err) {
        console.error(err);
    }
};

const turnLightsOnOrOff = async (on) => {
    lightIds.forEach((id) => turnLightOnOrOff(id, on));
};

const setLightsToRandomColors = async () => {
    lightIds.forEach((id) => {
        const hue = Math.floor(Math.random() * 65535) + 1;
        const sat = 200;
        const bri = 175;
        turnLightOnOrOff(id, true, hue, sat, bri);
    });
};

const setLightsForChristmas = () => {
    turnLightOnOrOff(lightIds[0], true, 27306, 150, 175);
    turnLightOnOrOff(lightIds[1], true, 1, 150, 175);
};
module.exports = {
    turnLightsOnOrOff,
    setLightsToRandomColors,
    setLightsForChristmas,
};
