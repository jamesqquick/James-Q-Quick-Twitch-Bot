const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_BASE_ID
);

const table = base(process.env.AIRTABLE_TABLE_NAME);

const saveIdea = async (channel, tags, message) => {
    const username = tags.username;
    const description = message.substring(15);
    try {
        //await table.create([{ fields: { username, description } }]);
        client.say(
            channel,
            `Thank you for sharing your idea, @${tags.username}!`
        );
    } catch (error) {
        console.error(error);
    }
};
module.exports = { base, table };
