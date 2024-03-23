// routes/sourceTableRoutes.js
const express = require('express');
const router = express.Router();
const sourceTableController = require('../controllers/sourceTableController');

router.post('/api/source-table', sourceTableController.createSource);

// Change the route to be more RESTful
//router.get('/:sourceId', sourceTableController.getSourceById);

router.get('/api/source-table/:sourceId', sourceTableController.getSourceData);

router.get('/api/sources', sourceTableController.getSources);


router.put('/api/sources/:id', sourceTableController.updateSource);

router.delete('/api/sources/:id',sourceTableController.deleteSource)

module.exports = router;
