const audioService = require('../services/audio.service');

exports.uploadAudio = (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
  const result = audioService.processAudio(req.file);
  res.json({ message: 'Audio uploaded!', data: result });
};

exports.testAudio = (req, res) => {
  res.send('Audio controller is working!');
};
