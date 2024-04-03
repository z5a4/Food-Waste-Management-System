const express = require('express');
const router = express.Router();
const CurrentscheduleController = require('../controllers/CurrentScheduleController');

router.post('/api/currentschedule', CurrentscheduleController.addToCurrentSchedule);

module.exports = router;