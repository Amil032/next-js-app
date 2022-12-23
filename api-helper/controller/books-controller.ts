import { NextApiRequest, NextApiResponse } from "next";
import Book from "../model/Book";

// import { BookShemaType } from "../model/Book";

export const getAllBooks = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  let books;

  try {
    books = await Book.find();
  } catch (err) {
    console.log(err, "err getallbooks");
  }
  if (!books) {
    return res.status(500).json({ message: "Internal server error" });
  }
  if (books.length === 0) {
    return res.status(404).json({ message: "no books found" });
  }

  return res.status(200).json({ books: books });
};

export const addBook = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, author, price, imageUrl, featured } = req.body;
  if (!title || !author || !price || !imageUrl) {
    return res.status(422).json({ message: "invalid inputs" });
  }
  let book;
  try {
    book = new Book({ title, author, price, imageUrl, featured });
    book = await book.save();
    console.log(book);
  } catch (err) {
    res.status(500).json({ message: "cannot connect to databae" });
  }
  if (!book) {
    return res.status(500).json({ message: "internal server error" });
  }

  return res.status(201).json({ book });
};
