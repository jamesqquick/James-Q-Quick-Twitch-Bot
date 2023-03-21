const { playSound, setRandomTheme } = require('jqq-stream-utils');

module.exports = {
  callback: async (channel, tags, message, self, client) => {
    client.say(
      channel,
      `Here are the list of commands you can run.
    !drinkWater - Drink some water!
    !randomTheme - Switch to a random VS Code theme!
    !discord - Join the Learn Build Teach Discord!
    !twitter - Follow me on Twitter!
    !youtube - Subscribe to my YouTube channel!
    !podcast - Check out the Compressed.fm Podcast!
    !lightsOn - Turn on the lights!
    !lightsOff - Turn off the lights!
    !lightsRandom - Turn on the lights to a random color!
    !lightsValentine - Turn on the lights to a Valentine's Day theme!
    !fail - Play a fail sound!
    !hype - Play sounds and lights to hype up the stream!`
    );
  },
  globalCooldown: 60,
  userCooldown: 300,
};
