import axios from 'axios';

const handleRender = ((req, res) => {
  axios.get('http://localhost:3001/books')
    .then((response) => {
      const myHtml = JSON.stringify(response.data);
      res.render('index', { myHtml });
    })
    .catch((err) => {
      console.log('# Initial Server-side rendering error', err);
    });
});

module.exports = handleRender;
