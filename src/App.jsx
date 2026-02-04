import ProductList from "./components/Products/ProductList";
import './App.css';
import Loader from "./components/Loader";
import { useState } from "react";

function App() {

  const [isLoading, setLoading] = useState(true);

  setTimeout(
    ()=> setLoading(false), 3000
  );


  const products = [
    { id: 1, name: "Laptop", price: 80000, inStock: true },
    { id: 2, name: "Mouse", price: 800, inStock: false },
    { id: 3, name: "Keyboard", price: 1500, inStock: true }
  ];

  const productsEmpty = [];

  return (
    <>
      <h2>Question 04 OUTPUT</h2>
      {isLoading ? <Loader/> : <ProductList products={products}/>}
    </>
  )
}

export default App;
