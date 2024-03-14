const express = require('express');
const router = express.Router();

const {localFileUpload} = require('../controller/fileUpload');

// api route
router.post('/localfileupload', localFileUpload);

module.exports = router;
