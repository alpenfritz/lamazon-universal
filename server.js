const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

// main route
app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('app started on port 3000');
});
