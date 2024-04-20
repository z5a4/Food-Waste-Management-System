const express = require('express');
const router = express.Router();
const SlurryRequestController = require('../controllers/slurryRequestController');

<<<<<<< HEAD
router.post('/slurryRequest', SlurryRequestController.createRequest);

router.get('/slurryRequests', SlurryRequestController.getAllSlurryRequests);

router.get('/slurryRequests/:id', SlurryRequestController.getSlurryRequestById);

router.put('/slurryRequests/:id', SlurryRequestController.updateSlurryRequest);

router.delete('/slurryRequests/:id', SlurryRequestController.deleteSlurryRequest);
=======
// Route for creating a new slurry request
router.post('/api/slurryRequest', SlurryRequestController.createRequest);

// Route for fetching all slurry requests
router.get('/api/slurryRequests', SlurryRequestController.getAllSlurryRequests);

// Route for fetching a single slurry request by ID
router.get('/api/slurryRequests/:id', SlurryRequestController.getSlurryRequestById);

// Route for updating a single slurry request by ID
router.put('/api/slurryRequests/:id', SlurryRequestController.updateSlurryRequest);

// Route for deleting a single slurry request by ID
router.delete('/api/slurryRequests/:id', SlurryRequestController.deleteSlurryRequest);
>>>>>>> dbeb5a92ecb40db5de2b7808e1b2cf88b1373bc7

module.exports = router;