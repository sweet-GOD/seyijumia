import { db } from "@/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";



// ****************************************************************************


export const fetchProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    
    const results = data.products.map(product => ({
      ...product,
      id: product.id.toString(), // Converting ID to string to match your existing data
    }));

    return results;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};


export const fetchProductsbyCategory = async (category) => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    const results = data.products.filter(product => product.category === category);
    return results;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
};


export const fetchProductsByBrand = async (brand) => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    const results = data.products.filter(product => product.brand === brand);
    return results;
  } catch (error) {
    console.error("Error fetching products by brand:", error);
    return [];
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    const product = data.products.find(product => product.id == id);
    return product || null;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};




// Remove other functions related to Firebase


// ****************************************************************************


const productsRef = collection(db, "products");

export const fetchProductsFir = async () => {
  const q = query(productsRef);
  const querySnapshot = await getDocs(q);

  const results = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return results;
};

export const fetchProductsbyCategoryFir = async (category) => {
  const q = query(productsRef, where("categories", "==", category));
  const querySnapshot = await getDocs(q);

  const results = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return results;
};

export const fetchProductsByBrandFir = async (brand) => {
  const q = query(productsRef, where("brand", "==", brand));

  const querySnapshot = await getDocs(q);

  const results = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return results;
};

export const fetchProductByIdFir = async (id) => {
  const products = await fetchProducts();

  const results = products.filter((product) => {
    return product.id == id;
  });

  return results[0];
};
