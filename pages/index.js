import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header/header";
import Apple from "@/components/recommended/apple";
import Recommended from "@/components/recommended/recommended";
import SliderMainPage from "@/components/mainPage/slider";
import Laptops from "@/components/recommended/laptops";
import Smartphones from "@/components/recommended/smartphones";
import Samsung from "@/components/recommended/samsung";
import Fragrances from "@/components/recommended/fragrance";
import Skincare from "@/components/recommended/skincare";
import Groceries from "@/components/recommended/groceries";
import HomeDecoration from "@/components/recommended/home-decoration";
import NewProducts from "@/components/recommended/newProducts";
import Cars from "@/components/recommended/cars";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="md:max-w-7xl mx-auto p-2 whole">
      <Header />

      <Recommended />

      <NewProducts />

      <Cars />

      <Apple />

      <Samsung />


      <Laptops />

      <Smartphones />

      <Fragrances />

      <Skincare />

      <SliderMainPage />

      <Groceries />

      <HomeDecoration />
      
    </main>
  );
}
