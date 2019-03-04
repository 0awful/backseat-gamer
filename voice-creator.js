const say = require('say');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config/voice-config.json'));

const read = (text) => {
    say.speak(text, config.selected_voice, config.speed);
}

exports.default = read;