import React, { useEffect, useState } from "react";
import Post from "./post";
import RecomHeader from "./header";
import { fetchProductsByBrandFir } from "@/lib/fetchData";
import { Skeleton } from "@mui/material";
import { NGnaira } from "@/lib/help";

export default function Cars() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await fetchProductsByBrandFir("Lamborghini");
        setPosts(products);
        // console.log(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="pt-5 rounded-3xl overflow-hidden">
      <RecomHeader title="Lamborghini Products" color="bg-gray-900" />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 bg-white w-full shadow-lg">
        {posts?.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            image={post.images}
            price={NGnaira.format(post.price)}
            id={post.id}
            discountPercentage={post.discountPercentage}
          />
        ))}
      </div>
    </div>
  );
}
