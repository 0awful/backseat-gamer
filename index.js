const say = require('./voice-creator').default;
const watcher = require('./file-watcher')
const areaManager = require('./area-manager').default
const levelManager = require('./level-manager').default
const logger = require('./logger').logger;

const cb = (data) => {
    logger.log({
        level: 'info',
        message: data,
    })
}

watcher.on('area', (area) => {
    areaManager.event(area);
});

watcher.on('level', (level) => {
    levelManager.event(level)
})
// say('Intializing')
say("okay I'm here")