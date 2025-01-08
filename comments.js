// Create web server
const express = require('express');
const app = express();
const path = require('path');

// Set up the server
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});