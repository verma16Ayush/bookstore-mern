import { model, Schema } from "mongoose";
import { URL, Url } from "url";

export type IBook = {
  isbn_number: string;
  title: string;
  author: string;
  genre: string;
  synopsis: string;
  cover_image: Url;
  price: number;
}

const BookSchema = new Schema<IBook>({
  isbn_number: {type: String, required: true},
  title: {type: String, required: true},
  author: {type: String, required: true},
  genre: {type: String, required: true},
  synopsis: {type: String, required: true},
  cover_image: {type: String, required: true},
  price: {type: Number, required: true}
})

export const BookModel = model<IBook>('BookModel', BookSchema)