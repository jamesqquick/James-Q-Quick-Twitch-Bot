module.exports = {
  callback: (channel, tags, message, self, client) => {
    client.say(channel, 'Let me grab my drink!');
  },
};
