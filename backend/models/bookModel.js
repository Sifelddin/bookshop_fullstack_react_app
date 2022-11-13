import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, default: 0 },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    price: { type: Number, default: 0, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true, unique: true },
    inStock: { type: Number, default: 0, required: true },
    description: { type: String, required: true },
    released_date: { type: Date, required: true },
    numReviews: { type: Number, default: 0, required: true },
  },
  {
    timestamps: true,
  },
);

const Book = mongoose.model('Book', bookSchema);
export default Book;
