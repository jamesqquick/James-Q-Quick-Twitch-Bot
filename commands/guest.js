const axios = require('axios');
module.exports = {
    callback: async (channel, tags, message, self, client) => {
        const url = `https://jqqstreams.netlify.app/.netlify/functions/getStream`;
        const {data:stream} = await axios.get(url);
        const guestStr = `Follow ${stream.fullName} at https://www.twitter.com/${stream.twitterHandle}`;
        client.say(channel, guestStr);
    },
   
};
