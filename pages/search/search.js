// pages/search.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchProducts, fetchProductsFir } from "../lib/fetchProducts";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (q) {
        const productsApi = await fetchProducts();
        const productsFir = await fetchProductsFir();

        // Combine results from API and Firebase
        const allProducts = [...productsApi, ...productsFir];

        // Filter products based on the search query
        const results = allProducts.filter((product) => {
          return (
            product.title.toLowerCase().includes(q.toLowerCase()) ||
            product.description.toLowerCase().includes(q.toLowerCase())
          );
        });

        setSearchResults(results);
      }
    };

    fetchSearchResults();
  }, [q]);

  return (
    <div>
      <h1>Search Results for: {q}</h1>
      <ul>
        {searchResults.map((product) => (
          <li key={product.id}>
            <p>{product.title}</p>
            <p>{product.description}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}
