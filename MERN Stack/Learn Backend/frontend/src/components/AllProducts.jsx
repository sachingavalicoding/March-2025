import axios from "axios";
import { useEffect, useState } from "react";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/web/product/getall");
        
        console.log(response.data);
        
        
        if (response.data.status === 1) {
          setProducts(response.data.data); // Assuming 'data' contains the list of products
        } else {
          console.log("Not getting products:", response.data.message);
        }
      } catch (error) {
        console.log("ERROR IN FETCHING PRODUCTS:", error);
      }
    };
    
    fetching();
  }, []);

  return (
    <div className="w-full bg-slate-100 px-6 py-4 flex gap-4 flex-wrap">
      <ul>
        {products.map((product) => (
          <li key={product._id}> {/* Use `_id` for key */}
            {product.name} - ${product.price} {/* Corrected property names */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;
