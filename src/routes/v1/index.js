const express = require('express');

const router  = express.Router();

const {InfoController} = require('../../controllers');

router.use('/infocontroller',InfoController.info);

module.exports = router;