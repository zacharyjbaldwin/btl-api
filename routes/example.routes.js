const router = require('express').Router();

const exampleController = require('../controllers/example.controller');

router.get('/', exampleController.helloWorld);

module.exports = router;