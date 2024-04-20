const express = require('express');
const router = express.Router();
const SlurryRequestController = require('../controllers/slurryRequestController');

router.post('/slurryRequest', SlurryRequestController.createRequest);

router.get('/slurryRequests', SlurryRequestController.getAllSlurryRequests);

router.get('/slurryRequests/:id', SlurryRequestController.getSlurryRequestById);

router.put('/slurryRequests/:id', SlurryRequestController.updateSlurryRequest);

router.delete('/slurryRequests/:id', SlurryRequestController.deleteSlurryRequest);

module.exports = router;