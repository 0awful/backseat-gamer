const fs = require('fs');
const say = require('./voice-creator').default;
const logger = require('./logger').logger;

class watcher {
    constructor(filename, param) {
        this.instructions = JSON.parse(fs.readFileSync(filename));
        this.param = param;
    }

    event(event) {
        // console.log(event[this.param], this.instructions, this.instructions)
        logger.log({
            level: 'info',
            message: event[this.param]
        });

        // if (this.instructions[event[this.param]]) say(this.instructions[event[this.param]]);
    }
}

exports.default = watcher;