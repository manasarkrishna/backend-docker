// utils/logger.js
exports.log = (message) => {
  console.log(`[LOG] ${new Date().toISOString()} - ${message}`);
};
