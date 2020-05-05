const express = require('express');
const router = express.Router();
const Book = require('../models/book');

  router.get('/api/books', (req, res) => {
   Book.getAllBooks()
    .then(results => res.json(results))
    .catch(error => res.json(error))
  });

  router.get('/api/book/:name', (req, res) => {
    const bookName = req.params.id;
    Book.getOneBook(bookId)
    .then(results => res.json(results))
    .catch(error => res.json(error))
  })

  // router.get('/api/book/notes/:name', (req, res) => {
  //   const bookName = req.params.name;

  //   Book.getBookNotes(bookName)
  //   .then(results => res.json(results))
  //   .catch(error => res.status(500).json(error))
  // })

  router.post('/api/book/new', (req, res) => {
    const { title, coverPhoto, authorId } = req.body;

    Book.addBook(title, coverPhoto, authorId)
    .then(() => res.status(200).json(true))
    .catch(error => res.status(500).json(error))
  });

  //now in notesController.js

//   router.post('/api/book/note', (req, res) => {
//     const { note, bookId } = req.body;

//     db.addBookNote(note, bookId)
//     .then(() => res.status(200).json(true))
//     .catch(error => res.status(500).json(error))
//   })

//   router.delete('/api/note/:id', (req, res) => {
//     db.deleteNote(req.params.id)
//     .then(() => res.status(200).json(true))
//     .catch(error => res.status(500).json(error))
//   })
// }