const express = require('express');
const app = express();

// Require the route files
const homeRoutes = require('./routes/homeRoutes');

// Use the route files
app.use('/', homeRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
