const Log = require('../models/log.model');

module.exports.addLog = (event , message) => {
    const log = new Log({
        event: event,
        message: message,
    });
    log.save()
    .catch((error) => {
        throw error;
    });
}
