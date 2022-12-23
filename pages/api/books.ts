// import mongoose from "mongoose";

import { NextApiRequest, NextApiResponse } from "next";
import {
  addBook,
  getAllBooks,
} from "../../api-helper/controller/books-controller";
import { connectToDatabase } from "../../api-helper/utils";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectToDatabase();
  switch (req.method) {
    case "GET":
      getAllBooks(req, res);
      break;
    case "POST":
      addBook(req, res);
      break;
  }
  //   req.method === "GET" && getAllBooks(req, res);
  //   if (req.method === "GET") {
  //     await getAllBooks(req, res);
  //   }
  //   req.method === "POST" && addBook(req, res);
}
