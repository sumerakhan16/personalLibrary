const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

// app.use((req, res, next) => {
//   console.log(req);
//   next();
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(require('./controllers/booksController.js'));
app.use(require('./controllers/notesController.js'));
app.use(require('./controllers/htmlController.js'));

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
});

