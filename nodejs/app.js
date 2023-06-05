const express = require('express');
const app = express();

// Set up middleware and configurations
// ...

// Define routes
app.use('/', require('./routes/index'));

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
