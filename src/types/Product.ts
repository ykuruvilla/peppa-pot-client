export type Product = {
  _id: String;
  slug: String;
  name: String;
  description: String;
  brand: String;
  category: String;
  user: String;
  images: String[];
  reviews: [];
  price: Number;
  totalQty: Number;
  totalSold: Number;
  averageRating: number;
};
