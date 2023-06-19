import { useEffect, useState } from "react";
import { getAllProducts } from "../utils/api/products";
import { Product } from "../types/Product";

const HomePage = () => {
  const [products, setProducts] = useState<Product[] | undefined>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getAllProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <ul>
        {products?.map((product) => (
          <li key={product._id.toString()}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
