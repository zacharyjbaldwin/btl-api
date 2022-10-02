const Log = require('../models/log.model');

module.exports.addLog = (event , message) => {
    const log = new Log({
        event: event,
        message: message,
    });
    log.save (
    )
    .then(
        console.log("Successful log event")
    )
    .catch(
        console.log("Failed to log event")
    )
}
