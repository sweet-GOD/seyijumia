import React, { useEffect, useState } from "react";
import Post from "./post";
import RecomHeader from "./header";
import { fetchProductsbyCategory } from "@/lib/fetchData";
import { Skeleton } from "@mui/material";
import { NGnaira } from "@/lib/help";

export default function Fragrances() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await fetchProductsbyCategory("fragrances");
        setPosts(products);
        console.log(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="pt-5 rounded-3xl overflow-hidden">
      <RecomHeader title="Fragrances" color="bg-gray-900" />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 bg-white w-full shadow-lg">
        {posts?.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            image={post.images[0]}
            price={NGnaira.format(post.price)}
            id={post.id}
            discountPercentage={post.discountPercentage}
          />
        ))}
      </div>
    </div>
  );
}
