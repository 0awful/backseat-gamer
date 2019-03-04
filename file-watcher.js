const fs = require('fs');
var PathOfExileLog = require("poe-log-monitor");

// read and set up configs. 
const fileConfig = JSON.parse(fs.readFileSync('config/file-config.json'));
const fileName = fileConfig.directory + '\\' + fileConfig.fileName;

const poeLogConfig = JSON.parse(fs.readFileSync('config/poe-log-config.json'));

let poeLog;

poeLog = new PathOfExileLog({
    logfile: fileName
});


const init = () => {
    poeLog = new PathOfExileLog({
        logfile: fileName
    });
}


const on = (event, cb) => {
    if (!event) throw new Error("Cannot attach without an event");
    if (!cb) throw new Error("Cannot attach without a callback");
    if (!poeLogConfig.events[event]) throw new Error(`Illegal event of ${event} found`);
    if (!poeLog) init();

    poeLog.on(event, cb);
}


module.exports.on = on;