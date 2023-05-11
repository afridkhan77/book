let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('Server started');
});

let books = [];
app.get('/books', (req, res) => {
  res.json(books);
});

let bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/books', (req, res) => {
  let book = {
    id: Math.random().toString(36).substr(2, 9),
    title: req.body.title,
    author: req.body.author,
    publishedDate: req.body.publishedDate || null,
  };
  books.push(book);
  res.json(book);
});
