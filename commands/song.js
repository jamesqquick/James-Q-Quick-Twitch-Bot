const { getCurrentSong } = require('jqq-stream-utils');

module.exports = {
    callback: async (channel, tags, message, self, client) => {
        const { err, data } = await getCurrentSong();
        console.log(err, data);
        if (data) {
            client.say(channel, `Currently playing - ${data}`);
        }
    },
    globalCooldown: 30,
};
