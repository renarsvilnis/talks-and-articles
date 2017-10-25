const {Router} = require('express');
const asyncMiddleware = require('../../middlewares/asyncMiddleware');

const parseLink = require('./parseLink');
const records = require('./records');
const record = require('./record');

const router = new Router();

router.get('/parse-link', asyncMiddleware(parseLink.get));
router.get('/records', asyncMiddleware(records.get));
router.post('/record', asyncMiddleware(record.post));
router.delete('/record', asyncMiddleware(record.delete));

module.exports = router;
