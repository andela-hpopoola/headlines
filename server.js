const express = require('express');

// Create our app
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  } else {
    next();
  }
});

app.use(express.static('public'));

// Handles all routes so you do not get a not found error
app.get('*', (request, response) => {
  response.send('Welcome to Headlines');
});

app.listen(PORT, () => {});
