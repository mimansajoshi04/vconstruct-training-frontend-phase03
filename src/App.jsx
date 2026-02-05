import "./App.css";
import ProductList from "./components/Products/ProductList";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";

const PRODUCTS = [
  { id: 1, name: "Laptop", price: 80000, inStock: true },
  { id: 2, name: "Mouse", price: 800, inStock: false },
  { id: 3, name: "Keyboard", price: 1500, inStock: true },
];

const PRODUCTS_EMPTY = [];

function App() {
  const [isLoading, setLoading] = useState(true);
  // adding useEffect here, because if not used then everytime the child rerenders, the loading page would be shown.
  // To avoid that, I used the useEffect here. If we want to show the loading page everytime this component renders, then no need to add the useEffect
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      <h2>Question 04 OUTPUT</h2>
      {isLoading ? <Loader /> : <ProductList products={PRODUCTS} />}
    </>
  );
}

export default App;
