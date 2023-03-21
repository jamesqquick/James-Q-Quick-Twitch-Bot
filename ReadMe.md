# James Q Quick Twitch Bot

This is a Twitch bot built in JavaScript using the `tmi.js` library.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Bot](#running-the-bot)
- [Adding Custom Commands](#adding-custom-commands)
- [Support & Contributions](#support--contributions)
- [License](#license)

## Installation

1. Make sure you have [Node.js](https://nodejs.org/en/) installed on your machine (version 12 or higher is recommended).
2. Clone the repository:

```bash
git clone https://github.com/jamesqquick/James-Q-Quick-Twitch-Bot.git
```

Install the required dependencies:

```bash
npm install
```

## Configuration

Rename the `.env.example` file to `.env`.

Open the `.env` file and fill in the required information:

```bash
TWITCH_USERNAME=
TWITCH_PASSWORD=
HUE_BRIDGE_IP=
HUE_USERNAME=
HUE_LIGHT_IDS=
SOUND_EFFECTS_DIRECTORY=
VSCODE_SETTINGS_PATH=
TWITCH_ID=
```

## Running the Bot

To start the bot, simply run the following command:

```bash
npm start
```

## Adding Custom Commands

Navigate to the src/commands folder.

Create a new JavaScript file for your custom command, e.g., `myCommand.js`. In the new file, create your custom command by following the format below:

```JavaScript
module.exports = {
  callback: async (channel, tags, message, self, client) => {
    client.say(
      channel,
      `Hello World`
    );
  },
  globalCooldown: 60,
  userCooldown: 300,
};
```

## Support & Contributions

If you have any questions or need support, feel free to open an issue or submit a pull request. Contributions are always welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](https://chat.openai.com/LICENSE) file for more details.
