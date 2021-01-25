const { toggleRandomCamera } = require('../utils/OBS');

module.exports = {
    callback: toggleRandomCamera,
    userCooldown: 60,
    globalCooldown: 60,
};
