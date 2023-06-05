const express = require('express');
const router = express.Router();

// Define a route for the home page
router.get('/', (req, res) => {
  res.send('Welcome to the API home page');
});

// Export the router to be used in app.js
module.exports = router;
