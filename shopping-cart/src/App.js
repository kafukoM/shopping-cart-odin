import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
import Cart from "./components/Cart";



export default function App() {

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const toggleCart = () => {
    setShowCart(!showCart)
  }

  const addToCart = (newItem) => {
    const itemName = newItem.name
    if(cart.length !== 0){
      for(let i = 0; i < cart.length; i++){
        if(cart[i].name === itemName){
          alert('Item already added to cart')
          return false
        }
      }
    }

    setCart([...cart], newItem)
  }

  return (
    <div className="App" id="appId">
      <BrowserRouter>
	  	<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/shop" element={<ShopPage addToCart={addToCart} />} />
			<Route path="/cart" element={<Cart cart={cart} toggleCart={toggleCart} />} />
		</Routes>

      
      </BrowserRouter>
    </div>
  )

}