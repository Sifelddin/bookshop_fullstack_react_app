import express from 'express';
import Book from '../models/bookModel.js';

const bookRouter = express.Router();

bookRouter.get('/', async (req, res) => {
  try {
    const bookList = await Book.find();
    res.send(bookList);
  } catch (e) {
    console.log(e);
  }
});

bookRouter.post('/new', async (req, res) => {
  const book = new Book({
    title: req.body.title,
    price: req.body.price,
    category: req.body.category,
    image: req.body.image,
    inStock: req.body.InStock,
    description: req.body.description,
    released_date: req.body.released_date,
    numReviews: req.body.numReviews,
  });
  const newBook = await book.save();
  if (newBook) {
    return res.status(201).send({ message: 'New Book Created', data: newBook });
  }
  return res.status(500).send({ message: ' Error in Creating Product.' });
});

bookRouter.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).send(book);
  } catch (e) {
    console.log(e);
  }
});

bookRouter.put('/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);
  console.log(book);
  if (book) {
    (book.title = req.body.title),
      (book.price = req.body.price),
      (book.category = req.body.category),
      (book.image = req.body.image),
      (book.inStock = req.body.inStock),
      (book.description = req.body.description),
      (book.released_date = req.body.released_date),
      (book.numReviews = req.body.numReviews);

    try {
      await book.save();
      res.redirect('/');
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
});

bookRouter.delete('/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default bookRouter;
