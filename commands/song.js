const axios = require('axios');
module.exports = {
    callback: (channel, tags, message, self, client) => {
        axios
            .get('https://api.pretzel.tv/playing/twitch/414520686')
            .then((data) => {
                console.log(data.data);
                console.log(channel);
                client.say(channel, data.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    globalCooldown: 30,
};
