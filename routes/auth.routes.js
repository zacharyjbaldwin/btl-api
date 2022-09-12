const router = require('express').Router();

const auth = require('../controllers/auth.controller');

// POST root/api/auth/signup
router.post('/signup', auth.signup);

module.exports = router;