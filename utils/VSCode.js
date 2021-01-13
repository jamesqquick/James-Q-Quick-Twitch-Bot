const fs = require('fs');
const os = require('os');

const path = `${os.homedir()}/Library/Application Support/Code/User/settings.json`;
const settings = require(path);

const themes = [
    'Shades of Purple',
    'Cobalt2',
    'Night Owl',
    'Dracula',
    'Level Up',
    'Level Up Syntax',
    'codeSTACKr Theme',
];

const setTheme = (theme) => {
    if (theme === 'random') {
        setRandomTheme();
    } else {
        settings['workbench.colorTheme'] = theme;
        fs.writeFileSync(path, JSON.stringify(settings, null, 4));
    }
};

const setRandomTheme = async () => {
    const index = Math.floor(Math.random() * themes.length);
    const theme = themes[index];
    console.log(`Setting theme to ${theme}`);
    settings['workbench.colorTheme'] = theme;
    await fs.promises.writeFile(path, JSON.stringify(settings, null, 4));
};

module.exports = { setTheme, setRandomTheme };