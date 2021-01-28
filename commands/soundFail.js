const player = require('play-sound')((opts = {}));

module.exports = {
    callback: () => {
        player.play(
            '/Users/jamesquick/Documents/Video/assets/Sound Effects/fail.wav',
            function (err) {
                if (err) throw err;
            }
        );
    },
    userCooldown: 300,
    globalCooldown: 300,
};
