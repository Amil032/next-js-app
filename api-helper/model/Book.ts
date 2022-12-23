import mongoose, { InferSchemaType } from "mongoose";

const Schema = mongoose.Schema;
const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  featured: {
    type: String,
  },
});
export type BookShemaType = InferSchemaType<typeof bookSchema>;

export default mongoose.models.Book || mongoose.model("Book", bookSchema);
