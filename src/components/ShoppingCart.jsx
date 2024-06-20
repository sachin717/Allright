import React from "react";
import NavBar from "./NavBar";
import FooterSection from "./FooterSection";

const ShoppingCart = () => {
  return (
    <>
      <NavBar />
      <div className="cartContainer">
        <div className="cartHeader">
        <h2>Your Cart</h2>
        </div>
        <div className="cartBody">
            
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default ShoppingCart;
