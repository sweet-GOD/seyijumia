import React, { useEffect, useState } from "react";
import Post from "./post";
import RecomHeader from "./header";
import { fetchProductsbyCategory } from "@/lib/fetchData";
import { Skeleton } from "@mui/material";
import { NGnaira } from "@/lib/help";

export default function Skincare() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await fetchProductsbyCategory("skincare");
        setPosts(products);
        console.log(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="pt-5">
      <RecomHeader title="Skin Care" color="bg-yellow-400" />

      <div className="carousel carousel-center bg-white w-full shadow-lg">
        {posts?.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            image={post.images[0]}
            price={NGnaira.format(post.price)}
            id={post.id}
          />
        ))}
      </div>
    </div>
  );
}
