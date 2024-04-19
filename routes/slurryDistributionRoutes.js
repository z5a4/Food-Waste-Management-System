// slurryDistributionRoutes.js
const express = require('express');
const router = express.Router();
const SlurryController = require('../controllers/slurryController');

router.get('/viewslurrydistributions', SlurryController.getSlurryDistributions);

router.get('/viewslurrydistributions/:id', SlurryController.getSlurryDistributionById);


// POST /api/slurrydistributions
router.post('/slurrydistributions', SlurryController.addSlurryDistribution);

// Route for fetching a single slurry request by ID
router.get('/fetchslurryRequests/:id', SlurryController.getSlurryRequestById);

router.put('/updateslurrydistributions/:id', SlurryController.updateSlurryDistribution);

router.delete('/deleteslurrydistributions/:id', SlurryController.deleteSlurryDistribution);

module.exports = router;