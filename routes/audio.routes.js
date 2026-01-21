const express = require('express');
const router = express.Router();
const audioController = require('../controllers/audio.controller');
const upload = require('../middlewares/upload.middlewares');

router.post('/upload', upload.single('audio'), audioController.uploadAudio);
router.get('/test', audioController.testAudio);

module.exports = router;
