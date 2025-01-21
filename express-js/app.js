const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to My Website!');
});

app.get('/user/:id', (req, res) => {
    res.send('User ID: ' + req.params.id);
});

app.get('/search', (req, res) => {
    const query = req.query.query || 'No search term provided';
    res.send(`Search for: ${query}`);
});

app.get('/about', (req, res) => {
    res.send('About us');
});

app.get('/contact', (req, res) => {
    res.send('Contact us');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
