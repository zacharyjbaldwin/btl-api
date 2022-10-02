const Log = require('../models/log.model');

module.exports.addLog = (event , message) => {
    const log = new Log({
        event: event,
        message: message,
    });
    log.save (
    )
    .then(
        console("Successful log event")
    )
    .catch(
        console("Failed to log event")
    )
}
