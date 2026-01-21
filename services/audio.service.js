exports.processAudio = (file) => {
  console.log('Processing file:', file.originalname);
  return { filename: file.originalname, size: file.size };
};
