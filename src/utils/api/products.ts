import axios from "axios";
import { Product } from "../../types/Product";
const apiURL: string | undefined = process.env.REACT_APP_API_URL;

export const getAllProducts = async (): Promise<Product[] | undefined> => {
  try {
    const response = await axios.get(`${apiURL}/products`);
    return response.data.products as Product[];
  } catch (error) {
    console.log(error);
  }
};
