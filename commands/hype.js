const {
    setRandomTheme,
    playSound,
    hue,
    lightIds,
} = require('jqq-stream-utils');

module.exports = {
    callback: (channel, tags, message, self, client) => {
        hue.updateLight(lightIds[0], { transitionTime: 1 });
        hue.updateLight(lightIds[1], { transitionTime: 1 });
        hue.blinkLights(lightIds, 300, 10);
        setRandomTheme();
        for (let i = 0; i < 10; i++) {
            setTimeout(setRandomTheme, 0 + i * 400);
        }
        playSound('light-switch.wav');
        client.say(channel, "IT'S HYPE TIME!");
    },
    globalCooldown: 60,
};
