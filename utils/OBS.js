require('dotenv').config();
const OBSWebSocket = require('obs-websocket-js');

const obs = new OBSWebSocket();

obs.connect({
    address: process.env.OBS_ADDRESS,
    password: process.env.OBS_PASSWORD,
})
    .then(() => {
        console.log(`Success! We're connected & authenticated.`);
        return obs.send('GetSceneList');
    })
    // .then((data) => {
    //     //console.log(data);
    //     console.log(data.scenes[3].sources);
    //     obs.send('SetSceneItemRender', {
    //         source: 'C920',
    //         'scene-name': 'Host Webcams',
    //         render: true,
    //     })
    //         .then(console.log)
    //         .catch(console.error);
    //     const randomIndex = Math.floor(Math.random() * data.scenes.length);
    //     // obs.send('SetCurrentScene', {
    //     //     'scene-name': data.scenes[randomIndex].name,
    //     // });
    // })
    .catch((err) => {
        // Promise convention dicates you have a catch on every chain.
        console.log(err);
    });

const toggleRandomCamera = () => {
    const cameras = ['C920', 'Logitech Brio', 'Cam Link'];
    const randomInt = Math.floor(Math.random() * 3);
    cameras.forEach((camera, i) => {
        // obs.send('SetSceneItemRender', {
        //     source: camera,
        //     'scene-name': 'Host Webcams',
        //     render: i === randomInt ? true : false,
        // })
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //     });
    });
};

module.exports = {
    obs,
    toggleRandomCamera,
};
