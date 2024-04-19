const express = require('express');
const router = express.Router();
const requestController = require('../controllers/slurryRequestController'); 

// Route to handle farmer requests
router.post('/api/slurryRequest', requestController.createRequest);

module.exports = router;
