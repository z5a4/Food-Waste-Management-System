const express = require('express');
const router = express.Router();
const RegularFWRequesController = require('../controllers/RegularFWRequestController');

router.post('/api/regular-fw', RegularFWRequesController.createFWRegularRequest);

router.get('/api/getFWRegular', RegularFWRequesController.getRegularFW);


router.get('/api/Regular/schedule-datewise',RegularFWRequesController.ScheduleRegular);

router.put('/api/Regular/:id',RegularFWRequesController.updateRegularFWRequest);

router.put('/api/Regular/:id',RegularFWRequesController.deleteRegularFWRequest);


module.exports = router;
<<<<<<< HEAD

module.exports = router;

=======
>>>>>>> 46c89b4bbb8ecfd41c008ed3f8bfab1543379f2b
