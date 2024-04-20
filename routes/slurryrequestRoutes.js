// slurryrequestRoutes.js
const express = require('express');
const router = express.Router();
const SlurryRequestController = require('../controllers/slurryRequestController');

<<<<<<< HEAD
// Route to handle farmer requests
router.post('/api/slurryRequest', SlurryRequestController.createRequest);
=======
// Route for creating a new slurry request
router.post('/slurryRequest', SlurryRequestController.createRequest);
>>>>>>> 4db8f47d94bc1d0592fa71c625b9027f2a9f4aa4

// Route for fetching all slurry requests
router.get('/api//slurryRequests', SlurryRequestController.getAllSlurryRequests);

// Route for fetching a single slurry request by ID
router.get('/api//slurryRequests/:id', SlurryRequestController.getSlurryRequestById);

// Route for updating a single slurry request by ID
router.put('/api//slurryRequests/:id', SlurryRequestController.updateSlurryRequest);

// Route for deleting a single slurry request by ID
router.delete('/api//slurryRequests/:id', SlurryRequestController.deleteSlurryRequest);

module.exports = router;