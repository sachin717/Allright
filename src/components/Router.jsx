import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import ProductPage from './ProductPage';
import ShoppingCart from './ShoppingCart';
// import FeaturedProducts from './FeaturedProducts';


const AppRouter = () => {

const [cart,setCart] = useState([])

const addToCart = (product,quantity) => {
  const updatedCart = [...cart]
  console.log("updatedCart from Router", updatedCart)
  console.log("product from Router", product)
  console.log("quantity from Router", quantity)


  updatedCart.push({...product,quantity})
  setCart(updatedCart)


}
console.log("cart after update",cart)


  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<FeaturedProducts />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage addToCart={addToCart} />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
