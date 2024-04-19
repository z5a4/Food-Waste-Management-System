// slurryrequestRoutes.js
const express = require('express');
const router = express.Router();
const SlurryRequestController = require('../controllers/slurryRequestController');

<<<<<<< HEAD
// Route to handle farmer requests
router.post('/api/slurryRequest', requestController.createRequest);
=======
// Route for creating a new slurry request
router.post('/slurryRequest', SlurryRequestController.createRequest);
>>>>>>> 162967050dc9789cf14797ee9d4ae2b8e1434ead

// Route for fetching all slurry requests
router.get('/slurryRequests', SlurryRequestController.getAllSlurryRequests);

// Route for fetching a single slurry request by ID
router.get('/slurryRequests/:id', SlurryRequestController.getSlurryRequestById);

// Route for updating a single slurry request by ID
router.put('/slurryRequests/:id', SlurryRequestController.updateSlurryRequest);

// Route for deleting a single slurry request by ID
router.delete('/slurryRequests/:id', SlurryRequestController.deleteSlurryRequest);

module.exports = router;