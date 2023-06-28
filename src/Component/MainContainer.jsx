import { AnimatePresence } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import { openCart } from "../store/cart-slice";
import CartSlider from "./CartSlider";
import Header from "./Header";
const MainContainer = ({ children }) => {
  const isCartOpen = useSelector(openCart);

  return (
    <>
      <Header />
      {children}
      <AnimatePresence mode="wait">
        {isCartOpen && (
          <CartSlider isSmallDev={window.innerWidth <= 768 ? true : false} />
        )}
      </AnimatePresence>
    </>
  );
};

export default MainContainer;
