const router = require('express').Router();
const logController = require('../controllers/log.controller');

// GET root/api/logs
// gets all logs in the database
router.get('/', logController.getLog);

module.exports = router;